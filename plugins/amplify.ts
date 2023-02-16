import { translations } from '@aws-amplify/ui-vue'
import { Amplify, I18n } from 'aws-amplify'
import amplifyConfig from '~/src/aws-exports'
export default defineNuxtPlugin(() => {
  Amplify.configure(amplifyConfig)

  I18n.putVocabularies(translations)
  I18n.setLanguage('ja')
})
