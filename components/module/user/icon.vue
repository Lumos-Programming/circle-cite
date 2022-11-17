<script setup lang="ts">
const { $getImage } = useNuxtApp()
const imageUrl = ref<string>('/no_image_s.png')
const Props = withDefaults(
  defineProps<{
    imgKey: string
    func: () => void
  }>(),
  {
    func: () => navigateTo('/'),
    imgKey: ''
  }
)
computed(async () => {
  if (Props.imgKey) imageUrl.value = await $getImage(Props.imgKey)
})
</script>
<template>
  <v-card
    class="w-100 elevation-5 rounded-circle transition-medium-ease"
    @click="func()"
  >
    <v-img :src="imageUrl" :aspect-ratio="1" cover />
  </v-card>
</template>
