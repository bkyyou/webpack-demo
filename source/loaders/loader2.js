

function loader(inputSource) {
  console.log('loader2');
  return inputSource + '// loader'
}

loader.pitch = function(remindingRequest, previousRequest, data) {
  console.log('pitch2');
  return 'let name = "loader2"'
}

module.exports = loader;