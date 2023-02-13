<script setup lang="ts">
import { Article, UpdateArticleInput, ListArticlesQuery } from '~/assets/API'
import { FileInput } from '~/assets/type'
import { InputComponents, articleInputs } from '~/assets/enum'
import { createArticle, deleteArticle, updateArticle } from '~/assets/graphql/mutations'
import { listArticles } from '~/assets/graphql/queries'
const { $listQuery, $extendMutation, $filterAttr, $excludeAttr } = useNuxtApp()
const { banEdit } = useEditState()
const articles = ref<Article[]>([])
const getArticles = async () => {
  articles.value = await $listQuery<ListArticlesQuery, Article>({
    query: listArticles
  })
}
const mutateArticle = async () => {
  await $extendMutation({
    type: input.value.id ? 'update' : 'create',
    key: input.value.file?.key || '',
    query: input.value.id ? updateArticle : createArticle,
    input: input.value.id ? input.value : $excludeAttr(input.value, ['id']),
    file: input.value.file?.file
  })
}
const defaultInput = {
  id: '',
  title: '',
  body: '',
  published: false,
  userArticleId: null,
  projectArticleId: null,
  eventArticleId: null,
  file: null
}
const input = ref<FileInput<UpdateArticleInput>>(defaultInput)
const headers = ['id', 'title', 'published', 'oparation']
getArticles()
// TODO: valiidationを掛けること
</script>
<template>
  <layout-admin>
    <div>
      <div class="d-flex my-2">
        <atom-text
          :text="input.id ? input.id + 'の更新' : '新規作成'"
          font-size="text-h6"
          class="my-2"
        />
        <v-spacer />
        <atom-button
          :loading="banEdit"
          text="リセット"
          btn-class="border-solid border-width-1 border-grey-darken-4 mr-3"
          @btn-click="input = defaultInput"
        />
        <atom-button
          :loading="banEdit"
          :text="input.id ? '更新' : '新規作成'"
          btn-class="border-solid border-width-1 border-grey-darken-4"
          @btn-click="mutateArticle()"
        />
      </div>
      <div v-for="item in articleInputs">
        <atom-text :text="item.title" font-size="text-subtitle-2" line-height="line-height-40" />
        <component
          :is="resolveComponent(InputComponents()[item.type].comp)"
          v-model="input[item.key]"
          v-bind="InputComponents(item.key, input[item.key])[item.type].props"
        />
      </div>
    </div>
    <div class="my-5">
      <div class="d-flex my-2">
        <atom-text text="一括取得" font-size="text-h6" class="my-2" />
        <v-spacer />
        <atom-button
          :loading="banEdit"
          text="再取得"
          btn-class="border-solid border-width-1 border-grey-darken-4"
          @btn-click="getArticles()"
        />
      </div>
      <easy-data-table
        :headers="
          headers.map((v) => {
            return { text: v, value: v }
          })
        "
        :items="articles"
        header-item-class-name="text-subtitle-2 font-weight-bold line-height-36"
        body-row-class-name="height-36 line-height-36 one-line-reader"
        buttons-pagination
        show-index
      >
        <template #item-oparation="item">
          <div class="d-flex flex-nowrap">
            <v-icon
              size="24"
              class="ma-2"
              @click="
                input = $filterAttr(articles[item.index - 1], [
                  'id',
                  'title',
                  'body',
                  'published',
                  'userArticleId',
                  'projectArticleId',
                  'eventArticleId'
                ])
              "
              >mdi-pencil
            </v-icon>
            <v-icon
              size="24"
              class="ma-2"
              @click="
                $extendMutation({
                  type: 'delete',
                  key: input.file?.key || '',
                  query: deleteArticle,
                  input: { id: item.id }
                })
              "
              >mdi-delete
            </v-icon>
          </div>
        </template>
      </easy-data-table>
    </div>
  </layout-admin>
</template>
