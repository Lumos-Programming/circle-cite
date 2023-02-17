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
    <div class="d-flex flex-wrap mb-10" style="gap: 60px 5%">
      <module-user-medium
        v-for="item in users"
        :key="item.id"
        :path="'/member/' + item.id"
        :img-key="item.file?.key"
        :name="item.name"
        :university="item.university"
        :faculty="item.faculty"
        :grade="item.grade"
        :github="item.github"
        :twitter="item.twitter"
        :qiita="item.qiita"
        :zenn="item.zenn"
        :identity-id="item.file?.identityId"
        style="flex: 0 1 30%; padding: 0 3%"
      />
    </div>
  </layout-public>
</template>
