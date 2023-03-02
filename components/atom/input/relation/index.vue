<script setup lang="ts">
import { InputType } from '~/assets/type'
const { $listQuery, $baseMutation, $filterAttr } = useNuxtApp()
const { setExistError, setErrorMessages } = useErrorState()
const { banEdit } = useEditState()
const items = ref<any>([])
const tabs = ['新規作成・編集', '一覧']
const tab = ref<string>('')
const form = ref<any>(null)
const props = withDefaults(
  defineProps<{
    inputs: InputType[]
    title: string
    query: string
    createMutation: string
    updateMutation: string
    deleteMutation: string
  }>(),
  {
    inputs: () => [],
    title: '中間テーブル',
    query: '',
    createMutation: '',
    updateMutation: '',
    deleteMutation: ''
  }
)
const getRelation = async () => {
  items.value = await $listQuery({ query: props.query })
}
const mutateRelation = async () => {
  const validate = await form.value?.validate()
  if (!validate.valid) {
    setExistError(true)
    setErrorMessages(
      form.value?.errors.map((v: any) => v.errorMessages.map((m: string) => `${v.id}：${m}`)).flat()
    )
  }
  await $baseMutation({
    query: input.value.id ? props.updateMutation : props.createMutation,
    input: input.value.id
      ? $filterAttr(input.value, props.inputs)
      : $filterAttr(input.value, props.inputs, ['id'])
  })
  await getRelation()
}
const defaultInput = Object.fromEntries(props.inputs.map((v) => [v.key, v.default]))
const input = ref<any>(defaultInput)
await getRelation()
</script>
<template>
  <v-card class="rounded-lg mb-16">
    <v-tabs v-model="tab" class="bg-main-color text-white" :items="tabs"></v-tabs>
    <v-window v-model="tab">
      <v-window-item :value="tabs[0]">
        <div class="d-flex my-2 px-5">
          <atom-text
            :text="title + (input.id ? 'の更新' : 'の新規作成')"
            font-size="text-h6"
            class="my-2 line-clamp-1"
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
            @btn-click="mutateRelation()"
          />
        </div>
        <v-form ref="form" class="px-5">
          <atom-input
            v-for="item in inputs"
            :key="item.key"
            v-model="input[item.key]"
            :input="item"
          />
        </v-form>
      </v-window-item>
      <v-window-item :value="tabs[1]">
        <module-data-table
          :headers="
            ['oparation', ...Object.keys(defaultInput)].map((v) => {
              return { title: v, key: v }
            })
          "
          :items="items"
          @fetch-func="getRelation()"
          @edit-func="
            (item) => {
              input = $filterAttr(items[items.indexOf(item.raw)], inputs)
            }
          "
          @delete-func="(id) => $baseMutation({ query: deleteMutation, input: { id } })"
        />
      </v-window-item>
    </v-window>
  </v-card>
</template>
