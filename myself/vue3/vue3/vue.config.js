module.exports = {
  // 基本路径 baseURL已经过时
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  // compiler: false,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => { },
  configureWebpack: () => { },
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: process.env.NODE_ENV === 'production',
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            rootValue: 75, // 换算的基数
            // 忽略转换正则匹配项。插件会转化所有的样式的px。比如引入了三方UI，也会被转化。目前我使用 selectorBlackList字段，来过滤
            //如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。
            selectorBlackList: ['mand', 'van'],
            propList: ['*'],
            selectorBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行rem转换
          }),
        ]
      },
    },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  // parallel: require('os').cpus().length > 1,
  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    proxy: {
      '/': {
        target: 'http://api.maiduoshop.com',
        // ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/': ''
        }
      }
    }
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}
// module.exports = {
//   // 部署应用时的基本 URL
//   baseUrl: process.env.NODE_ENV === 'production' ? '192.168.60.110:8080' : '192.168.60.110:8080',
//   // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
//   outputDir: 'dist',
//   // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
//   assetsDir: '',
//   // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
//   indexPath: 'index.html',
//   // 默认在生成的静态资源文件名中包含hash以控制缓存
//   filenameHashing: true,
//   // 构建多页面应用，页面的配置
//   pages: {
//     index: {
//       // page 的入口
//       entry: 'src/index/main.js',
//       // 模板来源
//       template: 'public/index.html',
//       // 在 dist/index.html 的输出
//       filename: 'index.html',
//       // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
//       title: 'Index Page',
//       // 在这个页面中包含的块，默认情况下会包含
//       // 提取出来的通用 chunk 和 vendor chunk。
//       chunks: ['chunk-vendors', 'chunk-common', 'index']
//     },
//     // 当使用只有入口的字符串格式时，模板会被推导为 `public/subpage.html`，并且如果找不到的话，就回退到 `public/index.html`。
//     // 输出文件名会被推导为 `subpage.html`。
//     subpage: 'src/subpage/main.js'
//   },
//   // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
//   lintOnSave: process.env.NODE_ENV !== 'production',
//   // 是否使用包含运行时编译器的 Vue 构建版本
//   runtimeCompiler: false,
//   // Babel 显式转译列表
//   transpileDependencies: [],
//   // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
//   productionSourceMap: true,
//   // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性（注：仅影响构建时注入的标签）

//   crossorigin: '',
//   // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
//   integrity: false,
//   // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中
//   // 如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象
//   configureWebpack: {},
//   // 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)
//   chainWebpack: () => { },
//   // css的处理
//   css: {
//     // 当为true时，css文件名可省略 module 默认为 false
//     modules: true,
//     // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中,当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS
//     // 默认生产环境下是 true，开发环境下是 false
//     extract: false,
//     // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
//     sourceMap: false,
//     //向 CSS 相关的 loader 传递选项(支持 css-loader postcss-loader sass-loader less-loader stylus-loader)
//     loaderOptions: { css: {}, less: {} }
//   },
//   // 所有 webpack-dev-server 的选项都支持
//   devServer: {},
//   // 是否为 Babel 或 TypeScript 使用 thread-loader
//   parallel: require('os').cpus().length > 1,
//   // 向 PWA 插件传递选项
//   pwa: {},
//   // 可以用来传递任何第三方插件选项
//   pluginOptions: {}
// }