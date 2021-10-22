const path = require("path")
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const devServer = require('./devServer')
const devConfig = merge(baseWebpackConfig, devServer)
module.exports = devConfig
