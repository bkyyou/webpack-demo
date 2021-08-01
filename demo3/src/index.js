// if (module.hot) {
//   module.hot.accept();
// }
// console.log('module.hot', module.hot);

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
import '../utils/tools/test.js';

import './index.css';
import './index1.css';
import './style/less.less';
import './style/sass.scss';
import 'bootstrap';
// import './style/font.css';

// 给加载的模块配 loader， expose-loader 像全局对象暴露变量，变量名叫 $ (也可以配置)
// let $ = require('babel-loader!expose-loader?$!jquery'); // $!jquery 引入的 jquery 模块赋给 $ 对象 
// let $ = require('expose-loader?$!jquery'); // $!jquery 引入的 jquery 模块赋给 $ 对象 
import $ from 'jquery';
import a from 'tools';

console.log('PRUODUCTION', PRUODUCTION);
console.log('VERSION', VERSION);
console.log('EXPRESSION', EXPRESSION);
console.log('COPYRIGHT', COPYRIGHT);

console.log(a);

console.log($);
console.log(1234567);
document.querySelector('.js_content').innerText = 'js 里面的内容'
// document.write('hello world~1122');

// import React from 'react';
// import ReactDom from 'react-dom';

// import Animal from './animal.js';

// ReactDom.render(<div>react</div>, document.getElementById('root'));

// console.log('index.js')

// // // 装饰器
// // function readonly(target, key, discriptor) {
// //   discriptor.readonly = true; // discriptor:  writable enumerable (todo???) configurable readonly
// // }
// // class Person {
// //   @readonly PI = 3.14
// // }
// // let p = new Person();

// class Person extends Animal{
//   constructor(name, age) {
//     // 超类 name 传给父类
//     super(name);
//     this.age = age;
//   }
// }
// let p = new Person('zs', 18);

// [1, 2, 3].map((n) => n + 1);