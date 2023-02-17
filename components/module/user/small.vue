<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string | null
    path: string
    imgKey: string
    identityId: string
  }>(),
  {
    name: '',
    path: '/',
    imgKey: '',
    identityId: ''
  }
)
</script>
<template>
  <v-sheet class="w-100 bg-transparent">
    <v-hover v-slot="{ isHovering, props }">
      <module-user-icon
        :img-key="imgKey"
        :identity-id="identityId"
        v-bind="props"
        :style="{ transform: isHovering ? 'scale(1.05)' : 'scale(1.0)' }"
        @click-func="navigateTo(path)"
      />
    </v-hover>
    <atom-text font-size="text-h5" class="text-center my-3" :text="name" />
  </v-sheet>
</template>
