<script setup lang="ts">
import { User, CreateUserInput, ListUsersQuery } from '~/assets/API'
import { createUser, deleteUser, updateUser } from '~/assets/graphql/mutations'
import { listUsers } from '~/assets/graphql/queries'
const { $getYMD, $listQuery, $baseMutation } = useNuxtApp()
const users = ref<User[]>([])
const getUsers = async () => {
  users.value = await $listQuery<ListUsersQuery, User>({ query: listUsers })
}
const filterAttr = (item: User) => {
  return {
    id: item.id,
    name: item.name || '',
    email: item.email || '',
    description: item.description || '',
    belongs: item.belongs || '',
    join: item.join || null,
    leave: item.leave || null,
    discordId: item.discordId || '',
    github: item.github || '',
    zenn: item.zenn || '',
    qiita: item.qiita || '',
    twitter: item.twitter || '',
    slide: item.slide || '',
    file: item.file || null
  }
}
const input = ref<CreateUserInput & { [key: string]: any }>({
  name: '',
  email: '',
  description: '',
  belongs: '',
  join: $getYMD(new Date().toLocaleString(), '-'),
  leave: $getYMD(new Date().toLocaleString(), '-'),
  discordId: '',
  github: '',
  zenn: '',
  qiita: '',
  twitter: '',
  slide: '',
  file: null
})
const headers = [
  { text: 'id', value: 'id' },
  { text: 'name', value: 'name' },
  { text: 'email', value: 'email' },
  { text: 'belongs', value: 'belongs' },
  { text: 'oparation', value: 'oparation' }
]
getUsers()
// TODO: 初回ログイン時にemalの取り扱いを調整すること
// TODO: valiidationを掛けること
</script>
<template>
  <layout-admin>
    <atom-text font-size="text-h4" text="Users" />
    <atom-breadcrumbs class="mb-5" />
    <v-card class="pa-5">
      <div class="d-flex my-2">
        <atom-text text="新規作成" font-size="text-h6" class="my-2" />
        <v-spacer />
        <atom-button
          text="新規作成"
          btn-class="border-solid border-width-1 border-grey-darken-4"
          @btn-click="
            $baseMutation({
              name: 'createUser',
              query: createUser,
              input
            })
          "
        />
      </div>
      <div v-for="[key, item] in Object.entries(input)" class="d-flex">
        <atom-text
          :text="key"
          font-size="text-subtitle-2"
          line-height="line-height-40"
          style="flex: 0 0 120px"
        />
        <atom-input v-model="input[key]" :value="item" :label="key" />
      </div>
    </v-card>
    <v-card class="pa-5 my-5">
      <div class="d-flex my-2">
        <atom-text text="一括取得" font-size="text-h6" class="my-2" />
        <v-spacer />
        <atom-button
          text="再取得"
          btn-class="border-solid border-width-1 border-grey-darken-4"
          @btn-click="getUsers()"
        />
      </div>
      <easy-data-table
        :headers="headers"
        :items="users"
        header-item-class-name="text-subtitle-2 font-weight-bold line-height-36"
        body-row-class-name="height-48"
        buttons-pagination
        show-index
      >
        <template #expand="item">
          <json-editor
            v-model="users[item.index - 1]"
            height="400"
            mode="tree"
          />
        </template>
        <template #item-oparation="item">
          <div class="d-flex flex-nowrap">
            <v-btn
              icon="mdi-update"
              variant="plain"
              @click="
                $baseMutation({
                  name: 'updateUser',
                  query: updateUser,
                  input: filterAttr($findItem(users, 'id', item.id))
                })
              "
            ></v-btn>
            <v-btn
              icon="mdi-delete"
              variant="plain"
              @click="
                $baseMutation({
                  name: 'deleteUser',
                  query: deleteUser,
                  input: { id: item.id }
                })
              "
            ></v-btn>
          </div>
        </template>
      </easy-data-table>
    </v-card>
  </layout-admin>
</template>
