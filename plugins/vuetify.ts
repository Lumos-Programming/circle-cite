import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({ components })
  app.vueApp.use(vuetify)
})
