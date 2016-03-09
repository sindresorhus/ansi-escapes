var fs = require('fs');
var ansiEscapes = require('./');

console.log(ansiEscapes.image(fs.readFileSync('fixture.jpg'), {width: 15}));
