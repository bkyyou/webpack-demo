const postcss = require('postcss');
const Tokenizer = require('css-selector-tokenizer');

function createPlugin(options) {
  return function(css) {
    // console.log('css', css);
    let { importItem, urlItem } = options;
    css.walkAtRules(/^import$/, function(rule) {
      let values = Tokenizer.parseValues(rule);
      let url = values.nodes[0].nodes[0]; // {value: './base.css'}
      importItem.push({url: url.value});
    })
    // 遍历每条规则
    css.walkDecls(function(decl) {
      // console.log('decl', decl);
      let values = Tokenizer.parseValues(decl.value); // 1px solid red
      console.log('values', values);
      values.nodes.forEach(value => {
        value.nodes.forEach(item => {
          console.log('item', item);
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

let options = {
  importItem: [],
  urlItem: []
};

// postcss([
//   createPlugin(options)
// ]).process('border: 1px solid red').then(res => {
//   console.log('res', res.css);
// })

let css = `
  @import './base.css';

  .avator {
    width: 200px;
    height: 200px;
    background-image: url('../imgs/avator.png');
    background-size: 100% 100%;
  }
`

// process('background-image: url(../imgs/avator.);') { type: 'url', url: '../imgs/avator.' }
// process('@import "./base.css"')
postcss([
  createPlugin(options)
]).process(css).then(res => {
  console.log('res', res.css);
  let importJs = options.importItem.map(imp => {
    return '"+require("' + imp + '")+"'
  }).join('\n');
  let cssString = JSON.stringify(res.css);
  cssString = cssString.replace(/@import\s+?['"][^'"]+?['"];?/, "")
  // console.log('cssString', cssString); // _CSS_URL_0_'
  cssString = cssString.replace(/_CSS_URL_(\d+?)_/g, function(matched, group1) {
    return '"+require(' + options.urlItem[+group1] + '")+';
  })
  console.log('cssString', cssString);
})