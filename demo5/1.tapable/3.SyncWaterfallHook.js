const { SyncWaterfallHook } = require('tapable');

// 实现
class SyncWaterfallHook {
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
    let result;
    let last;
    for (let i = 0; i < len; i++) {
      result = this.taps[i](result || args[0], ...args.slice(1));
      // if (result) last = result; todo ???
      if (typeof result != 'undefined') last = result;
    }
  }
}

let hook = new SyncWaterfallHook(['name', 'age']);

// hook.on() 监听
hook.tap('1', (name, age) => {
  console.log('1', name, age)
  return 'tap1';
})
hook.tap('2', (name, age) => {
  console.log('2', name, age)
  // return 'tap2';
})
hook.tap('3', (name, age) => {
  console.log('3', name, age)
  return 'tap3';
})

// hook.emit(); hook.trigger() 触发
hook.call('zs', 10)