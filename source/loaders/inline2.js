

function loader(inputSource) {
  console.log('inline2');
  return inputSource + '// inline2' 
}

module.exports = loader;