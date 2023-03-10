class TestPlugin {
  constructor(config) {
    this.config = config;
  }
  apply(compiler) {
    // 监听 webpack 某个生命周期 emit 打包完成 done 打包结束
    compiler.hooks.emit.tap('testPlugin', (compilation) => {
      console.log(compilation.assets);
      // console.log(compilation.assets['main.fed23d863abc776d273c.js']);
    })
    compiler.hooks.done.tap('testPlugin', (compilation) => {
      // console.log(compilation.assets);
      // console.log(compilation.assets['main.fed23d863abc776d273c.js']);
    })
  }
}

module.exports = TestPlugin;