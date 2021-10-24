const path = require("path")
const utils = require("./utils")
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { VueLoaderPlugin } = require("vue-loader")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const baseWebpackConfig = require('./webpack.base')
const config = require("../config")
const env = config.build.build
const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  mode: "production",
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },

  plugins: [
    new CleanWebpackPlugin(),
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // extract css into its own file
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[contenthash:8].css'),
      chunkFilename: utils.assetsPath('css/[name].[contenthash:8].css')
    }),
    // new ScriptExtHtmlWebpackPlugin({
    //   //`runtime` must same as runtimeChunk name. default is `runtime`
    //   inline: /runtime\..*\.js$/
    // }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      minify: true,
      inject: true
    }),
    // new HtmlWebpackPlugin(
    //   {
    //     filename: config.build.index,
    //     template: 'index.html',
    //     // favicon: './favicon.ico', // 添加小图标
    //     inject: true,
    //     minify: {
    //       removeComments: true,
    //       collapseWhitespace: true,
    //       removeAttributeQuotes: true
    //       // more options:
    //       // https://github.com/kangax/html-minifier#options-quick-reference
    //     },
    //     // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    //     chunksSortMode: 'auto'
    //   }
    // ),
    // keep module.id stable when vendor modules does not change
    // new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting
    // new webpack.optimize.ModuleConcatenationPlugin(),

    // copy custom static assets
  ],
  optimization: {

    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial' // 只打包初始时依赖的第三方
        },
        commons: {
          name: 'chunk-commons',
          test: path.join(__dirname, '../src/components'), // 可自定义拓展你的规则
          minChunks: 3, // 最小公用次数
          priority: 5,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: 'single',
    minimizer: [
      // Compress extracted CSS. We are using this plugin so that possible
      // duplicated CSS from different components can be deduped.
      // new OptimizeCSSAssetsPlugin(),
      // new TerserPlugin()   // 压缩js
    ]
  }
})
module.exports = webpackConfig
