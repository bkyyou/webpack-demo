# 内容

splitChunks 设置


可以单独 打一个文件, test 可以是函数

```js
{
  default: {
    minChunks: 1,
    minSize: 1,
    test: function(module, chunks) {
      // console.log('--------')
      // console.log(module.resource)
      // console.log(chunks)
      // const flag = module.resource.indexOf('node_modules') === -1;
      const flag = module.resource.indexOf('jquery') > -1;
      // console.log('flag', flag);
      return flag;
    },
    priority: -7,
    reuseExistingChunk: true
  }
}
```