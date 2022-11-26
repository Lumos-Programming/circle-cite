<script setup lang="ts">
import { Link, CreateLinkInput, ListLinksQuery } from '~/assets/API'
import { createLink, deleteLink, updateLink } from '~/assets/graphql/mutations'
import { listLinks } from '~/assets/graphql/queries'
const { $listQuery, $baseMutation } = useNuxtApp()
const links = ref<Link[]>([])
const getLinks = async () => {
  links.value = await $listQuery<ListLinksQuery, Link>({ query: listLinks })
}
const filterAttr = (item: Link) => {
  return {
    id: item.id,
    url: item.url || '',
    likes: item.likes || 0
  }
}
const input = ref<CreateLinkInput & { [key: string]: any }>({
  url: '',
  likes: 0
})
const headers = [
  { text: 'id', value: 'id' },
  { text: 'url', value: 'url' },
  { text: 'likes', value: 'likes' },
  { text: 'oparation', value: 'oparation' }
]
getLinks()
// TODO: valiidationを掛けること
</script>
<template>
  <layout-admin>
    <atom-text font-size="text-h4" text="Links" />
    <atom-breadcrumbs class="mb-5" />
    <v-card class="pa-5">
      <div class="d-flex my-2">
        <atom-text text="新規作成" font-size="text-h6" class="my-2" />
        <v-spacer />
        <atom-button
          text="新規作成"
          btn-class="border-solid border-width-1 border-grey-darken-4"
          @btn-click="
            $baseMutation({
              query: createLink,
              input
            })
          "
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
          text="再取得"
          btn-class="border-solid border-width-1 border-grey-darken-4"
          @btn-click="getLinks()"
        />
      </div>
      <easy-data-table
        :headers="headers"
        :items="links"
        header-item-class-name="text-subtitle-2 font-weight-bold line-height-36"
        body-row-class-name="height-48"
        buttons-pagination
        show-index
      >
        <template #expand="item">
          <json-editor
            v-model="links[item.index - 1]"
            height="400"
            mode="tree"
          />
        </template>
        <template #item-oparation="item">
          <div class="d-flex flex-nowrap">
            <v-btn
              icon="mdi-update"
              variant="plain"
              @click="
                $baseMutation({
                  query: updateLink,
                  input: filterAttr($findItem(links, 'id', item.id))
                })
              "
            ></v-btn>
            <v-btn
              icon="mdi-delete"
              variant="plain"
              @click="
                $baseMutation({
                  query: deleteLink,
                  input: { id: item.id }
                })
              "
            ></v-btn>
          </div>
        </template>
      </easy-data-table>
    </v-card>
  </layout-admin>
</template>
