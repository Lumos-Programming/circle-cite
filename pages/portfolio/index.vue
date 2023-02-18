<script setup lang="ts">
import { Portfolio, ListPortfoliosQuery } from '~/assets/API'
import { listPortfolios } from '~/assets/graphql/queries'
const { $listQuery } = useNuxtApp()
const portfolios = ref<Portfolio[]>([])
const getPortfolios = async () => {
  portfolios.value = await $listQuery<ListPortfoliosQuery, Portfolio>({
    query: listPortfolios,
    filter: { published: { eq: true } }
  })
}
await getPortfolios()
</script>
<template>
  <layout-public>
    <atom-text font-size="text-h4" text="Portfolio" class="py-10" />
    <div class="d-flex flex-wrap">
      <module-content-medium
        v-for="item in portfolios"
        :key="item.id"
        :img-key="item.file?.key"
        :identity-id="item.file?.identityId"
        :created-at="item.createdAt"
        :updated-at="item.updatedAt"
        :title="item.title"
        class="v-col-12 v-col-sm-6 v-col-md-4"
        @click-func="navigateTo(item.url, { external: true })"
      >
      </module-content-medium>
    </div>
  </layout-public>
</template>
