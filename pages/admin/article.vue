<script setup lang="ts">
import { Article, UpdateArticleInput, ListArticlesQuery } from '~/assets/API'
import { FileInput } from '~/assets/type'
import { articleInputs } from '~/assets/enum'
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
const defaultInput = JSON.parse(
  JSON.stringify(
    articleInputs.reduce((v, c) => {
      return { ...v, [c.key]: c.default }
    }, {})
  )
)
const input = ref<FileInput<UpdateArticleInput>>(defaultInput)
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
        <atom-input
          :key="item.key"
          v-model="input[item.key]"
          :input="item"
          :is-file="
            articleInputs
              .filter((v) => v.type === 'fileinput')
              .map((v) => v.key)
              .includes(item.key)
          "
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
      <v-data-table
        :headers="
          ['oparation', ...Object.keys(defaultInput)].map((v) => {
            return { title: v, key: v }
          })
        "
        :items="articles"
        density="compact"
        :style="{ '--v-table-header-height': '40px' }"
        class="white-space-nowrap"
      >
        <template #[`item.oparation`]="{ item }">
          <div class="d-flex flex-nowrap">
            <v-icon
              size="24"
              class="ma-2"
              @click="
                input = $filterAttr(
                  articles[articles.indexOf(item.raw)],
                  Object.keys(defaultInput),
                  articleInputs
                )
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
      </v-data-table>
    </div>
  </layout-admin>
</template>
