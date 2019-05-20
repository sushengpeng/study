const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// console.log(merge({a: 1}, {b: 2} ))

const baseConfig = {
  entry: path.resolve(__dirname, '../src/app.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'img/',
              name: '[name].[hash:5].[ext]',
              limit: 10240
            }
          }
        ]
      }, {
        test: /\.(eot|svg|ttf|woff2?)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'font/',
              name: '[name].[hash:5].[ext]',
              // limit: 10240
              limit: 1
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '首页',
      template: 'src/index.html',
      filename: 'index.html',
      // chunks: ['app']
    })
  ]
}

module.exports = baseConfig