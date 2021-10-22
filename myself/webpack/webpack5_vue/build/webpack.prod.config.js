const path = require("path")
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { merge } = require('webpack-merge')
const { VueLoaderPlugin } = require("vue-loader")
const baseWebpackConfig = require('./webpack.base')
const prodConfig = merge(baseWebpackConfig,{
  mode: 'production',
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'static/js/[id].[chunkhash].js',
    chunkFilename: 'static/js/[id].[chunkhash].js'
  },
  resolve: {
    extensions: [".js", ".vue", ".css"],
    alias: {
      "vue$": "vue/dist/vue.esm.js",
      "@": path.join(__dirname, '../src')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
})
module.exports = prodConfig