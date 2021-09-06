const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, '../index.html'),
      filename: "index.html"
    })
  ]
}