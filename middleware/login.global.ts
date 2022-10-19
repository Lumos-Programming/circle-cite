import { Auth } from 'aws-amplify'
import { regexp } from '~/assets/enum'
import { useLoginState, useMyProfile } from '~/composables/useStateManegment'
export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log(from.path + '=>' + to.path)
  // console.log(String(regexp.whiteList.test(to.path)))
  const { isSignedIn, setSignedIn } = useLoginState()
  const { setMyProfile } = useMyProfile()
  if (to.name !== 'index' && regexp.normalize.test(to.path)) {
    return navigateTo(to.path.substring(0, to.path.length - 1))
  }
  if (!regexp.whiteList.test(to.path)) return navigateTo('/')
  if (to.path.includes('admin')) {
    const user = await Auth.currentUserInfo()
    setSignedIn(Boolean(user))
    if (user) setMyProfile(user)
    console.log(user)
    // if (!isSignedIn.value) return navigateTo('/login')
  }
})
