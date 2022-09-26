const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Clean = require('./plugin/clean');


module.exports = {
  mode: "development",
  entry: {
    entry1: path.join(__dirname, './src/entry1.js'),
    entry2: path.join(__dirname, './src/entry2.js')
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     minSize: 30000,
  //     // minSize: 1,
  //     minChunks: 1,
  //     // maxAsyncRequests: 5,
  //     // maxInitialRequests: 3,
  //     automaticNameDelimiter: '~',
  //     // name: true,
  //     cacheGroups: {
  //       vendors: {
  //         test: /[\/]node_modules[\/]/,
  //         priority: -8
  //       },
  //       // default: {
  //       //   minChunks: 1,
  //       //   minSize: 1,
  //       //   test: function(module, chunks) {
  //       //     // console.log('--------')
  //       //     // console.log(module.resource)
  //       //     // console.log(chunks)
  //       //     // const flag = module.resource.indexOf('node_modules') === -1;
  //       //     const flag = module.resource.indexOf('jquery') > -1;
  //       //     // console.log('flag', flag);
  //       //     return flag;
  //       //   },
  //       //   priority: -7,
  //       //   reuseExistingChunk: true
  //       // }

  //     }
  //   }
  // },
  plugins: [
    // new CleanWebpackPlugin()
    new Clean()
  ],
}