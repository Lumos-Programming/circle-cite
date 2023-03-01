<script setup lang="ts">
import { ListUsersQuery, User } from '~/assets/API'
import { listUsers } from '~/assets/graphql/queries'
const { $listQuery } = useNuxtApp()
const users = ref<User[]>([])
const getUsers = async () => {
  users.value = await $listQuery<ListUsersQuery, User>({
    query: listUsers
  })
}
await getUsers()
</script>
<template>
  <layout-public>
    <atom-text font-size="text-h4" text="Member" class="py-10" />
    <div class="d-flex flex-wrap mb-10" style="gap: 60px 0">
      <module-user-medium
        v-for="item in users"
        :key="item.id"
        :user="item"
        class="pa-5 v-col-12 v-col-sm-6 v-col-md-4"
      />
    </div>
  </layout-public>
</template>
