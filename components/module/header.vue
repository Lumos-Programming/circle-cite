<script setup lang="ts">
import { useDisplay } from 'vuetify'
const { xs } = useDisplay()
const active = ref<boolean>(false)
const menu = [
  {
    text: 'トップ',
    function: () => navigateTo('/'),
    outside: false,
    path: '/'
  },
  {
    text: 'メンバー',
    function: () => navigateTo('/member'),
    outside: false,
    path: '/member'
  },
  {
    text: 'コラム',
    function: () => navigateTo('/article'),
    outside: false,
    path: '/article'
  },
  {
    text: 'プロジェクト',
    function: () => navigateTo('/project'),
    outside: false,
    path: '/project'
  },
  {
    text: 'イベント',
    function: () => navigateTo('/event'),
    outside: false,
    path: '/event'
  },
  {
    text: 'スキルタグ',
    function: () => navigateTo('/skill'),
    outside: false,
    path: '/skill'
  },
  {
    text: 'ポートフォリオ',
    function: () => navigateTo('/portfolio'),
    outside: false,
    path: '/portfolio'
  },
  {
    text: 'お問合わせ',
    function: () => navigateTo('/contact'),
    outside: true,
    path: '/contact'
  },
  {
    text: 'ログイン',
    function: () => navigateTo('/login'),
    outside: true,
    path: '/login'
  }
]
</script>
<template>
  <div
    class="w-100 height-80 pt-10 d-flex flex-nowrap position-sticky top-0 z-index-2 background-grey-lighten-4"
    style="gap: 0 20px"
  >
    <atom-text
      text="Hooks"
      font-size="text-h5"
      line-height="line-height-40"
      class="cursor-pointer"
      @click="navigateTo('/')"
    />
    <v-spacer></v-spacer>
    <v-hover
      v-for="item in menu.filter((v) => v.outside)"
      :key="item.text"
      v-slot="{ isHovering, props }"
    >
      <v-btn
        v-if="!xs"
        class="height-40 px-4 py-2 transition-medium-ease"
        :class="[
          isHovering
            ? 'elevation-3 background-white'
            : 'background-grey-lighten-4'
        ]"
        :ripple="false"
        variant="flat"
        v-bind="props"
        @click="item.function()"
      >
        <atom-text :text="item.text" line-height="line-height-lg" />
      </v-btn>
    </v-hover>
    <v-hover v-slot="{ isHovering, props }">
      <div
        class="position-relative height-40 width-48 background-grey-lighten-4"
        :class="[
          isHovering
            ? 'elevation-3 background-white'
            : 'background-grey-lighten-4'
        ]"
        v-bind="props"
      >
        <div
          class="border-solid border-width-1 border-rey-darken-4 rounded position-absolute transition-medium-ease-out top-0 right-0 background-white overflow-hidden"
          :style="{
            width: active ? 'calc(100vw - 32px)' : '48px',
            height: active ? 'calc(var(--vh) * 100 - 80px)' : '40px'
          }"
        >
          <v-icon
            class="height-40 position-absolute top-0 right-12"
            @click="active = !active"
            >{{ active ? 'mdi-close' : 'mdi-menu' }}
          </v-icon>
          <div v-if="active" class="pt-10 px-10 w-100">
            <v-hover
              v-for="item in menu"
              :key="item.text"
              v-slot="{ isHovering: IsHovering, props: Props }"
            >
              <atom-text
                :text="item.text"
                :color="IsHovering ? 'text-white' : 'grey-darken-4'"
                class="w-100 text-center py-4 cursor-pointer transition-short-ease-out"
                v-bind="Props"
                :class="[
                  IsHovering ? 'background-grey-darken-4' : ' background-white'
                ]"
                @click="item.function()"
              />
            </v-hover>
          </div>
        </div>
      </div>
    </v-hover>
  </div>
</template>
