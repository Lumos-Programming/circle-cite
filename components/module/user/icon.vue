<script setup lang="ts">
const { $getImage } = useNuxtApp()
const imageUrl = ref<string>('/no_image_s.png')
const props = withDefaults(
  defineProps<{
    imgKey: string
    identityId: string
  }>(),
  {
    imgKey: '',
    identityId: ''
  }
)
imageUrl.value = await $getImage(props.imgKey, props.identityId)
</script>
<template>
  <v-card
    class="w-100 elevation-5 rounded-circle transition-medium-ease"
    @click="$emit('click-func')"
  >
    <v-img :src="imageUrl" lazy-src="/no_image_s.png" :aspect-ratio="1" cover />
  </v-card>
</template>
