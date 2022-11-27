<script setup lang="ts">
const { $getImage } = useNuxtApp()
const imageUrl = ref<string>('/no_image.png')
const Props = withDefaults(
  defineProps<{
    createdAt: string
    updatedAt: string
    title: string | null
    path: string
    imgKey: string
    identityId: string
  }>(),
  {
    createdAt: '',
    updatedAt: '',
    title: '',
    path: '/',
    imgKey: '',
    identityId: ''
  }
)
computed(async () => {
  if (Props.imgKey)
    imageUrl.value = await $getImage(Props.imgKey, Props.identityId)
})
</script>
<template>
  <v-sheet class="bg-transparent">
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        class="w-100 elevation-5 rounded-lg transition-medium-ease"
        v-bind="props"
        :style="{
          transform: isHovering ? 'scale(1.05)' : 'scale(1.0)'
        }"
        @click="navigateTo(path)"
      >
        <v-img :src="imageUrl" :aspect-ratio="16 / 9" cover />
      </v-card>
    </v-hover>
    <div
      class="d-flex flex-nowrap justify-end bg-transparent mt-4 mb-2"
      style="gap: 0 10px"
    >
      <atom-text
        font-size="text-caption"
        :text="$getYMD(createdAt)"
        font-weight="font-weight-regular"
        ><v-icon size="14" class="mr-1 align-text-bottom">
          mdi-cloud-upload-outline
        </v-icon>
      </atom-text>
      <atom-text
        font-size="text-caption"
        :text="$getYMD(updatedAt)"
        font-weight="font-weight-regular"
        ><v-icon size="14" class="mr-1 align-text-bottom">
          mdi-autorenew
        </v-icon>
      </atom-text>
    </div>
    <slot />
    <atom-text font-size="text-h6" line-height="line-height-lg" class="ml-1">
      <NuxtLink :to="path">{{ title }}</NuxtLink>
    </atom-text>
  </v-sheet>
</template>
