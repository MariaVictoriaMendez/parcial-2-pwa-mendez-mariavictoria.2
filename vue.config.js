const path = require('path');

module.exports = {
  pwa: {
    name: 'Mi App',
    themeColor: '#9400D3',
    msTileColor: '#9400D3',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      background_color: '#9400D3',
      icons: [
        {
          src: 'img/logo.png',
          sizes: '64x64',
          type: 'image/png',
        },
      ],
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [/\.map$/, /_redirects/],
    },
  },


