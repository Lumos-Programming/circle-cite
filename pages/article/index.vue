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
    <div class="d-flex flex-wrap" style="gap: 60px 10%">
      <module-content-small
        v-for="item in articles"
        :key="item.id"
        :path="'/article/' + item.id"
        :created-at="item.createdAt"
        :updated-at="item.updatedAt"
        :title="item.title"
        style="flex: 0 1 45%"
      >
        <template #default="slot">
          <div class="d-flex flex-wrap justify-end bg-transparent mt-2 mb-2" style="gap: 0 10px">
            <atom-text
              font-size="text-caption"
              font-weight="font-weight-regular"
              :text="item.user?.name"
              :color="slot.isHovering ? 'text-white' : 'text-grey-darken-4'"
            />
          </div>
        </template>
      </module-content-small>
    </div>
  </layout-public>
</template>
