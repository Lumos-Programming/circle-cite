<script setup lang="ts">
import { Hub } from 'aws-amplify'
import { regexp } from '~/assets/enum'
const { path } = useRoute()
const { setSignedIn } = useLoginState()
useHead({
  title: 'Hooks',
  titleTemplate: (title) => `${title} | Lumos`
})
const listener = (data) => {
  if (data.payload.event === 'signOut') {
    setSignedIn(false)
    if (!regexp.public.test(path)) return navigateTo('/login')
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
