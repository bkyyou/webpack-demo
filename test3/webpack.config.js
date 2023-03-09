const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcDir = path.join(__dirname, '../src');

module.exports = {
  devServer: {
    static: path.resolve(__dirname, 'src'),
    // pu: srcDir,
    // port: 9001,
    hot: true,
    open: true,
    // historyApiFallback: true,
    // compress: true,
  },
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ]
}