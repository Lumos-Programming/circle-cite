<script setup lang="ts">
import * as q from '~/assets/graphql/queries'
const { $listQuery } = useNuxtApp()
const items = ref<any[]>([])
const props = withDefaults(
  defineProps<{
    queryName: keyof typeof q
    itemTitle: string
    modelValue: any
  }>(),
  {
    queryName: 'listUsers',
    itemTitle: 'title',
    modelValue: null
  }
)
items.value = await $listQuery({ query: new Map(Object.entries(q)).get(props.queryName) || '' })
</script>
<template>
  <v-select
    clearable
    density="compact"
    variant="outlined"
    no-data-text="選択肢がありません"
    class="text-main-color"
    :items="items"
    :item-title="itemTitle"
    item-value="id"
    :model-value="modelValue"
    @update:model-value="$emit('update:model-value', $event)"
  >
    <template #selection="{ item }">
      <atom-text
        v-if="item.title"
        :text="item.title"
        font-size="text-subtitle-2"
        line-height="line-height-lg"
        color="text-white"
        class="bg-main-color px-2 py-1"
      />
    </template>
  </v-select>
</template>
