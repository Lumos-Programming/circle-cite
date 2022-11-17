export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
      meta: [
        { name: 'description', content: '' },
        { name: 'viewport', content: 'width=device-width' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon.png'
        }
      ],
      bodyAttrs: {
        class: 'test'
      }
    }
  },
  typescript: {
    shim: false
    // strict: true
  },
  css: ['the-new-css-reset', 'vuetify/styles', '@/assets/css/index.scss'],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    define: {
      global: {},
      'process.env.DEBUG': false
    },
    server: {
      watch: {
        usePolling: true
      }
      // proxy: {
      //   '/api/discord': {
      //     target: process.env.DISCORDWEBHOOK,
      //     rewrite: (path) => path.replace(/^\/api\/discord/, ''),
      //     changeOrigin: true
      //   }
      // }
    }
  },
  modules: ['nuxt-jsoneditor'],
  jsoneditor: {
    componentName: 'JsonEditor',
    // includeCss: true,
    options: {
      /**
       *
       * SET GLOBAL OPTIONS
       *
       * */
    }
  },
  runtimeConfig: {
    public: {
      isProd: process.env.MODE?.toUpperCase() === 'PRODUCTION' || false,
      baseUrl: process.env.BASEURL || '',
      limit: 100,
      discordwebhook: process.env.DISCORDWEBHOOK || ''
    }
  }
})
