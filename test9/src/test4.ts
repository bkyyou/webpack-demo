// 类型推断

const a = 123;


/** 
 * 兼容性
 * */ 
// 对象
interface inter1 {
  a: number,
  b: number
}

const obj1 = {
  a: 1,
  b: 1,
  c: 2
}

const obj2: inter1 = obj1;

// 这样写会报错
// const obj2: inter1 = {
//   a: 1,
//   b: 1,
//   c: 2,
// }

// 方法
let fn1 = (a: number, b: number, e:number) => {
  
}
let fn2 = (c: number, d: number) => {

}
// fn2 赋值给 fn1 ， fn1 的参数可以比 fn2 的参数多; fn2 的 c 可以是 number | string
fn1 = fn2;

// 类
class class1 {
  a: number
  static c:string
  constructor(a, b) {
    this.a = a;
  }
}
class class2 {
  a: number
  static d:string
  constructor(a, b, c, d, e, f) {
    this.a = a;
  }
}
let instance1: class1;
let instance2: class2;
instance1 = instance2! // ! 表示非空

function fn3(arr: number[] | string) {
  if (typeof arr === 'object') {
    // let _arr = arr;
    arr.forEach(val => {
      console.log(val);
    })
  } else if (typeof arr === 'string') {
    arr.slice(0, 1);
  }
}

const symbol1: symbol = Symbol('hello');
const symbol2: symbol = Symbol('hello');

enum list1 {
  // 可以从任意数字开始
  a=1,
  b,
  c,
  d,
}
// 给字符串只能一个个赋值
enum list2 {
  a='hello',
  b='hello1',
  c='hello2',
  d='hello3',
}

export default {
  
}

