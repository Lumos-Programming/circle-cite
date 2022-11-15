<script setup lang="ts">
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
  <v-hover v-slot="{ isHovering, props }">
    <div
      class="height-40 width-40 transition-medium-ease rounded-circle cursor-pointer"
      :class="[
        isHovering
          ? 'elevation-3 background-white'
          : 'background-grey-lighten-4',
        btnClass
      ]"
      v-bind="props"
      @click="$emit('btn-click')"
    >
      <slot />
    </div>
  </v-hover>
</template>
