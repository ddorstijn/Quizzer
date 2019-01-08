const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Quizzer",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      '@nuxtjs/axios',
      'nuxt-fire',
      {
        config: {
          development: {
            apiKey: "AIzaSyA_qj8JTybJ96PY2EHHhqjIU6JONwcOZfE",
            authDomain: "quizzer-7f190.firebaseapp.com",
            databaseURL: "https://quizzer-7f190.firebaseio.com",
            projectId: "quizzer-7f190",
            storageBucket: "quizzer-7f190.appspot.com",
            messagingSenderId: "430366242705"

          },
          production: {
            apiKey: "AIzaSyA_qj8JTybJ96PY2EHHhqjIU6JONwcOZfE",
            authDomain: "quizzer-7f190.firebaseapp.com",
            databaseURL: "https://quizzer-7f190.firebaseio.com",
            projectId: "quizzer-7f190",
            storageBucket: "quizzer-7f190.appspot.com",
            messagingSenderId: "430366242705"
          }
        }
      }
    ]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  }
}
