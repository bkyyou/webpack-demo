import axios from "axios";
import * as _ from 'lodash';

let a:number = null;
let a1:number = 1111;
let b:string = '1111';
let c:null = null;
let d:undefined = undefined;
let e:boolean = false;
// | 或者
let ENV: 'production' | 'development' | 'test' = 'test';
let f: string | boolean = 'test';

let arr: number[] = [1,2,3];
let arr1: Array<number> = [1,2,3];
// 元组
let arr3: [string, number] = ['hello', 1];
let obj: {} = {x:1, y:1};

const arr4: (string | number | number[])[] = [1, '111', [1]];
const arr5: [number, string, number?] = [1, '2', 1];
const arr6: [number, string, ...(number|string)[]] = [1, '2', 1];

const obj1: {[key: number]: number, y: number} = {1: 1, y: 1};
const obj2: {x: number, y?: number} = {x: 1};

const fun = (str: string) => {
  console.log(str);
  console.log(a);
}

function fn1(a = 3, b?: string): number {
  return a + 1;
}

fn1()

function fn4(a: string, b?: string, ...args:(string | number)[]): string {
  return ''
}

// console.log(b);

const fn2: (a: string) => string = function(a: string): string {
  return '';
}

const fn3: (a: string) => string = function(a) {
  return '';
}

function fun5(this: void, a: number) {
  return a + 1;
}

fun5(1);


fun('11111')


// 泛型
function fun6(a: number, b: number | string): (number | string) {
  if (typeof(b) === 'string') {
    return b + a
  } else if (typeof(b) === 'number') {
    return b + a;
  }
}

fun6(1, 2);