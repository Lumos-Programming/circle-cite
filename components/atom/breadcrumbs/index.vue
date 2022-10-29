<script setup lang="ts">
const { path } = useRoute()
const breadcrumbs = [
  { title: 'top', to: '/', disabled: path === '/' },
  ...path
    .slice(1)
    .split('/')
    .map((v) => {
      return {
        title: v,
        to: '/' + v,
        disabled: path.endsWith(v)
      }
    })
]
</script>
<template>
  <v-breadcrumbs
    :items="breadcrumbs"
    class="pa-0 text-caption"
    style="--v-disabled-opacity: 0.5"
  ></v-breadcrumbs>
</template>
