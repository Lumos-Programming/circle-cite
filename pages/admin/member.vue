<script setup lang="ts">
import { User, UpdateUserInput, ListUsersQuery } from '~/assets/API'
import { FileInput } from '~/assets/type'
import { InputComponents, memberInputs } from '~/assets/enum'
import { updateUser } from '~/assets/graphql/mutations'
import { listUsers } from '~/assets/graphql/queries'
const { $listQuery, $extendMutation, $filterAttr } = useNuxtApp()
const { myUser, setMyUser } = useMyUser()
const { banEdit } = useEditState()
const users = ref<User[]>([])
const getUsers = async () => {
  users.value = await $listQuery<ListUsersQuery, User>({ query: listUsers })
}
const updateMyUser = async () => {
  const res = await $extendMutation({
    type: 'update',
    key: input.value.file?.key || '',
    query: updateUser,
    input: $filterAttr(input.value, [
      'id',
      'name',
      'email',
      'description',
      'forRecruitment',
      'history',
      'university',
      'faculty',
      'grade',
      'jobHunting',
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
    file: input.value.file?.file
  })
  await setMyUser(
    $filterAttr(res as User, [
      'id',
      'name',
      'email',
      'description',
      'forRecruitment',
      'history',
      'university',
      'faculty',
      'grade',
      'jobHunting',
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
  )
}
const input = ref<FileInput<UpdateUserInput>>(JSON.parse(JSON.stringify(myUser.value)))
const headers = ['id', 'name', 'email', 'belongs', 'join', 'leave']
await getUsers()
// TODO: valiidationを掛けること
const files = (e: any) => {
  console.log(e)
  // lastModified: 1656063794073
  // lastModifiedDate: Fri Jun 24 2022 18:43:14 GMT+0900 (日本標準時) {}
  // name: "iOS の画像.jpg"
  // size: 877092
  // type: "image/jpeg"
  // webkitRelativePath: ""
  // { "key": "e053169b-4df0-4946-a3cf-c89fa5ee7f23.jpeg",
  //  "name": "bdm-SEDd_400x400.jpeg",
  //   "size": "15427",
  //    "type": "image/jpeg",
  //     "identityId": "ap-northeast-1:9bfae69e-c593-49d0-80a9-75ab1edccafd" }
  return input.value.file
}
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
        <atom-text :text="item.title" font-size="text-subtitle-2" line-height="line-height-40" />
        <component
          :is="resolveComponent(InputComponents()[item.type].comp)"
          v-model="input[item.key]"
          v-bind="InputComponents(item.key, input[item.key])[item.type].props"
          @update:model-value="item.key === 'file' && $onImageChange($event, input[item.key])"
        />
      </div>
      {{ input }}
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
      <easy-data-table
        :headers="
          headers.map((v) => {
            return { text: v, value: v }
          })
        "
        :items="users"
        header-item-class-name="text-subtitle-2 font-weight-bold line-height-36"
        body-row-class-name="height-36 line-height-36 one-line-reader"
        buttons-pagination
        show-index
      >
      </easy-data-table>
    </div>
  </layout-admin>
</template>
