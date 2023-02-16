<script setup lang="ts">
const isHovering = ref<boolean>(false)
withDefaults(
  defineProps<{
    btnClass: string
  }>(),
  {
    btnClass: ''
  }
)
</script>
<template>
  <div
    class="w-100 h-100 transition-medium-ease rounded-circle cursor-pointer"
    :class="[isHovering ? 'elevation-3 background-white' : 'background-grey-lighten-4', btnClass]"
    @mouseover="isHovering = true"
    @mouseleave="isHovering = false"
    @click="$emit('btn-click')"
  >
    <slot />
  </div>
</template>
