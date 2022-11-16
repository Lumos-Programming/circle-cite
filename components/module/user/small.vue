<script setup lang="ts">
const { $getImage } = useNuxtApp()
const imageUrl = ref<string>('/no_image_s.png')
const Props = withDefaults(
  defineProps<{
    name: string
    path: string
    imgKey: string
  }>(),
  {
    name: '',
    path: '/',
    imgKey: ''
  }
)
computed(async () => {
  if (Props.imgKey) imageUrl.value = await $getImage(Props.imgKey)
})
</script>
<template>
  <v-sheet class="bg-transparent">
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        class="w-100 elevation-5 rounded-circle transition-medium-ease"
        v-bind="props"
        :style="{
          transform: isHovering ? 'scale(1.05)' : 'scale(1.0)'
        }"
        @click="navigateTo(path)"
      >
        <v-img :src="imageUrl" :aspect-ratio="1" cover />
      </v-card>
    </v-hover>
    <atom-text font-size="text-h5" class="text-center my-3" :text="name" />
  </v-sheet>
</template>
