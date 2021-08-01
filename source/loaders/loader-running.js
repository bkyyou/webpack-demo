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

function defineProperty(loaderContext) {
  // 假设在 loader2
  Object.defineProperty(loaderContext, 'request', {
    get: function() { // request loader!loader2!loader3!hello.js
      return loaderContext.loaders.map(loader => loader.request).concat(loaderContext.resource).join('!');
    }
  })

  Object.defineProperty(loaderContext, 'remindingRequest', {
    get: function() { // request loader3!hello.js
      return loaderContext.loaders.map(loader => loader.request).concat(loaderContext.resource).slice(loaderContext.loaderIndex + 1).join('!');
    }
  })

  Object.defineProperty(loaderContext, 'previousRequest', {
    get: function() { // request loader1
      return loaderContext.loaders.map(loader => loader.request).slice(0, loaderContext.loaderIndex + 1).join('!');
    }
  })

  Object.defineProperty(loaderContext, 'currentRequest', {
    get: function() { // request loader2!loader3!hello.js
      return loaderContext.loaders.map(loader => loader.request).concat(loaderContext.resource).slice(loaderContext.loaderIndex).join('!');
    }
  })
  Object.defineProperty(loaderContext, 'data', {
    get: function() { // request loader2!loader3!hello.js
      return loaderContext.loaders[loaderContext.loaderIndex].data;
    }
  })
}

// var isSync = true;

function runLoaders(options, callbak) {
  let loaderContext = options.context || {}; // loader 上下文环境
  // let resource = loaderContext.resource = options.resource; // 要加载的资源
  loaderContext.resource = options.resource; // 要加载的资源
  // let loaders = options.loaders;
  loaderContext.loaders = options.loaders.map(createLoaderObject);
  // loaderContext.loaders = loaders;
  loaderContext.loaderIndex = 0; // loaderIndex 正在执行loader 索引
  loaderContext.readResource = options.readResource; // fs.readFile
  defineProperty(loaderContext);
  let isSync = true;
  function asyncCallback(err, args) {
    loaderContext.loaderIndex--;
    isSync = true;
    iterateNormalLoading(loaderContext, args, callbak);
  }
  loaderContext.async = function(err, result) { // todo 为啥要传 err
    console.log('async===');
    isSync = false;
    // return asyncCallback(err, result);
    return asyncCallback;
  }

  console.log('loaderContext', loaderContext.currentRequest);

  iteratePitchingLoading(loaderContext, callbak);

  function iteratePitchingLoading(loaderContext, callbak) {
    // 走到最后了，要读源文件运行loader
    if (loaderContext.loaderIndex >= loaderContext.loaders.length) {
      loaderContext.loaderIndex--;
      return processResource(loaderContext, callbak)
    }
    let currentLoadersObject = loaderContext.loaders[loaderContext.loaderIndex];
    let pitchFn = currentLoadersObject.pitch;
    if (typeof pitchFn != 'function') {
      loaderContext.loaderIndex++;
      return iteratePitchingLoading(loaderContext, callbak)
    }
    let args = pitchFn.apply(loaderContext, [loaderContext.remindingRequest, loaderContext.previousRequest, loaderContext.data]);
    if (args) {
      // console.log('args', args);
      loaderContext.loaderIndex--;
      iterateNormalLoading(loaderContext, args, callbak);
    } else {
      loaderContext.loaderIndex++;
      return iteratePitchingLoading(loaderContext, callbak)
    }
  }

  function processResource(loaderContext, callbak) {
    // let result = loaderContext.readResource(loaderContext.resource, 'utf8');
    let args = loaderContext.readResource(loaderContext.resource);
    console.log('args', args);
    if (!loaderContext.loaders[loaderContext.loaderIndex].normal.raw) {
      args = args.toString('utf8');
    }
    iterateNormalLoading(loaderContext, args, callbak)
  } 

  function iterateNormalLoading(loaderContext, args, callbak) {
    if (loaderContext.loaderIndex < 0) {
      return callbak(null, args);
    }
    let currentLoadersObject = loaderContext.loaders[loaderContext.loaderIndex];
    let normalFn = currentLoadersObject.normal;
    args = normalFn.apply(loaderContext, [ args ]);
    // console.log('isSync', isSync);
    if (isSync) { 
      loaderContext.loaderIndex--;
      iterateNormalLoading(loaderContext, args, callbak);
    }
  } 
}

runLoaders({
  resource: path.resolve(__dirname, '../', 'src/hello.js'), // 要加载的资源
  loaders: [ // 要用这个三个loader去转换hello.js
    path.resolve('./', 'loader1.js'),
    path.resolve('./', 'loader2.js'),
    path.resolve('./', 'loader3.js'),
  ],
  // readResource: fs.readFile.bind(fs)
  readResource: fs.readFileSync.bind(fs)
}, function(err, result) {
  console.log('result', result);
})