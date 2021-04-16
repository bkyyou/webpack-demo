const { SyncHook } = require('tapable');

let hook = new SyncHook(['name']);

// hook.on() 监听
hook.tap('1', (name) => {
  console.log('1', name)
})
hook.tap('2', (name) => {
  console.log('2', name)
})

hook.intercept({
  call(name) { // 每次在 call 之前触发
    console.log('nameintercept', name)
  },
  tap({type, fn, name}) { // 每次挂载监听时触发
    // console.log('argument', arguments);
    // console.log(type, fn, name) // sync 函数 1
  },
  // 每次添加一个 tap 都会触发你 interceptor 上的 register
  // 多个拦截器， 你下一个拦截器的 register 函数得到的参数， 取决你上一个 register 返回的值，所以最好返回一个 tap 钩子
  register({type, fn, name}) {
    console.log('====', type, fn, name) // sync 函数 1
    return {type, fn, name};
    // return {type:'1', fn,  name: 111};
  }
})

// hook.emit(); hook.trigger() 触发
hook.call('zs')