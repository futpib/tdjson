# tdjson

> TypeScript types for libtdjson.so

[![npm](https://shields.io/npm/v/tdjson)](https://www.npmjs.com/package/tdjson) [![Coverage Status](https://coveralls.io/repos/github/futpib/tdjson/badge.svg?branch=master)](https://coveralls.io/github/futpib/tdjson?branch=master) [![](https://img.shields.io/badge/docs-here-green)](https://futpib.github.io/tdjson/)

TypeScript code is [updated daily automatically](https://github.com/futpib/tdjson/actions/workflows/generate.yml) from [td_api.tl](https://github.com/tdlib/td/blob/master/td/generate/scheme/td_api.tl).

## Usage

```typescript
import { Tdjson } from 'tdjson';

class MyTdjson extends Tdjson {
	protected async _request(message: any) {
		// TODO: Call actual libtdjson.so binding here.
		return { '@type': 'ok' };
	}
}

const myTdjson = new MyTdjson();

// All methods typed and autocompleted with documentation 🎉
const proxy = await myTdjson.addProxy({
	server: '127.0.0.1',
	port: 1234,
	enable: true,
	type: {
		'@type': 'proxyTypeSocks5',
		username: 'username',
		password: 'password',
	},
});
```
