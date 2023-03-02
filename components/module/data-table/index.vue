<script setup lang="ts">
const { banEdit } = useEditState()
const open = ref<boolean>(false)
const deleteId = ref<string>('')
withDefaults(
  defineProps<{
    headers: { title: string; key: string }[]
    items: any[]
  }>(),
  {
    headers: () => [],
    items: () => []
  }
)
const emit = defineEmits<{
  (e: 'fetch-func'): void
  (e: 'edit-func', item: any): void
  (e: 'delete-func', id: string): void
}>()
const deleteReady = (item: any) => {
  open.value = true
  if (!('id' in item)) return
  deleteId.value = item.id
}
const deleteItem = async () => {
  if (deleteId.value) await emit('delete-func', deleteId.value)
  await emit('fetch-func')
  open.value = false
}
</script>
<template>
  <v-data-table
    :headers="headers"
    :items="items"
    density="compact"
    :style="{ '--v-table-header-height': '40px' }"
    class="white-space-nowrap my-5"
  >
    <template #top>
      <div class="d-flex my-2">
        <atom-text text="一括取得" font-size="text-h6" class="my-2" />
        <v-spacer />
        <atom-button :loading="banEdit" text="再取得" @btn-click="$emit('fetch-func')" />
      </div>
    </template>
    <template #item.oparation="{ item }">
      <div class="d-flex flex-nowrap">
        <v-icon size="24" class="ma-2" @click="$emit('edit-func', item)">mdi-pencil</v-icon>
        <v-icon size="24" class="ma-2" @click="deleteReady(item.raw)">mdi-delete</v-icon>
      </div>
    </template>
  </v-data-table>
  <v-dialog v-model="open" persistent>
    <v-card flat class="rounded-lg py-6 px-10" min-width="370">
      <atom-text text="本当に削除しますか？" class="w-100 mt-5 mb-10 text-center" />
      <div class="d-flex justify-space-around">
        <atom-button
          text="削除します"
          :loading="banEdit"
          btn-class="rounded-pill width-200"
          @btn-click="deleteItem()"
        />
        <atom-button
          text="キャンセル"
          :loading="banEdit"
          btn-class="rounded-pill width-200"
          @btn-click="open = false"
        />
      </div>
    </v-card>
  </v-dialog>
</template>
