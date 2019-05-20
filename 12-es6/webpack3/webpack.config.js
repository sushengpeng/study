const path = require('path')
const basePath = './src/js/'
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: basePath + 'index.js',
    list: basePath + 'list.js'
  },
  output: {
    // publicPath: '/demo',
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].chunk.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        /* 
          key就是名字 
          对象中是相关的配置
          test可以匹配到想要打包的对应的模块
        
        */
        jquery: {
          name: "jquery",
          test: /[\\/]node_modules[\\/]jquery[\\/]/,
          priority: 5
        },
        loadsh: {
          name: 'loadsh',
          test: /[\\/]node_modules[\\/]loadsh[\\/]/,
          priority: 0
        },
        base: {
          name: 'base',
          test: /base\.js/
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '首页',
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index', 'jquery', 'base']
    }),
    new HtmlWebpackPlugin({
      title: '列表',
      template: './src/list.html',
      filename: 'list.html',
      chunks: ['list', 'jquery', 'base']
    })
  ]
}