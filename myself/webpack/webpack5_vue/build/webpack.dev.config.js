const path = require("path")
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const devConfig = merge(baseWebpackConfig, {
  devServer: {
    hot: true,
    compress: true,
    host: "localhost",
    port: "8080",
    open: false,
    proxy: {
      '/': {
        target: '',   //测试环境uat
        changeOrigin: true
      },
    },
  },
})
module.exports = devConfig
