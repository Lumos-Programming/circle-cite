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
    <div class="d-flex flex-wrap">
      <module-content-medium
        v-for="item in articles"
        :key="item?.id"
        :created-at="item?.createdAt"
        :updated-at="item?.updatedAt"
        :title="item?.title"
        class="v-col-12 v-col-sm-6 v-col-md-4"
        @click-func="navigateTo('/article/' + item?.id)"
      >
        <div class="d-flex flex-wrap justify-end bg-transparent my-2 mr-5" style="gap: 0 10px">
          <atom-text
            font-size="text-caption"
            font-weight="font-weight-regular"
            :text="item.user?.name"
          />
        </div>
      </module-content-medium>
    </div>
  </layout-public>
</template>
