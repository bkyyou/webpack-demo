module.exports = {
  "presets": [
    [ 
      // [
      "@babel/preset-env",
        // {"modules": true}
      // ], 
      {
        "useBuiltIns": "usage", // 按需引入 @babel/polyfill
        "corejs": 3,
        // "modules": false
      }
    ],
    // "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    // legacy 兼容旧的模式
    ["@babel/plugin-proposal-decorators", {legacy: true}],
    // loose 松散模式 
    ["@babel/plugin-proposal-class-properties", {loose: true}],
    [
      "@babel/plugin-transform-runtime", // 这个是依赖 @babel/runtime 
      {
        "corejs": false, // 3 false
        "helpers": true,
        "regenerator": true,
        "useESModules": true
      }
    ]
  ]
}