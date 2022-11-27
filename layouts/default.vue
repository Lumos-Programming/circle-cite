<script setup lang="ts">
import { Hub } from 'aws-amplify'
import { HubCapsule } from '@aws-amplify/core'
import { Regexp } from '~/assets/enum'
const { path } = useRoute()
const { setSignedIn, setAdmin } = useLoginState()
useHead({
  title: 'Hooks',
  titleTemplate: (title) => `${title} | Lumos`
})
const listener = (data: HubCapsule) => {
  setAdmin(
    data.payload.data?.signInUserSession.accessToken.payload[
      'cognito:groups'
    ] &&
      data.payload.data?.signInUserSession.accessToken.payload[
        'cognito:groups'
      ].includes('Admin')
  )
  if (data.payload.event === 'signOut') {
    setSignedIn(false)
    if (!Regexp.public.test(path)) return navigateTo('/login')
  }
  if (data.payload.event === 'signIn') {
    setSignedIn(true)
    navigateTo('/admin')
  }
}
Hub.listen('auth', listener)
onUnmounted(() => {
  Hub.remove('auth', listener)
})
</script>
<template>
  <NuxtPage />
</template>
