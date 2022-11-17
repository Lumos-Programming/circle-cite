<script setup lang="ts">
useHead({ title: 'トップページ' })
</script>
<template>
  <layout-public>
    <div
      class="d-flex align-center"
      style="height: calc(var(--vh, 1vh) * 100 - 80px)"
    >
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
