import { Amplify } from 'aws-amplify'
import amplifyConfig from '~/assets/aws-exports'
export default defineNuxtPlugin(() => {
  Amplify.configure(amplifyConfig)
})
