# webpack多页面配置

## 多入口文件

webpack.config.js
```javascript
const path = requrie('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    名字: '入口文件.js路径',
    名字2: '入口文件2.js路径'
  },
  output: {
    publicPath: '', // 表示html引入相关资源时的前缀
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  // 插件配置
  plugins: [
    // HTML需要根据写好的HTML模板自动生成
    new HtmlWebpackPlugin({
      title: '', // 模板中可以通过<%=htmlWebpackPlugin.options.title%>获取到
      template: '模板路径', // 模板就是一个html文件
      filename: 'index.html', // 根据模板生成的HTML名字
      chunks: ['入口文件名字'] // 我们要在对应生成的html中引入的js 
    })
  ]
}
```