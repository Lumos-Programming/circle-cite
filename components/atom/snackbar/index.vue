<script setup lang="ts">
import { SnackbarType } from '~/assets/type'
const { deleteSnackbar } = useSnackbar()
const props = withDefaults(
  defineProps<{
    item: SnackbarType
    index: number
  }>(),
  {
    index: 0
  }
)
const active = ref<boolean>(false)
const unitTime = 100
setTimeout(function () {
  active.value = true
}, unitTime)
setTimeout(function () {
  active.value = false
}, props.item.timeout)
setTimeout(function () {
  if (props.item.id) deleteSnackbar(props.item.id)
}, (props.item.timeout || 3000) + unitTime)
</script>
<template>
  <v-card
    class="position-fixed z-index-10 transition-short-ease height-40 rounded"
    :class="[
      item.background,
      active
        ? 'right-10 opacity-dot10'
        : 'right-n200 opacity-dot0 overflow-x-hidden'
    ]"
    :style="{ top: 150 + index * 60 + 'px !important', width: '200px' }"
  >
    <div class="d-flex align-center height-40">
      <v-icon :class="['mx-2', item.color]" size="24">
        {{ item.icon }}
      </v-icon>
      <atom-text
        :text="item.text"
        font-size="text-subtitle-2"
        line-height="line-height-lg"
        :color="item.color"
        class="word-break"
      >
      </atom-text>
    </div>
  </v-card>
</template>
