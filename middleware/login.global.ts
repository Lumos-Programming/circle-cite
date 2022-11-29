import { Auth } from 'aws-amplify'
import { Regexp } from '~/assets/enum'
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
    if (self.length === 1) {
      setMyUser(
        $filterAttr(self[0], [
          'id',
          'name',
          'email',
          'description',
          'belongs',
          'join',
          'leave',
          'discordId',
          'github',
          'zenn',
          'qiita',
          'twitter',
          'slide',
          'file'
        ])
      )
    } else if (!self.length) {
      const res = await $baseMutation({
        query: createUser,
        input: { name: 'ゲストさん', email: user.attributes.email }
      })
      console.log('作成', res)
    }
  }
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
