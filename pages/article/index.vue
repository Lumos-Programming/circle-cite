<script setup lang="ts">
import { Article, ListArticlesQuery } from '~/assets/API'
import { listArticles } from '~/assets/graphql/queries'
const { $unAuthListQuery } = useNuxtApp()
const articles = ref<Article[]>([])
const getArticles = async () => {
  articles.value = await $unAuthListQuery<ListArticlesQuery, Article>({
    name: 'listArticles',
    query: listArticles
  })
}
getArticles()
</script>
<template>
  <layout-public>
    <atom-text font-size="text-h4" text="Article" class="py-10" />
    <div class="d-flex">
      <v-sheet
        v-for="item in articles"
        :key="item.id"
        style="flex: 0 1 33.3%"
        class="bg-transparent"
      >
        <v-card class="w-100 elevation-5 rounded-lg"
          ><v-img src="sample.jpg"
        /></v-card>
        <div
          class="d-flex flex-nowrap justify-end bg-transparent my-3"
          style="gap: 0 10px"
        >
          <atom-text
            font-size="text-caption"
            :text="$getYMD(item.createdAt)"
            font-weight="font-weight-regular"
          />
          <atom-text
            font-size="text-caption"
            :text="$getYMD(item.updatedAt)"
            font-weight="font-weight-regular"
          />
        </div>
        <atom-text font-size="text-subtitle-1" :text="item.title" />
      </v-sheet>
    </div>
  </layout-public>
</template>
