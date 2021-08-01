
const postcss = require('postcss');
const Tokenizer = require('css-selector-tokenizer');
const loaderUtils = require('loader-utils');


function createPlugin(options) {
  return function(css) {
    // console.log('css', css);
    let { importItem, urlItem } = options;
    css.walkAtRules(/^import$/, function(rule) {
      let values = Tokenizer.parseValues(rule);
      // console.log('values', values);
      // console.log('values.nodes[0].nodes', values.nodes[0].nodes);
      let url = values.nodes[0].nodes[1]; // {value: './base.css'}
      // importItem.push({ url: url.value });
      importItem.push( url.value );
      console.log('url', url);
      // importItem.push(url);
    })
    // 遍历每条规则
    css.walkDecls(function(decl) {
      // console.log('decl', decl);
      let values = Tokenizer.parseValues(decl.value); // 1px solid red
      // console.log('values', values);
      values.nodes.forEach(value => {
        value.nodes.forEach(item => {
          // console.log('item', item);
          if (item.type === 'url') {
            let url = item.url;
            item.url = `_CSS_URL_${urlItem.length}_`;
            urlItem.push(url); // './avator.jpg'
          }
        })
      })
      decl.value = Tokenizer.stringifyValues(values);
    })
  }
}

function loader(inputSource) {

  // console.log('cssloader=======')

  let callback = this.async();

  let options = {
    importItem: [],
    urlItem: []
  };

  // stringifyRequest 可以把绝对路径转换成适合loader的相对路径
  postcss([
    createPlugin(options)
  ]).process(inputSource).then(res => {
    // console.log('res', res.css);
    let importJs = options.importItem.map(imp => {
      // console.log('imp', imp);
      return 'require(' + loaderUtils.stringifyRequest(this, imp) + ')'
    }).join('\n');
    // console.log(11111);
    let cssString = JSON.stringify(res.css);
    cssString = cssString.replace(/@import\s+?['"][^'"]+?['"];?/, "")
    // console.log('cssString', cssString); // _CSS_URL_0_'
    cssString = cssString.replace(/_CSS_URL_(\d+?)_/g, function(matched, group1) {
      // console.log('group1', group1);
      let imgUrl = options.urlItem[+group1];
      return '"+require("' + imgUrl + '").default+"';
      // return require("' + imgUrl + '").default;
    })
    // console.log('cssString', cssString);
    // console.log('importJs', importJs);

    callback(null, `
      ${importJs}
      module.exports = ${cssString};
      `)
    // callback(null, `
    //   ${importJs}
    //   ${cssString};
    //   module.exports = ''
    //   `)
  })

}




module.exports = loader;