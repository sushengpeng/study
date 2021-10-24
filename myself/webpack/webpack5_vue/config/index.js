'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

let serverObj = {
  dev: {

    // Paths

    env: require('./dev.env'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8088, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, //number 每number秒检查变动 https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: false,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,
    process: true, //在浏览器中以百分比显示编译进度。
    //'log' | 'info' | 'warn' | 'error' | 'none' | 'verbose'
    //允许在浏览器中设置日志级别，例如在重载之前，在一个错误之前或者 热模块替换 启用时。
    logging: "none",
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist/'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}

/**
 * 依据命令执行不同的代理文件
 * 全局变量在package.json里配置
 */

if (process.env.NODE_ENV === 'development') {
  if (process.env.DEV_ENV === 'local') {
    serverObj.dev.env = require('./dev.env')
    serverObj.dev.proxyTable = require('./dev.proxy')
  } else if (process.env.DEV_ENV === 'test') {
    serverObj.dev.env = require('./dev.test.env')
    serverObj.dev.proxyTable = require('./dev.test.proxy')
  } else if (process.env.DEV_ENV === 'mock') {
    console.log("-----------------------------使用mock数据-----------------------------")
    serverObj.dev.env = require('./dev.mock.env')
    serverObj.dev.proxyTable = require('./dev.proxy')
  }
}
module.exports = serverObj