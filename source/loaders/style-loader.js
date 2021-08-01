
const loaderUtils = require('loader-utils');

function loader(source) {
  // console.log('source', source);
  let style = (`
    let style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(style);
  `)
  return style;
}

// pitch 有两个最左侧的loader要联合使用
// 如果不加 !! 会出现死循环
loader.pitch = function(remainingRequest, previousRequest, data) {
  // console.log('remainingRequest', remainingRequest);
  let style = (`
    let style = document.createElement('style');
    style.innerHTML = require(${loaderUtils.stringifyRequest(this, "!!" + remainingRequest)});
    document.head.appendChild(style);
  `)
  return style;
}

module.exports = loader;