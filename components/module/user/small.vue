<script setup lang="ts">
import { User } from '~/assets/API'
withDefaults(
  defineProps<{
    user?: User
  }>(),
  {}
)
</script>
<template>
  <v-sheet
    class="w-100 bg-transparent cursor-pointer"
    @click="user?.id && navigateTo('/member/' + user?.id)"
  >
    <module-user-icon
      :img-key="user?.file?.key"
      :identity-id="user?.file?.identityId"
      class="height-80 width-80 mx-auto"
    />
    <atom-text class="text-center mt-5" :text="user?.name" />
  </v-sheet>
</template>
