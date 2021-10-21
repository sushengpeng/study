module.exports = {
  devServer: {
    hot: true,
    compress: true,
    host: "localhost",
    port: "8080",
    open: false,
    proxy: {
      '/': {
        target: 'https://wxtest.jzctb.com/',   //测试环境uat
        changeOrigin: true
      },
    },
  },
}