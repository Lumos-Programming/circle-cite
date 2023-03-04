<script setup lang="ts">
import { faker } from '@faker-js/faker/locale/ja'

// status = ['beforePlay','playing','afterPlay']
const status = ref<any>('beforePlay')
const correct = ref<any>(0)
const input = ref<any>(null)
const answer = ref<any>(null)
const limit = ref<any>(0)
const timer = ref<any>(0)
const interval = ref<any>(null)
const setQuestion = () => {
  input.value = ''
  answer.value = faker.lorem.word()
}
const start = (time = 0) => {
  setQuestion()
  status.value = 'playing'
  if (time) {
    limit.value = time
    const startTime = new Date()
    interval.value = setInterval(function () {
      if (time - 1 <= timer.value) {
        clearInterval(interval.value)
        status.value = 'afterPlay'
      }
      // @ts-ignore
      timer.value = Math.floor((new Date() - startTime) / 1000)
    }, 1000)
  }
}
const check = () => {
  if (answer.value === input.value) {
    // 正解数を１プラスする
    correct.value += 1
    setQuestion()
  }
}
const reset = () => {
  status.value = 'beforePlay'
  correct.value = 0
  input.value = null
  answer.value = null
  limit.value = 0
  timer.value = 0
  if (interval.value) {
    clearInterval(interval.value)
    interval.value = null
  }
}
</script>
<template>
  <LayoutPublic>
    <v-card flat class="d-flex flex-column mx-10 mt-5 pa-5">
      <v-card class="ma-5 pa-0" color="transparent" flat width="100%">
        <atom-text text="Typing Game" font-size="text-h4" />
      </v-card>
      <v-row class="mx-5 my-5" no-gutters>
        <v-btn class="mr-2" outlined @click="reset()">before</v-btn>
        <v-btn class="mr-2" outlined @click="start(60)">palying</v-btn>
        <v-btn class="mr-2" outlined @click="status = 'afterPlay'">after</v-btn>
        <v-btn outlined @click="setQuestion()">next</v-btn>
      </v-row>
      <v-card v-if="status === 'beforePlay'" flat outlined class="my-5 pa-0 d-flex flex-column">
        <v-card-title>コース選択</v-card-title>
        <v-btn class="mx-5 my-2" outlined @click="start(60)">初級(1分)</v-btn>
        <v-btn class="mx-5 my-2" outlined @click="start(120)">中級(2分)</v-btn>
        <v-btn class="mx-5 my-2" outlined @click="start(180)">上級(3分)</v-btn>
      </v-card>

      <v-card
        v-else-if="status === 'playing'"
        flat
        outlined
        class="mx-9 my-5 pa-0 d-flex flex-column"
      >
        <v-row class="mx-5 my-0">
          <v-card-title>残り{{ limit - timer }}秒</v-card-title>
          <v-spacer></v-spacer>
          <v-card-title>正解数：{{ correct }}</v-card-title>
        </v-row>
        <v-card-title class="text-h3 text-bold mx-auto my-5">
          {{ answer || 'ここに問題文が入ります' }}
        </v-card-title>
        <v-text-field v-model.trim="input" outlined class="mx-5" @change="check()"></v-text-field>
      </v-card>

      <v-card v-else flat outlined class="mx-9 my-5 pa-0 d-flex flex-column">
        <v-card-title>{{ correct }}問正解しました！</v-card-title>
        <v-btn class="mx-5 my-2" outlined @click="reset()">はじめに戻る</v-btn>
      </v-card>
    </v-card>
  </LayoutPublic>
</template>
