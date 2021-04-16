const { SyncHook } = require('tapable');


// 实现
class SyncHook {
  constructor(args) {
    this._args = args; // ['name', 'age']
    this.taps = [];
  }
  tap(name, fn) {
    this.taps.push(fn);
  }
  call() {
    let args = Array.from(arguments);
    this.taps.forEach(fn => fn(...args.slice(0, this._args.length)))
  }
}

let hook = new SyncHook(['name', 'age']);

// hook.on() 监听
hook.tap('1', (name, age) => {
  console.log('1', name, age)
})
hook.tap('2', (name, age) => {
  console.log('2', name, age)
})

// hook.emit(); hook.trigger() 触发
hook.call('zs', 10)