const path = require("path")
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")
module.exports = {
  mode: 'production',
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../dist')
  },
  resolve: {
    extensions: [".js", ".vue", ".css"],
    alias: {
      "vue$": "vue/dist/vue.esm.js",
      "@": path.join(__dirname, 'src')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, "node-modules")
        ],
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ]
  }
}