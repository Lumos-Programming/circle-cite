<script setup lang="ts">
import { User, UpdateUserInput, ListUsersQuery } from '~/assets/API'
import { FileInput } from '~/assets/type'
import { deleteUser, updateUser } from '~/assets/graphql/mutations'
import { listUsers } from '~/assets/graphql/queries'
const { $listQuery, $extendMutation } = useNuxtApp()
const { myUser } = useMyUser()
const users = ref<User[]>([])
const getUsers = async () => {
  users.value = await $listQuery<ListUsersQuery, User>({ query: listUsers })
}
const input = ref<FileInput<UpdateUserInput>>(
  JSON.parse(JSON.stringify(myUser.value))
)
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
        <atom-text text="プロフィール変更" font-size="text-h6" class="my-2" />
        <v-spacer />
        <atom-button
          text="更新"
          btn-class="border-solid border-width-1 border-grey-darken-4"
          @btn-click="
            $extendMutation({
              type: 'update',
              key: input.file?.key || '',
              query: updateUser,
              input: $filterAttr(input, [
                'id',
                'name',
                'email',
                'description',
                'belongs',
                'join',
                'leave',
                'discordId',
                'github',
                'zenn',
                'qiita',
                'twitter',
                'slide',
                'file'
              ]),
              file: input.file?.file
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
                $extendMutation({
                  type: 'update',
                  key: input.file?.key || '',
                  query: updateUser,
                  input: $filterAttr(users[item.index - 1], [
                    'id',
                    'name',
                    'email',
                    'description',
                    'belongs',
                    'join',
                    'leave',
                    'discordId',
                    'github',
                    'zenn',
                    'qiita',
                    'twitter',
                    'slide',
                    'file'
                  ])
                })
              "
            ></v-btn>
            <v-btn
              icon="mdi-delete"
              variant="plain"
              @click="
                $extendMutation({
                  type: 'delete',
                  key: input.file?.key || '',
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
