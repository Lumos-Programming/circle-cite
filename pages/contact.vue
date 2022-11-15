<script setup lang="ts">
import { validation } from '~/assets/validation'
const { $baseFetch, $options } = useNuxtApp()
const name = ref<string>('')
const body = ref<string>('')
const config = useRuntimeConfig()
const submit = async () => {
  // console.log(config.public.discordwebhook)
  // console.log(JSON.stringify({ username: name.value, content: body.value }))
  const { data, error } = await $baseFetch(
    '/api/discord',
    $options({
      method: 'POST',
      body: JSON.stringify({ username: name.value, content: body.value })
    })
  )
  console.log(data, error)
}
</script>
<template>
  <layout-public>
    <atom-text font-size="text-h4" text="Contact" class="py-10" />
    <atom-text
      text="このページは作成途中のためまだ動作しません。"
      class="mb-2"
    />
    <atom-text text="お名前" class="mb-2" />
    <v-text-field
      v-model="name"
      variant="outlined"
      density="compact"
      clearable
      :rules="[validation.required, validation.maxString(30)]"
    />
    <atom-text text="ご用件" class="mb-2" />
    <v-textarea
      v-model="body"
      variant="outlined"
      density="compact"
      clearable
      :rules="[validation.required, validation.maxString(500)]"
    />
    <!-- <atom-button text="送信" btnClass="w-100" @btn-click="submit()" /> -->
  </layout-public>
</template>
