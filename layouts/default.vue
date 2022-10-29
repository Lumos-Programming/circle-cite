<script setup lang="ts">
import { Hub } from 'aws-amplify'
import { regexp } from '~/assets/enum'
const { path } = useRoute()
useHead({
  title: 'Hooks',
  titleTemplate: (title) => `${title} | Lumos`
})
const listener = (data) => {
  if (data.payload.event === 'signOut') {
    if (!regexp.public.test(path)) return navigateTo('/login')
  }
  if (data.payload.event === 'signIn') {
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
