const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPplugin = require("html-webpack-plugin");
const Clean = require("./plugin/clean");

module.exports = {
  mode: "development",
  entry: "./src/foo.js",
  output: {
    filename: "foo.js",
    publicPath: "/dist/",
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   }
  // },
  plugins: [
    // new CleanWebpackPlugin()
    new Clean(),
    //实例化html-webpack-plugin插件功能
    new HtmlWebpackPplugin({
      //html-webpack-plugin参数配置
      //指定打包HTML文件参照的模板HTML
      template: "./index.html",
      //生成的html文件名称
      filename: "app.html",
      //定义打包的js文件引入在新html的哪个标签里
      inject: "body",
    }),
  ],
};
