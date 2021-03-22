
const express = require('express');
// 中间件
const webpackDevMiddleware = require('webpack-dev-middleware');

let webpackConfig = require('./webpack.config.js');
let webpack = require('webpack');
// compiler 编译对象
let compiler = webpack(webpackConfig); 

let app = express();
/**
 * 中间件到底干了啥
 * 1. 启动编译 compiler.run
 * 2. 使用一个中间件，用来响应客户端对打包后的文件请求
 */
app.use(webpackDevMiddleware(compiler, {}));

app.listen(5000, () => {
  console.log('running')
})