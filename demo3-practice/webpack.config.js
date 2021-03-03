const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname , './dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: 8080,
    host: 'localhost',
    // compress: true  压缩 todo ??? 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpeg|svg|jpg|gif)$/,
        // use: ['url-loader'],
        use:  {
          // url-loader 内置了 file-loader    
          loader: 'url-loader',
          options: {
            limit: 10 * 1024 // 10 * 1024 以下的图片大小转换成 base64 打到包里
          }
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
      // hash: true,
      // thunks: ['common', 'index'] // 多入口文件进行配置，决定引入哪些文件
      // thunksSortMode: 'manual', // 对引入的代码块进行排序的模式
    }),
    new CleanWebpackPlugin(), // 默认清 dist 文件夹下的文件
    new MiniCssExtractPlugin({
      filename: '[name].css', // name 代码块 chunk 的名字
      chunkFilename: '[id].css' // 在异步加载时使用
    })
  ]
}