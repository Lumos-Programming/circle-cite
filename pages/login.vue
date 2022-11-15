<script setup lang="ts">
import { Authenticator } from '@aws-amplify/ui-vue'
import '@aws-amplify/ui-vue/styles.css'
// TODO: 落ち着いたらカスタムのログインフォーム等に差し替える
// const email = ref<string>('')
// const password = ref<string>('')
// const totp = ref<string>('')
// const status = ref<'signUp' | 'signIn' | 'confirmSignUp' | 'totp'>('signIn')
</script>
<template>
  <layout-public>
    <Authenticator class="mt-16">
      <template #default="{ user, signOut }">
        <h1 class="ma-5">Hello {{ user.username }}!</h1>
        <v-btn variant="outlined" class="ma-5" @click="signOut">Sign Out</v-btn>
      </template>
    </Authenticator>
    <!-- <v-card>
      <v-text-field v-model="email" />
      <v-text-field v-model="password" />
      <v-text-field v-model="totp" />
    </v-card> -->
  </layout-public>
</template>
