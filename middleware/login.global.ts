import { Auth } from 'aws-amplify'
import { regexp } from '~/assets/enum'
import { useLoginState } from '~/composables/useStateManegment'
export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isSignedIn, setSignedIn } = useLoginState()
  if (to.name !== 'index' && regexp.normalize.test(to.path)) {
    return navigateTo(to.path.substring(0, to.path.length - 1))
  }
  if (!regexp.whiteList.test(to.path)) return navigateTo('/')
  if (to.path.includes('admin')) {
    await Auth.currentUserInfo().then((data) => setSignedIn(Boolean(data)))
    if (!isSignedIn.value) return navigateTo('/login')
  }
})
