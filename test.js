import test from 'ava';
import m from '.';

test(t => {
	t.true(Object.keys(m).length > 0);
	t.is(typeof m.cursorTo, 'function');
	t.is(m.cursorTo(2, 2), '\u001B[3;3H');
});
