<script setup lang="ts">
const menu = [
  { text: 'About', function: () => navigateTo('/') },
  { text: '', function: () => navigateTo('/') },
  { text: 'Login', function: () => navigateTo('/login') }
]
</script>
<template>
  <div
    class="w-100 height-50 py-1 px-10 d-flex flex-nowrap position-sticky top-0 line-height-50 z-index-1"
    style="gap: 0 10px"
  >
    <!-- <v-img /> -->
    <atom-text text="Hooks" font-size="text-h6" line-height="line-height-42" />
    <v-spacer></v-spacer>
    <div
      v-for="item in menu"
      :key="item.text"
      class="h-100"
      @click="item.function()"
    >
      <atom-text
        :text="item.text"
        line-height="line-height-42"
        font-weight="font-weight-regular"
      />
    </div>
  </div>
</template>
