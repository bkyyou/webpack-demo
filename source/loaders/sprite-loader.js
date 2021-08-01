/**
 * 找出哪些图片要加入雪碧图，所以要加入标记
 * 合并出一个雪碧图，还要计算他们的大小位置
 * 改变 css 文件， 把旧的路径改成新的路径。另外要填入 新的 css 规则
 */
const postcss = require('postcss');
const path = require('path');
const loaderUtils = require('loader-utils');
const SpriteSmith = require('spritesmith');
const Tokenizer = require('css-selector-tokenizer'); // css属性转成对象

function loader(inputSource) {
  // this.context 代表被加载资源的上下文目录 
  let callback = this.async();
  let that = this;
  function createPlugin(postcssOptions) {
    return function (css) { // 代表 css 文件本身
      console.log('css', css);
      css.walkDecls(function(decl) { // 拦截每个规则
        console.log('decl', decl);
        console.log('decl.value', decl.value);
        let values = Tokenizer.parseValues(decl.value);
        console.log('values', values);
        values.nodes.forEach(value => {
          console.log('value', value);
          value.nodes.forEach(item => {
            if (item.type === 'url' && item.url.endsWith('?sprite')) {
              // 拼一个路径，找到图片的绝对路径
              let url = path.resolve(that.context, item.url); // this.context 代表被加载资源的上下文目录 
              item.url = postcssOptions.spriteFilename;
              // 按理说我要在当前的规则下面添加一条 background-position
              postcssOptions.rules.push({
                url, // 原始文件的绝对路径，未来合并雪碧图使用
                rule: decl.parent // 当前规则 （类名？？？）
              })
            }
          })
        })
        decl.value = Tokenizer.stringifyValues(values); // 直接把url地址改成雪碧图的名字
      });
      postcssOptions.rules.map(item => item.rule).forEach((rule, index) => {
        rule.append(
          postcss.decl({
            prop: 'background-position',
            value: `_BACKGROUND_POSITION_${index}_`
          })
        )
      });
    }

  }

  const postcssOptions = {
    spriteFilename: 'sprite.jpg',
    rules: []
  }

  let pipline = postcss([createPlugin(postcssOptions)]);
  pipline.process(inputSource, {from: undefined}).then(cssResult => {
    console.log('cssResult', cssResult);
    let sprites = postcssOptions.rules.map(val => val.url.slice(0, val.url.lastIndexOf('?')));
    let cssStr = cssResult.css;
    
    SpriteSmith.run({src: sprites}, function(error, spriteResult) {
      console.log(error);
      console.log(spriteResult);
      let coordinates = spriteResult.coordinates;
      Object.keys(coordinates).forEach((key, index) => {
        console.log(1122);
        
        cssStr = cssStr.replace(`_BACKGROUND_POSITION_${index}_`, `-${coordinates[key].x}px, -${coordinates[key].y}px`)

      })
      // fs.writeFileSync('./sprite.png', spriteResult.image)
      that.emitFile(postcssOptions.spriteFilename, spriteResult.image);
      callback(null, `module.exports = ${JSON.stringify(cssStr)}`); // 不用 JSON.stringify 用双引号可能会有 断行的问题
    })
  });
}

loader.raw = true; // 二进制文件

module.exports = loader;