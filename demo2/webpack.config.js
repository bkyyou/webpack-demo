const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  // mode: 'production',
  mode: 'development',
  // entry: './app.js',
  entry: {
    bundle: './app.js'
  },
  output: {
    // filename: 'bundle.js',
    // filename: '[name].[contenthash].bundle.js'
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              // [
              //   '@babel/preset-env',
              //   // {
              //   //   // target: {
              //   //   // }
              //   //   "useBuiltIns": 'usage',
              //   //   "corejs": 2
              //   // }
              // ]
            ],
            "plugins": [
              [
                "@babel/plugin-transform-runtime",
                {
                  "absoluteRuntime": false,
                  "corejs": 3,
                  "helpers": true,
                  "regenerator": true,
                  "useESModules": false
                }
              ]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    }),
  ]
}