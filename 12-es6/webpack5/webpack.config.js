const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    demo: './src/demo.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].chunk.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        /* 
          key就是名字 
          对象中是相关的配置
          test可以匹配到想要打包的对应的模块
        
        */
        reset: {
          name: 'reset',
          test: /reset\.css$/,
          priority: 10
        },
        base: {
          name: 'base',
          test: /base\.css$/,
          priority: 1
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }, {
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
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].chunk.css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ["index", "reset", "base"]
    }),
    new HtmlWebpackPlugin({
      template: './src/demo.html',
      filename: 'demo.html',
      chunks: ["reset", 'base']
    })
  ]
}