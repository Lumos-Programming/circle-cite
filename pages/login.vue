<script setup lang="ts">
import { Authenticator } from '@aws-amplify/ui-vue'
import '@aws-amplify/ui-vue/styles.css'
const { isSignedIn } = useLoginState()
// TODO: 落ち着いたらカスタムのログインフォーム等に差し替える
// const email = ref<string>('')
// const password = ref<string>('')
// const totp = ref<string>('')
// const status = ref<'signUp' | 'signIn' | 'confirmSignUp' | 'totp'>('signIn')
</script>
<template>
  <layout-public>
    <Authenticator class="mt-16">
      <template #default="{ signOut }">
        <h1 class="ma-5">ログイン済みです</h1>
        <v-btn variant="outlined" class="ma-5" @click="navigateTo('/admin')">
          管理画面トップへ
        </v-btn>
        <v-btn variant="outlined" class="ma-5" @click="signOut">
          ログアウト
        </v-btn>
      </template>
    </Authenticator>
  </layout-public>
</template>
