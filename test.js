'use strict';
var test = require('ava');
var fn = require('./');

test(function (t) {
	t.assert(Object.keys(fn).length > 0);
	t.assert(typeof fn.cursorTo === 'function');
	t.assert(fn.cursorTo(2, 2) === '\u001b[3;3H');
	t.end();
});
