/*
 * 给每一个生成的模版加一个版权声明的注释
*/

const loaderUtils = require('loader-utils');
// const schemaUtils = require('schema-utils');
const {validate} = require('schema-utils');
const fs = require('fs');
const path = require('path')

function loader(inputSource, inputSourceMap) {
  // let callback = this.async();
  // this.cacheable() // 开启缓存
  // let options = loaderUtils.getOptions(this);
  // console.log('options', options);
  // let schema = {
  //   type: 'object',
  //   properties: {
  //     filename: {type: 'string'},
  //     text: {type: 'string'}
  //   }
  // }
  // // validate(schema, options);
  // let { filename } = options;
  // fs.readFile(path.resolve(__dirname, '../' ,filename), 'utf8', (err, text) => {
  //   console.log('text', text);
  //   callback(null, text + inputSource, inputSourceMap)
  // });
  return inputSource + '// 版权声明' // 添加不上
  // return this.callback(null, options.text + inputSource, inputSourceMap);  // 可以添加
}

module.exports = loader;