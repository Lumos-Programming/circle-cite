<script setup lang="ts">
import {
  Portfolio,
  CreatePortfolioInput,
  ListPortfoliosQuery
} from '~/assets/API'
import { FileInput } from '~/assets/type'
import {
  createPortfolio,
  deletePortfolio,
  updatePortfolio
} from '~/assets/graphql/mutations'
import { listPortfolios } from '~/assets/graphql/queries'
const { $listQuery, $extendMutation } = useNuxtApp()
const portfolios = ref<Portfolio[]>([])
const getPortfolios = async () => {
  portfolios.value = await $listQuery<ListPortfoliosQuery, Portfolio>({
    query: listPortfolios
  })
}
const input = ref<FileInput<CreatePortfolioInput>>({
  title: '',
  url: '',
  description: '',
  published: false,
  file: null,
  userPortfolioId: ''
})
const headers = [
  { text: 'id', value: 'id' },
  { text: 'userPortfolioId', value: 'userPortfolioId' },
  { text: 'title', value: 'title' },
  { text: 'published', value: 'published' },
  { text: 'oparation', value: 'oparation' }
]
getPortfolios()
// TODO: valiidationを掛けること
</script>
<template>
  <layout-admin>
    <atom-text font-size="text-h4" text="Portfolios" />
    <atom-breadcrumbs class="mb-5" />
    <v-card class="pa-5">
      <div class="d-flex my-2">
        <atom-text text="新規作成" font-size="text-h6" class="my-2" />
        <v-spacer />
        <atom-button
          text="新規作成"
          btn-class="border-solid border-width-1 border-grey-darken-4"
          @btn-click="
            $extendMutation({
              type: 'create',
              key: input.file?.key || '',
              query: createPortfolio,
              input: $filterAttr(input),
              file: input.file?.file
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
          @btn-click="getPortfolios()"
        />
      </div>
      <easy-data-table
        :headers="headers"
        :items="portfolios"
        header-item-class-name="text-subtitle-2 font-weight-bold line-height-36"
        body-row-class-name="height-48"
        buttons-pagination
        show-index
      >
        <template #expand="item">
          <json-editor
            v-model="portfolios[item.index - 1]"
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
                $extendMutation({
                  type: 'update',
                  key: input.file?.key || '',
                  query: updatePortfolio,
                  input: $filterAttr(portfolios[item.index - 1], [
                    'id',
                    'title',
                    'url',
                    'description',
                    'published',
                    'file',
                    'userPortfolioId'
                  ])
                })
              "
            ></v-btn>
            <v-btn
              icon="mdi-delete"
              variant="plain"
              @click="
                $extendMutation({
                  type: 'delete',
                  key: input.file?.key || '',
                  query: deletePortfolio,
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
