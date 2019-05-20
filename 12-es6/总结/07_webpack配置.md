# webpack配置

> babel css html chunk
webpack.config.js
```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  // 入口文件
  entry: {
    入口名字: '路径'
  },
  output: {
    publicPath: './', // 未来html中引入时前缀
    path: path.resolve(__dirname, 'dist')
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10 // 打包的优先级
        },
        jquery: {
          test: /jquery/,
          priority: 10
        },
        base: {
          test: /base\.js/
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '', // 页面标题 <%=htmlWebpackPlugin.options.title%>
      template: '', // 对应的html模板
      filename: '', // 生成的html的文件名
      chunks: [] // 对应的引入的js文件，可以写entry中的名字，还可以可以cacheGroups中的名字
    })
  ]
}
```