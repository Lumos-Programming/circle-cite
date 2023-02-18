<script setup lang="ts">
import { User, GetUserQuery } from '~/assets/API'
import { getUser } from '~/assets/graphql/queries'
const { $getQuery } = useNuxtApp()
const { params } = useRoute()
const user = ref<User>({} as User)
const fetchUser = async () => {
  user.value = await $getQuery<GetUserQuery, User>({
    query: getUser,
    variables: {
      id: params.id || null
    }
  })
}
const tabs = [
  '就活プロフィール',
  '経歴',
  'ポートフォリオ',
  '書いた記事',
  '参加したプロジェクト',
  '参加したイベント'
]
const tab = ref<string>('')
await fetchUser()
</script>
<template>
  <layout-public>
    <atom-breadcrumbs
      class="my-5"
      :items="[
        { title: 'member', to: '/member', disabled: false },
        {
          title: user?.name || 'you',
          to: '/member/' + user?.id,
          disabled: true
        }
      ]"
    />
    <module-user-large :user="user" class="my-8" />
    <v-card class="rounded-lg">
      <v-tabs v-model="tab" class="bg-main-color text-white" :items="tabs"></v-tabs>
      <v-window v-model="tab">
        <v-window-item :value="tabs[0]">
          <div class="ma-5">{{ user.forRecruitment }}</div>
        </v-window-item>
        <v-window-item :value="tabs[1]">
          <div class="pa-5">{{ user.history }}</div>
        </v-window-item>
        <v-window-item :value="tabs[2]">
          <div class="d-flex flex-wrap">
            <module-content-medium
              v-for="item in user?.portfolio?.items"
              :key="item?.id"
              :created-at="item?.createdAt"
              :updated-at="item?.updatedAt"
              :title="item?.title"
              class="v-col-12 v-col-sm-6 v-col-md-4"
              @click-func="navigateTo('/portfolio/' + item?.id)"
            />
          </div>
        </v-window-item>
        <v-window-item :value="tabs[3]">
          <div class="d-flex flex-wrap">
            <module-content-medium
              v-for="item in user?.article?.items"
              :key="item?.id"
              :created-at="item?.createdAt"
              :updated-at="item?.updatedAt"
              :title="item?.title"
              class="v-col-12 v-col-sm-6 v-col-md-4"
              @click-func="navigateTo('/article/' + item?.id)"
            />
          </div>
        </v-window-item>
        <v-window-item :value="tabs[4]">
          <div class="d-flex flex-wrap">
            <module-content-medium
              v-for="item in user?.project?.items"
              :key="item?.project.id"
              :created-at="item?.project.createdAt"
              :updated-at="item?.project.updatedAt"
              :title="item?.project.title"
              class="v-col-12 v-col-sm-6 v-col-md-4"
              @click-func="navigateTo('/project/' + item?.project.id)"
            />
          </div>
        </v-window-item>
        <v-window-item :value="tabs[5]">
          <div class="d-flex flex-wrap">
            <module-content-medium
              v-for="item in user?.event?.items"
              :key="item?.event.id"
              :created-at="item?.event.createdAt"
              :updated-at="item?.event.updatedAt"
              :title="item?.event.title"
              class="v-col-12 v-col-sm-6 v-col-md-4"
              @click-func="navigateTo('/event/' + item?.event.id)"
            />
          </div>
        </v-window-item>
      </v-window>
    </v-card>
  </layout-public>
</template>
