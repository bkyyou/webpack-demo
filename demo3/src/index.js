import './index.css';
import './index1.css';
import './style/less.less';
import './style/sass.scss';

import React from 'react';
import ReactDom from 'react-dom';

import Animal from './animal.js';

ReactDom.render(<div>react</div>, document.getElementById('root'));

console.log('index.js')

// // 装饰器
// function readonly(target, key, discriptor) {
//   discriptor.readonly = true; // discriptor:  writable enumerable (todo???) configurable readonly
// }
// class Person {
//   @readonly PI = 3.14
// }
// let p = new Person();

class Person extends Animal{
  constructor(name, age) {
    // 超类 name 传给父类
    super(name);
    this.age = age;
  }
}
let p = new Person('zs', 18);

