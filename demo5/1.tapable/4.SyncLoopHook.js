// import { SyncLoopHook } from 'tapable';
// const SyncLoopHook = require('tapable').SyncLoopHook;

// 实现
class SyncLoopHook {
  constructor(args) {
    this._args = args; // ['name', 'age']
    this.taps = [];
  }
  tap(name, fn) {
    this.taps.push(fn);
  }
  call() {
    let args = Array.from(arguments).slice(0, this._args.length);
    // this.taps.forEach(fn => fn(...args.slice(0, this._args.length)))

    let result;
    let i = 0;
    while (i < this.taps.length) {
      result = this.taps[i](...args);
      // if (result) last = result; todo ???
      typeof result == 'undefined' ? i++ : i = 0;
    }
  }
}

let hook = new SyncLoopHook(['name', 'age']);
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

// hook.on() 监听
hook.tap('1', (name, age) => {
  console.log('1', name, age)
  if (++counter1 >= 1) {
    counter1 = 0;
  } else {
    return counter1
  }
})
hook.tap('2', (name, age) => {
  console.log('2', name, age)
  // return 'tap2';
  if (++counter2 >= 2) {
    counter2 = 0;
  } else {
    return counter2
  }
})
hook.tap('3', (name, age) => {
  console.log('3', name, age)
  if (++counter3 >= 3 ) {
    counter3 = 0;
  } else {
    return counter3
  }
})

// hook.emit(); hook.trigger() 触发
hook.call('zs', 10)


// 1 zs 10
// 2 zs 10
// 1 zs 10
// 2 zs 10
// 3 zs 10
// 1 zs 10
// 2 zs 10
// 1 zs 10
// 2 zs 10
// 3 zs 10
// 1 zs 10
// 2 zs 10
// 1 zs 10
// 2 zs 10
// 3 zs 10
// koolearn@koolearndeMBP 1.tapable % node 4.SyncLoopHook.js
// 1 zs 10
// 2 zs 10
// 1 zs 10
// 2 zs 10
// 3 zs 10
// 1 zs 10
// 2 zs 10
// 1 zs 10
// 2 zs 10
// 3 zs 10
// 1 zs 10
// 2 zs 10
// 1 zs 10
// 2 zs 10
// 3 zs 10