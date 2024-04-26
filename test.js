import test from 'ava';
import ansiEscapes, { cursorTo } from './index.js';

test('default export', t => {
	t.true(Object.keys(ansiEscapes).length > 0);
	t.is(typeof ansiEscapes.cursorTo, 'function');
	t.is(ansiEscapes.cursorTo(2, 2), '\u001B[3;3H');
});

test('named exports', t => {
	t.true(Object.keys(ansiEscapes).length > 0);
	t.is(typeof cursorTo, 'function');
	t.is(cursorTo(2, 2), '\u001B[3;3H');
});
