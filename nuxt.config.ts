export default defineNuxtConfig({
  ssr: false,
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
    }
  },
  modules: ['nuxt-jsoneditor'],
  jsoneditor: {
    componentName: 'JsonEditor',
    includeCss: true,
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
      limit: 100
    }
  }
})
