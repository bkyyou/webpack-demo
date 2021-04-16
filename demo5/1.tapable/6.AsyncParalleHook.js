const { AsyncParallelHook } = require('tapable');

class AsyncParallelHook {
  constructor(args) {
    this._args = args;
    this.taps = [];
  }
  tapAsync(name, fn) {
    this.taps.push(fn)
  }
  promise() {
    let args = Array.from(arguments).slice(0, this._args.length);
    
    Promise.all(this.taps.map(fn => fn(...args)));
  }
}

let hook = new AsyncParallelHook(['age', 'name']);


hook.tapPromise('1', (name, age) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  })
})

hook.tapPromise('2', (name, age) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 2000);
  })
})

hook.tapPromise('3', (name, age) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 3000);
  })
})

console.time('cost');
hook.promise('zs', 18).then(() => {
  console.log('cb')
  console.timeEnd('cost');
})