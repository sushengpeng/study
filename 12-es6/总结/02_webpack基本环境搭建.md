# webpack

需要两个模块  
webpack webpack-cli

## 初始化

npm init

## 安装

npm i --save-dev webpack webpack-cli  
或
yarn add webpack webpack-cli --dev

## webpack默认配置

webpack默认把./src/index.js作为入口文件  
打包后会生成./dist/main.js

## webpack自定义配置

需要在项目根目录中创建一个文件webpack.config.js

```javascript
module.exports = {
  entry: "入口文件路径",
  output: {
    path: path.resolve(__dirname, '文件夹名字'),
    filename: '文件名.js'
  }
}
```

所有的操作后都需要使用`npm run dev`重新打包

## 运行命令

webpack 

> 因为webpack我们只在本地安装，所以不存在全局命令webpack

package.json
```javascript
"scripts": {
  "dev": "webpack"
}
```
执行npm run dev即可，会自动找到本地的webpack.config.js