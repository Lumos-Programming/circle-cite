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
    <atom-text font-size="text-h4" text="Admin Top" />
    <atom-breadcrumbs
      class="mb-5"
      :items="[{ title: 'admin', to: '/admin', disabled: true }]"
    />
    <atom-text
      font-size="text-h5"
      :text="
        Greetings(user?.name || '')[
          Math.floor(Math.random() * Greetings().length)
        ]
      "
    />
  </layout-admin>
</template>
