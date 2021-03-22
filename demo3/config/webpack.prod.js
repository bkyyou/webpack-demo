const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');
// 压缩 js （es6）
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

console.log(merge);

module.exports = merge(base, {
  mode: 'production',
  optimization: { // 这里放着优化的内容
    minimize: true, // 是否要启用压缩
    minimizer: [
      // production 模式下可以会自动开启，就是添加
      new TerserWebpackPlugin({
        parallel: true, // 开启多进程并行压缩
        // cache: true // 开启缓存
      }),
      new OptimizeCssAssetsWebpackPlugin({ // 可传参，可不传
        assetNameRegExp: /\.css$/g,  // 指定要压缩模块的正则
        cssProcessor: require('cssnano') // 需下载
      })
    ]
  },
  module: {
    rules: [
      // {
      //   test: /\.less$/,
      //   // use: ['style-loader', 'css-loader']
      //   include: path.resolve(__dirname, 'src'),
      //   exclude: /node_modules/,
      //   // use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      //   // 用 style-loader 可以实现 css 热更新
      //   use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      // },
    ]
  },
  plugins: [
    // 会把这个变量和值挂在到全局对象上
    new webpack.DefinePlugin({
      PRUODUCTION: JSON.stringify(true),
      VERSION: 1,
      EXPRESSION: '1+2',
      COPYRIGHT: {
        AUTHOR: JSON.stringify('张三')
      }
    }),
  ]
})