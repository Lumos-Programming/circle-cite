<script setup lang="ts">
import { Link, ListLinksQuery } from '~/assets/API'
import { listLinks } from '~/assets/graphql/queries'
const { $listQuery } = useNuxtApp()
const links = ref<Link[]>([])
const getLinks = async () => {
  links.value = await $listQuery<ListLinksQuery, Link>({
    query: listLinks
  })
}
await getLinks()
</script>
<template>
  <layout-public>
    <atom-text font-size="text-h4" text="Link" class="py-10" />
    <div class="d-flex flex-wrap" style="gap: 30px 0%">
      <module-content-ogp
        v-for="item in links"
        :id="item.id"
        :key="item.id"
        :url="item.url"
        :likes="item.likes || 0"
        :users="item.user?.items"
        @update:users="item.user?.items ? (item.user.items = $event) : null"
      >
      </module-content-ogp>
    </div>
  </layout-public>
</template>
