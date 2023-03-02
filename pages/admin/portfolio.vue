<script setup lang="ts">
import { Portfolio, UpdatePortfolioInput, ListPortfoliosQuery } from '~/assets/API'
import { FileInput } from '~/assets/type'
import { portfolioInputs } from '~/assets/enum'
import { createPortfolio, deletePortfolio, updatePortfolio } from '~/assets/graphql/mutations'
import { listPortfolios } from '~/assets/graphql/queries'
const { $listQuery, $extendMutation, $filterAttr } = useNuxtApp()
const { banEdit } = useEditState()
const { setExistError, setErrorMessages } = useErrorState()
const portfolios = ref<Portfolio[]>([])
const form = ref<any>()
const getPortfolios = async () => {
  portfolios.value = await $listQuery<ListPortfoliosQuery, Portfolio>({
    query: listPortfolios
  })
}
const mutatePortfolio = async () => {
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
    query: input.value.id ? updatePortfolio : createPortfolio,
    input: input.value.id
      ? $filterAttr(input.value, portfolioInputs)
      : $filterAttr(input.value, portfolioInputs, ['id']),
    file: input.value.file?.file
  })
  await getPortfolios()
}
const defaultInput = Object.fromEntries(portfolioInputs.map((v) => [v.key, v.default]))
const input = ref<FileInput<Partial<UpdatePortfolioInput>>>(defaultInput)
await getPortfolios()
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
          @btn-click="mutatePortfolio()"
        />
      </div>
      <v-form ref="form">
        <atom-input
          v-for="item in portfolioInputs"
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
      :items="portfolios"
      @fetch-func="getPortfolios()"
      @edit-func="
        (item) => {
          input = $filterAttr(portfolios[portfolios.indexOf(item.raw)], portfolioInputs)
        }
      "
      @delete-func="
        (id) =>
          $extendMutation({
            type: 'delete',
            key: input.file?.key || '',
            query: deletePortfolio,
            input: { id }
          })
      "
    />
  </layout-admin>
</template>
