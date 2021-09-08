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
        target: 'https://wxtest.jzctb.com/',   //测试环境uat
        changeOrigin: true
      },
    },
  },
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
  },
})
module.exports = devConfig
