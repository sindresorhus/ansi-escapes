const fs = require('fs');
const ansiEscapes = require('.');

console.log(ansiEscapes.image(fs.readFileSync('fixture.jpg'), {width: 15}));
