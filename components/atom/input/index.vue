<script setup lang="ts">
import { InputType } from '~/assets/type'
import { InputComponents } from '~/assets/enum'
const { $makeS3Object } = useNuxtApp()
const props = withDefaults(
  defineProps<{
    input: InputType
    modelValue: any
  }>(),
  { modelValue: () => ({}) }
)
const emit = defineEmits<{
  (e: 'update:model-value', value: any): void
}>()
const onChange = async ({ index = 0, event }: { index?: number; event?: Event | File[] }) => {
  let res = props.modelValue
  let data: any = event
  if (props.input.type === 'fileinput' && Array.isArray(event)) {
    if (!event?.length) return
    data = await $makeS3Object(event[0])
  }
  if (Array.isArray(props.modelValue)) res[index] = data
  else res = data

  emit('update:model-value', res)
}
</script>
<template>
  <atom-text :text="input.title" line-height="line-height-lg" class="pb-2 pl-1" />
  <template v-if="input.isArray">
    <component
      :is="resolveComponent(InputComponents()[input.type].comp)"
      v-for="(v, i) in modelValue"
      v-bind="{ ...InputComponents(input.key, v)[input.type].props, ...input.props }"
      :id="input.title + '-' + i"
      class="mb-4"
      :rules="input.rules"
      prepend-icon="mdi-plus"
      append-icon="mdi-minus"
      :model-value="v"
      @update:model-value="onChange({ index: i, event: $event })"
      @click:prepend="$emit('update:model-value', [...modelValue, null])"
      @click:append="
        $emit('update:model-value', [...modelValue.slice(0, i), ...modelValue.slice(i + 1)])
      "
    />
  </template>
  <template v-else>
    <component
      :is="resolveComponent(InputComponents()[input.type].comp)"
      v-bind="{ ...InputComponents(input.key, modelValue)[input.type].props, ...input.props }"
      :id="input.title"
      class="mb-4"
      :rules="input.rules"
      :model-value="modelValue"
      @update:model-value="onChange({ event: $event })"
    />
  </template>
</template>
