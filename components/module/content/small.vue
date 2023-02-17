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
  <v-sheet
    class="bg-white pa-5 rounded-lg transition-long-ease-out cursor-pointer"
    :class="isHovering ? 'bg-main-color' : 'bg-white'"
    @click="navigateTo(path)"
    @mouseover="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <atom-text
      :text="title"
      font-size="text-h6"
      line-height="line-height-lg"
      :color="isHovering ? 'text-white' : 'text-grey-darken-4'"
    />
    <slot :is-hovering="isHovering" />
  </v-sheet>
</template>
