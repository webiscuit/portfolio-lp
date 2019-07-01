
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Webiscuit - Hiromi Kozai',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Josefin+Sans:400|Open+Sans:300&display=swap' }
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '//kit.fontawesome.com/0f26b963d8.js', async: true, defer: true }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#333' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
    ** Source Directory
    */
  srcDir: 'src/',
  /*
  ** Build configuration
  */
  build: {
    fallback: false,
    publicPath: '/assets/',
    devtools: process.env.NODE_ENV === 'production',
    extractCSS:	process.env.NODE_ENV === 'production',
    // subFolders: false,
    filenames: {
      app: () => 'js/[name].js',
      chunk: () => 'js/[name].js',
      css: () => 'css/[name].css',
      img: () => 'img/[folder]/[name].[ext]',
      font: () => 'font/[name].[ext]'
    },
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js',
        'postcss-import': {},
        'postcss-preset-env': {
          stage: 0,
          features: {
            'nesting-rules': false
          }
        },
        'postcss-short': {},
        'postcss-calc': {},
        'postcss-nested': {}
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
