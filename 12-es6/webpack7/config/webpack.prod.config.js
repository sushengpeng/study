const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\/]node_modules[\/]/,
          priority: 15
        },
        common: {
          name: 'index',
          test: /style\.css/,
          priority: -10
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },    
          'css-loader'
        ]
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].chunk.css'
    }),
  ]
}