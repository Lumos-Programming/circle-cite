<script setup lang="ts">
import { Article, CreateArticleInput, ListArticlesQuery } from '~/assets/API'
import {
  createArticle,
  deleteArticle,
  updateArticle
} from '~/assets/graphql/mutations'
import { listArticles } from '~/assets/graphql/queries'
const { $listQuery } = useNuxtApp()
const articles = ref<Article[]>([])
const getArticles = async () => {
  articles.value = await $listQuery<ListArticlesQuery, Article>({
    name: 'listArticles',
    query: listArticles
  })
}
const input = ref<CreateArticleInput>({
  title: '',
  body: '',
  published: false,
  userArticleId: null,
  projectArticleId: null,
  eventArticleId: null,
  articleImageId: null
})
getArticles()
</script>
<template>
  <layout-admin>
    <atom-text font-size="text-h4" text="Articles" />
    <atom-breadcrumbs class="mb-5" />
    <v-card class="pa-5">
      <atom-text
        text="Create / Update / Delete"
        font-size="text-h6"
        class="my-2"
      />
      <div class="d-flex my-2" style="gap: 0 20px">
        <v-btn
          variant="outlined"
          style="flex: 1"
          @click="
            $baseMutation({
              name: 'createArticle',
              query: createArticle,
              input
            })
          "
        >
          新規作成
        </v-btn>
        <v-btn
          variant="outlined"
          style="flex: 1"
          @click="
            $baseMutation({
              name: 'updateArticle',
              query: updateArticle,
              input
            })
          "
        >
          更新
        </v-btn>
        <v-btn
          variant="outlined"
          style="flex: 1"
          @click="
            $baseMutation({
              name: 'deleteArticle',
              query: deleteArticle,
              input
            })
          "
        >
          削除
        </v-btn>
      </div>
      <json-editor v-model="input" height="400" mode="tree" />
    </v-card>
    <v-card class="pa-5 my-5">
      <div class="d-flex my-2">
        <atom-text text="All Articles" font-size="text-h6" class="my-2" />
        <v-spacer />
        <v-btn variant="outlined" @click="getArticles()"> 再取得 </v-btn>
      </div>
      <json-editor v-model="articles" height="400" mode="tree" />
    </v-card>
  </layout-admin>
</template>
