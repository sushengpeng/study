<<<<<<< HEAD:myself/webpack/webpack5_vue/build/webpack.prod.config.js
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
const env = config.build.env
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
=======
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require("path");
module.exports = {
  mode: 'production',
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'static/js/[name].js',
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx?$/, // jsx/js文件的正则
        exclude: /node_modules/, // 排除 node_modules 文件夹
        use: {
          // loader 是 babel
          loader: 'babel-loader',
          options: {
            // babel 转义的配置选项
            babelrc: false,
            presets: [
              // 添加 preset-react
              require.resolve('@babel/preset-react'),
              [require.resolve('@babel/preset-env'),
              { modules: false }]
            ],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.less|\.css$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          esModule: false,
          limit: 10000,
          name: 'static/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]'
>>>>>>> e6e01d9eb3dd1b194b475df00da35b948a70f3c2:myself/webpack/webpack5_react/config/webpack.dev.config.js
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
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: true
    }),
  ],
  devServer:{
    port: "3000"
  }
<<<<<<< HEAD:myself/webpack/webpack5_vue/build/webpack.prod.config.js
})
module.exports = webpackConfig
=======
};
>>>>>>> e6e01d9eb3dd1b194b475df00da35b948a70f3c2:myself/webpack/webpack5_react/config/webpack.dev.config.js
