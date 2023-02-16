<script setup lang="ts">
import { User, UpdateUserInput, ListUsersQuery } from '~/assets/API'
import { FileInput } from '~/assets/type'
import { memberInputs } from '~/assets/enum'
import { updateUser } from '~/assets/graphql/mutations'
import { listUsers } from '~/assets/graphql/queries'
const { $listQuery, $extendMutation, $filterAttr } = useNuxtApp()
const { myUser, setMyUser } = useMyUser()
const { banEdit } = useEditState()
const users = ref<User[]>([])
const getUsers = async () => {
  users.value = await $listQuery<ListUsersQuery, User>({ query: listUsers })
}
const inputAttr = memberInputs.map((v) => v.key)
const updateMyUser = async () => {
  const res = await $extendMutation({
    type: 'update',
    key: input.value.file?.key || '',
    query: updateUser,
    input: $filterAttr(input.value, inputAttr, memberInputs),
    file: input.value.file?.file
  })
  await setMyUser($filterAttr(res as User, inputAttr))
}
const input = ref<FileInput<UpdateUserInput>>(JSON.parse(JSON.stringify(myUser.value)))
await getUsers()
</script>
<template>
  <layout-admin>
    <div>
      <div class="d-flex my-2">
        <atom-text text="プロフィール変更" font-size="text-h6" class="my-2" />
        <v-spacer />
        <atom-button
          :loading="banEdit"
          text="更新"
          btn-class="border-solid border-width-1 border-grey-darken-4"
          @btn-click="updateMyUser()"
        />
      </div>
      <div v-for="item in memberInputs">
        <atom-input
          :key="item.key"
          v-model="input[item.key]"
          :input="item"
          :is-file="
            memberInputs
              .filter((v) => v.type === 'fileinput')
              .map((v) => v.key)
              .includes(item.key)
          "
        />
      </div>
    </div>
    <div class="my-5">
      <div class="d-flex my-2">
        <atom-text text="一括取得" font-size="text-h6" class="my-2" />
        <v-spacer />
        <atom-button
          :loading="banEdit"
          text="再取得"
          btn-class="border-solid border-width-1 border-grey-darken-4"
          @btn-click="getUsers()"
        />
      </div>
      <v-data-table
        :headers="
          inputAttr.map((v) => {
            return { title: v, key: v }
          })
        "
        :items="users"
        density="compact"
        :style="{ '--v-table-header-height': '40px' }"
        class="white-space-nowrap"
      ></v-data-table>
    </div>
  </layout-admin>
</template>
