const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  // devServer: {
  //   disableHostCheck: true,
  //   port: 80,
  // },
  devServer: {
    proxy: {
      '/open_api': {
        target:'http://ad.oceanengine.com',
        // target: 'http://ops-test1.kzmall.cc',
        //target: 'http://ops-test2.kzmall.cc',
        changeOrigin: true,
      },
    },
    port: 80,
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 直接覆盖变量
          green: '#3296FA'
        }
      }
    }
  },
  chainWebpack: config => {
    config.optimization.minimizer('terser').tap((...args) => {
      const terser = args[0][0];
      // eslint-disable-next-line @typescript-eslint/camelcase
      terser.terserOptions.keep_fnames = true;
      // eslint-disable-next-line @typescript-eslint/camelcase
      terser.terserOptions.compress.keep_fnames = true;
      return [terser];
    });
    config.resolve.alias.set('@', resolve('src'));

    config.resolve.extensions.add('.vue');
  }
};
