module.exports = {
  entry: './main.js',
  output: 'bundle.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}