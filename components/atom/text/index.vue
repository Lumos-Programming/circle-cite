<script setup lang="ts">
withDefaults(
  defineProps<{
    text?: string
    fontSize: string
    fontWeight: string
    color: string
    lineHeight: string
  }>(),
  {
    fontSize: 'text-subtitle-1',
    fontWeight: 'font-weight-bold',
    color: 'grey-darken-4',
    lineHeight: 'line-height-sm'
  }
)
</script>
<template>
  <p :class="[fontSize, fontWeight, color, lineHeight]"><slot />{{ text }}</p>
</template>
