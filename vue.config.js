const path = require('path')
// __dirname 总是指向被执行 js 文件的绝对路径
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 32, // 换算的基数(设计图750的根字体为32)
            selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
            propList: ['*']
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  assetsDir: 'assets', // 静态资源目录(js,css,img,fonts)这些文件都可以写里面
  productionSourceMap: false, // 打包时不生成.map文件
  devServer: {
    host: 'localhost', // 设置主机地址
    port: 8080
    // 设置本地代理
    // proxy: {
    //   '^/(withdraw|user|x|task|sign|coin|feet|daily|auth|rank)': {
    //     target: ''
    //   },
    //   '^/(udata)': {
    //     target: ''
    //   }
    // }
  }
}
