import assert from 'node:assert';
import {test} from 'node:test';

import * as ansiEscapes from './index.js';

test('main', t => {
	assert(Object.keys(ansiEscapes).length > 0);
	assert.equal(typeof ansiEscapes.cursorTo, 'function');
	assert.equal(ansiEscapes.cursorTo(2, 2), '\u001B[3;3H');
});
