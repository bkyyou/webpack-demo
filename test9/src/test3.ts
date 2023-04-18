type obj4 = {
  a1: number
}

// interface obj {
//   type: obj4
// }

interface obj {
  type: {
    a1: number
  },
  type2?: {
    a2: number
  },
  // key 只能有三种 string number symbol
  [key: string]: any
}

interface obj5 {
  a: 123,
  fn1(): (a: number) => string
}
// 只是一个方法
interface f5 {
  (a: number, b: number): number
}

function fun(a: obj) {}
fun({type: {a1: 1}})

let f5:f5 = (a, b) => a + b

// 类
interface person {
  age: number,
  eat(food: string): boolean
}
class Mary implements person {
  age: number
  eat(food: string): boolean
  eat(food) {
    return !!food;
  }
  constructor(age: number) {
    this.age = age;
  }
}

interface arr {
  [index: number]: string
}

let arr1: arr = ['1']


// 继承（合并）
type typeobj1 = {
  a: number
}
type typeobj2 = {
  b: number
}
type typeobj3 = typeobj1 & typeobj2

interface interobj1 {
  a: number
}
interface interobj2 {
  b: number
}
interface interobj3 extends interobj1, interobj2 {
  c: number
}

// 声明合并 interobj4 要有 a 和 b
interface interobj4 {
  a: number
}
interface interobj4 {
  b: number
}

function fn2<T>(a: T): T {
  return a
}

// find - 数组， 目标， 找出个目标
// [1, '2', 3] 3
function find<T>(arg: T[], target: T): T {
  let resulet;

  for (const val of arg) {
    if (val === target) {
      resulet = val;
    }
  }

  return resulet;
}

find([1,'2'], 1);
// 可以调用的时候指定类型
find<string>(['1','2'], '1');

// 泛型有两个
function objExtend<T, U>(a: T, b: U): (T & U) {
  return Object.assign(a, b);
}
// 可以设置默认值
// function objExtend<T = {}, U ={}>(a: T, b: U): (T & U) {
//   return Object.assign(a, b);
// }

interface inter1<T> {
  a1: T,
  a2: number,
}
let obj2: inter1<string> = {
  a1: 'aaa',
  a2: 111,
}
class TestClass<T> {
  a: T
  constructor(a: T) {
    this.a = a
  }
}
new TestClass<number>(111)

// 泛型约束
function find1<T extends number | string>(arg: T[], target: T): T {
  let resulet;

  for (const val of arg) {
    if (val === target) {
      resulet = val;
    }
  }

  return resulet;
}

interface Obj {
  a: number,
  b: number
}
const obj1: Obj = {} as Obj
obj1.a = 1;

function fn4(a: number[] | string) {
  // 这样 foreach 不会报错
  const _a = a as number[];
  _a.forEach(val => val)
}

// interface fn5 {
//   (a: number): string,
//   a: number
// }
// const fn6: fn5 = function(a: number) {
//   return '111'
// } as fn5
// fn6.a = 1;
interface fn5 {
  (a: number): string,
  a: number
}
const fn6: fn5 = <fn5>function(a: number) {
  return '111'
}
fn6.a = 1;