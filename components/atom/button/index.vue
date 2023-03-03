<script setup lang="ts">
withDefaults(
  defineProps<{
    text: string
    btnClass: string
    textClass: string
    loading: boolean
  }>(),
  {
    text: '',
    btnClass: '',
    textClass: '',
    loading: false
  }
)
const isHovering = ref<boolean>(false)
</script>
<template>
  <v-btn
    class="height-40 px-4 py-2 transition-short-ease"
    :class="[isHovering ? 'bg-main-color' : 'bg-white', btnClass]"
    :loading="loading"
    :ripple="false"
    variant="outlined"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
    @click="$emit('btn-click')"
  >
    <slot />
    <atom-text
      :text="text"
      line-height="line-height-lg"
      :color="isHovering ? 'text-white' : 'text-grey-darken-4'"
      :class="[textClass]"
    />
  </v-btn>
</template>
