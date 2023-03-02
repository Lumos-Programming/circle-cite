<script setup lang="ts">
import { User, UpdateUserInput, ListUsersQuery } from '~/assets/API'
import { FileInput } from '~/assets/type'
import { memberInputs } from '~/assets/enum'
import { updateUser } from '~/assets/graphql/mutations'
import { listUsers } from '~/assets/graphql/queries'
const { $listQuery, $extendMutation, $filterAttr } = useNuxtApp()
const { myUser, setMyUser } = useMyUser()
const { banEdit } = useEditState()
const { setExistError, setErrorMessages } = useErrorState()
const users = ref<User[]>([])
const form = ref<any>()
const getUsers = async () => {
  users.value = await $listQuery<ListUsersQuery, User>({ query: listUsers })
}
const updateMyUser = async () => {
  const validate = await form.value?.validate()
  if (!validate.valid) {
    setExistError(true)
    setErrorMessages(
      form.value?.errors.map((v: any) => v.errorMessages.map((m: string) => `${v.id}：${m}`)).flat()
    )
    return
  }
  const res = await $extendMutation({
    type: 'update',
    key: input.value.file?.key || '',
    query: updateUser,
    input: $filterAttr(input.value, memberInputs),
    file: input.value.file?.file
  })
  await setMyUser($filterAttr(res as User, memberInputs))
  await getUsers()
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
      <v-form ref="form">
        <atom-input
          v-for="item in memberInputs"
          :key="item.key"
          v-model="input[item.key]"
          :input="item"
        />
      </v-form>
    </div>
    <module-data-table
      :headers="
        memberInputs.map((v) => {
          return { title: v.key, key: v.key }
        })
      "
      :items="users"
      @fetch-func="getUsers()"
    />
  </layout-admin>
</template>
