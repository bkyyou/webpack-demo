'use strict';

const path = require('path');
const DllPlugin = require('./node_modules/webpack/lib/DllPlugin.js');

module.exports = {
  entry: {
    // react: 'react',
    // reactDom: 'react-dom'
    react: ['react', 'react-dom']
  }, // 希望把第三方库文件进行单独打包，就可以提高主体文件的打包速度
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].dll.js',
    libraryTarget: 'var', //默认是 var， 如果以这种方式到导出，只能以脚本的方式全局的访问
    library: '_dll_[name]' // 指定导出的名字 _dll_react
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    // hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            // 750 的设计稿
            loader: 'px2rem-loader',
            options: {
              remUmit: 75,
              remPrecesion: 8 // 保留几位小数
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new DllPlugin({
      name: '_dll_[name]',
      path: path.resolve(__dirname, 'dist', '[name].manifest.json')
    })
  ]
};
