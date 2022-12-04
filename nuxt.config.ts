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
    shim: false,
    strict: true
  },
  css: ['the-new-css-reset', 'vuetify/styles', '@/assets/css/index.scss'],
  build: {
    transpile: ['vuetify']
  },
  vuetify: {
    treeShake: true
  },
  modules: [],
  vite: {
    resolve: {
      alias: {
        './runtimeConfig': './runtimeConfig.browser'
      }
    },
    define: {
      'window.global': {},
      'process.env.DEBUG': false
    },
    server: {
      watch: {
        usePolling: true
      },
      proxy: {
        '/discord': {
          target:
            'https://discord.com/api/webhooks/1041681585063333918/j0FnI7IIEgYELSvpzHxfi50UZ75OCnf51VCyZmi0D6u7REN2u5mFK6JjaKr778W6pw-2',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/discord/, '')
        }
      }
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
