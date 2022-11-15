import { Auth } from 'aws-amplify'
import { regexp } from '~/assets/enum'
import { useLoginState, useMyProfile } from '~/composables/useStateManegment'
export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isSignedIn } = useLoginState()
  const { setMyProfile } = useMyProfile()
  const config = useRuntimeConfig()
  const isProd = config.public.isProd
  if (!isProd) console.log(from.path + '=>' + to.path)
  if (to.name !== 'index' && regexp.normalize.test(to.path)) {
    return navigateTo(to.path.substring(0, to.path.length - 1))
  }
  if (!regexp.whiteList.test(to.path)) return navigateTo('/')
  if (to.path.includes('admin')) {
    const user = await Auth.currentUserInfo()
    if (user) setMyProfile(user)
    if (!isProd) console.log('user', user)
    if (!isSignedIn.value) return navigateTo('/login')
  }
})
