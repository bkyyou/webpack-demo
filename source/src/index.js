// require('!inline1!inline2!./hello')
// require('./assets/style/style.css');
require('./assets/style/sprite.css');


const imgSrc = require('./assets/imgs/avator.png').default

// console.log('source');

// class User{

// }

// const hello = require('./hello.js');

// import(/* webpackChunkName: "0" */'./lazy.js').then(res => {
//   console.log(res.default);
// })

// import(/* webpackChunkName: "1" */'./lazy2.js').then(res => {
//   console.log(res.default);
// })

// import('./assets/style/index.less');
let img = new Image();
// img.src = './assets/imgs/avator.png';
img.src = imgSrc;
document.body.appendChild(img);