const merge = require('webpack-merge')

// 引入环境配置
const baseConfig = require('./config/webpack.base.config')
const devConfig = require('./config/webpack.dev.config')
const prodConfig = require('./config/webpack.prod.config')


module.exports = env => {
  const config = env === "development" ? merge(baseConfig, devConfig) : merge(baseConfig, prodConfig)
  console.log(JSON.stringify(config))
  return config 
  
}