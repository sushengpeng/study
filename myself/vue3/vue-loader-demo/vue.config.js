const { defineConfig } = require('@vue/cli-service')
const codePositionServer = require('./src/utils/position-plugin')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new codePositionServer({ port: 9001 })],
    resolveLoader: {
      //找loader的时候，先去loaders目录下找，找不到再去node_modules下面找
      modules: ["./loaders/", "node_modules"],
      
    }
  },
  // 我们在vue-loader之前先编译用我们的loader编译一遍
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      // add this configuration in the development environment
      // const DebugPlugin = require('webpack-vue-debug-plugin');
      config.module
        .rule('vue')
        .test(/\.vue$/)
        .use('webpack-vue-debug-loader')
        .loader('webpack-vue-debug-loader')
        .end();
      // config.plugin('webpack-vue-debug-plugin').use(new DebugPlugin());
    }
  },
})
