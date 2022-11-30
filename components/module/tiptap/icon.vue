<script setup lang="ts">
const isHovering = ref<boolean>(false)
withDefaults(
  defineProps<{
    icon: string
    disabled: () => boolean
  }>(),
  {
    icon: 'mdi-format-bold',
    disabled: () => false
  }
)
</script>
<template>
  <v-icon
    size="20"
    class="rounded width-28 height-28 transition-short-ease"
    :class="
      disabled()
        ? 'text-grey-lighten-1 cursor-default'
        : isHovering
        ? 'bg-grey-darken-4 cursor-pointer'
        : 'bg-white cursor-pointer'
    "
    @click="$emit('click-func')"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
    >{{ icon }}
  </v-icon>
</template>
