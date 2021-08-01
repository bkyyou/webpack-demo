
// 读取原文件的内容，并重命名，并且写到新的输出目录下
const { getOptions, interpolateName } = require('loader-utils');
console.log('getOptions', getOptions);
function loader(content) {
  let options = getOptions(this) || {};
  let filename = options.filename || '[name].[hash].[ext]';
  let outputFileName = interpolateName(this, filename, {content});
  console.log('outputFileName', outputFileName);
  this.emitFile(outputFileName, content); // 把 context 内容输出到 outputFileName
  return `module.exports = ${JSON.stringify(outputFileName)}`;
}
loader.raw = true; // 保证文件内容是二进制
module.exports = loader;