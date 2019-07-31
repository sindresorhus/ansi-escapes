'use strict';
const fs = require('fs');
const ansiEscapes = require('.');

console.log(ansiEscapes.image(fs.readFileSync('fixture.jpg'), {width: 15}));

const text = 'this text will be annotated';
console.log(text);
process.stdout.write(ansiEscapes.cursorPrevLine);
console.log(ansiEscapes.iTerm.annotation('this is an annotation', {length: text.length}));
console.log();
