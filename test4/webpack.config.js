const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Clean = require('./plugin/clean');


module.exports = {
  mode: "development",
  entry: './src/foo.js',
  output: {
    // filename: 'foo',
    publicPath: '/dist/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  plugins: [
    // new CleanWebpackPlugin()
    new Clean()
  ],
}