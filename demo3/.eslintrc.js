module.exports = {
  root: true, // 是否是根配置
  parserOptions: { // 解析器的选项， AST语法树解析
    sourceType: 'module',
    ecmaVersion: es2015
  },
  env: { // 指定运行环境。 
    browser: true, // window document 使用的时候不会报错
    node: true // require process 使用的时候不会报错
  },
  rules: {
    "ident": ["error", 4]
  }
}