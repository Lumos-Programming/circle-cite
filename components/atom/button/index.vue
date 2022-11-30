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
</script>
<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-btn
      class="height-40 px-4 py-2 transition-medium-ease"
      :class="[isHovering ? 'bg-main-color' : 'bg-white', btnClass]"
      :loading="loading"
      :ripple="false"
      variant="flat"
      v-bind="props"
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
  </v-hover>
</template>
