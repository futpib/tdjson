import fs from 'node:fs/promises';
import path from 'node:path';
import { Buffer } from 'node:buffer';
import { inspect } from 'node:util';
import fetch from 'node-fetch';
import { outdent } from 'outdent';
import invariant from 'invariant';
import * as A from 'arcsecond';
import { pascalCase } from 'pascal-case';
import * as ttyStrings from 'tty-strings';

function wordWrap(text: string): string {
	return ttyStrings.wordWrap(text, 120);
}

function trimFilterJoin(strings: string[]): string {
	return strings.map(s => s.trim()).filter(s => s.length > 0).join(' ');
}

interface Identifier {
	readonly type: 'Identifier';
	readonly name: string;
}

const identifierParser = A.regex(/^\w+/).map(name => ({
	type: 'Identifier',
	name,
} as const));

interface Comment {
	readonly type: 'Comment';
	readonly tag: string;
	readonly text: string;
}

const commentParser = A.sequenceOf([
	A.str('//@'),
	identifierParser,
	A.everyCharUntil(A.char('\n')),
	A.many(A.sequenceOf([
		A.char('\n'),
		A.str('//-'),
		A.everyCharUntil(A.char('\n')),
	]).map(([ _0, _1, comment ]) => comment)).map(s => trimFilterJoin(s)),
]).map(([ _0, tag, comment, comment_ ]) => ({
	type: 'Comment',
	tag: tag.name,
	text: trimFilterJoin([ comment, comment_ ]),
} as const));

const commentsParser: A.Parser<Comment[]> = A.many(A.sequenceOf([
	A.optionalWhitespace,
	commentParser,
]).map(([ _, comment ]) => comment)).map(comments => comments.flatMap(comment => {
	const [ head, ...tail ] = comment.text.split('@');

	return [
		{
			...comment,
			text: head,
		} as const,
		...tail.map(commentText => {
			const [ tag, ...textWords ] = commentText.split(' ');
			return {
				type: 'Comment',
				tag,
				text: textWords.join(' '),
			} as const;
		}),
	];
}));

interface TypeApp {
	readonly type: 'TypeApplication';
	readonly callee: Identifier;
	readonly argument: Identifier | TypeApp;
}

const typeAppParser = A.sequenceOf([
	identifierParser,
	A.char('<'),
	A.recursiveParser(() => typeParser),
	A.char('>'),
]).map(([ callee, _1, argument ]) => ({
	type: 'TypeApplication',
	callee,
	argument,
} as const));

const typeParser: A.Parser<Identifier | TypeApp> = A.choice([
	typeAppParser,
	identifierParser,
]);

interface AnnotatedIdentifier {
	readonly type: 'AnnotatedIdentifier';
	readonly id: Identifier;
	readonly typeAnnotation: Identifier | TypeApp;
}

const annotatedIdentifierParser = A.sequenceOf([
	identifierParser,
	A.char(':'),
	typeParser,
]).map(([ id, _1, typeAnnotation ]) => ({
	type: 'AnnotatedIdentifier',
	id,
	typeAnnotation,
} as const));

const typeVariableParser = A.sequenceOf([
	A.char('{'),
	annotatedIdentifierParser,
	A.char('}'),
]).map(([ _0, annotatedIdentifier ]) => annotatedIdentifier);

const argumentParser = A.choice([
	A.char('?'),
	A.char('#'),
	A.str('[ t ]'),
	annotatedIdentifierParser,
	identifierParser,
	typeVariableParser,
]);

const argumentsParser = A.many(A.sequenceOf([
	A.whitespace,
	argumentParser,
]).map(([ _0, argument ]) => argument));

interface Combinator {
	type: 'Combinator';
	comments: Comment[];
	left: {
		id: Identifier;
		arguments: Array<string | Identifier | AnnotatedIdentifier>;
	};
	right: {
		id: Identifier;
		arguments: Array<string | Identifier | AnnotatedIdentifier>;
	};
}

const combinatorParser: A.Parser<Combinator> = A.sequenceOf([
	identifierParser,
	argumentsParser,
	A.whitespace,
	A.char('='),
	A.whitespace,
	identifierParser,
	A.possibly(argumentsParser),
]).map(([ name, arguments_, _2, _3, _4, resultName, resultArguments ]) => ({
	type: 'Combinator',
	comments: [],
	left: {
		id: name,
		arguments: arguments_ ?? [],
	} as const,
	right: {
		id: resultName,
		arguments: resultArguments ?? [],
	} as const,
}));

