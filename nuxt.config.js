const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - КОРОНА PRINT',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'msapplication-TileColor', content: '#ffffff'},
      {name: 'msapplication-TileImage', content: '/ms-icon-144x144.png'},
      {name: 'theme-color', content: '#0091ce'},
      {
        hid: 'description',
        name: 'description',
        content: 'Рекламное агентство Корона PRINT - производство рекламы в Темрюке и Анапе. Печать баннеров, вывески, световые буквы, таблички, визитки, штендер, рекламная плоскость, разработка сайтов.'
      }
    ],
    link: [
      {rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png'},
      {rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png'},
      {rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png'},
      {rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png'},
      {rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png'},
      {rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png'},
      {rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png'},
      {rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png'},
      {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png'},
      {rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png'},
      {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
      {rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png'},
      {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'manifest', href: '/manifest.json'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}
    ]
  },
  modules: [
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '41544964',
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      }
    ],
    ['@nuxtjs/google-analytics', {
      id: 'UA-111409672-1'
    }],
    '@nuxtjs/auth',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
    ['/api', {
      target: process.env.NODE_ENV === 'production' ? 'https://srv.corona-print.ru' : 'http://localhost:8000',
      pathRewrite: {'^/api': 'api/v1'}
    }]
  ],
  plugins: ['~/plugins/vuetify.js'],
  css: [
    '~/assets/style/app.styl',
    {src: 'owl.carousel/dist/assets/owl.carousel.css'}
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#ffd80d'},
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/vuetify.js',
      'gsap',
      'owl.carousel',
      'ymaps'
    ],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery'
      })
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
