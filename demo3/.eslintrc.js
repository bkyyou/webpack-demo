module.exports = {
  // root: true, // 是否是根配置  配置文件可以继承
  parser: 'babel-eslint', // 把源代码转换成语法树的工具（配置了 parserOptions 可以注销）
  extends: 'airbnb',
  // parserOptions: { // 解析器的选项， AST语法树解析
  //   sourceType: 'module',
  //   ecmaVersion: 2015
  // },
  env: { // 指定运行环境。 
    browser: true, // window document 使用的时候不会报错
    node: true // require process 使用的时候不会报错
  },
  rules: {
    // "indent": ["error", 4]
    // "no-console": ["error"],
    "linebreak-style": "off", 
  }
}