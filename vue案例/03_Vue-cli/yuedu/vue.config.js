module.exports = {
  // 所有配置都写在这个对象里
  devServer: {
    // port: 8081
    proxy: 'http://localhost:3000'
  },
  publicPath: process.env.NODE_ENV === "development" ? '/' : '/yuedu/'
}