

function loader(inputSource) {
  console.log('inline1');
  return inputSource + '// inline1' 
}

module.exports = loader;