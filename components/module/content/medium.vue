<script setup lang="ts">
const { $getImage } = useNuxtApp()
const imageUrl = ref<string>('/no_image.png')
const Props = withDefaults(
  defineProps<{
    createdAt: string
    updatedAt: string
    title: string | null
    imgKey: string
    identityId: string
  }>(),
  {
    createdAt: '',
    updatedAt: '',
    title: '',
    imgKey: '',
    identityId: ''
  }
)
imageUrl.value = await $getImage(Props.imgKey, Props.identityId)
</script>
<template>
  <v-sheet class="pa-5 bg-transparent">
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        class="w-100 pb-2 rounded-lg transition-medium-ease"
        v-bind="props"
        :style="{ transform: isHovering ? 'scale(1.05)' : 'scale(1.0)' }"
        @click="$emit('click-func')"
      >
        <v-img :src="imageUrl" :aspect-ratio="16 / 9" cover />
        <div class="d-flex flex-nowrap my-3 mx-2" style="gap: 0 10px">
          <atom-text
            font-size="text-caption"
            :text="$getYMD(createdAt)"
            font-weight="font-weight-regular"
            ><v-icon size="14" class="mr-1 align-text-bottom"> mdi-cloud-upload-outline </v-icon>
          </atom-text>
          <atom-text
            font-size="text-caption"
            :text="$getYMD(updatedAt)"
            font-weight="font-weight-regular"
            ><v-icon size="14" class="mr-1 align-text-bottom"> mdi-autorenew </v-icon>
          </atom-text>
        </div>
        <atom-text
          :text="title"
          line-height="line-height-lg"
          class="ma-2 line-clamp-3 height-72"
          @click="$emit('click-func')"
        />
        <slot :is-hovering="isHovering" />
      </v-card>
    </v-hover>
  </v-sheet>
</template>
