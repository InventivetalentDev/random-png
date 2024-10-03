const { randomPNG } = require('random-png');
const fs = require('fs');

const buffer = randomPNG(64, 64);
fs.writeFileSync('example.cjs.png', buffer);