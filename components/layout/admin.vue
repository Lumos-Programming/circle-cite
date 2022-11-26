<script setup lang="ts">
const { isAdmin } = useLoginState()
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
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        v-bind="props"
        :class="[
          isHovering ? 'width-200' : 'width-200',
          'transition-medium-ease-out pa-5 ma-5 position-relative bg-main-color'
        ]"
        style="flex: 0 0 200px"
      >
        <div class="height-120 ml-1 mt-10">
          <atom-text
            font-size="text-h3"
            class="one-line-reader letter-spacing-main letter-spacing-30"
            text="Hooks"
            color="text-white"
          />
          <atom-text
            font-size="text-h3"
            class="one-line-reader letter-spacing-main letter-spacing-30"
            text="Admin"
            :color="isAdmin ? 'text-accent-color' : 'text-white'"
          />
        </div>
        <v-divider class="my-2 bg-white" />
        <v-btn
          v-for="page in pages"
          :key="page.title"
          :to="page.path"
          class="width-160 height-40 my-1"
          variant="text"
          :ripple="false"
          style="flex: 0"
        >
          <v-icon class="width-40 text-white">{{ page.icon }}</v-icon>
          <atom-text
            :class="[isHovering ? 'width-120' : 'width-120']"
            font-size="text-caption"
            class="one-line-reader"
            style="line-height: 40px !important"
            :text="page.title"
            color="text-white"
          />
        </v-btn>
        <v-btn
          class="width-160 height-40 my-1 position-absolute bottom-20 left-20"
          variant="text"
          :ripple="false"
          style="flex: 0"
          @click="$signOut()"
        >
          <v-icon class="width-40 text-white">mdi-logout</v-icon>
          <atom-text
            :class="[isHovering ? 'width-120' : 'width-120']"
            font-size="text-caption"
            class="one-line-reader"
            style="line-height: 40px !important"
            text="ログアウト"
            color="text-white"
          />
        </v-btn>
      </v-card>
    </v-hover>
    <div
      class="pt-16 mx-5 overflow-y-auto scrollbar-hidden"
      :style="{ flex: '1', height: 'calc(100vh - 40px)' }"
    >
      <slot />
    </div>
  </div>
</template>
