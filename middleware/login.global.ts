import { Auth } from 'aws-amplify'
import { Regexp, memberInputs } from '~/assets/enum'
import { User, ListUsersQuery } from '~/assets/API'
import { listUsers } from '~/assets/graphql/queries'
import { createUser } from '~/assets/graphql/mutations'
import { useLoginState, useMyUser } from '~/composables/useStateManegment'
export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $listQuery, $baseMutation, $filterAttr } = useNuxtApp()
  const { isSignedIn, setSignedIn, setAdmin } = useLoginState()
  const { setCognitoUser, setMyUser } = useMyUser()
  const config = useRuntimeConfig()
  const isProd = config.public.isProd
  if (!isProd) console.log(from.path + '=>' + to.path)
  if (to.name !== 'index' && Regexp.normalize.test(to.path)) {
    return navigateTo(to.path.substring(0, to.path.length - 1))
  }
  if (!Regexp.whiteList.test(to.path)) return navigateTo('/')
  const user = await Auth.currentUserPoolUser().catch(() => clearError())
  if (!isProd) console.log('currentUserPoolUser', user)
  setSignedIn(!!user)
  if (user) {
    setCognitoUser(user)
    const self = await $listQuery<ListUsersQuery, User>({
      query: listUsers,
      // @ts-ignore
      filter: { email: { eq: user.attributes.email } }
    })
    if (!self.length) {
      const res = await $baseMutation({
        query: createUser,
        input: { email: user.attributes.email }
      })
      if (!isProd) console.log('新規User作成', res)
    } else {
      setMyUser($filterAttr(self[0], memberInputs))
    }
  }
  if (to.path.includes('login') && isSignedIn.value) return navigateTo('/admin')
  if (to.path.includes('admin')) {
    if (isSignedIn.value) {
      setAdmin(
        user?.signInUserSession.accessToken.payload['cognito:groups'] &&
          user?.signInUserSession.accessToken.payload['cognito:groups'].includes('Admin')
      )
    } else return navigateTo('/login')
  }
})
