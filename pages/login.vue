<script setup lang="ts">
import { Authenticator } from '@aws-amplify/ui-vue'
import '@aws-amplify/ui-vue/styles.css'
const email = ref<string>('')
const password = ref<string>('')
const totp = ref<string>('')
const status = ref<'signUp' | 'signIn' | 'confirmSignUp' | 'totp'>('signIn')
</script>
<template>
  <Authenticator>
    <template #default="{ user, signOut }">
      <h1 class="ma-5">Hello {{ user.username }}!</h1>
      <v-btn variant="outlined" class="ma-5" @click="signOut">Sign Out</v-btn>
    </template>
  </Authenticator>
  <v-card>
    <v-text-fiedd v-model="email" />
    <v-text-fiedd v-model="password" />
    <v-text-fiedd v-model="totp" />
  </v-card>
</template>