const tdApiParser: A.Parser<Combinator> = A.sequenceOf([
	A.possibly(A.sequenceOf([
		commentsParser,
		A.whitespace,
	]).map(([ comments ]) => comments)),
	combinatorParser,
]).map(([ comments, combinator ]) => ({
	...combinator,
	comments: [ ...combinator.comments, ...(comments ?? []) ],
}));

function stringifyTypeAnnotation(typeAnnotation: Identifier | TypeApp): string {
	if (typeAnnotation.type === 'Identifier') {
		if (
			typeAnnotation.name === 'String'
				|| typeAnnotation.name === 'Int64'
				|| typeAnnotation.name === 'string'
				|| typeAnnotation.name === 'int64'
		) {
			return 'string';
		}

		if (
			typeAnnotation.name === 'Double'
				|| typeAnnotation.name === 'Int32'
				|| typeAnnotation.name === 'Int53'
				|| typeAnnotation.name === 'double'
				|| typeAnnotation.name === 'int32'
				|| typeAnnotation.name === 'int53'
		) {
			return 'number';
		}

		if (
			typeAnnotation.name === 'Bool'
				|| typeAnnotation.name === 'bool'
		) {
			return 'boolean';
		}

		if (
			typeAnnotation.name === 'Bytes'
				|| typeAnnotation.name === 'bytes'
		) {
			return 'string';
		}

		if (
			typeAnnotation.name === 'Vector'
				|| typeAnnotation.name === 'vector'
		) {
			return 'Array';
		}

		return pascalCase(typeAnnotation.name);
	}

	if (typeAnnotation.type === 'TypeApplication') {
		return `${stringifyTypeAnnotation(typeAnnotation.callee)}<${stringifyTypeAnnotation(typeAnnotation.argument)}>`;
	}

	invariant(false, 'Cannot stringify type annotation: %s', inspect(typeAnnotation));
}

