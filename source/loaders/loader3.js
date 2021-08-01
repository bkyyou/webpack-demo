

function loader(inputSource) {
  console.log('loader3');
  return inputSource + '// loader3'
}

loader.pitch = function(remindingRequest, previousRequest, data) {
  console.log('pitch3');
  // return 'let name = "loader3"'
}

// 默认情况下loader得到的内容是字符串，如果你想得到二进制文件，需要把raw=true
loader.row = true;

module.exports = loader;