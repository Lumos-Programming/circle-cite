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
getPortfolios()
</script>
<template>
  <layout-public>
    <atom-text font-size="text-h4" text="Portfolio" class="py-10" />
  </layout-public>
</template>
