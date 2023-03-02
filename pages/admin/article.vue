<script setup lang="ts">
import { Article, UpdateArticleInput, ListArticlesQuery } from '~/assets/API'
import { FileInput } from '~/assets/type'
import { articleInputs } from '~/assets/enum'
import { createArticle, deleteArticle, updateArticle } from '~/assets/graphql/mutations'
import { listArticles } from '~/assets/graphql/queries'
const { $listQuery, $extendMutation, $filterAttr } = useNuxtApp()
const { banEdit } = useEditState()
const { setExistError, setErrorMessages } = useErrorState()
const articles = ref<Article[]>([])
const form = ref<any>()
const getArticles = async () => {
  articles.value = await $listQuery<ListArticlesQuery, Article>({
    query: listArticles
  })
}
const mutateArticle = async () => {
  const validate = await form.value?.validate()
  if (!validate.valid) {
    setExistError(true)
    setErrorMessages(
      form.value?.errors.map((v: any) => v.errorMessages.map((m: string) => `${v.id}：${m}`)).flat()
    )
    return
  }
  await $extendMutation({
    type: input.value.id ? 'update' : 'create',
    key: input.value.file?.key || '',
    query: input.value.id ? updateArticle : createArticle,
    input: input.value.id
      ? $filterAttr(input.value, articleInputs)
      : $filterAttr(input.value, articleInputs, ['id']),
    file: input.value.file?.file
  })
  await getArticles()
}
const defaultInput = Object.fromEntries(articleInputs.map((v) => [v.key, v.default]))
const input = ref<FileInput<Partial<UpdateArticleInput>>>(defaultInput)
await getArticles()
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
          btn-class="mr-3"
          @btn-click="input = defaultInput"
        />
        <atom-button
          :loading="banEdit"
          :text="input.id ? '更新' : '新規作成'"
          @btn-click="mutateArticle()"
        />
      </div>
      <v-form ref="form">
        <atom-input
          v-for="item in articleInputs"
          :key="item.key"
          v-model="input[item.key]"
          :input="item"
        />
      </v-form>
    </div>
    <module-data-table
      :headers="
        ['oparation', ...Object.keys(defaultInput)].map((v) => {
          return { title: v, key: v }
        })
      "
      :items="articles"
      @fetch-func="getArticles()"
      @edit-func="
        (item) => {
          input = $filterAttr(articles[articles.indexOf(item.raw)], articleInputs)
        }
      "
      @delete-func="
        (id) =>
          $extendMutation({
            type: 'delete',
            key: input.file?.key || '',
            query: deleteArticle,
            input: { id }
          })
      "
    />
  </layout-admin>
</template>
