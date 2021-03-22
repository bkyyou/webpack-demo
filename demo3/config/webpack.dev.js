const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');

console.log(merge);

module.exports = merge(base, {
  mode: 'development',
  // watch: true,
  devtool: 'source-map',
  devServer: {
    // after: function (app, server, compiler) {
    //   // do fancy stuff
    //   // console.log('server', server);
    // },
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8080,
    host: 'localhost',
    open: true, // 自动拉起浏览器
    // hot: true, // 热加载
    // injectHot: (compilerConfig) => compilerConfig.name === 'only-include',
    // inline: true
    // compress: true  // gzip 压缩 
    // 这个 before 是一个 钩子，此钩子会在webpack-dev-server应用服务器启动之前执行
    before(app) { // webpack-dev-server 内部其实就是一个express服务器
      app.get('/users', (req, res) => {
        res.json({ id: 2, name: 'ls' });
      })
    },
    proxy: {
      // '/api': 'http://localhost:3000'
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpeg|svg|jpg|gif)$/,
        // use: ['url-loader'],
        use: {
          // url-loader 内置了 file-loader    
          loader: 'url-loader',
          options: {
            limit: 10 * 1024, // 10 * 1024 以下的图片大小转换成 base64 打到包里
            outputPath: 'images', // 打包后产出文件位置 publicPath + outputPath
            publicPath: '/images', // 访问位置
            // name: ''
            esModule: false
          }
        }
      },
      // {
      //   test: /\.less$/,
      //   // use: ['style-loader', 'css-loader']
      //   include: path.resolve(__dirname, 'src'),
      //   exclude: /node_modules/,
      //   // use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      //   // 用 style-loader 可以实现 css 热更新
      //   use: ['style-loader', 'css-loader', 'less-loader']
      // },
    ]
  },
  plugins: [
    // 会把这个变量和值挂在到全局对象上
    new webpack.DefinePlugin({
      PRUODUCTION: JSON.stringify(true),
      VERSION: 1,
      EXPRESSION: '1+2',
      COPYRIGHT: {
        AUTHOR: JSON.stringify('张三')
      }
    }),
  ]
})