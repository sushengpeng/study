const path = require("path")
const utils = require('./utils')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const config = require('../config')
const webpack = require("webpack")
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const devIpList = utils.getIp()
const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  // cheap-module-eval-source-map is faster for development
  devtool: process.env.PROD_ENV == 'development' ? false : config.dev.devtool,
  // these devServer options should be customized in /config/index.js
  devServer: {
    client: {
      overlay: config.dev.errorOverlay,
      logging: config.dev.logging,
      progress: config.dev.process,
    },
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    compress: true,
    host: config.dev.host,
    port: config.dev.port,
    open: config.dev.autoOpenBrowser,
    // publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
  ]
})
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port
      // Add FriendlyErrorsPlugin
      resolve(devWebpackConfig)
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`,
          ...devIpList.map(item => { return `                and running here: http://${item}:${port}` })]
        },
        onErrors: config.dev.notifyOnErrors
          ? utils.createNotifierCallback()
          : undefined
      }))
    }
  })
})
