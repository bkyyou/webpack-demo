const path = require('path');

module.exports = {
  mode: 'development',
  // devtool: false,
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolveLoader: {
    // alias: {
    //   loader1: path.resolve(__dirname, 'loaders', 'loader1.js'),
    //   loader2: path.resolve(__dirname, 'loaders', 'loader2.js'),
    //   loader3: path.resolve(__dirname, 'loaders', 'loader3.js'),
    // },
    modules: [ path.join(__dirname, 'node_modules'), path.join(__dirname, 'loaders')]
  },
  module: {
    rules: [
      // {
      //   test: /.js$/,
      //   use: [
      //     // { loader: path.resolve(__dirname, 'loaders', 'loader1.js') },
      //     // { loader: path.resolve(__dirname, 'loaders', 'loader2.js') },
      //     // { loader: path.resolve(__dirname, 'loaders', 'loader3.js') },
      //     // 'loader1', 'loader2', 'loader3'
      //     {
      //       loader: 'babel-loader', 
      //       options: {
      //         presets: ['@babel/preset-env']
      //       }
      //     }
      //   ]
      // },
      {
        test: /.js$/,
        use: [
          'loader1', 'loader2', 'loader3',
          {
            loader: 'banner-loader', 
            options: {
              filename: './banner.js',
              text: '/** 版权声明 */'
            }
          },
          // {
          //   loader: 'babel-loader',
          //   // enforce: 'post', // 保障最后执行
          //   options: {
          //     presets: ['@babel/preset-env']
          //   }
          // },
          // {
          //   loader: 'banner-loader', 
          //   options: {
          //     filename: './banner.js',
          //     text: '/** 版权声明 */'
          //   }
          // }
        ]
      },
      // {
      //   test: /.less$/,
      //   use: [
      //     // { loader: path.resolve(__dirname, 'loaders', 'loader1.js') },
      //     // { loader: path.resolve(__dirname, 'loaders', 'loader2.js') },
      //     // { loader: path.resolve(__dirname, 'loaders', 'loader3.js') },
      //     // 'loader1', 'loader2', 'loader3'
      //     // 最左边loader要求返回的是js代码
      //     'style-loader', 'less-loader'
      //   ]
      // },
    ]
  }
}