const webpack = require('webpack');
const config = require('./webpack.config.js');
let compiler = webpack(config);
debugger

compiler.run((err, stats) => {
  // console.log('err', err);
  // console.log('stats', stats);
});

// compiler.js 文件里
// 给每个钩子都加一个监听，当我们这个钩子触发的时候就会执行我的监听函数
// Object.keys(this.hooks).forEach(hookName => {
//   let hook = this.hooks[hookName];
//   if (hook.tap) {
//     hook.tap('show', () => {
//       let hookType = Object.getPrototypeOf(hook).constructor.name;
//       console.log(`compiler, ${hookName}, ${hookType} ${hook._args}`)
//     })
//   }
// })

// const { exec } = require('child_process');

// const ls = exec('node_modules/.bin/webpack');

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });
// ls.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });
// ls.on('close', (code) => {
//   console.log(`子进程退出，退出码 ${code}`);
// });