<script setup lang="ts">
const { existError, setExistError, errorMessages, setErrorMessages } = useErrorState()
const resetStatus = () => {
  setExistError(false)
  setErrorMessages([])
}
</script>
<template>
  <v-dialog v-model="existError" persistent>
    <v-card flat class="rounded-xl py-6 px-10" min-width="370">
      <atom-text text="エラーが発生しました" class="mb-1 text-center" />
      <atom-text text="入力内容をご確認ください" class="text-subtitle-2 mb-4 text-center" />
      <atom-text text="エラー内容" font-size="text-subtitle-2" color="red-darken-4" />
      <ul class="border-solid border-width-1 border-red-darken-4 red-darken-4 pa-2 mb-4">
        <li v-for="i in errorMessages" class="text-subtitle-2 font-weight-bold mb-1 ml-4">
          {{ i }}
        </li>
      </ul>
      <v-btn
        rounded="pill"
        class="text-subtitle-2 font-weight-bold mx-auto text-white bg-main-color width-200 height-40 transition-short-ease-out"
        flat
        :ripple="false"
        @click="resetStatus()"
      >
        閉じる
      </v-btn>
    </v-card>
  </v-dialog>
</template>
