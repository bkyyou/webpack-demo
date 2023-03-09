{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/transform-runtime",
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    [
      "import",
      {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": "css" // `style: true` 会加载 less 文件
      }
    ]
  ]
}