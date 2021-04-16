

function loader(inputSource) {
  console.log('loader3');
  return inputSource + '// loader3'
}

loader.pitch = function(remindingRequest, previousRequest, data) {
  console.log('pitch3');
  return 'let name = "loader3"'
}

module.exports = loader;