
// 读取原文件的内容，并重命名，并且写到新的输出目录下
// 如果文件的大小小于limit，就不再拷贝新的文件输出到目录，而是直接返回base64字符串
const { getOptions, interpolateName } = require('loader-utils');
const fileLoader = require('file-loader');
console.log('getOptions', getOptions);
function loader(content) {
  let { filename = '[name].[hash].[ext]', limit = 1024 * 64} = getOptions(this) || {};
  if (content.length < limit) {
    const contentType = mine.getType(this.resourcePath); // 返回此图片的内容类型
    let base64 = `data:${contentType};base64,${content.toString('base64')}`;
    return `module.exports = ${JSON.stringify(base64)}`
  }
  return fileLoader.call(this, content);
}
loader.raw = true; // 保证文件内容是二进制
module.exports = loader;