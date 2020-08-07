const path = require('path')
module.exports = {
    publicPath: '/', // 基本路径
    // publicPath: process.env.NODE_ENV !== 'production' ? process.env.VUE_APP_URL : '/', //基本路径
    outputDir: 'dist', // 生产环境构建输出目录
    // outputDir: process.env.VUE_APP_outputDir
    assetsDir: '', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    lintOnSave: false, // 是否开启eslint在保存的时候检查 ，false不开启
    devServer: {
        open: true, // 启动服务后是否自动打开浏览器，true-每次启动都会打开新的
        host: '0.0.0.0', // 允许外部ip访问
        port: 8081, // 端口
        https: false // 是否启用https
    },
    // 判断不同环境下使用不同配置
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'development') {
            config.devtool = 'source-map'
        } else if (process.env.NODE_ENV === 'production') {
            config.devtool = 'eval-source-map'
        }
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                // 这个是加上自己的路径，
                // 注意：试过不能使用别名路径
                path.resolve(__dirname, './src/assets/css/common.less')
            ]
        }
    }
}
