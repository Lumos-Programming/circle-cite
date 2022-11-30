<script setup lang="ts">
import { S3ObjectInput } from '~~/assets/API'
import { InputAttr } from '~~/assets/enum'
const { $makeS3Object } = useNuxtApp()
withDefaults(
  defineProps<{
    label: string
    value: string | number | boolean | S3ObjectInput | any[] | null
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
  if (!e.target?.files.length) return
  const file = await $makeS3Object(e.target?.files[0])
  emit('update:model-value', file)
}
const fixArray = (values: any[], index: number, target: any) => {
  values[index] = target
  return values
}
</script>
<template>
  <template v-if="Array.isArray(value)">
    <div class="w-100">
      <template v-for="(v, i) in value">
        <v-textarea
          v-if="InputAttr.TextArea.includes(label)"
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
          :class="v === true ? 'text-main-color' : 'text-grey-darken-4'"
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
      v-if="InputAttr.RichText.includes(label)"
      :model-value="value"
      @update:model-value="$emit('update:model-value', $event)"
    />
    <v-textarea
      v-else-if="InputAttr.TextArea.includes(label)"
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
      :class="value === true ? 'text-main-color' : 'text-grey-darken-4'"
      @update:model-value="$emit('update:model-value', $event)"
    />
    <div
      v-else-if="InputAttr.File.includes(label)"
      class="d-flex flex-nowrap"
      :style="{ width: 'calc(100% - 120px)' }"
    >
      <label
        class="border-width-1 border-main-color border-solid rounded width-100 height-26 my-2 text-center cursor-pointer"
      >
        <input
          id="fileTarget"
          type="file"
          accept="image/*"
          class="d-none"
          @change="onImageChange($event)"
        />
        <atom-text
          text="ファイル選択"
          font-size="text-caption"
          font-weight="font-weight-regular"
          line-height="line-height-lg"
          class="my-1"
        />
      </label>
      <atom-text
        :text="value?.name || 'ファイルが選択されていません'"
        font-size="text-caption"
        font-weight="font-weight-regular"
        line-height="line-height-lg"
        class="my-3 mx-2 line-clamp-1"
        :style="{ width: 'calc(100% - 118px)' }"
      />
      <v-icon
        v-if="value?.name"
        size="18"
        class="my-3"
        @click="$emit('update:model-value', null)"
        >mdi-close
      </v-icon>
    </div>

    <v-text-field
      v-else
      :model-value="value"
      density="compact"
      clearable
      :disabled="label === 'id' || label === 'email'"
      class="text-main-color"
      @update:model-value="$emit('update:model-value', $event)"
    />
  </template>
</template>
