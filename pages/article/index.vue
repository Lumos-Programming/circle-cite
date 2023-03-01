<script setup lang="ts">
import { Article, ListArticlesQuery } from '~/assets/API'
import { listArticles } from '~/assets/graphql/queries'
const { $listQuery } = useNuxtApp()
const { isSignedIn } = useLoginState()
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
    <div class="d-flex py-10">
      <atom-text font-size="text-h4" text="Article" />
      <v-spacer />
      <atom-button v-if="isSignedIn" text="新規作成" @btn-click="navigateTo('/admin/article')" />
    </div>
    <div class="d-flex flex-wrap">
      <module-content-medium
        v-for="item in articles"
        :key="item?.id"
        :created-at="item?.createdAt"
        :updated-at="item?.updatedAt"
        :title="item?.title"
        :img-key="item?.file?.key"
        :identity-id="item?.file?.identityId"
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
