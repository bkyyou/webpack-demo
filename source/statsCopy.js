module.exports = {
  "hash": "c5e80ad85b5b4fd41971",  // 本次编译的hash
  "version": "5.30.0", // webpack 版本号
  "time": 91, // 共费时间 ms
  "builtAt": 1617925805638, // 时间戳
  "publicPath": "auto", // 访问路径
  "outputPath": "/Users/koolearn/Desktop/program/webpack-demo/source/dist",
  "assetsByChunkName": { // 产出资源的代码块名字
    "0": [
      "0.bundle.js"
    ],
    "1": [
      "1.bundle.js"
    ],
    "main": [
      "bundle.js"
    ]
  },
  "assets": [ // 产出的资源
    {
      "type": "asset",
      "name": "bundle.js",  // 生成的文件名
      "size": 13365,   // 预估的文件大小
      "emitted": true,  // 文件是否已经生成
      "comparedForEmit": false,
      "cached": false,
      "info": {
        "javascriptModule": false,
        "size": 13365
      },
      "chunkNames": [ // 代码块的名字
        "main"
      ],
      "chunkIdHints": [],
      "auxiliaryChunkNames": [],
      "auxiliaryChunkIdHints": [],
      "related": {},
      "chunks": [  // 这个文件里包含的代码块有哪些
        "main"
      ],
      "auxiliaryChunks": [],
      "isOverSizeLimit": false
    },
    {
      "type": "asset",
      "name": "1.bundle.js",
      "size": 248,
      "emitted": false,
      "comparedForEmit": true,
      "cached": false,
      "info": {
        "javascriptModule": false,
        "size": 248
      },
      "chunkNames": [
        "1"
      ],
      "chunkIdHints": [],
      "auxiliaryChunkNames": [],
      "auxiliaryChunkIdHints": [],
      "related": {},
      "chunks": [
        "1"
      ],
      "auxiliaryChunks": [],
      "isOverSizeLimit": false
    },
    {
      "type": "asset",
      "name": "0.bundle.js",
      "size": 244,
      "emitted": false,
      "comparedForEmit": true,
      "cached": false,
      "info": {
        "javascriptModule": false,
        "size": 244
      },
      "chunkNames": [
        "0"
      ],
      "chunkIdHints": [],
      "auxiliaryChunkNames": [],
      "auxiliaryChunkIdHints": [],
      "related": {},
      "chunks": [
        "0"
      ],
      "auxiliaryChunks": [],
      "isOverSizeLimit": false
    }
  ],
  "chunks": [ // 代码块
    {
      "rendered": true,
      "initial": false, // 是否同步初始化
      "entry": false, // 是否是入口代码块
      "recorded": false,
      "size": 24,
      "sizes": {
        "javascript": 24
      },
      "names": [
        "0"
      ],
      "idHints": [],
      "runtime": [
        "main"
      ],
      "files": [
        "0.bundle.js"
      ],
      "auxiliaryFiles": [],
      "hash": "19a2157333278554957d", // chunkhash
      "childrenByOrder": {}, // 
      "id": "0",
      "siblings": [],
      "parents": [ // 父亲是main
        "main"
      ],
      "children": [], //
      "modules": [
        {
          "type": "module",
          "moduleType": "javascript/auto",
          "layer": null,
          "size": 24,
          "sizes": {
            "javascript": 24
          },
          "built": true,
          "codeGenerated": true,
          "cached": false,
          "identifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/lazy.js",
          "name": "./src/lazy.js",
          "nameForCondition": "/Users/koolearn/Desktop/program/webpack-demo/source/src/lazy.js",
          "index": 2,
          "preOrderIndex": 2,
          "index2": 2,
          "postOrderIndex": 2,
          "cacheable": true,
          "optional": false,
          "orphan": false,
          "dependent": false,
          "issuer": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
          "issuerName": "./src/index.js",
          "issuerPath": [
            {
              "identifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
              "name": "./src/index.js",
              "profile": {
                "total": 34,
                "resolving": 21,
                "restoring": 0,
                "building": 13,   // loader编译的时间
                "integration": 0,
                "storing": 0,
                "additionalResolving": 0,
                "additionalIntegration": 0,
                "factory": 21, // 工厂创建模块的时间
                "dependencies": 0
              },
              "id": "./src/index.js"
            }
          ],
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "profile": {
            "total": 0,
            "resolving": 0,
            "restoring": 0,
            "building": 0,
            "integration": 0,
            "storing": 0,
            "additionalResolving": 0,
            "additionalIntegration": 0,
            "factory": 0,  // 工厂创建模块的时间
            "dependencies": 0
          },
          "id": "./src/lazy.js",
          "issuerId": "./src/index.js",
          "chunks": [
            "0"
          ],
          "assets": [],
          "reasons": [ // 表示本模块添加的原因
            {
              "moduleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
              "module": "./src/index.js", // 谁引用的我
              "moduleName": "./src/index.js",
              "resolvedModuleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
              "resolvedModule": "./src/index.js",
              "type": "import()", // 引入方式
              "active": true,
              "explanation": "",
              "userRequest": "./lazy.js", // 路径
              "loc": "5:0-46", // 这个动态引入在源代码的位置
              "moduleId": "./src/index.js",
              "resolvedModuleId": "./src/index.js"
            },
            {
              "moduleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/lazy.js",
              "module": "./src/lazy.js",
              "moduleName": "./src/lazy.js",
              "resolvedModuleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/lazy.js",
              "resolvedModule": "./src/lazy.js",
              "type": "cjs self exports reference",
              "active": true,
              "explanation": "",
              "userRequest": null,
              "loc": "1:0-14",
              "moduleId": "./src/lazy.js",
              "resolvedModuleId": "./src/lazy.js"
            }
          ],
          "usedExports": null,
          "providedExports": null,
          "optimizationBailout": [
            "CommonJS bailout: module.exports is used directly at 1:0-14"
          ],
          "depth": 1 // 深度
        }
      ],
      "origins": [
        {
          "module": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
          "moduleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
          "moduleName": "./src/index.js",
          "loc": "5:0-46",
          "request": "./lazy.js",
          "moduleId": "./src/index.js"
        }
      ]
    },
    {
      "rendered": true,
      "initial": false,
      "entry": false,
      "recorded": false,
      "size": 24,
      "sizes": {
        "javascript": 24
      },
      "names": [
        "1"
      ],
      "idHints": [],
      "runtime": [
        "main"
      ],
      "files": [
        "1.bundle.js"
      ],
      "auxiliaryFiles": [],
      "hash": "a65461a3cc1960733ca5",
      "childrenByOrder": {},
      "id": "1",
      "siblings": [],
      "parents": [
        "main"
      ],
      "children": [],
      "modules": [
        {
          "type": "module",
          "moduleType": "javascript/auto",
          "layer": null,
          "size": 24,
          "sizes": {
            "javascript": 24
          },
          "built": true,
          "codeGenerated": true,
          "cached": false,
          "identifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/lazy2.js",
          "name": "./src/lazy2.js",
          "nameForCondition": "/Users/koolearn/Desktop/program/webpack-demo/source/src/lazy2.js",
          "index": 3,
          "preOrderIndex": 3,
          "index2": 3,
          "postOrderIndex": 3,
          "cacheable": true,
          "optional": false,
          "orphan": false,
          "dependent": false,
          "issuer": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
          "issuerName": "./src/index.js",
          "issuerPath": [
            {
              "identifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
              "name": "./src/index.js",
              "profile": {
                "total": 34,
                "resolving": 21,
                "restoring": 0,
                "building": 13,  // loader编译的时间
                "integration": 0,
                "storing": 0,
                "additionalResolving": 0,
                "additionalIntegration": 0,
                "factory": 21, // 工厂创建模块的时间
                "dependencies": 0
              },
              "id": "./src/index.js"
            }
          ],
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "profile": {
            "total": 0,
            "resolving": 0,
            "restoring": 0,
            "building": 0,
            "integration": 0,
            "storing": 0,
            "additionalResolving": 0,
            "additionalIntegration": 0,
            "factory": 0,
            "dependencies": 0
          },
          "id": "./src/lazy2.js",
          "issuerId": "./src/index.js",
          "chunks": [
            "1"
          ],
          "assets": [],
          "reasons": [
            {
              "moduleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
              "module": "./src/index.js",
              "moduleName": "./src/index.js",
              "resolvedModuleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
              "resolvedModule": "./src/index.js",
              "type": "import()",
              "active": true,
              "explanation": "",
              "userRequest": "./lazy2.js",
              "loc": "9:0-47",
              "moduleId": "./src/index.js",
              "resolvedModuleId": "./src/index.js"
            },
            {
              "moduleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/lazy2.js",
              "module": "./src/lazy2.js",
              "moduleName": "./src/lazy2.js",
              "resolvedModuleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/lazy2.js",
              "resolvedModule": "./src/lazy2.js",
              "type": "cjs self exports reference",
              "active": true,
              "explanation": "",
              "userRequest": null,
              "loc": "1:0-14",
              "moduleId": "./src/lazy2.js",
              "resolvedModuleId": "./src/lazy2.js"
            }
          ],
          "usedExports": null,
          "providedExports": null,
          "optimizationBailout": [
            "CommonJS bailout: module.exports is used directly at 1:0-14"
          ],
          "depth": 1
        }
      ],
      "origins": [
        {
          "module": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
          "moduleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
          "moduleName": "./src/index.js",
          "loc": "9:0-47",
          "request": "./lazy2.js",
          "moduleId": "./src/index.js"
        }
      ]
    },
    {
      "rendered": true,
      "initial": true,
      "entry": true,
      "recorded": false,
      "size": 8186,
      "sizes": {
        "javascript": 272,
        "runtime": 7914
      },
      "names": [
        "main"
      ],
      "idHints": [],
      "runtime": [
        "main"
      ],
      "files": [
        "bundle.js"
      ],
      "auxiliaryFiles": [],
      "hash": "52896c5c01bd405f16ae",
      "childrenByOrder": {},
      "id": "main",
      "siblings": [],
      "parents": [],
      "children": [
        "0",
        "1"
      ],
      "modules": [
        {
          "type": "module",
          "moduleType": "javascript/auto",
          "layer": null,
          "size": 25,
          "sizes": {
            "javascript": 25
          },
          "built": true,
          "codeGenerated": true,
          "cached": false,
          "identifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/hello.js",
          "name": "./src/hello.js",
          "nameForCondition": "/Users/koolearn/Desktop/program/webpack-demo/source/src/hello.js",
          "index": 1,
          "preOrderIndex": 1,
          "index2": 0,
          "postOrderIndex": 0,
          "cacheable": true,
          "optional": false,
          "orphan": false,
          "dependent": true,
          "issuer": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
          "issuerName": "./src/index.js",
          "issuerPath": [
            {
              "identifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
              "name": "./src/index.js",
              "profile": {
                "total": 34,
                "resolving": 21,
                "restoring": 0,
                "building": 13,
                "integration": 0,
                "storing": 0,
                "additionalResolving": 0,
                "additionalIntegration": 0,
                "factory": 21,
                "dependencies": 0
              },
              "id": "./src/index.js"
            }
          ],
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "profile": {
            "total": 0,
            "resolving": 0,
            "restoring": 0,
            "building": 0,
            "integration": 0,
            "storing": 0,
            "additionalResolving": 0,
            "additionalIntegration": 0,
            "factory": 0,
            "dependencies": 0
          },
          "id": "./src/hello.js",
          "issuerId": "./src/index.js",
          "chunks": [
            "main"
          ],
          "assets": [],
          "reasons": [
            {
              "moduleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/hello.js",
              "module": "./src/hello.js",
              "moduleName": "./src/hello.js",
              "resolvedModuleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/hello.js",
              "resolvedModule": "./src/hello.js",
              "type": "cjs self exports reference",
              "active": true,
              "explanation": "",
              "userRequest": null,
              "loc": "1:0-14",
              "moduleId": "./src/hello.js",
              "resolvedModuleId": "./src/hello.js"
            },
            {
              "moduleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
              "module": "./src/index.js",
              "moduleName": "./src/index.js",
              "resolvedModuleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
              "resolvedModule": "./src/index.js",
              "type": "cjs require",
              "active": true,
              "explanation": "",
              "userRequest": "./hello.js",
              "loc": "3:14-35",
              "moduleId": "./src/index.js",
              "resolvedModuleId": "./src/index.js"
            }
          ],
          "usedExports": null,
          "providedExports": null,
          "optimizationBailout": [
            "CommonJS bailout: module.exports is used directly at 1:0-14"
          ],
          "depth": 1
        },
        {
          "type": "module",
          "moduleType": "javascript/auto",
          "layer": null,
          "size": 247,
          "sizes": {
            "javascript": 247
          },
          "built": true,
          "codeGenerated": true,
          "cached": false,
          "identifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
          "name": "./src/index.js",
          "nameForCondition": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
          "index": 0,
          "preOrderIndex": 0,
          "index2": 1,
          "postOrderIndex": 1,
          "cacheable": true,
          "optional": false,
          "orphan": false,
          "dependent": false,
          "issuer": null,
          "issuerName": null,
          "issuerPath": null,
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "profile": {
            "total": 34,
            "resolving": 21,
            "restoring": 0,
            "building": 13,
            "integration": 0,
            "storing": 0,
            "additionalResolving": 0,
            "additionalIntegration": 0,
            "factory": 21,
            "dependencies": 0
          },
          "id": "./src/index.js",
          "issuerId": null,
          "chunks": [
            "main"
          ],
          "assets": [],
          "reasons": [
            {
              "moduleIdentifier": null,
              "module": null,
              "moduleName": null,
              "resolvedModuleIdentifier": null,
              "resolvedModule": null,
              "type": "entry",
              "active": true,
              "explanation": "",
              "userRequest": "./src/index.js",
              "loc": "main",
              "moduleId": null,
              "resolvedModuleId": null
            }
          ],
          "usedExports": null,
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 0
        },
        {
          "type": "module",
          "moduleType": "runtime",
          "layer": null,
          "size": 1141,
          "sizes": {
            "runtime": 1141
          },
          "built": false,
          "codeGenerated": true,
          "cached": false,
          "identifier": "webpack/runtime/create fake namespace object",
          "name": "webpack/runtime/create fake namespace object",
          "nameForCondition": null,
          "index": null,
          "preOrderIndex": null,
          "index2": null,
          "postOrderIndex": null,
          "optional": false,
          "orphan": false,
          "dependent": false,
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "id": "",
          "chunks": [
            "main"
          ],
          "assets": [],
          "reasons": [],
          "usedExports": null,
          "providedExports": [],
          "optimizationBailout": [],
          "depth": null
        },
        {
          "type": "module",
          "moduleType": "runtime",
          "layer": null,
          "size": 308,
          "sizes": {
            "runtime": 308
          },
          "built": false,
          "codeGenerated": true,
          "cached": false,
          "identifier": "webpack/runtime/define property getters",
          "name": "webpack/runtime/define property getters",
          "nameForCondition": null,
          "index": null,
          "preOrderIndex": null,
          "index2": null,
          "postOrderIndex": null,
          "optional": false,
          "orphan": false,
          "dependent": false,
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "id": "",
          "chunks": [
            "main"
          ],
          "assets": [],
          "reasons": [],
          "usedExports": null,
          "providedExports": [],
          "optimizationBailout": [],
          "depth": null
        },
        {
          "type": "module",
          "moduleType": "runtime",
          "layer": null,
          "size": 326,
          "sizes": {
            "runtime": 326
          },
          "built": false,
          "codeGenerated": true,
          "cached": false,
          "identifier": "webpack/runtime/ensure chunk",
          "name": "webpack/runtime/ensure chunk",
          "nameForCondition": null,
          "index": null,
          "preOrderIndex": null,
          "index2": null,
          "postOrderIndex": null,
          "optional": false,
          "orphan": false,
          "dependent": false,
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "id": "",
          "chunks": [
            "main"
          ],
          "assets": [],
          "reasons": [],
          "usedExports": null,
          "providedExports": [],
          "optimizationBailout": [],
          "depth": null
        },
        {
          "type": "module",
          "moduleType": "runtime",
          "layer": null,
          "size": 174,
          "sizes": {
            "runtime": 174
          },
          "built": false,
          "codeGenerated": true,
          "cached": false,
          "identifier": "webpack/runtime/get javascript chunk filename",
          "name": "webpack/runtime/get javascript chunk filename",
          "nameForCondition": null,
          "index": null,
          "preOrderIndex": null,
          "index2": null,
          "postOrderIndex": null,
          "optional": false,
          "orphan": false,
          "dependent": false,
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "id": "",
          "chunks": [
            "main"
          ],
          "assets": [],
          "reasons": [],
          "usedExports": null,
          "providedExports": [],
          "optimizationBailout": [],
          "depth": null
        },
        {
          "type": "module",
          "moduleType": "runtime",
          "layer": null,
          "size": 221,
          "sizes": {
            "runtime": 221
          },
          "built": false,
          "codeGenerated": true,
          "cached": false,
          "identifier": "webpack/runtime/global",
          "name": "webpack/runtime/global",
          "nameForCondition": null,
          "index": null,
          "preOrderIndex": null,
          "index2": null,
          "postOrderIndex": null,
          "optional": false,
          "orphan": false,
          "dependent": false,
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "id": "",
          "chunks": [
            "main"
          ],
          "assets": [],
          "reasons": [],
          "usedExports": null,
          "providedExports": [],
          "optimizationBailout": [],
          "depth": null
        },
        {
          "type": "module",
          "moduleType": "runtime",
          "layer": null,
          "size": 88,
          "sizes": {
            "runtime": 88
          },
          "built": false,
          "codeGenerated": true,
          "cached": false,
          "identifier": "webpack/runtime/hasOwnProperty shorthand",
          "name": "webpack/runtime/hasOwnProperty shorthand",
          "nameForCondition": null,
          "index": null,
          "preOrderIndex": null,
          "index2": null,
          "postOrderIndex": null,
          "optional": false,
          "orphan": false,
          "dependent": false,
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "id": "",
          "chunks": [
            "main"
          ],
          "assets": [],
          "reasons": [],
          "usedExports": null,
          "providedExports": [],
          "optimizationBailout": [],
          "depth": null
        },
        {
          "type": "module",
          "moduleType": "runtime",
          "layer": null,
          "size": 3012,
          "sizes": {
            "runtime": 3012
          },
          "built": false,
          "codeGenerated": true,
          "cached": false,
          "identifier": "webpack/runtime/jsonp chunk loading",
          "name": "webpack/runtime/jsonp chunk loading",
          "nameForCondition": null,
          "index": null,
          "preOrderIndex": null,
          "index2": null,
          "postOrderIndex": null,
          "optional": false,
          "orphan": false,
          "dependent": false,
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "id": "",
          "chunks": [
            "main"
          ],
          "assets": [],
          "reasons": [],
          "usedExports": null,
          "providedExports": [],
          "optimizationBailout": [],
          "depth": null
        },
        {
          "type": "module",
          "moduleType": "runtime",
          "layer": null,
          "size": 1503,
          "sizes": {
            "runtime": 1503
          },
          "built": false,
          "codeGenerated": true,
          "cached": false,
          "identifier": "webpack/runtime/load script",
          "name": "webpack/runtime/load script",
          "nameForCondition": null,
          "index": null,
          "preOrderIndex": null,
          "index2": null,
          "postOrderIndex": null,
          "optional": false,
          "orphan": false,
          "dependent": false,
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "id": "",
          "chunks": [
            "main"
          ],
          "assets": [],
          "reasons": [],
          "usedExports": null,
          "providedExports": [],
          "optimizationBailout": [],
          "depth": null
        },
        {
          "type": "module",
          "moduleType": "runtime",
          "layer": null,
          "size": 274,
          "sizes": {
            "runtime": 274
          },
          "built": false,
          "codeGenerated": true,
          "cached": false,
          "identifier": "webpack/runtime/make namespace object",
          "name": "webpack/runtime/make namespace object",
          "nameForCondition": null,
          "index": null,
          "preOrderIndex": null,
          "index2": null,
          "postOrderIndex": null,
          "optional": false,
          "orphan": false,
          "dependent": false,
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "id": "",
          "chunks": [
            "main"
          ],
          "assets": [],
          "reasons": [],
          "usedExports": null,
          "providedExports": [],
          "optimizationBailout": [],
          "depth": null
        },
        {
          "type": "module",
          "moduleType": "runtime",
          "layer": null,
          "size": 867,
          "sizes": {
            "runtime": 867
          },
          "built": false,
          "codeGenerated": true,
          "cached": false,
          "identifier": "webpack/runtime/publicPath",
          "name": "webpack/runtime/publicPath",
          "nameForCondition": null,
          "index": null,
          "preOrderIndex": null,
          "index2": null,
          "postOrderIndex": null,
          "optional": false,
          "orphan": false,
          "dependent": false,
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "id": "",
          "chunks": [
            "main"
          ],
          "assets": [],
          "reasons": [],
          "usedExports": null,
          "providedExports": [],
          "optimizationBailout": [],
          "depth": null
        }
      ],
      "origins": [
        {
          "module": "",
          "moduleIdentifier": "",
          "moduleName": "",
          "loc": "main",
          "request": "./src/index.js"
        }
      ]
    }
  ],
  "modules": [
    {
      "type": "module",
      "moduleType": "javascript/auto",
      "layer": null,
      "size": 247,
      "sizes": {
        "javascript": 247
      },
      "built": true, // 是否经过 loader 编译
      "codeGenerated": true,
      "cached": false, // 
      "identifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js", // 绝对路径
      "name": "./src/index.js",
      "nameForCondition": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
      "index": 0,
      "preOrderIndex": 0,
      "index2": 1,
      "postOrderIndex": 1,
      "cacheable": true,
      "optional": false, // try catch
      "orphan": false,
      "issuer": null,
      "issuerName": null,
      "issuerPath": null,
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "profile": {
        "total": 34,
        "resolving": 21,
        "restoring": 0,
        "building": 13,
        "integration": 0,
        "storing": 0,
        "additionalResolving": 0,
        "additionalIntegration": 0,
        "factory": 21,
        "dependencies": 0
      },
      "id": "./src/index.js",
      "issuerId": null,
      "chunks": [
        "main"
      ],
      "assets": [],
      "reasons": [
        {
          "moduleIdentifier": null,
          "module": null,
          "moduleName": null,
          "resolvedModuleIdentifier": null,
          "resolvedModule": null,
          "type": "entry",
          "active": true,
          "explanation": "",
          "userRequest": "./src/index.js",
          "loc": "main",
          "moduleId": null,
          "resolvedModuleId": null
        }
      ],
      "usedExports": null,
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 0
    },
    {
      "type": "module",
      "moduleType": "javascript/auto",
      "layer": null,
      "size": 25,
      "sizes": {
        "javascript": 25
      },
      "built": true,
      "codeGenerated": true,
      "cached": false,
      "identifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/hello.js",
      "name": "./src/hello.js",
      "nameForCondition": "/Users/koolearn/Desktop/program/webpack-demo/source/src/hello.js",
      "index": 1,
      "preOrderIndex": 1,
      "index2": 0,
      "postOrderIndex": 0,
      "cacheable": true,
      "optional": false,
      "orphan": false,
      "issuer": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
      "issuerName": "./src/index.js",
      "issuerPath": [
        {
          "identifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
          "name": "./src/index.js",
          "profile": {
            "total": 34,
            "resolving": 21,
            "restoring": 0,
            "building": 13,
            "integration": 0,
            "storing": 0,
            "additionalResolving": 0,
            "additionalIntegration": 0,
            "factory": 21,
            "dependencies": 0
          },
          "id": "./src/index.js"
        }
      ],
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "profile": {
        "total": 0,
        "resolving": 0,
        "restoring": 0,
        "building": 0,
        "integration": 0,
        "storing": 0,
        "additionalResolving": 0,
        "additionalIntegration": 0,
        "factory": 0,
        "dependencies": 0
      },
      "id": "./src/hello.js",
      "issuerId": "./src/index.js",
      "chunks": [
        "main"
      ],
      "assets": [],
      "reasons": [
        {
          "moduleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/hello.js",
          "module": "./src/hello.js",
          "moduleName": "./src/hello.js",
          "resolvedModuleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/hello.js",
          "resolvedModule": "./src/hello.js",
          "type": "cjs self exports reference",
          "active": true,
          "explanation": "",
          "userRequest": null,
          "loc": "1:0-14",
          "moduleId": "./src/hello.js",
          "resolvedModuleId": "./src/hello.js"
        },
        {
          "moduleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
          "module": "./src/index.js",
          "moduleName": "./src/index.js",
          "resolvedModuleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
          "resolvedModule": "./src/index.js",
          "type": "cjs require",
          "active": true,
          "explanation": "",
          "userRequest": "./hello.js",
          "loc": "3:14-35",
          "moduleId": "./src/index.js",
          "resolvedModuleId": "./src/index.js"
        }
      ],
      "usedExports": null,
      "providedExports": null,
      "optimizationBailout": [
        "CommonJS bailout: module.exports is used directly at 1:0-14"
      ],
      "depth": 1
    },
    {
      "type": "module",
      "moduleType": "javascript/auto",
      "layer": null,
      "size": 24,
      "sizes": {
        "javascript": 24
      },
      "built": true,
      "codeGenerated": true,
      "cached": false,
      "identifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/lazy.js",
      "name": "./src/lazy.js",
      "nameForCondition": "/Users/koolearn/Desktop/program/webpack-demo/source/src/lazy.js",
      "index": 2,
      "preOrderIndex": 2,
      "index2": 2,
      "postOrderIndex": 2,
      "cacheable": true,
      "optional": false,
      "orphan": false,
      "issuer": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
      "issuerName": "./src/index.js",
      "issuerPath": [
        {
          "identifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
          "name": "./src/index.js",
          "profile": {
            "total": 34,
            "resolving": 21,
            "restoring": 0,
            "building": 13,
            "integration": 0,
            "storing": 0,
            "additionalResolving": 0,
            "additionalIntegration": 0,
            "factory": 21,
            "dependencies": 0
          },
          "id": "./src/index.js"
        }
      ],
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "profile": {
        "total": 0,
        "resolving": 0,
        "restoring": 0,
        "building": 0,
        "integration": 0,
        "storing": 0,
        "additionalResolving": 0,
        "additionalIntegration": 0,
        "factory": 0,
        "dependencies": 0
      },
      "id": "./src/lazy.js",
      "issuerId": "./src/index.js",
      "chunks": [
        "0"
      ],
      "assets": [],
      "reasons": [
        {
          "moduleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
          "module": "./src/index.js",
          "moduleName": "./src/index.js",
          "resolvedModuleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
          "resolvedModule": "./src/index.js",
          "type": "import()",
          "active": true,
          "explanation": "",
          "userRequest": "./lazy.js",
          "loc": "5:0-46",
          "moduleId": "./src/index.js",
          "resolvedModuleId": "./src/index.js"
        },
        {
          "moduleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/lazy.js",
          "module": "./src/lazy.js",
          "moduleName": "./src/lazy.js",
          "resolvedModuleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/lazy.js",
          "resolvedModule": "./src/lazy.js",
          "type": "cjs self exports reference",
          "active": true,
          "explanation": "",
          "userRequest": null,
          "loc": "1:0-14",
          "moduleId": "./src/lazy.js",
          "resolvedModuleId": "./src/lazy.js"
        }
      ],
      "usedExports": null,
      "providedExports": null,
      "optimizationBailout": [
        "CommonJS bailout: module.exports is used directly at 1:0-14"
      ],
      "depth": 1
    },
    {
      "type": "module",
      "moduleType": "javascript/auto",
      "layer": null,
      "size": 24,
      "sizes": {
        "javascript": 24
      },
      "built": true,
      "codeGenerated": true,
      "cached": false,
      "identifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/lazy2.js",
      "name": "./src/lazy2.js",
      "nameForCondition": "/Users/koolearn/Desktop/program/webpack-demo/source/src/lazy2.js",
      "index": 3,
      "preOrderIndex": 3,
      "index2": 3,
      "postOrderIndex": 3,
      "cacheable": true,
      "optional": false,
      "orphan": false,
      "issuer": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
      "issuerName": "./src/index.js",
      "issuerPath": [
        {
          "identifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
          "name": "./src/index.js",
          "profile": {
            "total": 34,
            "resolving": 21,
            "restoring": 0,
            "building": 13,
            "integration": 0,
            "storing": 0,
            "additionalResolving": 0,
            "additionalIntegration": 0,
            "factory": 21,
            "dependencies": 0
          },
          "id": "./src/index.js"
        }
      ],
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "profile": {
        "total": 0,
        "resolving": 0,
        "restoring": 0,
        "building": 0,
        "integration": 0,
        "storing": 0,
        "additionalResolving": 0,
        "additionalIntegration": 0,
        "factory": 0,
        "dependencies": 0
      },
      "id": "./src/lazy2.js",
      "issuerId": "./src/index.js",
      "chunks": [
        "1"
      ],
      "assets": [],
      "reasons": [
        {
          "moduleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
          "module": "./src/index.js",
          "moduleName": "./src/index.js",
          "resolvedModuleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/index.js",
          "resolvedModule": "./src/index.js",
          "type": "import()",
          "active": true,
          "explanation": "",
          "userRequest": "./lazy2.js",
          "loc": "9:0-47",
          "moduleId": "./src/index.js",
          "resolvedModuleId": "./src/index.js"
        },
        {
          "moduleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/lazy2.js",
          "module": "./src/lazy2.js",
          "moduleName": "./src/lazy2.js",
          "resolvedModuleIdentifier": "/Users/koolearn/Desktop/program/webpack-demo/source/src/lazy2.js",
          "resolvedModule": "./src/lazy2.js",
          "type": "cjs self exports reference",
          "active": true,
          "explanation": "",
          "userRequest": null,
          "loc": "1:0-14",
          "moduleId": "./src/lazy2.js",
          "resolvedModuleId": "./src/lazy2.js"
        }
      ],
      "usedExports": null,
      "providedExports": null,
      "optimizationBailout": [
        "CommonJS bailout: module.exports is used directly at 1:0-14"
      ],
      "depth": 1
    },
    {
      "type": "module",
      "moduleType": "runtime",
      "layer": null,
      "size": 1141,
      "sizes": {
        "runtime": 1141
      },
      "built": false,
      "codeGenerated": true,
      "cached": false,
      "identifier": "webpack/runtime/create fake namespace object",
      "name": "webpack/runtime/create fake namespace object",
      "nameForCondition": null,
      "index": null,
      "preOrderIndex": null,
      "index2": null,
      "postOrderIndex": null,
      "optional": false,
      "orphan": false,
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "id": "",
      "chunks": [
        "main"
      ],
      "assets": [],
      "reasons": [],
      "usedExports": null,
      "providedExports": [],
      "optimizationBailout": [],
      "depth": null
    },
    {
      "type": "module",
      "moduleType": "runtime",
      "layer": null,
      "size": 308,
      "sizes": {
        "runtime": 308
      },
      "built": false,
      "codeGenerated": true,
      "cached": false,
      "identifier": "webpack/runtime/define property getters",
      "name": "webpack/runtime/define property getters",
      "nameForCondition": null,
      "index": null,
      "preOrderIndex": null,
      "index2": null,
      "postOrderIndex": null,
      "optional": false,
      "orphan": false,
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "id": "",
      "chunks": [
        "main"
      ],
      "assets": [],
      "reasons": [],
      "usedExports": null,
      "providedExports": [],
      "optimizationBailout": [],
      "depth": null
    },
    {
      "type": "module",
      "moduleType": "runtime",
      "layer": null,
      "size": 326,
      "sizes": {
        "runtime": 326
      },
      "built": false,
      "codeGenerated": true,
      "cached": false,
      "identifier": "webpack/runtime/ensure chunk",
      "name": "webpack/runtime/ensure chunk",
      "nameForCondition": null,
      "index": null,
      "preOrderIndex": null,
      "index2": null,
      "postOrderIndex": null,
      "optional": false,
      "orphan": false,
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "id": "",
      "chunks": [
        "main"
      ],
      "assets": [],
      "reasons": [],
      "usedExports": null,
      "providedExports": [],
      "optimizationBailout": [],
      "depth": null
    },
    {
      "type": "module",
      "moduleType": "runtime",
      "layer": null,
      "size": 174,
      "sizes": {
        "runtime": 174
      },
      "built": false,
      "codeGenerated": true,
      "cached": false,
      "identifier": "webpack/runtime/get javascript chunk filename",
      "name": "webpack/runtime/get javascript chunk filename",
      "nameForCondition": null,
      "index": null,
      "preOrderIndex": null,
      "index2": null,
      "postOrderIndex": null,
      "optional": false,
      "orphan": false,
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "id": "",
      "chunks": [
        "main"
      ],
      "assets": [],
      "reasons": [],
      "usedExports": null,
      "providedExports": [],
      "optimizationBailout": [],
      "depth": null
    },
    {
      "type": "module",
      "moduleType": "runtime",
      "layer": null,
      "size": 221,
      "sizes": {
        "runtime": 221
      },
      "built": false,
      "codeGenerated": true,
      "cached": false,
      "identifier": "webpack/runtime/global",
      "name": "webpack/runtime/global",
      "nameForCondition": null,
      "index": null,
      "preOrderIndex": null,
      "index2": null,
      "postOrderIndex": null,
      "optional": false,
      "orphan": false,
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "id": "",
      "chunks": [
        "main"
      ],
      "assets": [],
      "reasons": [],
      "usedExports": null,
      "providedExports": [],
      "optimizationBailout": [],
      "depth": null
    },
    {
      "type": "module",
      "moduleType": "runtime",
      "layer": null,
      "size": 88,
      "sizes": {
        "runtime": 88
      },
      "built": false,
      "codeGenerated": true,
      "cached": false,
      "identifier": "webpack/runtime/hasOwnProperty shorthand",
      "name": "webpack/runtime/hasOwnProperty shorthand",
      "nameForCondition": null,
      "index": null,
      "preOrderIndex": null,
      "index2": null,
      "postOrderIndex": null,
      "optional": false,
      "orphan": false,
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "id": "",
      "chunks": [
        "main"
      ],
      "assets": [],
      "reasons": [],
      "usedExports": null,
      "providedExports": [],
      "optimizationBailout": [],
      "depth": null
    },
    {
      "type": "module",
      "moduleType": "runtime",
      "layer": null,
      "size": 3012,
      "sizes": {
        "runtime": 3012
      },
      "built": false,
      "codeGenerated": true,
      "cached": false,
      "identifier": "webpack/runtime/jsonp chunk loading",
      "name": "webpack/runtime/jsonp chunk loading",
      "nameForCondition": null,
      "index": null,
      "preOrderIndex": null,
      "index2": null,
      "postOrderIndex": null,
      "optional": false,
      "orphan": false,
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "id": "",
      "chunks": [
        "main"
      ],
      "assets": [],
      "reasons": [],
      "usedExports": null,
      "providedExports": [],
      "optimizationBailout": [],
      "depth": null
    },
    {
      "type": "module",
      "moduleType": "runtime",
      "layer": null,
      "size": 1503,
      "sizes": {
        "runtime": 1503
      },
      "built": false,
      "codeGenerated": true,
      "cached": false,
      "identifier": "webpack/runtime/load script",
      "name": "webpack/runtime/load script",
      "nameForCondition": null,
      "index": null,
      "preOrderIndex": null,
      "index2": null,
      "postOrderIndex": null,
      "optional": false,
      "orphan": false,
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "id": "",
      "chunks": [
        "main"
      ],
      "assets": [],
      "reasons": [],
      "usedExports": null,
      "providedExports": [],
      "optimizationBailout": [],
      "depth": null
    },
    {
      "type": "module",
      "moduleType": "runtime",
      "layer": null,
      "size": 274,
      "sizes": {
        "runtime": 274
      },
      "built": false,
      "codeGenerated": true,
      "cached": false,
      "identifier": "webpack/runtime/make namespace object",
      "name": "webpack/runtime/make namespace object",
      "nameForCondition": null,
      "index": null,
      "preOrderIndex": null,
      "index2": null,
      "postOrderIndex": null,
      "optional": false,
      "orphan": false,
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "id": "",
      "chunks": [
        "main"
      ],
      "assets": [],
      "reasons": [],
      "usedExports": null,
      "providedExports": [],
      "optimizationBailout": [],
      "depth": null
    },
    {
      "type": "module",
      "moduleType": "runtime",
      "layer": null,
      "size": 867,
      "sizes": {
        "runtime": 867
      },
      "built": false,
      "codeGenerated": true,
      "cached": false,
      "identifier": "webpack/runtime/publicPath",
      "name": "webpack/runtime/publicPath",
      "nameForCondition": null,
      "index": null,
      "preOrderIndex": null,
      "index2": null,
      "postOrderIndex": null,
      "optional": false,
      "orphan": false,
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "id": "",
      "chunks": [
        "main"
      ],
      "assets": [],
      "reasons": [],
      "usedExports": null,
      "providedExports": [],
      "optimizationBailout": [],
      "depth": null
    }
  ],
  "entrypoints": {  // 入口点
    "main": {
      "name": "main",
      "chunks": [
        "main"
      ],
      "assets": [
        {
          "name": "bundle.js",
          "size": 13365
        }
      ],
      "filteredAssets": 0, // 过滤资源
      "assetsSize": 13365,
      "auxiliaryAssets": [],
      "filteredAuxiliaryAssets": 0,
      "auxiliaryAssetsSize": 0,
      "children": {},
      "childAssets": {},
      "isOverSizeLimit": false
    }
  },
  "namedChunkGroups": {
    "0": {
      "name": "0",
      "chunks": [
        "0"
      ],
      "assets": [
        {
          "name": "0.bundle.js",
          "size": 244
        }
      ],
      "filteredAssets": 0,
      "assetsSize": 244,
      "auxiliaryAssets": [],
      "filteredAuxiliaryAssets": 0,
      "auxiliaryAssetsSize": 0,
      "children": {},
      "childAssets": {},
      "isOverSizeLimit": false
    },
    "1": {
      "name": "1",
      "chunks": [
        "1"
      ],
      "assets": [
        {
          "name": "1.bundle.js",
          "size": 248
        }
      ],
      "filteredAssets": 0,
      "assetsSize": 248,
      "auxiliaryAssets": [],
      "filteredAuxiliaryAssets": 0,
      "auxiliaryAssetsSize": 0,
      "children": {},
      "childAssets": {},
      "isOverSizeLimit": false
    },
    "main": {
      "name": "main",
      "chunks": [
        "main"
      ],
      "assets": [
        {
          "name": "bundle.js",
          "size": 13365
        }
      ],
      "filteredAssets": 0,
      "assetsSize": 13365,
      "auxiliaryAssets": [],
      "filteredAuxiliaryAssets": 0,
      "auxiliaryAssetsSize": 0,
      "children": {},
      "childAssets": {},
      "isOverSizeLimit": false
    }
  },
  "errors": [], // 编译中有没有错误
  "errorsCount": 0,
  "warnings": [], // 编译中又没有警告
  "warningsCount": 0,
  "children": []
}