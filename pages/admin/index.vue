<script setup lang="ts">
import { User, GetUserQuery } from '~/assets/API'
import { Greetings } from '~/assets/enum'
import { getUser } from '~/assets/graphql/queries'
const { $getQuery } = useNuxtApp()
const { myUser } = useMyUser()
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
await fetchUser()
</script>
<template>
  <layout-admin>
    <div class="d-flex">
      <v-img src="mushimegane_man.png" class="width-42 height-64 mx-3 flex-grow-0" />
      <div class="ma-2 pa-3 rounded-lg bg-grey-darken-3">
        <atom-text
          :text="Greetings(user?.name || '')[Math.floor(Math.random() * Greetings().length)]"
          color="text-white"
          line-height="line-height-lg"
        />
      </div>
      <v-spacer />
    </div>
    <module-user-medium
      :key="user.id"
      :path="'/member/' + user.id"
      :img-key="user.file?.key"
      :name="user.name"
      :university="user.university"
      :faculty="user.faculty"
      :grade="user.grade"
      :github="user.github"
      :twitter="user.twitter"
      :qiita="user.qiita"
      :zenn="user.zenn"
      :identityId="user.file?.identityId"
    />
  </layout-admin>
</template>
