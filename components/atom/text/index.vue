<script setup lang="ts">
withDefaults(
  defineProps<{
    text: string | null
    fontSize?: string
    fontWeight?: string
    color?: string
    lineHeight?: string
  }>(),
  {
    text: '',
    fontSize: 'text-subtitle-1',
    fontWeight: 'font-weight-bold',
    color: 'text-grey-darken-4',
    lineHeight: 'line-height-sm'
  }
)
</script>
<template>
  <p :class="[fontSize, fontWeight, color, lineHeight]"><slot />{{ text }}</p>
</template>
