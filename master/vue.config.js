
const { port } = require("./package");

module.exports = {
  // publicPath: './',
  devServer: {
    // host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      "/api": {
        target: "http://192.168.1.xxx:xxxx/",
        changeOrigin: true,
        pathRewrite: {},
        /**
         * @name 解决微前端环境下，子应用接口会被代理到主应用，proxy的接口匹配前缀如果和路由前缀一致，刷新将路由代理为接口致页面404问题
         * @param {*} req 
         */
        bypass: function (req) {
          if (req.headers.accept.indexOf('html') !== -1) {
            return '/index.html';
          }
        }
      },
    }
  },
  filenameHashing: true,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/assets/css/variables/variables.scss";`
      }
    }
  }
};
