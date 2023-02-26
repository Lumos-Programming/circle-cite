<script setup lang="ts">
import { validation } from '~/assets/validation'
const { $baseFetch, $options } = useNuxtApp()
const { banEdit } = useEditState()
const config = useRuntimeConfig()
const name = ref<string>('')
const body = ref<string>('')
const submit = async () => {
  const content =
    '「' + name.value + '」さんからお問い合わせがありました！\n\nお問い合わせ内容\n' + body.value
  if (!config.public.discordwebhook) return
  await $baseFetch(
    config.public.discordwebhook,
    $options({
      key: content,
      method: 'POST',
      body: JSON.stringify({
        username: 'サークルサイトからのお問い合わせ',
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  )
}
</script>
<template>
  <layout-public>
    <atom-text font-size="text-h4" text="Contact" class="py-10" />
    <atom-text text="お問い合わせや申込みはこちらよりお願いいたします" class="mb-3" />
    <atom-text
      text="* 参加希望の方、他団体の方、横浜国立大学進学を考えている高校生の方など様々な方からのご連絡お待ちしております"
      font-size="text-caption"
      font-weight="font-weight-regular"
      class="mb-10"
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
    <atom-button text="送信" btn-class="w-100" :loading="banEdit" @btn-click="submit()" />
  </layout-public>
</template>
