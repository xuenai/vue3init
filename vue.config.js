const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

module.exports = {
  // outputDir: '',
  publicPath: './',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 'primary-color': '#1DA57A',
          // 'link-color': '#1DA57A',
          // 'border-radius-base': '2px'
        },
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = '上岛通'
        args[0].keywords = '上岛通'
        args[0].description = '上岛通'
        return args
      })
    // 查看打包后每个文件大小的插件
    // config.plugin('webpack-bundle-analyzer')
    //         .use(BundleAnalyzerPlugin)
    //         .init(Plugin => new Plugin())
    //         .end()
  },
  configureWebpack: config => {
    config.resolve.alias = {
      '@': resolve('src'),
      components: resolve('src/components'),
      assets: resolve('src/assets'),
      views: resolve('src/views'),
      utils: resolve('src/utils'),
      router: resolve('src/router'),
      store: resolve('src/store')
    }
    // config.resolve.extensions = ['.less', '.vue', '.ts', '.js']

    // 打包静态资源 减少编译速度
    // config.plugins.push(new HardSourceWebpackPlugin({
    //   cacheDirectory: '../.cache/[confighash]',
    //   configHash: function () {
    //     return process.env.NODE_ENV + '-' + process.env.VUE_APP_STATUS;
    //   }
    // }))
    // 分析包大小
    // config.plugins.push(new BundleAnalyzerPlugin())
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('src/assets/styles/theme.less')]
    }
  }
  // transpileDependencies: [],
  // lintOnSave: false,
  // devServer: {
  //   // port: 80,
  //   open: true,
  //   inline: true,
  //   contentBase: './dist',
  //   historyApiFallback: true,
  //   proxy: {
  //     '/dev': {
  //       target: 'http://xxx.com',
  //       pathRewrite: {
  //         '^/dev': ''
  //       },
  //       changeOrigin: true
  //     },
  //     '/ws': {
  //       target: 'http://xxx.com',
  //       changeOrigin: true,
  //       ws: true
  //     }
  //   }
  // }
}
