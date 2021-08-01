

function loader(inputSource) {
  var reg = /'..\/utils\/tools\/test\.js'/g;
  // console.log('process', process),
  console.log('inputSource', inputSource);
  console.log('process', process.env.NODE_ENV)
  console.log('reg.test(inputSource)', reg.test(inputSource));
  return inputSource 
}

module.exports = loader;