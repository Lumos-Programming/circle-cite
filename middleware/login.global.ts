import { Auth } from 'aws-amplify'
import { Regexp } from '~/assets/enum'
import { useLoginState, useMyUser } from '~/composables/useStateManegment'
export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isSignedIn, setSignedIn, setAdmin } = useLoginState()
  const { setCognitoUser } = useMyUser()
  const config = useRuntimeConfig()
  const isProd = config.public.isProd
  if (!isProd) console.log(from.path + '=>' + to.path)
  if (to.name !== 'index' && Regexp.normalize.test(to.path)) {
    return navigateTo(to.path.substring(0, to.path.length - 1))
  }
  if (!Regexp.whiteList.test(to.path)) return navigateTo('/')
  const user = await Auth.currentUserPoolUser().catch(() => clearError())
  if (user) setCognitoUser(user)
  setSignedIn(!!user)
  if (!isProd) console.log('user', user)
  if (to.path.includes('admin')) {
    if (isSignedIn.value) {
      setAdmin(
        user?.signInUserSession.accessToken.payload['cognito:groups'] &&
          user?.signInUserSession.accessToken.payload[
            'cognito:groups'
          ].includes('Admin')
      )
    } else return navigateTo('/login')
  }
})
