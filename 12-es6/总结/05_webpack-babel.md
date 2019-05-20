## (一) 了解 Babel 及生态
现代 Javascript 主要是用 ES6 编写的。但并非每个浏览器都知道如何处理 ES6。 我们需要某种转换，这个转换步骤称为 transpiling(转译)。transpiling(转译) 是指采用 ES6 语法，转译为旧浏览器可以理解的行为。
Webpack 不知道如何进行转换但是有 loader(加载器) ：将它们视为转译器。
babel-loader 是一个 webpack 的 loader(加载器)，用于将 ES6 及以上版本转译至 ES5
要开始使用 loader ，我们需要安装一堆依赖项，以下已 Babel7 为主，升级建议

* @babel/core
* @babel/runtime 不重复转换代码
* @babel/preset-env: 包含 ES6、7 等版本的语法转化规则
* @babel/plugin-transform-runtime: 避免 polyfill 污染全局变量，减小打包体积
* @babel/polyfill: ES6 内置方法和函数转化垫片
* babel-loader: 负责 ES6 语法转化

> 使用 @babel/polyfill 的原因：Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API，比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转码。必须使用 @babel/polyfill，为当前环境提供一个垫片。
所谓垫片也就是垫平不同浏览器或者不同环境下的差异

## (二) 安装依赖并配置
### ① 安装依赖
`npm i @babel/core babel-loader @babel/preset-env @babel/plugin-transform-runtime --save-dev`  
`npm i @babel/polyfill @babel/runtime --save`
### ② 在项目的根目录中创建名为 .babelrc 的新文件来配置 Babel
```json
{
  "presets": ["@babel/preset-env"],
  "plugins": ["@babel/plugin-transform-runtime"]
}
```
如果报错  
```
WARNING: We noticed you're using the `useBuiltIns` option without declaring a core-js version. Currently, we assume version 2.x when no version is passed. Since this default version will likely change in future versions of Babel, we recommend explicitly setting the core-js version you are using via the `corejs` option. 
 
You should also be sure that the version you pass to the `corejs` option matches the version specified in your `package.json`'s `dependencies` section. If it doesn't, you need to run one of the following commands: 
 
  npm install --save core-js@2    npm install --save core-js@3 
  yarn add core-js@2              yarn add core-js@3
```
需要设置 .babelrc 设置 "corejs": 3
```javascript
{
 "presets": [
   [
     "@babel/preset-env",
     {
       "useBuiltIns": "usage",
       "corejs": 3
     }
   ]
 ],
 "plugins": ["@babel/plugin-transform-runtime"]
}
```

### ③ webpack 配置 loader(加载器)
```javascript
module: {
  rules: [
    {
      test: /\.js$/, // 使用正则来匹配 js 文件
      exclude: /node_modules/, // 排除依赖包文件夹
      use: {
        loader: 'babel-loader' // 使用 babel-loader
      }
    }
  ]
}
```
### ④ 在 入口文件中 全局引入 @babel/polyfill 并写入 ES6 语法，并执行 npm run build 打包
```javascript
// 全局引入
import '@babel/polyfill'

// 测试 ES6 语法是否通过 babel 转译
const array = [1, 2, 3]
const isES6 = () => console.log(...array)

isES6()

const arr = [new Promise(() => {}), new Promise(() => {})]

arr.map(item => {
  console.log(item)
})

```
### ⑤ 打包完之后使用 IE 浏览器打开 index.html 文件，看控制台是否有输出，如果是新版的 chrome，是可以使用 es6 语法的，所以要用 IE 这个万恶之源试试

全局引入 @babel/polyfill 的这种方式可能会导入代码中不需要的 polyfill，从而使打包体积更大
更改 .babelrc，只转译我们使用到的
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage"
      }
    ]
  ],
  "plugins": ["@babel/plugin-transform-runtime"]
}
将全局引入这段代码注释掉，再次打包

## (三) 了解 .browserslistrc 配置文件
browserslistrc 用于在不同前端工具之间共享目标浏览器和 Node.js 版本的配置
可以看看 browserslist 兼容浏览器的页面
当您将以下内容添加到 package.json 时，所有工具都会自动找到目标浏览器：
```json
"browserslist": [
  "> 1%",
  "last 2 version",
  "not ie <= 8"
]
```
也可以创建 .browserslistrc 文件单独写配置
### 所支持的浏览器版本

- 1% # 全球使用情况统计选择的浏览器版本

- last 2 version # 每个浏览器的最后两个版本

- not ie <= 8 # 排除小于 ie8 以下的浏览器

该项目还是使用单独创建配置文件的方式，便于理解，如果觉得配置文件不好，也可以写在 package.json 中