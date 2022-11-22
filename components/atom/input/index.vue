<script setup lang="ts">
import { S3Object } from '~~/assets/API'
const { $makeFileObjectForMutation } = useNuxtApp()
const richText = ['body']
const textArea = ['description']
const file = ['file']

withDefaults(
  defineProps<{
    label: string
    value: string | number | boolean | S3Object | any[] | null
  }>(),
  {
    label: '',
    value: null
  }
)
const emit = defineEmits<{
  (e: 'update:model-value', value: any): void
}>()
const onImageChange = async (e: any) => {
  const file = await $makeFileObjectForMutation('protected', e.target?.files[0])
  emit('update:model-value', file)
}
const fixArray = (values: any[], index: number, target: any) => {
  values[index] = target
  return values
}
// TODO:読み込み時に以前の画像データ(File Object)を再現する処理追加（多分aws-sdk 使う模様）
</script>
<template>
  <template v-if="Array.isArray(value)">
    <div class="w-100">
      <template v-for="(v, i) in value">
        <v-textarea
          v-if="textArea.includes(label)"
          :model-value="v"
          density="compact"
          clearable
          class="text-main-color"
          prepend-icon="mdi-plus"
          append-icon="mdi-minus"
          @click:append="
            Array.isArray(value) &&
              $emit(
                'update:model-value',
                value.filter((_, l) => l !== i)
              )
          "
          @click:prepend="
            Array.isArray(value) &&
              $emit('update:model-value', [...value, null])
          "
          @update:model-value="$emit('update:model-value', $event)"
        />
        <v-switch
          v-else-if="v === false || v === true"
          :model-value="v"
          hide-details
          density="compact"
          class="text-main-color"
          prepend-icon="mdi-plus"
          append-icon="mdi-minus"
          @click:append="
            Array.isArray(value) &&
              $emit(
                'update:model-value',
                value.filter((_, l) => l !== i)
              )
          "
          @click:prepend="
            Array.isArray(value) &&
              $emit('update:model-value', [...value, null])
          "
          @update:model-value="$emit('update:model-value', $event)"
        />
        <v-text-field
          v-else
          :model-value="v"
          density="compact"
          clearable
          class="text-main-color"
          prepend-icon="mdi-plus"
          append-icon="mdi-minus"
          @click:append="
            Array.isArray(value) &&
              $emit(
                'update:model-value',
                value.filter((_, l) => l !== i)
              )
          "
          @click:prepend="
            Array.isArray(value) &&
              $emit('update:model-value', [...value, null])
          "
          @update:model-value="
            Array.isArray(value) &&
              $emit('update:model-value', fixArray(value, i, $event))
          "
        />
      </template>
    </div>
  </template>
  <template v-else>
    <module-tiptap
      v-if="richText.includes(label)"
      :model-value="value"
      @update:model-value="$emit('update:model-value', $event)"
    />
    <v-textarea
      v-else-if="textArea.includes(label)"
      :model-value="value"
      density="compact"
      clearable
      class="text-main-color"
      @update:model-value="$emit('update:model-value', $event)"
    />
    <v-switch
      v-else-if="value === false || value === true"
      :model-value="value"
      hide-details
      density="compact"
      class="text-main-color"
      @update:model-value="$emit('update:model-value', $event)"
    />
    <input
      v-else-if="file.includes(label)"
      type="file"
      label="File input"
      density="compact"
      clearable
      @change="onImageChange($event)"
    />
    <v-text-field
      v-else
      :model-value="value"
      density="compact"
      clearable
      class="text-main-color"
      @update:model-value="$emit('update:model-value', $event)"
    />
  </template>
</template>
