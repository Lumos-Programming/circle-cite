<script setup lang="ts">
import { OgpKey } from '~/assets/enum'
import { Metadata } from '~/assets/type'
import { createUserLinks, deleteUserLinks } from '~/assets/graphql/mutations'
const { $baseFetch, $options, $snakeCase, $baseMutation } = useNuxtApp()
const { myUser } = useMyUser()
const props = withDefaults(
  defineProps<{
    id: string
    title: string | null
    url: string
    likes: number
    users: any[]
  }>(),
  {
    title: '',
    url: '/',
    likes: 0,
    users: () => []
  }
)
const emit = defineEmits<{
  (e: 'update:users', value: any[]): void
}>()
const isHovering = ref<boolean>(false)
const userIds = computed(() => {
  return props.users.map((v) => v.user.id)
})

const pushLike = async (type: 'like' | 'unlike' = 'like') => {
  if (!myUser.value.id) return
  if (type === 'like') {
    const userLink = await $baseMutation({
      query: createUserLinks,
      input: { linkID: props.id, userID: myUser.value.id }
    })
    await emit('update:users', [...props.users, userLink])
  } else if (type === 'unlike') {
    const userLinks = props.users.find((v) => v.user.id === myUser.value.id)
    if (!userLinks) return
    await $baseMutation({
      query: deleteUserLinks,
      input: { id: userLinks.id }
    })
    await emit(
      'update:users',
      props.users.filter((v) => v.user.id !== myUser.value.id)
    )
  }
}

const metadata: Metadata = {}
// OGP metadata を取得
const { data, error } = await $baseFetch(
  props.url,
  $options({
    key: props.url,
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    }
  })
)
for (let i = 0, len = OgpKey.length; i < len; i++) {
  if (!data) continue
  const v = OgpKey[i]
  const parser = new DOMParser()
  const dom = parser.parseFromString(String(data), 'text/html')
  const content = dom
    .querySelector(`meta[property='og:${$snakeCase(v)}']`)
    ?.getAttribute('content')
  metadata[v] = content !== null ? content : undefined
}
</script>
<template>
  <v-sheet
    class="d-flex py-2 px-5 height-150 rounded-lg transition-long-ease-out cursor-pointer"
    :class="isHovering ? 'bg-main-color' : 'bg-white'"
    style="flex: 0 0 100%"
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
        @click="$externalLink(url)"
      />
      <atom-text
        :text="metadata.description"
        font-size="text-subtitle-2"
        line-height="line-height-lg"
        font-weight="font-weight-regular"
        :color="isHovering ? 'text-white' : 'text-grey-darken-4'"
        class="height-63 line-clamp-3"
        @click="$externalLink(url)"
      />
      <div
        class="d-flex flex-nowrap mt-2"
        :style="{ 'max-width': 'calc(100vw - 92px)' }"
      >
        <v-icon
          size="16"
          style="flex: 0 0 18px; margin: 1px"
          :class="isHovering ? 'text-white' : 'text-grey-darken-4'"
          @click="
            userIds.includes(myUser.id) ? pushLike('unlike') : pushLike('like')
          "
        >
          {{ userIds.includes(myUser.id) ? 'mdi-heart' : 'mdi-heart-outline' }}
        </v-icon>
        <atom-text
          :text="String(userIds.length)"
          font-size="text-caption"
          line-height="line-height-lg"
          font-weight="font-weight-regular"
          :color="isHovering ? 'text-white' : 'text-grey-darken-4'"
          class="mx-1"
          style="flex: 0 0 30px"
          @click="
            userIds.includes(myUser.id) ? pushLike('unlike') : pushLike('like')
          "
        />
        <atom-text
          :text="url"
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
      @click="$externalLink(url)"
    />
  </v-sheet>
</template>
