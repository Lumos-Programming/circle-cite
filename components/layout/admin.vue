<script setup lang="ts">
const pages = [
  {
    title: '管理画面トップ',
    icon: 'mdi-home',
    path: '/admin'
  },
  {
    title: 'メンバー',
    icon: 'mdi-account-group',
    path: '/admin/member'
  },
  {
    title: '記事',
    icon: 'mdi-image',
    path: '/admin/article'
  },
  {
    title: 'プロジェクト',
    icon: 'mdi-account',
    path: '/admin/project'
  },
  {
    title: 'イベント',
    icon: 'mdi-content-paste',
    path: '/admin/event'
  },
  {
    title: 'スキルタグ',
    icon: 'mdi-content-paste',
    path: '/admin/skill'
  }
  // {
  //   title: '設定',
  //   icon: 'mdi-cog-outline',
  //   path: '/setting'
  // }
]
</script>
<template>
  <v-sheet class="d-flex" style="width: 100vw; height: 100vh">
    <v-card class="ma-5 elevation-5" style="flex: 0 0 200px">
      <v-btn v-for="page in pages" :key="page.title" :to="page.path">
        <v-icon>{{ page.icon }}</v-icon>
      </v-btn>
    </v-card>
    <v-sheet style="flex: 1">
      <slot />
    </v-sheet>
  </v-sheet>
</template>
