const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: "body",
    }),
  ]
}