<script setup lang="ts">
import { CreateUserInput, ListUsersQuery, User } from '~/assets/API'
import { createUser, deleteUser, updateUser } from '~/assets/graphql/mutations'
import { listUsers } from '~/assets/graphql/queries'
const { $listQuery } = useNuxtApp()
const members = ref<User[]>([])
const getMembers = async () => {
  members.value = await $listQuery<ListUsersQuery, User>({
    name: 'listUsers',
    query: listUsers
  })
}
const input = ref<CreateUserInput>({
  name: '',
  email: '',
  belongs: '',
  discordId: '',
  github: '',
  zenn: '',
  qiita: '',
  twitter: '',
  slide: '',
  skillUserId: null,
  projectUserId: null,
  eventUserId: null,
  userImageId: null
})
getMembers()
</script>
<template>
  <layout-admin>
    <atom-text font-size="text-h4" text="Members" />
    <atom-breadcrumbs class="mb-5" />
    <v-card class="pa-5">
      <atom-text
        text="Create / Update / Delete"
        font-size="text-h6"
        class="my-2"
      />
      <div class="d-flex my-2" style="gap: 0 20px">
        <v-btn
          variant="outlined"
          style="flex: 1"
          @click="
            $baseMutation({ name: 'createUser', query: createUser, input })
          "
        >
          新規作成
        </v-btn>
        <v-btn
          variant="outlined"
          style="flex: 1"
          @click="
            $baseMutation({ name: 'updateUser', query: updateUser, input })
          "
        >
          更新
        </v-btn>
        <v-btn
          variant="outlined"
          style="flex: 1"
          @click="
            $baseMutation({ name: 'deleteUser', query: deleteUser, input })
          "
        >
          削除
        </v-btn>
      </div>
      <json-editor v-model="input" height="400" mode="tree" />
    </v-card>
    <v-card class="pa-5 my-5">
      <div class="d-flex my-2">
        <atom-text text="All Members" font-size="text-h6" class="my-2" />
        <v-spacer />
        <v-btn variant="outlined" @click="getMembers()"> 再取得 </v-btn>
      </div>
      <json-editor v-model="members" height="400" mode="tree" />
    </v-card>
  </layout-admin>
</template>
