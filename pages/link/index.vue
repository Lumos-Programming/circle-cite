<script setup lang="ts">
import { Link, ListLinksQuery } from '~/assets/API'
import { listLinks } from '~/assets/graphql/queries'
const { $listQuery } = useNuxtApp()
const links = ref<Link[]>([])
const getLinks = async () => {
  links.value = await $listQuery<ListLinksQuery, Link>({
    name: 'listLinks',
    query: listLinks
  })
}
getLinks()
</script>
<template>
  <layout-public>
    <atom-text font-size="text-h4" text="Link" class="py-10" />
  </layout-public>
</template>
