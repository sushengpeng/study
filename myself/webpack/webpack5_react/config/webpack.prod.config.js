const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpackbar = require("webpackbar")
const path = require("path")
<<<<<<< HEAD:myself/webpack/webpack5_vue/build/webpack.base.js
const config = require("../config")
const htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require("vue-loader")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const vueLoaderConfig = require('./vue-loader.conf')
=======
>>>>>>> e6e01d9eb3dd1b194b475df00da35b948a70f3c2:myself/webpack/webpack5_react/config/webpack.prod.config.js
module.exports = {
  mode: 'production',
  entry: "./src/index.jsx",
  cache: {
    type: 'filesystem',
    compression: 'gzip',
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'static/js/[name].js',
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
  },
<<<<<<< HEAD:myself/webpack/webpack5_vue/build/webpack.base.js
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      minify: true,
      inject: true
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../static'),
          to: config.dev.assetsSubDirectory,
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, "node-modules")
        ],
        loader: "babel-loader",
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
=======
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
>>>>>>> e6e01d9eb3dd1b194b475df00da35b948a70f3c2:myself/webpack/webpack5_react/config/webpack.prod.config.js
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
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: true
    }),
    new webpackbar()
  ],
};