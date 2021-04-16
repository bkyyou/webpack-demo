// const { AsyncParallelHook } = require('tapable');

class AsyncParallelHook {
  constructor(args) {
    this._args = args;
    this.taps = [];
  }
  tapAsync(name, fn) {
    this.taps.push(fn)
  }
  callAsync() {
    let args = Array.from(arguments).slice(0, this._args.length);
    let i = 0, len = this.taps.length;
    let finialCallBack = arguments[arguments.length - 1];
    function done() {
      if (++i >= len) {
        finialCallBack();
      }
    }
    this.taps.forEach(fn => fn(...args, done));
  }
}

let hook = new AsyncParallelHook(['age', 'name']);


hook.tapAsync('1', (name, age, done) => {
  setTimeout(() => {
    done();
  }, 1000);
})

hook.tapAsync('2', (name, age, done) => {
  setTimeout(() => {
    done();
  }, 2000);
})

hook.tapAsync('3', (name, age, done) => {
  setTimeout(() => {
    done();
  }, 3000);
})

console.time('cost');
hook.callAsync('zs', 18, () => {
  console.log('cb')
  console.timeEnd('cost');
})