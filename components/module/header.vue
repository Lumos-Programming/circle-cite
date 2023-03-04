<script setup lang="ts">
import { useDisplay } from 'vuetify'
const { isSignedIn, isAdmin } = useLoginState()
const { xs } = useDisplay()
const active = ref<boolean>(false)
const menu = [
  { text: 'トップ', outside: false, path: '/' },
  { text: 'メンバー', outside: false, path: '/member' },
  { text: '記事', outside: false, path: '/article' },
  { text: 'プロジェクト', outside: false, path: '/project' },
  { text: 'イベント', outside: false, path: '/event' },
  { text: 'スキルタグ', outside: false, path: '/skill' },
  { text: 'ポートフォリオ', outside: false, path: '/portfolio' },
  { text: 'お問い合わせ', outside: true, path: '/contact' },
  { text: 'ログイン', outside: true, path: '/login' },
  { text: '管理画面', outside: false, path: '/admin' },
  { text: 'タイピングゲーム', outside: false, path: '/typing-game' }
]
</script>
<template>
  <div
    class="bg-white border-solid border-width-1 border-grey-darken-4 height-48 pl-4 mt-10 w-100 d-flex flex-nowrap position-sticky top-0 z-index-2 rounded"
    style="gap: 0 20px"
  >
    <atom-text
      text="Hooks"
      font-size="text-h5"
      line-height="line-height-48"
      :color="
        isSignedIn ? (isAdmin ? 'text-accent-color' : 'text-main-color') : 'text-grey-darken-4'
      "
      class="cursor-pointer"
      @click="navigateTo('/')"
    />
    <v-spacer></v-spacer>
    <template v-if="!xs">
      <atom-button
        v-for="item in menu.filter((v) => v.outside)"
        :key="item.text"
        :text="item.text"
        btn-class="my-1"
        style="border: none"
        @btn-click="navigateTo(item.path)"
      />
    </template>
    <div class="position-relative height-48 width-72 rounded">
      <v-hover v-slot="{ isHovering, props }">
        <div
          class="border-solid border-width-1 border-gery-darken-4 rounded position-absolute transition-medium-ease top-n1 right-n1 overflow-hidden"
          :class="[!active && isHovering ? 'bg-main-color cursor-pointer' : 'bg-white']"
          v-bind="props"
          :style="{
            'max-width': '960px',
            width: active ? 'calc(100vw - 40px)' : '72px',
            height: active ? 'calc(var(--vh) * 100 - 104px)' : '48px'
          }"
        >
          <v-icon
            :icon="active ? 'mdi-close' : 'mdi-menu'"
            class="width-72 height-48 position-absolute top-0 right-0"
            :class="!active && isHovering ? 'text-white' : 'text-grey-darken-4'"
            @click="active = !active"
          />
          <div v-if="active" class="pt-10 w-100">
            <v-hover
              v-for="item in menu"
              :key="item.text"
              v-slot="{ isHovering: IsHovering, props: Props }"
            >
              <atom-text
                :text="item.text"
                :color="IsHovering ? 'text-white' : 'text-grey-darken-4'"
                class="w-100 text-center py-4 cursor-pointer transition-short-ease-out"
                v-bind="Props"
                :class="[IsHovering ? 'bg-main-color' : ' bg-white']"
                @click="navigateTo(item.path)"
              />
            </v-hover>
          </div>
        </div>
      </v-hover>
    </div>
  </div>
</template>
