<script setup lang="ts">
const { isSignedIn, isAdmin } = useLoginState()
const expand = ref<boolean>(false)
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
  }
  // {
  //   title: '設定',
  //   icon: 'mdi-cog-outline',
  //   path: '/setting'
  // }
]
</script>
<template>
  <div class="d-flex flex-nowrap bg-grey-color" style="width: 100vw; min-height: 100vh">
    <!-- NOTE: 画面左側メニュバー -->
    <v-card
      class="transition-medium-ease-out pa-2 position-relative bg-main-color rounded-0 d-flex flex-column flex-nowrap"
      :class="expand ? 'width-160' : 'width-52'"
    >
      <div class="d-flex">
        <atom-text
          font-size="text-h5 "
          class="one-line-reader flex-shrink-1"
          text="Hooks"
          line-height="line-height-72"
          :color="isSignedIn ? (isAdmin ? 'text-accent-color' : 'text-white') : 'text-main-color'"
        />
        <v-spacer></v-spacer>
        <v-btn
          :icon="expand ? 'mdi-arrow-left' : 'mdi-arrow-right'"
          variant="plain"
          class="height-24 width-24 my-6 mr-2 text-white"
          @click="expand = !expand"
        ></v-btn>
      </div>

      <atom-text
        font-size="text-caption"
        text="Pages"
        color="text-white"
        line-height="line-height-20"
        font-weight="font-weight-regular"
        class="my-3 one-line-reader"
      />
      <v-btn
        v-for="page in pages"
        :key="page.title"
        :to="page.path"
        class="height-30 my-1 px-2 transition-medium-ease-out"
        :class="expand ? 'width-144' : 'width-36  min-width-0'"
        variant="text"
        :ripple="false"
      >
        <v-icon
          class="width-20 text-white transition-medium-ease-out"
          :class="expand ? 'mr-2' : 'mr-0'"
        >
          {{ page.icon }}
        </v-icon>
        <atom-text
          font-size="text-caption"
          class="one-line-reader transition-medium-ease-out"
          :class="expand ? 'width-100' : 'width-0'"
          :text="page.title"
          color="text-white"
          line-height="line-height-30"
        />
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        class="height-30 px-2 mb-2 border-solid border-width-1 border-white min-width-0 transition-medium-ease-out"
        :class="expand ? 'width-144' : 'width-36'"
        variant="text"
        :ripple="false"
        @click="$signOut()"
      >
        <v-icon
          class="width-20 text-white transition-medium-ease-out"
          :class="expand ? 'mr-2' : 'mr-0'"
          >mdi-logout
        </v-icon>
        <atom-text
          font-size="text-caption"
          class="one-line-reader transition-medium-ease-out"
          :class="expand ? 'width-100' : 'width-0'"
          text="ログアウト"
          color="text-white"
          line-height="line-height-30"
        />
      </v-btn>
    </v-card>
    <div
      class="pt-5 px-5 bg-white overflow-y-auto scrollbar-hidden position-relative"
      :style="{ flex: '1', height: 'calc(100vh - 40px)' }"
    >
      <atom-text font-size="text-h6" line-height="line-height-lg" text="Hooks Admin" />
      <atom-breadcrumbs class="mb-5" />
      <atom-menu-icon />
      <slot />
    </div>
  </div>
</template>
