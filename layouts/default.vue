<script setup lang="ts">
import { Hub } from 'aws-amplify'
import { HubCapsule } from '@aws-amplify/core'
import { Regexp } from '~/assets/enum'
import { User, ListUsersQuery } from '~/assets/API'
import { listUsers } from '~/assets/graphql/queries'
import { createUser } from '~/assets/graphql/mutations'
const { $listQuery, $baseMutation, $filterAttr } = useNuxtApp()
const { path } = useRoute()
const { setSignedIn } = useLoginState()
const { cognitoUser, myUser, setMyUser } = useMyUser()
useHead({
  title: 'Hooks',
  titleTemplate: (title) => `${title} | Lumos`
})
const listener = (data: HubCapsule) => {
  if (data.payload.event === 'signOut') {
    setSignedIn(false)
    if (!Regexp.public.test(path)) return navigateTo('/login')
  }
  if (data.payload.event === 'signIn') {
    console.log(data)
    setSignedIn(true)
    navigateTo('/admin')
  }
}
Hub.listen('auth', listener)
if (!Object.keys(myUser.value).length && cognitoUser.value?.attributes?.email) {
  const user = await $listQuery<ListUsersQuery, User>({
    query: listUsers,
    // @ts-ignore
    filter: { email: { eq: cognitoUser.value.attributes.email } }
  })
  if (user.length === 1) {
    setMyUser(
      $filterAttr(user[0], [
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
  } else if (!user.length) {
    await $baseMutation({
      query: createUser,
      input: { name: 'ゲストさん', email: cognitoUser.value.attributes.email }
    })
  }
}
onUnmounted(() => {
  Hub.remove('auth', listener)
})
</script>
<template>
  <NuxtPage />
</template>
