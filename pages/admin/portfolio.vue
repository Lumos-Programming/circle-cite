<script setup lang="ts">
import {
  CreatePortfolioInput,
  ListPortfoliosQuery,
  Portfolio
} from '~/assets/API'
import {
  createPortfolio,
  deletePortfolio,
  updatePortfolio
} from '~/assets/graphql/mutations'
import { listPortfolios } from '~/assets/graphql/queries'
const { $getYMD, $listQuery } = useNuxtApp()
const portfolios = ref<Portfolio[]>([])
const getPortfolios = async () => {
  portfolios.value = await $listQuery<ListPortfoliosQuery, Portfolio>({
    name: 'listPortfolios',
    query: listPortfolios
  })
}
const input = ref<CreatePortfolioInput>({
  title: '',
  url: '',
  description: '',
  published: false,
  userPortfolioId: null
})
getPortfolios()
</script>
<template>
  <layout-admin>
    <atom-text font-size="text-h4" text="Portfolios" />
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
              name: 'createPortfolio',
              query: createPortfolio,
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
              name: 'updatePortfolio',
              query: updatePortfolio,
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
              name: 'deletePortfolio',
              query: deletePortfolio,
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
        <atom-text text="All Portfolios" font-size="text-h6" class="my-2" />
        <v-spacer />
        <v-btn variant="outlined" @click="getPortfolios()"> 再取得 </v-btn>
      </div>
      <json-editor v-model="portfolios" height="400" mode="tree" />
    </v-card>
  </layout-admin>
</template>
