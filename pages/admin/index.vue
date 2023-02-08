<script setup lang="ts">
import { User, UpdateUserInput, GetUserQuery } from '~/assets/API'
import { Greetings } from '~/assets/enum'
import { FileInput } from '~/assets/type'
import { updateUser } from '~/assets/graphql/mutations'
import { getUser } from '~/assets/graphql/queries'
const { $getQuery, $extendMutation, $filterAttr } = useNuxtApp()
const { myUser, setMyUser } = useMyUser()
const user = ref<User>({} as User)
const fetchUser = async () => {
  if (!myUser.value.id) return
  user.value = await $getQuery<GetUserQuery, User>({
    query: getUser,
    variables: {
      id: myUser.value.id
    }
  })
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
    file: input.value.file?.file
  })
  await setMyUser(
    $filterAttr(res as User, [
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
  )
}
const input = ref<FileInput<UpdateUserInput>>(
  JSON.parse(JSON.stringify(myUser.value))
)
await fetchUser()
</script>
<template>
  <layout-admin>
    <div class="d-flex">
      <v-img
        src="mushimegane_man.png"
        class="width-42 height-64 mx-3 flex-grow-0"
      />
      <div class="ma-2 pa-3 rounded-lg bg-grey-darken-3">
        <atom-text
          :text="
            Greetings(user?.name || '')[
              Math.floor(Math.random() * Greetings().length)
            ]
          "
          color="text-white"
          line-height="line-height-lg"
        />
      </div>
      <v-spacer />
    </div>
  </layout-admin>
</template>
