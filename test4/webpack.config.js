const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Clean = require('./plugin/clean');


module.exports = {
  mode: "development",
  entry: './src/foo.js',
  output: {
    filename: '[name].js',
    publicPath: '/dist/',
  },
  // externals: {
  //   react: 'React'
  // },
  optimization: {
    splitChunks: {
      chunks: 'async',
    }
  },
  plugins: [
    // new CleanWebpackPlugin()
    new Clean()
  ],
}