const SpriteSmith = require('spritesmith');
const path = require('path');
const fs = require('fs');

let sprites = [
  path.join(__dirname, '../src/assets/imgs/ani.png'), // path.resolve('../src/assets/imgs/ani.png')
  path.join(__dirname, '../src/assets/imgs/avator.png'),
  path.join(__dirname, '../src/assets/imgs/finish.png'),
];

console.log('__dirname', __dirname);
console.log(path.resolve('../src/assets/imgs/ani.png'))

// SpriteSmith.run({src: sprites}, function(error, result) {
//   console.log(error);
//   console.log(result);
//   fs.writeFileSync('./sprite.png', result.image)
// })
