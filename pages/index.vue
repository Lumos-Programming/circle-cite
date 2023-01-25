<script setup lang="ts">
useHead({ title: 'トップページ' })
const explains = [
  { title: 'Hooksって？', explain: 'HooksはLumosのサークル公式サイトです。' },
  {
    title: 'Lumosって？',
    explain: 'Lumosはプログラミングサークルです'
  },
  { title: '参加費とかあるの？', explain: '' },
  { title: '他大学でも入れる？', explain: '' },
  { title: '', explain: '' }
]
</script>
<template>
  <layout-public>
    <div
      class="d-flex align-center bg-sub-color"
      style="height: calc(var(--vh, 1vh) * 90 - 88px)"
    >
      <div style="flex: 3" class="mr-sm-16">
        <atom-text
          text="プログラミングは"
          font-size="text-h3"
          class="mb-2 letter-spacing-30"
        />
        <atom-text
          text="一人よりみんなで"
          font-size="text-h3"
          class="mb-2 letter-spacing-30"
        />
        <atom-text
          text="学ぶ方が楽しい。"
          font-size="text-h3"
          class="mb-10 letter-spacing-30"
        />
        <v-text-field variant="plain" />
        <atom-text
          text="Lumosは初心者から経験者まで幅広く在籍する"
          class="ml-1 letter-spacing-10"
        />
        <atom-text
          text="インカレプログラミングサークルです。"
          class="ml-1 letter-spacing-10"
        />
        <div class="d-flex flex-nowrap my-5" style="gap: 0 10px">
          <atom-button
            text="参加する"
            btn-class="border-solid border-width-1 border-grey-darken-4"
            @btn-click="navigateTo('/contact')"
          />
          <atom-button
            text="話だけでも聞いてみる"
            btn-class="border-solid border-width-1 border-grey-darken-4"
            @btn-click="$externalLink('https://twitter.com/lumos_program')"
          />
        </div>
      </div>
      <div style="flex: 2"><v-img src="/top-view.svg" /></div>
    </div>
    <div class="w-100 text-center" style="height: calc(var(--vh, 1vh) * 10)">
      <atom-text text="scroll" class="mb-1" />
      <atom-text text="↓" />
    </div>
    <div
      v-for="(item, index) in explains"
      :key="item.title"
      class="mb-10 d-flex flex-nowrap"
      :class="
        index % 2
          ? ' flex-column flex-sm-row-reverse'
          : ' flex-column flex-sm-row'
      "
      style="min-height: 200px"
    >
      <div style="flex: 1" class="pa-10 d-flex justify-center align-center">
        <atom-text :text="item.title" font-size="text-h4" class="mb-2" />
      </div>
      <v-card
        style="flex: 1"
        class="pa-10 rounded-lg bg-white"
        variant="outlined"
      >
        <atom-text
          :text="item.explain"
          font-weight="font-weight-regular"
          class="letter-spacing-10"
        />
      </v-card>
    </div>
    <v-divider class="my-10"></v-divider>
    <atom-text
      text="もしプログラミングに興味が湧いたら"
      font-size="text-h6"
      class="mb-10 text-center"
    />
    <div
      class="d-flex flex-nowrap justify-center align-center mb-10"
      style="gap: 0 50px"
    >
      <atom-button
        text="参加する"
        btn-class="border-solid border-width-1 border-grey-darken-4"
        @btn-click="navigateTo('/contact')"
      />
      <atom-button
        text="話だけでも聞いてみる"
        btn-class="border-solid border-width-1 border-grey-darken-4"
        @btn-click="$externalLink('https://twitter.com/lumos_program')"
      />
    </div>
  </layout-public>
</template>
