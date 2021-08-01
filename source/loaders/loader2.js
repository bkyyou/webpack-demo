

function loader(inputSource) {
  console.log('loader2===');
  // return inputSource + '// loader'

  // // 异步
  let callback = this.async();

  setTimeout(() => {
    console.log('loader2');
    callback(null, inputSource + '// loader2.js', 'xx') // 第一个参数是 error
  }, 2000);
}

loader.pitch = function(remindingRequest, previousRequest, data) {
  console.log('pitch2');
  // return 'let name = "loader2"'
}

module.exports = loader;