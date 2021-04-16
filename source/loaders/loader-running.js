let path = require('path');
let fs = require('fs');

function createLoaderObject(loaderPath) {
  let obj = {
    // data用来在 pitch 和 normal 里传递数据的
    data: {}
  }
  obj.request = loaderPath; // loader 这个文件绝对路径
  obj.normal = require(loaderPath); // 正常的 loader 函数
  obj.pitch = obj.normal.pitch // pitch 函数
  return obj;
}

function runLoaders(options, callbak) {
  let loaderContext = options.context || {}; // loader 上下文环境
  // let resource = loaderContext.resource = options.resource; // 要加载的资源
  loaderContext.resource = options.resource; // 要加载的资源
  // let loaders = options.loaders;
  loaderContext.loaders = loaders.map(createLoaderObject);
  // loaderContext.loaders = loaders;
  loaderContext.loaderIndex = 0; // loaderIndex 正在执行loader 索引
  loaderContext.readResource = options.readResource; // fs.readFile

  iteratePitchingLoading(loaderContext, callbak);

  function iteratePitchingLoading(loaderContext, callbak) {
    let currentLoadersObject = loaderContext.loaders[loaderContext.loaderIndex];
  }
}

runLoaders({
  resource: path.resolve(__dirname, '../', 'src/hello.js'), // 要加载的资源
  loaders: [ // 要用这个三个loader去转换hello.js
    path.resolve('./', 'loader1.js'),
    path.resolve('./', 'loader2.js'),
    path.resolve('./', 'loader3.js'),
  ],
  readResource: fs.readFile.bind(fs)
}, function(err, result) {
  console.log('result', result);
})