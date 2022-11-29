<script setup lang="ts">
import { OgpKey } from '~/assets/enum'
import { Metadata } from '~/assets/type'
const { $baseFetch, $options, $snakeCase } = useNuxtApp()
const props = withDefaults(
  defineProps<{
    title: string | null
    url: string
    likes: number | null
  }>(),
  {
    title: '',
    url: '/',
    likes: 0
  }
)
const isHovering = ref<boolean>(false)
const metadata: Metadata = {}
// OGP metadata を取得
const { data, error } = await $baseFetch(
  '/api/ogp',
  $options({
    key: props.url,
    method: 'POST',
    body: JSON.stringify({ url: props.url }),
    headers: {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    },
    cache: false
  })
)
for (let i = 0, len = OgpKey.length; i < len; i++) {
  if (!data) continue
  const v = OgpKey[i]
  const parser = new DOMParser()
  const dom = parser.parseFromString(data, 'text/html')
  const content = dom
    .querySelector(`meta[property='og:${$snakeCase(v)}']`)
    ?.getAttribute('content')
  metadata[v] = content !== null ? content : undefined
}
console.log('metadata', props.url, metadata)
</script>
<template>
  <v-sheet
    class="d-flex py-2 px-5 height-150 rounded-lg transition-long-ease-out cursor-pointer"
    :class="isHovering ? 'bg-main-color' : 'bg-white'"
    style="flex: 0 0 100%"
    @click="navigateTo(url, { external: true })"
    @mouseover="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <div style="flex: 1 1 70%" :style="{ 'min-width': '0' }" class="mr-3">
      <atom-text
        :text="metadata.title"
        font-size="text-h6"
        line-height="line-height-lg"
        :color="isHovering ? 'text-white' : 'text-grey-darken-4'"
        class="line-clamp-1 my-2"
      />
      <atom-text
        :text="metadata.description"
        font-size="text-subtitle-2"
        line-height="line-height-lg"
        font-weight="font-weight-regular"
        :color="isHovering ? 'text-white' : 'text-grey-darken-4'"
        class="height-63 line-clamp-3"
      />
      <div
        class="d-flex flex-nowrap mt-2"
        :style="{ 'max-width': 'calc(100vw - 92px)' }"
      >
        <v-icon
          size="16"
          style="flex: 0 0 18px; margin: 1px"
          :class="isHovering ? 'text-white' : 'text-grey-darken-4'"
        >
          mdi-heart-outline
        </v-icon>
        <atom-text
          :text="String(likes)"
          font-size="text-caption"
          line-height="line-height-lg"
          font-weight="font-weight-regular"
          :color="isHovering ? 'text-white' : 'text-grey-darken-4'"
          class="mx-1"
          style="flex: 0 0 30px"
        />
        <atom-text
          :text="metadata.url"
          font-size="text-caption"
          line-height="line-height-lg"
          font-weight="font-weight-regular"
          :color="isHovering ? 'text-white' : 'text-grey-darken-4'"
          class="one-line-reader"
          style="flex: 1 1 200px"
        />
      </div>
    </div>
    <v-img
      :src="metadata.image"
      lazySrc="/no_image.png"
      style="flex: 1 1 30%"
      class="d-none d-sm-block"
    />
  </v-sheet>
</template>
