<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string | null
    path: string
  }>(),
  {
    title: '',
    path: '/'
  }
)
const isHovering = ref<boolean>(false)
</script>
<template>
  <v-card
    class="w-100 pb-2 rounded-lg transition-medium-ease"
    :style="{ transform: isHovering ? 'scale(1.05)' : 'scale(1.0)' }"
    @click="$emit('click-func')"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <slot name="upper" />
    <atom-text
      :text="title"
      line-height="line-height-lg"
      class="ma-2 line-clamp-3 height-72"
      @click="$emit('click-func')"
    />
    <slot :is-hovering="isHovering" />
  </v-card>
</template>
