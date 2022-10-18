export default defineNuxtConfig({
  ssr: false,
  typescript: {
    shim: false
    // strict: true
  },
  css: ['vuetify/styles'],
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
  runtimeConfig: {
    public: {
      // isProd: process.env.MODE?.toUpperCase() === 'PRODUCTION' || false,
      isProd: false,
      limit: 100
    }
  }
})
