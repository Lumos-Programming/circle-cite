<script setup lang="ts">
import { Article, ListArticlesQuery } from '~/assets/API'
import { listArticles } from '~/assets/graphql/queries'
const { $listQuery } = useNuxtApp()
const articles = ref<Article[]>([])
const getArticles = async () => {
  articles.value = await $listQuery<ListArticlesQuery, Article>({
    query: listArticles,
    filter: { published: { eq: true } }
  })
}
await getArticles()
</script>
<template>
  <layout-public>
    <atom-text font-size="text-h4" text="Article" class="py-10" />
    <div class="d-flex flex-wrap" style="gap: 60px 5%">
      <module-content-medium
        v-for="item in articles"
        :key="item.id"
        :path="'/article/' + item.id"
        :created-at="item.createdAt"
        :updated-at="item.updatedAt"
        :title="item.title"
        style="flex: 0 1 30%"
      />
    </div>
  </layout-public>
</template>
