const path = require("path")
const config = require("../config")
const htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require("vue-loader")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const vueLoaderConfig = require('./vue-loader.conf')
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'static/js/[name].js',
  },
  resolve: {
    extensions: [".js", ".vue", ".css"],
    alias: {
      "vue$": "vue/dist/vue.esm.js",
      "@": path.join(__dirname, '../src')
    }
  },
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
      },
      {
        test: /\.less|\.css$/,
        use: ['style-loader', 'css-loader', 'less-loader',{
          loader: 'style-resources-loader',
          options: {
            patterns: [ // 只有一条时也可以写成对象形式
              path.resolve(__dirname, '../src/styles/global.less'),
            ],
            injector: 'append' // 如果在样式文件之后导入就加此行配置
          }
        }],
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
        test: /\.(eot|svg|ttf|woff|woff2?)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  }
}