function stringifyCommentText(lines: Array<undefined | string>, thisInterfaceName?: string): string {
	let text = lines.map(line => line?.trim()).filter(Boolean).map(line => {
		if (line && !line.endsWith('.')) {
			line += '.';
		}

		return line;
	}).join('\n');

	if (thisInterfaceName) {
		text = text.replaceAll(/(?<!{)@(\w+)/g, (_, referencedIdentifier: string) => `{@link ${thisInterfaceName}#${referencedIdentifier}}`);
	}

	return wordWrap(text);
}

function stringifyConstructorArgument(constructor_: Combinator, argument: string | Identifier | AnnotatedIdentifier) {
	invariant(
		typeof argument === 'object'
			&& argument.type === 'AnnotatedIdentifier',
		'Can not stringify constructor argument: %s',
		inspect(argument),
	);

	const interfaceName = pascalCase(constructor_.left.id.name);

	const comment = constructor_.comments.find(comment => comment.tag === argument.id.name);
	const commentText = stringifyCommentText([ comment?.text ], interfaceName);

	const typeAnnotation = stringifyTypeAnnotation(argument.typeAnnotation);

	const isOptional = typeAnnotation === 'boolean';
	const optionalPropertySign = isOptional ? '?' : '';

	return outdent`
		/**
		${commentText}
		*/
		${argument.id.name}${optionalPropertySign}: ${typeAnnotation};
	`;
}

function stringifyConstructor(constructor_: Combinator) {
	if (
		constructor_.right.id.name === 'Double'
			|| constructor_.right.id.name === 'String'
			|| constructor_.right.id.name === 'Int32'
			|| constructor_.right.id.name === 'Int53'
			|| constructor_.right.id.name === 'Int64'
			|| constructor_.right.id.name === 'Bytes'
			|| constructor_.right.id.name === 'Bool'
			|| constructor_.right.id.name === 'Vector'
	) {
		return '';
	}

	const interfaceName = pascalCase(constructor_.left.id.name);

	const constructorCommentText = constructor_.right.id.name === interfaceName ? '' : outdent`
		Subtype of {@link ${constructor_.right.id.name}}.
	`;

	const descriptionComment = constructor_.comments.find(comment => comment.tag === 'description');
	const descriptionCommentText = stringifyCommentText([
		descriptionComment?.text,
		constructorCommentText,
	], interfaceName);

	return outdent`
		/**
		${descriptionCommentText}
		*/
		export interface ${interfaceName} {
			'@type': ${JSON.stringify(constructor_.left.id.name)};
			${constructor_.left.arguments.map(argument => stringifyConstructorArgument(constructor_, argument)).join('\n')}
		}
	`;
}

function stringifyFunctionOptionsType(function_: Combinator) {
	const propertiesText = function_.left.arguments.map(argument => {
		invariant(
			typeof argument === 'object'
				&& argument.type === 'AnnotatedIdentifier',
			'FIXME',
		);

		const comment = function_.comments.find(comment => comment.tag === argument.id.name);
		const commentText = stringifyCommentText([ comment?.text ]);

		const typeAnnotation = stringifyTypeAnnotation(argument.typeAnnotation);

		const isOptional = typeAnnotation === 'boolean';
		const optionalPropertySign = isOptional ? '?' : '';

		return outdent`
			/**
			${commentText}
			*/
			${argument.id.name}${optionalPropertySign}: ${typeAnnotation};
		`;
	}).join('\n');

	return `{\n${propertiesText}\n}`;
}

function stringifyFunction(function_: Combinator) {
	const descriptionComment = function_.comments.find(comment => comment.tag === 'description');
	const descriptionCommentText = stringifyCommentText([
		descriptionComment?.text,
	]);

	const hasArguments = function_.left.arguments.length > 0;

	if (!hasArguments) {
		return outdent`
			/**
			${descriptionCommentText}
			*/
			${function_.left.id.name}(): Promise<${function_.right.id.name}> {
				return this._request({
					'@type': ${JSON.stringify(function_.left.id.name)},
				});
			}
		`;
	}

	return outdent`
		/**
		${descriptionCommentText}
		*/
		${function_.left.id.name}(options: ${stringifyFunctionOptionsType(function_)}): Promise<${function_.right.id.name}> {
			return this._request({
				...options,
				'@type': ${JSON.stringify(function_.left.id.name)},
			});
		}
	`;
}

function stringifyFunctions(functions: Combinator[]) {
	return outdent`
		export abstract class Tdjson {
			${functions.map(f => stringifyFunction(f)).join('\n')}

			/**
			Send a request to the actual libtdjson.so here. Do not forget to handle {@link Error} responses and timeouts.
			*/
			protected abstract _request(message: any): Promise<any>;
		}
	`;
}

function stringifyConstructorUnion(unionName: string, constructors: Set<Combinator>) {
	if (unionName === 'Bool') {
		return '';
	}

	return outdent`
		export type ${unionName} =
			${[ ...constructors ].map(constructor_ => '| ' + pascalCase(constructor_.left.id.name)).join('\n')}
		;
	`;
}

async function main() {
	const response = await fetch('https://raw.githubusercontent.com/tdlib/td/master/td/generate/scheme/td_api.tl');
	let text = await response.text();
	text = text.replaceAll(/\n+/g, '\n').replaceAll(/[ \t]+/g, ' ');

	const [ constructorsText, functionsText ] = text.split('---functions---');

	const [ constructors, functions ] = [ constructorsText, functionsText ].map(text => {
		const lines = text.split(';\n');

		const parseResult = lines.flatMap(line => {
			line = line.trim();

			if (!line) {
				return [];
			}

			const lineParseResult = tdApiParser.run(line);

			const { isError, index } = lineParseResult;

			if (isError || index !== Buffer.byteLength(line, 'utf8')) {
				const before = line.slice(0, index);
				const after = line.slice(index, -1);

				console.error(lineParseResult, line.length);

				console.error([
					before,
					after,
				].join('<<HERE>>').trim());

				invariant(false, 'Parsing failed or did not consume everything');
			}

			return [ lineParseResult.result ];
		});

		return parseResult;
	});

	const constructorUnions = constructors.reduce((groups, constructor_) => {
		if (!groups.has(constructor_.right.id.name)) {
			groups.set(constructor_.right.id.name, new Set());
		}

		const group = groups.get(constructor_.right.id.name)!;
		group.add(constructor_);
		return groups;
	}, new Map<string, Set<Combinator>>());

	const typescript = [
		'/* eslint-disable @typescript-eslint/no-unsafe-return */',

		...constructors.map(c => stringifyConstructor(c)),

		...[ ...constructorUnions.entries() ].filter(([ _, group ]) => group.size > 1).map(([ unionName, constructors ]) => stringifyConstructorUnion(unionName, constructors)),

		stringifyFunctions(functions),
	].filter(Boolean).join('\n');

	await fs.writeFile(path.join(__dirname, 'tdjson.ts'), typescript);
}

void main();
