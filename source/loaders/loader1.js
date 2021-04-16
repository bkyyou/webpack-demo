

function loader(inputSource) {
  console.log('loader1');
  this.data;
  this.data.pitch
  return inputSource + '// loader1'
  // // 异步
  // let callback = this.async();

  // setTimeout(() => {
  //   callback(null, inputSource + '// loader1.js', 'xx') // 第一个参数是 error
  // }, 2000);
  
}

loader.pitch = function(remindingRequest, previousRequest, data) {
  console.log('pitch1');
  data.pitch = 'pitch1'
}

module.exports = loader;

// 有 pitch 函数先执行 pitch ， pitch 有返回值执行上一个 loader， 下一个loader中pitch不知行了

/**
 * 打印
 * pitch1
 * pitch2
 * pitch3
 * loader2
 * loader1
 * 
 * 添加
 * let name = "loader3" // loader2 // loader1
 */