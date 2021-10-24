'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

function resolveResource(nameArr) {
  let newArr = []
  nameArr.forEach(name => {
    let letsname = path.resolve(__dirname, '../src/styles/' + name)
    newArr.push(letsname)
  });
  // console.log(newArr.join(','))
  return newArr
}
module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction,
    resources: resolveResource(['reset.less'])
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
