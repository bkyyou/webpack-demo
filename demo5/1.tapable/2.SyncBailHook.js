const { SyncBailHook } = require('tapable');

// 实现
class SyncBailHook {
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

    let len = this.taps.length;
    for (let i = 0; i < len; i++) {
      let result = this.taps[i](...args);
      if (typeof result != 'undefined') break;
    }
  }
}

let hook = new SyncBailHook(['name', 'age']);

// hook.on() 监听
hook.tap('1', (name, age) => {
  console.log('1', name, age)
})
hook.tap('2', (name, age) => {
  console.log('2', name, age)
  return 'wrong';
})
hook.tap('3', (name, age) => {
  console.log('3', name, age)
})

// hook.emit(); hook.trigger() 触发
hook.call('zs', 10)