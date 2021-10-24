'use strict'
const path = require('path')
const config = require('../config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const packageConfig = require('../package.json')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // const postcssLoader = {
  //   loader: 'postcss-loader',
  //   options: {
  //     sourceMap: options.sourceMap
  //   }
  // }

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    const loaders = []
    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      loaders.push({
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath:"../../"
        }
      })
    } else {
      loaders.push('vue-style-loader')
    }

    loaders.push(cssLoader)

    // if (options.usePostCSS) {
    //   loaders.push(postcssLoader)
    // }

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }
    // console.log(loaders)
    return loaders
  }

  // 全局文件引入 当然只想编译一个文件的话可以省去这个函数
  function resolveResource(nameArr) {
    let newArr = []
    nameArr.forEach(name => {
      let letsname = path.resolve(__dirname, '../src/styles/' + name)
      newArr.push(letsname)
    });
    return newArr
  }
  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}

exports.getIp = function () {
  const os = require('os')
  var ifaces = os.networkInterfaces()
  var ip = '', result = []
  for (var dev in ifaces) {
    ifaces[dev].forEach(function (details) {
      // console.log(details)
      if (details.family === 'IPv4' && !details.internal) {
        ip = details.address
        result.push(ip)
        // return;
      }
    })
  }
  // console.log(result)
  return result || '127.0.0.1'
}
