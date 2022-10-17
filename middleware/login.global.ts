import { Auth } from 'aws-amplify'
import { useLoginState } from '~/composables/useStateManegment'
export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isSignedIn, setSignedIn } = useLoginState()
  if (to.name !== 'index' && to.path.match(/\/$/))
    return navigateTo(to.path.substring(0, to.path.length - 1))
  if (
    !to.path.match(
      /(\/$|\/(admin\/)?(login|event|project|skill|article|member)\/?\d*$)/g
    )
  ) {
    return navigateTo('/')
  }
  if (to.path.includes('admin')) {
    await Auth.currentUserInfo().then((data) => setSignedIn(Boolean(data)))
    if (!isSignedIn.value) return navigateTo('/login')
  }
})
