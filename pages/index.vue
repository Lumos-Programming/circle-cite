<script setup lang="ts">
useHead({ title: 'トップページ' })
const explains = [
  { title: 'Lumosって？', explain: 'Lumosはインカレプログラミングサークルです' },
  {
    title: '参加費とかあるの？',
    explain:
      '現時点(2022/12時点)ではサークル費はありませんが、今後活動を多様化させていくにあたって、サークル費を設けようという話は出ています。'
  },
  {
    title: '他大学でも入れる？',
    explain:
      'オフラインイベントもありますが、基本的にはDiscordでの活動になるので遠方の大学・専門学校・高専の方でも入れます。'
  },
  {
    title: '参加するにはまずどうしたらいい？',
    explain:
      'LumosのTwitter(@lumos_program)にDM頂くか、Hooksの「お問い合わせ」よりその旨送って頂ければ対応いたします。'
  }
]
</script>
<template>
  <layout-public>
    <div class="d-flex align-center" style="height: calc(var(--vh, 1vh) * 90 - 88px)">
      <div style="flex: 3" class="mr-sm-16">
        <atom-text text="プログラミングは" font-size="text-h3" class="mb-2 letter-spacing-30" />
        <atom-text text="一人よりみんなで" font-size="text-h3" class="mb-2 letter-spacing-30" />
        <atom-text text="学ぶ方が楽しい。" font-size="text-h3" class="mb-10 letter-spacing-30" />
        <v-text-field variant="plain" />
        <atom-text
          text="Lumosは初心者から経験者まで幅広く在籍する"
          class="ml-1 letter-spacing-10"
        />
        <atom-text text="インカレプログラミングサークルです。" class="ml-1 letter-spacing-10" />
        <div class="d-flex flex-nowrap my-5" style="gap: 0 10px">
          <atom-button text="参加する" @btn-click="navigateTo('/contact')" />
          <atom-button
            text="話だけでも聞いてみる"
            @btn-click="
              navigateTo('https://twitter.com/lumos_program', {
                external: true
              })
            "
          />
        </div>
      </div>
      <div style="flex: 2"><v-img src="/top-view.svg" /></div>
    </div>
    <div class="w-100 text-center" style="height: calc(var(--vh, 1vh) * 10)">
      <atom-text text="scroll" class="mb-1" />
      <atom-text text="↓" />
    </div>

    <atom-text text="よくある質問" font-size="text-h4" class="py-2" />
    <v-carousel
      hide-delimiters
      show-arrows="hover"
      style="height: 300px"
      class="pt-5 rounded-lg bg-white border-width-1 border-solid border-main-color"
    >
      <v-carousel-item v-for="(item, index) in explains">
        <div class="w-100 h-100 px-16">
          <div class="d-flex mb-3 mr-5">
            <v-img
              :src="index % 2 ? 'question_woman.png' : 'question_man.png'"
              class="width-42 height-64 ml-3 mr-5 flex-grow-0"
            />
            <atom-text :text="item.title" font-size="text-h6" line-height="line-height-64" />
          </div>
          <div class="d-flex mr-5">
            <v-img src="mushimegane_man.png" class="width-42 height-64 ml-3 mr-5 flex-grow-0" />
            <v-card class="w-100 bg-white rounded-lg pa-5 mt-1" variant="outlined">
              <atom-text :text="item.explain" font-size="text-h6" class="letter-spacing-10" />
            </v-card>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>

    <v-divider class="my-10"></v-divider>
    <atom-text
      text="もしプログラミングに興味が湧いたら"
      font-size="text-h6"
      class="mb-10 text-center"
    />
    <div class="d-flex flex-nowrap justify-center align-center mb-10" style="gap: 0 50px">
      <atom-button text="参加する" @btn-click="navigateTo('/contact')" />
      <atom-button
        text="話だけでも聞いてみる"
        @btn-click="navigateTo('https://twitter.com/lumos_program', { external: true })"
      />
    </div>
  </layout-public>
</template>
