const babel = require('@babel/core');
const path = require('path');
const loaderUtils = require('loader-utils');

console.log('loaderUtils', loaderUtils);

function loader(inputSource) {
  console.log(this.resourcePath, path.basename(this.resourcePath));
  let options = loaderUtils.getOptions(this);
  // const options = {
  //   presets: ['@babel/preset-env'],
  //   sourceMaps: true, // 告诉 babel 我要生成 sourceMap
  //   filename: path.basename(this.resourcePath),
  // }
  options = {
    presets: ['@babel/preset-env'],
    ...options,
    sourceMaps: true, // 告诉 babel 我要生成 sourceMap
    filename: path.basename(this.resourcePath),
  }
  let { code, map, ast} = babel.transform(inputSource, options);
  console.log(code, map)
  // 我们可以 sourcemap ast 都传给 webpack， 这样webpack就不需要自己把源代码转换成语法树了，也不需要生成sourcemap
  return this.callback(null, code, map, ast);
}

module.exports = loader;