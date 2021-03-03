1. npm init -y

2. cnpm i webpack webpack-cli -D

3. cnpm i webpack-dev-server -D

  3.1 配置 webpack-dev-server

  3.2 配置命令 dev

  3.3 启动 npm run dev

  报错： Error: Cannot find module 'webpack-cli/bin/config-yargs'

  问题解决参考： Error: Cannot find module 'webpack-cli/bin/config-yargs' #1948

  If you upgrade webpack to 5. *, and webpack cli to 4. *, an error will be reported:
  Error: Cannot find module 'webpack-cli/bin/config-yargs'
  Temporary solution: Back off webpack cli to version 3. * for example:
  "webpack-cli": "^ 3.3.12"

  解决：

  卸载当前的 webpack-cli npm uninstall webpack-cli

  安装 webpack-cli 3.* 版本 npm install webpack-cli@3 -D

  出处：https://www.cnblogs.com/jeacy/p/13864454.html

4. cnpm i html-webapck-plugin -D

  4.1 配置

  > html-webapck-plugin 和 webpack-dev-server 配合使用， 
  > 不使用 webpack-dev-server, 只能打包之后手动点开打包文件中 index.html; 
  > 只使用 webpack-dev-server, 需要在 contentBase 的配置路径下新建 index.html（在 dist 目录下新建 index.html）, 之后启动项目。

  参考： https://www.cnblogs.com/wonyun/p/6030090.html

5. cnpm i clean-webpack-plugin -D
  
  5.1 配置

6. cnpm i file-loader url-loader -D

  > url-loader 内置了 file-loader

  6.1 用途

    处理文件，比如图片

  6.2 配置

7. cnpm i mini-css-extract-plugin -D

  7.1 作用
  
    分离 css

  

