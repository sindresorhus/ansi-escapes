import test from 'ava';
import ansiEscapes from './index.js';

// Note: we don't test named exports here because the default export (tested
// here) is just a composition of all the named exports.  So if this test
// passes we can safely assume the named exports are working.

test('main', t => {
	t.true(Object.keys(ansiEscapes).length > 0);
	t.is(typeof ansiEscapes.cursorTo, 'function');
	t.is(ansiEscapes.cursorTo(2, 2), '\u001B[3;3H');
});
