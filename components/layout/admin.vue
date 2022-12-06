<script setup lang="ts">
const { isSignedIn, isAdmin } = useLoginState()
const pages = [
  {
    title: 'トップ',
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
    icon: 'mdi-human-male-board-poll',
    path: '/admin/project'
  },
  {
    title: 'イベント',
    icon: 'mdi-content-paste',
    path: '/admin/event'
  },
  {
    title: 'ポートフォリオ',
    icon: 'mdi-briefcase-outline',
    path: '/admin/portfolio'
  },
  {
    title: 'スキルタグ',
    icon: 'mdi-tag-outline',
    path: '/admin/skill'
  },
  {
    title: 'リンク集',
    icon: 'mdi-link',
    path: '/admin/link'
  }
  // {
  //   title: '設定',
  //   icon: 'mdi-cog-outline',
  //   path: '/setting'
  // }
]
</script>
<template>
  <div
    class="d-flex flex-nowrap bg-sub-color"
    style="width: 100vw; min-height: 100vh"
  >
    <!-- NOTE: 画面左側メニュバー -->
    <v-card
      :class="[
        'transition-medium-ease-out pa-5 position-relative bg-transparent rounded-0 elevation-0'
      ]"
      style="flex: 0 0 200px"
    >
      <atom-text
        font-size="text-h3"
        class="ml-1 one-line-reader letter-spacing-30"
        text="Hooks"
        line-height="line-height-70"
        :color="
          isSignedIn
            ? isAdmin
              ? 'text-accent-color'
              : 'text-grey-darken-4'
            : 'text-main-color'
        "
      />
      <v-divider class="my-2 bg-grey-darken-4" />
      <v-btn
        v-for="page in pages"
        :key="page.title"
        :to="page.path"
        class="widht-200 height-40 my-1"
        variant="text"
        :ripple="false"
      >
        <v-icon class="width-40 text-grey-darken-4">{{ page.icon }}</v-icon>
        <atom-text
          font-size="text-caption"
          class="width-120 one-line-reader line-height-40"
          :text="page.title"
          color="text-grey-darken-4"
        />
      </v-btn>
      <v-divider class="my-2 bg-grey-darken-4" />
      <v-btn
        class="widht-200 height-40 my-1 px-0 position-absolute bottom-20 left-20"
        variant="text"
        :ripple="false"
        @click="$signOut()"
      >
        <v-icon class="width-40 text-grey-darken-4">mdi-logout</v-icon>
        <atom-text
          font-size="text-caption"
          class="width-120 one-line-reader line-height-40"
          text="ログアウト"
          color="text-grey-darken-4"
        />
      </v-btn>
    </v-card>
    <div
      class="pt-5 px-5 overflow-y-auto scrollbar-hidden position-relative"
      :style="{ flex: '1', height: 'calc(100vh - 40px)' }"
    >
      <atom-menu-icon />
      <slot />
    </div>
  </div>
</template>
