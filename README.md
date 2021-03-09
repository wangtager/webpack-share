## 从零搭建webpack项目

1. webpack 安装

```shell
npm init -y
npm install webpack webpack-cli -D # webpack有一套默认配置，默认以src/index.js为入口，打包到dist
npm i html-webpack-plugin -D #处理html的插件，默认无需配置，会自动生成index.html（并自动将打包后结果通过script注入进去）
```
package.json 配置
```
"scripts": {
  "build": "webpack"
}
```
执行`yarn webpack`,会使用index.html作为模板，并将output结果注入。
```
httpWebpackPlugin 参数简单说明：
chunks: [] // 多入口配置时，指定仅需引入的文件
excludeChunks // 多入口配置时，指定的文件会被排除
inject: 'head' // 脚本注入的位置
template: './src/index.html' // html 文件位置
filename: 'index.html' // 文件名, 同时可以指定打包的路径

```