<script setup lang="ts">
import { ListUsersQuery, User } from '~/assets/API'
import { listUsers } from '~/assets/graphql/queries'
const { $listQuery } = useNuxtApp()
const users = ref<User[]>([])
const getUsers = async () => {
  users.value = await $listQuery<ListUsersQuery, User>({
    name: 'listUsers',
    query: listUsers
  })
}
getUsers()
</script>
<template>
  <layout-public>
    <atom-text font-size="text-h4" text="Member" class="py-10" />
    <div class="d-flex flex-wrap" style="gap: 60px 5%">
      <v-sheet
        v-for="item in users"
        :key="item.id"
        style="flex: 0 1 30%; padding: 0 3%"
        class="bg-transparent"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            class="w-100 elevation-5 rounded-circle transition-medium-ease"
            v-bind="props"
            :style="{
              transform: isHovering ? 'scale(1.05)' : 'scale(1.0)'
            }"
            @click="navigateTo('/member/' + item.id)"
          >
            <v-img src="sample.jpg" :aspect-ratio="1" cover />
          </v-card>
        </v-hover>
        <atom-text
          font-size="text-h5"
          class="text-center my-3"
          :text="item.name"
        />
        <atom-text class="text-center ma-3" :text="item.belongs" />
        <div class="d-flex flex-nowrap justify-center" style="gap: 0 4px">
          <atom-button-circle
            @btn-click="navigateTo(item.github, { external: true })"
          >
            <v-icon class="ma-2">mdi-github</v-icon>
          </atom-button-circle>
          <atom-button-circle
            @btn-click="navigateTo(item.twitter, { external: true })"
          >
            <v-icon class="ma-2">mdi-twitter</v-icon>
          </atom-button-circle>
          <atom-button-circle
            @btn-click="navigateTo(item.qiita, { external: true })"
          >
            <v-img src="/qiita.png" class="width-24 height-24 ma-2" />
          </atom-button-circle>
          <atom-button-circle
            @btn-click="navigateTo(item.zenn, { external: true })"
          >
            <v-img src="/zenn.svg" class="width-24 height-24 ma-2" />
          </atom-button-circle>
        </div>
      </v-sheet>
    </div>
  </layout-public>
</template>
