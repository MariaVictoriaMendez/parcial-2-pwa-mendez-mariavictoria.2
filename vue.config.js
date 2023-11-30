module.exports = {
  pwa: {
    name: 'Mi App',
    themeColor: '#9400D3',
    msTileColor: '#9400D3',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public/service-worker.js',
      exclude: [/\.map$/, /_redirects/],
    },
  },
};
