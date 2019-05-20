# webpackloader
> webpack想要把某些类型的文件当成模块使用，那么就需要配置对应的loader让webpack支持

如果在入门文件中引入reset.css,那么会报错  
安装css-loader只是让webpack认识css文件作为模块，但是不能把css内容放在对应样式上

webpack.config.js
```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/, // 去匹配对应项目中的css
        use: [ // 匹配到的css使用对应的loader进行处理
          'style-loader', 
          'css-loader'
        ]
      }
    ]
  }
}
```