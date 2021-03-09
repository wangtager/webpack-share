const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',   // 指定构建模式
    entry: {
      'share/js': './src/index.js'
    },  // 指定构建入口文件
    output: {
        // publicPath: 'https://www.lzwkcdn.com/', // 根据不用环境配置
        filename: '[name].[chunkhash].js',  // 指定构建生成的文件名
        path: path.resolve(__dirname, 'dist/static'), // 指定构建生成文件所在路径
    },
    plugins: [
      new htmlWebpackPlugin({
        inject: false,
        // excludeChunks: ['share'], // 排除后htmlWebpackPlugin.files也无法获取到
        filename: path.resolve(__dirname, './dist/share.html'),
        template: './src/index.html', // 明确指定html文件
        custom: 'Use htmlWebpackPlugin.options to get the value',
        // base: path.resolve(__dirname, './dist')
      })
    ]
}