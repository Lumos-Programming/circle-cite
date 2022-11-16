<script setup lang="ts">
const { $getImage } = useNuxtApp()
const imageUrl = ref<string>('/no_image_s.png')
const Props = withDefaults(
  defineProps<{
    name: string
    path: string
    belongs: string
    github: string
    twitter: string
    qiita: string
    zenn: string
    imgKey: string
  }>(),
  {
    name: '',
    path: '/',
    belongs: '',
    github: '',
    twitter: '',
    qiita: '',
    zenn: '',
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
    <atom-text class="text-center ma-3" :text="belongs" />
    <div class="d-flex flex-nowrap justify-center" style="gap: 0 4px">
      <atom-button-circle @btn-click="navigateTo(github, { external: true })">
        <v-icon class="ma-2">mdi-github</v-icon>
      </atom-button-circle>
      <atom-button-circle @btn-click="navigateTo(twitter, { external: true })">
        <v-icon class="ma-2">mdi-twitter</v-icon>
      </atom-button-circle>
      <atom-button-circle @btn-click="navigateTo(qiita, { external: true })">
        <v-img src="/qiita.png" class="width-24 height-24 ma-2" />
      </atom-button-circle>
      <atom-button-circle @btn-click="navigateTo(zenn, { external: true })">
        <v-img src="/zenn.svg" class="width-24 height-24 ma-2" />
      </atom-button-circle>
    </div>
  </v-sheet>
</template>
