const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: {
    'libDemo': './src/index.js',
    'libDemo.min': './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: 'libDemo', // 导出库的名字 libDemo[key] 可以使用
    libraryTarget: 'umd', // 以何种方式倒出 umd var的时候libDemo[key] 可以使用  commonjs commonjs2 this window
    libraryExport: 'default', //导出哪个属性
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min.js$/
      })
    ],
  }
}