<script setup lang="ts">
const { isSignedIn, isAdmin } = useLoginState()
const route = useRoute()
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
    icon: 'mdi-pen',
    path: '/admin/article'
  },
  {
    title: 'プロジェクト',
    icon: 'mdi-one-up',
    path: '/admin/project'
  },
  {
    title: 'イベント',
    icon: 'mdi-calendar',
    path: '/admin/event'
  },
  {
    title: 'ポートフォリオ',
    icon: 'mdi-palette',
    path: '/admin/portfolio'
  },
  {
    title: 'スキルタグ',
    icon: 'mdi-tag-outline',
    path: '/admin/skill'
  },
  {
    title: '紐付け',
    icon: 'mdi-relation-many-to-many',
    path: '/relation'
  }
]
</script>
<template>
  <div class="d-flex flex-nowrap bg-grey-color" style="width: 100vw; min-height: 100vh">
    <!-- NOTE: 画面左側メニュバー -->
    <v-card
      class="transition-medium-ease-out pa-2 position-relative bg-main-color rounded-0 d-flex flex-column flex-nowrap"
      :class="expand ? 'width-160' : 'width-52'"
      @mouseenter="expand = true"
      @mouseleave="expand = false"
    >
      <div class="d-flex">
        <atom-text
          font-size="text-h5 "
          class="one-line-reader flex-shrink-1 ml-2"
          :text="expand ? 'Hooks' : 'H'"
          line-height="line-height-72"
          :color="isSignedIn ? (isAdmin ? 'text-accent-color' : 'text-white') : 'text-main-color'"
        />
      </div>

      <atom-text
        font-size="text-caption"
        text="Pages"
        color="text-white"
        line-height="line-height-20"
        font-weight="font-weight-regular"
        class="my-3 one-line-reader transition-medium-ease-out"
        :class="expand ? 'ml-2' : 'ml-0'"
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
          class="width-20 transition-medium-ease-out"
          :class="[
            route.path === page.path ? 'text-accent-color' : 'text-white',
            expand ? 'mr-2' : 'mr-0'
          ]"
        >
          {{ page.icon }}
        </v-icon>
        <atom-text
          font-size="text-caption"
          class="one-line-reader transition-medium-ease-out"
          :class="expand ? 'width-100' : 'width-0'"
          :text="page.title"
          :color="route.path === page.path ? 'text-accent-color' : 'text-white'"
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
      :style="{ flex: '1', height: 'calc(var(--vh, 1vh) * 100)' }"
    >
      <atom-text font-size="text-h6" line-height="line-height-lg" text="Hooks Admin" />
      <atom-breadcrumbs class="mb-5" />
      <atom-menu-icon />
      <slot />
    </div>
  </div>
</template>
