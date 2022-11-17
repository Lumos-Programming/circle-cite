<script setup lang="ts">
withDefaults(
  defineProps<{
    text: string
    btnClass: string
    textClass: string
  }>(),
  {
    text: '',
    btnClass: '',
    textClass: ''
  }
)
</script>
<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-btn
      class="height-40 px-4 py-2 transition-medium-ease"
      :class="[isHovering ? 'elevation-3 bg-white' : 'bg-sub-color', btnClass]"
      :ripple="false"
      variant="flat"
      v-bind="props"
      @click="$emit('btn-click')"
    >
      <slot />
      <atom-text
        :text="text"
        line-height="line-height-lg"
        :class="[textClass]"
      />
    </v-btn>
  </v-hover>
</template>
