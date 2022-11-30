<script setup lang="ts">
const { snackbars } = useSnackbar()
</script>
<template>
  <atom-snackbar
    v-for="(item, i) in snackbars"
    :key="item.id"
    :index="snackbars.length - (i + 1)"
    :item="item"
  />
</template>
