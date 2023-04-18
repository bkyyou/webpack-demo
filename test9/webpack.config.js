const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  module: 'production',
  entry: {
    app: './app.ts'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].[contenthash].js',
    // libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
}