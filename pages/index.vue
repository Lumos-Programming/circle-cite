<script setup lang="ts">
useHead({ title: 'トップページ' })
</script>
<template>
  <layout-public>
    <div v-for="i in 5" class="d-flex align-center" style="height: 100vh">
      <div style="flex: 1">
        <atom-text text="Hooks" font-size="text-h2" class="my-2" />
        <atom-text
          text="Lumos Circle Site"
          font-weight="font-weight-regular"
          class="ml-1"
        />
      </div>
      <div style="flex: 1"></div>
    </div>
  </layout-public>
</template>
