'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩 js （es6）
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const glob = require('glob');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const PurgecssWebpackPlugin = require('purgecss-webpack-plugin')

let entry = {};
let htmlWebpackPlugins = [];
const entryFIles = glob.sync('./src/entries/*.js');
// const pageFIles = glob.sync('./src/pages/*.html');
console.log('entryFIles', entryFIles);
entryFIles.forEach(val => {
  let entryName = path.basename(val, '.js');
  entry[entryName] = val;
  htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        // template: pageFIles,
        template: `./src/pages/${entryName}.html`,
        filename: `${entryName}.html`,
        inject: 'body',
        // hash: true,
        chunks: [entryName], // 多入口文件进行配置，决定引入哪些文件
        // chunks: ['index', 'verdor'], // 多入口文件进行配置，决定引入哪些文件
        // chunksSortMode: 'manual', // 对引入的代码块进行排序的模式
      })
    )
  })

// 不同命令
// console.log('process.argv', process.argv);
// let mode = process.argv[2];
// let devFlag = mode == '--development'

// console.log('process.env.NODE_ENV', process.env.NODE_ENV);

module.exports = (env, argv) => ({
  mode: env == 'production' ? 'production' : 'development',
  // target: 'web',
  // mode: 'production',
  optimization: { // 这里放着优化的内容
    minimizer: env == 'production' ? [
      // production 模式下可以会自动开启，就是添加
      new TerserWebpackPlugin({
        parallel: true, // 开启多进程并行压缩
        // cache: true // 开启缓存
      }),
      new OptimizeCssAssetsWebpackPlugin({ // 可传参，可不传
        assetNameRegExp: /\.css$/g,  // 指定要压缩模块的正则
        cssProcessor: require('cssnano') // 需下载
      })
    ] : []
  },
  // stats: 'errors-only',
  externals: {
    // import $ from 'jquery' 这设置之后 这么引入不会再打进包里， 这个 $ = window.$ 或者 window.jQuery
    // 'jquery': '$', // jQuery key 是一个包的名字，值是 jQuery，是一个全局全局变量名，现在设置的是 $
  },
  // 这个选项用来查找指定如何查找loader
  resolveLoader: {
    modules: ['node_modules', 'loader']
  },
  // 定制一些查找文件的规则
  resolve: {
    extensions: ['.js', '.jsx', 'json', '.css'],
    alias: {
      // bootstrap: path.join(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.css')
    },
    // 第一个可以减少查找的路径，提高查找速度
    // 第二个还可以添加额外的查找路径
    modules: ['node_modules', 'utils'],
    mainFields: ['style', 'browser', 'module', 'main'],
    mainFiles: ['main.js', 'index.js']
  },
  // 如果是单入口 thunk 的名字就叫 main
  // entry: './src/index.js',
  // entry: ['./src/index.js', './src/index2.js'],
  // entry: {
  //   index: './src/index.js',
  //   common: './src/common.js'
  // },
  devtool: env == 'production' ? false : 'source-map', // source-map eval cheap-source-map cheap-module-source-map
  // entry: './src/index.js',
  entry,
  // entry: {
  //   index: './src/index.js',
  //   login: './src/login.js',
  //   // index: ['./src/index.js', './src/index.html'],
  //   // index: './src/main.js',
  //   // verdor: ['react', 'react-dom'],
  //   // verdor: /node_modules/,
  //   // verdor: glob.sync('./node_modules/**/*.js')
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js'
    filename: '[name].js'
    // filename: '[name].[hash].js',
    // publicPath: '/'
  },
  devServer: {
    // after: function (app, server, compiler) {
    //   // do fancy stuff
    //   // console.log('server', server);
    // },
    // stats: 'errors-only',
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
    // 配置哪些语法树不需要不需要读取并且转成语法树进行解析依赖
    noParse: /jquery|lodash/, //正则表达式
    // // 或者使用函数
    // noParse(content) {
    //   return /jquery|lodash/.test(content)
    // },
    rules: [
      {
        test: /\.(html|htm)$/,
        use: ['html-withimg-loader']
      },
      // {
      //   test: /\.(jquery)/,
      //   use: 'expose-loader?$'
      // },
      // {
      //   test: /\.js$/,
      //   use: 'eslint-loader',
      //   enforce: 'pre', // 强制提前执行 post 强制后执行，normal 正常
      //   include: path.join(__dirname, 'src'),
      //   exclude: /node_modules/
      // },
      {
        test: /\.js$/,
        // use: 'babel-loader', // options 中的内容写在 .babelrc 后者 babel.config.js 文件中
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   "presets": [
          //     [ 
          //       "@babel/preset-env", 
          //       {
          //         "useBuiltIns": "usage", // 按需引入 @babel/polyfill
          //         "corejs": 3
          //       }
          //     ],
          //     // "@babel/preset-env",
          //     "@babel/preset-react"
          //   ],
          //   "plugins": [
          //     // legacy 兼容旧的模式
          //     ["@babel/plugin-proposal-decorators", {legacy: true}],
          //     // loose 松散模式 
          //     ["@babel/plugin-proposal-class-properties", {loose: true}],
          //     [
          //       "@babel/plugin-transform-runtime", // 这个是依赖 @babel/runtime 
          //       {
          //         "corejs": false,
          //         "helpers": true,
          //         "regenerator": true,
          //         "useESModules": true
          //       }
          //     ]
          //   ]
          // }
        }
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        // include: path.resolve(__dirname, 'src'),
        // exclude: /node_modules/,
        // 第一种
        use: [ {
          loader: MiniCssExtractPlugin.loader,
          // options: {
          //   publicPath: '../'
          // }
        }, 'css-loader', 'postcss-loader'],
        // use: [devFlag ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        // // 第二种
        // use: [
        //   'style-loader',  
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       importLoaders: 2 // 在 css 文件引入 .scss 文件需要配置 @import url("sass.scss")
        //       // 0 => no loaders (defaule)
        //       // 1 => postcss-loader 
        //       // 2 => postcss-loader  sass-loader
        //     }
        //   },
        //   'postcss-loader',
        //   'sass-loader'
        // ],
        // // 第三种
        // use: [
        //   MiniCssExtractPlugin.loader, 
        //   'css-loader', 
        //   {
        //     loader: 'postcss-loader',
        //     options: {
        //       // 也可以写在 postcss.config.js 中
        //       plugins: [
        //         // browsers 配置可以写在 .browserslistrc
        //         require('autoprefixer')({browsers: ['ios >= 6']})
        //       ]
        //     }
        //   }
        // ]
      },
      {
        test: /\.less$/,
        // use: ['style-loader', 'css-loader']
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
        // use: [devFlag ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.scss$/,
        // use: ['style-loader', 'css-loader']
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        // use: [devFlag ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
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
      {
        test: /\.(ttf|svg|eot|woff|woff2|otf)$/,
        use: 'url-loader'
      }
    ],
  },
  // stats: 'minimal',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled', // 不启动展示打包报告的http服务器
      generateStatsFile: true, // 是否生成 stats.json 文件
    }),
    // new FriendlyErrorsWebpackPlugin(),
    // 这种注入模式，相当于像模块内部注入一个局部变量
    // new webpack.ProvidePlugin({
    //   _: 'lodash',
    //   $: 'jquery'
    // }),
    // 会把这个变量和值挂在到全局对象上
    new webpack.DefinePlugin({
      PRUODUCTION: JSON.stringify(true),
      VERSION: 1,
      EXPRESSION: '1+2',
      COPYRIGHT: {
        AUTHOR: JSON.stringify('张三')
      }
    }),
    new webpack.IgnorePlugin(/^\.\/locale/, /^moment$/),
    // new webpack.HotModuleReplacementPlugin(),
    // 配置多个 HtmlWebpackPlugin
    ...htmlWebpackPlugins,
    // new HtmlWebpackPlugin({
    //   template: './index.html',
    //   filename: 'index.html',
    //   inject: 'body',
    //   // hash: true,
    //   chunks: ['index'], // 多入口文件进行配置，决定引入哪些文件
    //   // chunks: ['index', 'verdor'], // 多入口文件进行配置，决定引入哪些文件
    //   // chunksSortMode: 'manual', // 对引入的代码块进行排序的模式
    // }),
    // new HtmlWebpackPlugin({
    //   template: './index.html',
    //   filename: 'login.html',
    //   inject: 'body',
    //   // hash: true,
    //   chunks: ['login'], // 多入口文件进行配置，决定引入哪些文件
    //   // chunks: ['index', 'verdor'], // 多入口文件进行配置，决定引入哪些文件
    //   // chunksSortMode: 'manual', // 对引入的代码块进行排序的模式
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'list.html',
    //   template: 'src/html/list.html',
    //   chunks: ['common', 'list']
    // }), 
    new CleanWebpackPlugin(), // 默认清 dist 文件夹下的文件
    new MiniCssExtractPlugin({
      // filename: '[name].[hash].[chunkhash].[contenthash].css', // name 代码块 chunk 的名字
      filename: 'css/[name].[contenthash].css', // name 代码块 chunk 的名字
      // filename: '[name].css', // name 代码块 chunk 的名字
      // chunkFilename: '[id].css' // 在异步加载时使用
    }),
    // new HtmlWebpackExternalsPlugin({
    //   externals: [
    //     {
    //       module: 'jquery', // 模块名
    //       entry: 'https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js', // cdn 路径
    //       globel: 'jQuery' // 从全局对象上哪个属性上获取导出的值
    //     }
    //   ]
    // }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, './src/assets'),
          to: path.join(__dirname, './dist/assets'),
        }
      ]
    }),
    new PurgecssWebpackPlugin({
      paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, {nodir: true})
    })
  ]
})