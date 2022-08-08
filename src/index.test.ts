// eslint-disable-next-line ava/use-test
import type { TestInterface } from 'ava';
import anyTest from 'ava';
import { Tdjson } from './tdjson';

class TestTdjson extends Tdjson {
	log: any[] = [];

	protected async _request(message: any) {
		this.log.push(message);
		return { '@type': 'ok' };
	}
}

interface TestContext {
	tdjson: TestTdjson;
	log: any[];
}

const test = anyTest as TestInterface<TestContext>;

test.beforeEach(t => {
	t.context.tdjson = new TestTdjson();
});

test('addProxy', async t => {
	const { tdjson } = t.context;

	await tdjson.addProxy({
		server: '127.0.0.1',
		port: 1234,
		enable: true,
		type: {
			'@type': 'proxyTypeSocks5',
			username: 'username',
			password: 'password',
		},
	});

	t.snapshot(tdjson.log);
});

test('setTdlibParameters - booleans are optional (default to false)', async t => {
	const { tdjson } = t.context;

	await tdjson.setTdlibParameters({
		parameters: {
			'@type': 'tdlibParameters',
			api_id: 0,
			api_hash: '1',
			database_directory: '/',
			files_directory: '/',
			system_language_code: 'en',
			device_model: 'model',
			application_version: '1.0',
			system_version: '1.0',
		},
	});

	t.snapshot(tdjson.log);
});
