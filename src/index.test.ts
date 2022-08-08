import test from 'ava';
import { Tdjson } from './tdjson';

test('Tdjson', async t => {
	const log: any[] = [];

	const myTdjson = new class MyTdjson extends Tdjson {
		protected async _request(message: any) {
			log.push(message);
			return { '@type': 'ok' };
		}
	}();

	await myTdjson.addProxy({
		server: '127.0.0.1',
		port: 1234,
		enable: true,
		type: {
			'@type': 'proxyTypeSocks5',
			username: 'username',
			password: 'password',
		},
	});

	t.snapshot(log);
});
