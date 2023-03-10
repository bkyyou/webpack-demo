const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPplugin = require("html-webpack-plugin");
const Clean = require("./plugin/clean");
const testPlugin = require('./plugin/testPlugin.js');


module.exports = {
  mode: "development",
  // entry: "./src/foo.js",
  entry: "./src/index.js",
  output: {
    // filename: "foo.js",
    filename: "[name].[chunkhash].js", // contenthash
    // publicPath: path.join(__dirname, './dist/'),
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   }
  // },
  devServer: {
    // static: path.join(__dirname, './dist/'),
    port: 5000
  },
  plugins: [
    // new CleanWebpackPlugin()
    new Clean(),
    //实例化html-webpack-plugin插件功能
    new HtmlWebpackPplugin({
      //html-webpack-plugin参数配置
      //指定打包HTML文件参照的模板HTML
      template: "./index.html",
      //生成的html文件名称  写这个那之后打开的应该拼上 app.html  http://localhost:5000/app.html
      // filename: "app.html",
      //定义打包的js文件引入在新html的哪个标签里
      inject: "body",
    }),
    new testPlugin(),
  ],
};
