<script setup lang="ts">
import { Link, UpdateLinkInput, ListLinksQuery } from '~/assets/API'
import { IndexSignature } from '~/assets/type'
import { createLink, deleteLink, updateLink } from '~/assets/graphql/mutations'
import { listLinks } from '~/assets/graphql/queries'
const { $listQuery, $baseMutation, $filterAttr, $excludeAttr } = useNuxtApp()
const { banEdit } = useEditState()
const links = ref<Link[]>([])
const getLinks = async () => {
  links.value = await $listQuery<ListLinksQuery, Link>({ query: listLinks })
}
const mutateLink = async () => {
  await $baseMutation({
    query: input.value.id ? updateLink : createLink,
    input: input.value.id ? input.value : $excludeAttr(input.value, ['id'])
  })
}
const defaultInput = {
  id: '',
  url: ''
}
const input = ref<IndexSignature<UpdateLinkInput>>(defaultInput)
const headers = ['id', 'url', 'oparation']
await getLinks()
// TODO: valiidationを掛けること
</script>
<template>
  <layout-admin>
    <atom-text font-size="text-h4" text="Links" />
    <atom-breadcrumbs class="mb-5" />
    <v-card class="pa-5">
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
          @btn-click="mutateLink()"
        />
      </div>
      <div v-for="[key, item] in Object.entries(input)" class="d-flex">
        <atom-text
          :text="key"
          font-size="text-subtitle-2"
          line-height="line-height-40"
          style="flex: 0 0 120px"
        />
        <atom-input v-model="input[key]" :value="item" :label="key" />
      </div>
    </v-card>
    <v-card class="pa-5 my-5">
      <div class="d-flex my-2">
        <atom-text text="一括取得" font-size="text-h6" class="my-2" />
        <v-spacer />
        <atom-button
          :loading="banEdit"
          text="再取得"
          btn-class="border-solid border-width-1 border-grey-darken-4"
          @btn-click="getLinks()"
        />
      </div>
      <easy-data-table
        :headers="
          headers.map((v) => {
            return { text: v, value: v }
          })
        "
        :items="links"
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
              @click="input = $filterAttr(links[item.index - 1], ['id', 'url'])"
              >mdi-pencil
            </v-icon>
            <v-icon
              size="24"
              class="ma-2"
              @click="
                $baseMutation({
                  query: deleteLink,
                  input: { id: item.id }
                })
              "
              >mdi-delete
            </v-icon>
          </div>
        </template>
      </easy-data-table>
    </v-card>
  </layout-admin>
</template>
