const { SyncHook } = require('tapable');

// debugger

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