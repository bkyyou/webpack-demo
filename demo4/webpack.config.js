'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');

module.exports = {
  context: __dirname, // 如果给了context，那所有的相对路径都相当于context todo 相对路径？？？是在项目中使用么
  entry: './src/index.js',
  // entry: {
  //   'entry1': './src/entry1.js',
  //   'entry2': './src/entry2.js',
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'index.js'
    filename: '[name].js'
  },
  // mode: 'development',
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    // hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          // {
          //   // 750 的设计稿
          //   loader: 'px2rem-loader',
          //   options: {
          //     remUmit: 75,
          //     remPrecesion: 8 // 保留几位小数
          //   }
          // }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    // todo
    new DllReferencePlugin({
      // name: 
      manifest: path.resolve(__dirname, 'dist', 'react.manifest.json')
    })
  ]
};
