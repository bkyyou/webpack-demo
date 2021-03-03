const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩 js （es6）
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const glob = require('glob');

module.exports = {
  mode: 'development',
  // mode: 'production',
  optimization: { // 这里放着优化的内容
    minimizer: [
      // production 模式下可以会自动开启，就是添加
      new TerserWebpackPlugin({
        parallel: true, // 开启多进程并行压缩
        // cache: true // 开启缓存
      }),
      new OptimizeCssAssetsWebpackPlugin({ // 可传参，可不传
        assetNameRegExp: /\.css$/g,  // 指定要压缩模块的正则
        cssProcessor: require('cssnano') // 需下载
      })
    ]
  },
  // 如果是单入口 thunk 的名字就叫 main
  // entry: './src/index.js',
  // entry: ['./src/index.js', './src/index2.js'],
  // entry: {
  //   index: './src/index.js',
  //   common: './src/common.js'
  // },
  devtool: 'source-map',
  entry: {
    index: './src/index.js',
    verdor: ['react', 'react-dom'],
    // verdor: /node_modules/,
    // verdor: glob.sync('./node_modules/**/*.js')
  },
  output: {
    path: path.join(__dirname , './dist'),
    // filename: 'bundle.js'
    // filename: '[name].js'
    filename: '[name].[hash].js',
    publicPath: '/'
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
        test: /\.(html|htm)$/,
        use: ['html-withimg-loader']
      },
      {
        test: /\.js$/,
        use: 'eslint-loader',
        enfore: 'pre', // 强制提前执行 post 强制后执行，normal 正常
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        // use: 'babel-loader', // options 中的内容写在 .babelrc 后者 babel.config.js 文件中
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              // [ 
              //   "@babel/preset-env", 
              //   {
              //     "useBuiltIns": "usage",
              //     "corejs": 3
              //   }
              // ],
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            "plugins": [
              // legacy 兼容旧的模式
              ["@babel/plugin-proposal-decorators", {legacy: true}],
              // loose 松散模式 
              ["@babel/plugin-proposal-class-properties", {loose: true}],
              // [
              //   "@babel/plugin-transform-runtime", // 这个是依赖 @babel/runtime 
              //   {
              //     "corejs": 3,
              //     "helpers": true,
              //     "regenerator": true,
              //     "useESModules": true
              //   }
              // ]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        // 第一种
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
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
      },
      {
        test: /\.scss$/,
        // use: ['style-loader', 'css-loader']
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpeg|svg|jpg|gif)$/,
        // use: ['url-loader'],
        use:  {
          // url-loader 内置了 file-loader    
          loader: 'url-loader',
          options: {
            limit: 10 * 1024, // 10 * 1024 以下的图片大小转换成 base64 打到包里
            outputPath: 'images',
            publicPath: '/images',
            // name: ''
            esModule: false
          }
        }
      },
    ],
  },
  plugins: [
    // 配置多个 HtmlWebpackPlugin
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
      // hash: true,
      // thunks: ['verdor', 'index'], // 多入口文件进行配置，决定引入哪些文件
      thunks: ['index', 'verdor'], // 多入口文件进行配置，决定引入哪些文件
      thunksSortMode: 'manual', // 对引入的代码块进行排序的模式
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'list.html',
    //   template: 'src/html/list.html',
    //   thunks: ['common', 'list']
    // }), 
    new CleanWebpackPlugin(), // 默认清 dist 文件夹下的文件
    new MiniCssExtractPlugin({
      // filename: '[name].[hash].[chunkhash].[contenthash].css', // name 代码块 chunk 的名字
      filename: 'css/[name].[contenthash].css', // name 代码块 chunk 的名字
      // filename: '[name].css', // name 代码块 chunk 的名字
      // chunkFilename: '[id].css' // 在异步加载时使用
    })
  ]
}