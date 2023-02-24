<script setup lang="ts">
import {
  Project,
  GetProjectQuery,
  ProjectUsers,
  CreateProjectUsersInput,
  DeleteProjectUsersInput
} from '~/assets/API'
import { getProject } from '~/assets/graphql/queries'
import { createProjectUsers, deleteProjectUsers } from '~/assets/graphql/mutations'
const { $getQuery, $getImage, $baseMutation } = useNuxtApp()
const { params } = useRoute()
const { isSignedIn } = useLoginState()
const { myUser } = useMyUser()
const { banEdit } = useEditState()
const project = ref<Project>({} as Project)
const imageUrl = ref<string>('/no_image.png')
const enter = async () => {
  const res = await $baseMutation<CreateProjectUsersInput, ProjectUsers>({
    query: createProjectUsers,
    input: { userID: myUser.value.id, projectID: params.id }
  })
  if (!project.value.user?.items) return
  project.value.user.items.push(res)
}
const leave = async () => {
  const res = project.value.user?.items.find((v) => v?.userID === myUser.value.id)
  if (!res) return
  await $baseMutation<DeleteProjectUsersInput, ProjectUsers>({
    query: deleteProjectUsers,
    input: { id: res.id }
  })
  if (!project.value.user?.items.length) return
  project.value.user.items = project.value.user?.items.filter((v) => v?.userID !== myUser.value.id)
}
const fetchProject = async () => {
  project.value = await $getQuery<GetProjectQuery, Project>({
    query: getProject,
    variables: {
      id: params.id || null
    }
  })
  imageUrl.value = await $getImage(project.value.file?.key, project.value.file?.identityId)
}
const tabs = ['参加メンバー', '記事']
const tab = ref<string>('')
await fetchProject()
</script>
<template>
  <layout-public>
    <atom-breadcrumbs
      class="my-5"
      :items="[
        { title: 'project', to: '/project', disabled: false },
        { title: project.title, to: '/project', disabled: true }
      ]"
    />
    <div class="mx-5">
      <div class="d-flex mt-16 justify-space-between">
        <atom-text font-size="text-h4" :text="project.title" />
        <template v-if="isSignedIn">
          <atom-button
            v-if="!project.user?.items.map((v) => v?.userID).includes(myUser.id)"
            :loading="banEdit"
            text="参加する"
            @btn-click="enter()"
          />
          <atom-button v-else :loading="banEdit" text="参加をやめる" @btn-click="leave()" />
        </template>
      </div>
      <div class="d-flex flex-nowrap justify-start bg-transparent mt-2 mb-2" style="gap: 0 10px">
        <atom-text
          font-size="text-caption"
          :text="$getYMD(project.createdAt)"
          font-weight="font-weight-regular"
          ><v-icon size="14" class="mr-1 align-text-bottom"> mdi-cloud-upload-outline </v-icon>
        </atom-text>
        <atom-text
          font-size="text-caption"
          :text="$getYMD(project.updatedAt)"
          font-weight="font-weight-regular"
          ><v-icon size="14" class="mr-1 align-text-bottom"> mdi-autorenew </v-icon>
        </atom-text>
      </div>
      <div class="d-flex flex-column flex-sm-row my-5">
        <v-img
          :src="imageUrl"
          :aspect-ratio="16 / 9"
          cover
          class="rounded-lg mr-5 v-col-12 v-col-sm-6"
        />
        <div class="v-col-12 v-col-sm-6">
          <atom-text
            font-size="text-subtitle-2"
            :text="project.wanted ? '募集中' : '募集終了'"
            :color="project.wanted ? 'text-white' : 'text-grey-darken-1'"
            class="rounded width-120 text-center border-width-1 border-solid pa-1"
            :class="[
              project.wanted
                ? 'border-light-blue-darken-4 bg-light-blue-darken-4'
                : 'border-grey-darken-1 bg-transparent'
            ]"
          />
          <atom-text
            :text="'期間：' + project.start + ' ~ ' + project.end"
            font-weight="font-weight-regular"
            class="my-2"
          />
          <atom-text
            :text="'概要：' + project.description"
            font-weight="font-weight-regular"
            class="my-2"
          />
        </div>
      </div>
    </div>
    <v-card class="rounded-lg mx-5 mb-16">
      <v-tabs v-model="tab" class="bg-main-color text-white" :items="tabs"></v-tabs>
      <v-window v-model="tab">
        <v-window-item :value="tabs[0]">
          <div
            v-if="project?.user?.items.length"
            class="d-flex flex-nowrap ma-5 pa-2 overflow-x-auto"
            style="gap: 60px 4%"
          >
            <module-user-small
              v-for="item in project.user.items"
              :user="item?.user"
              style="flex: 0 1 22%"
            />
          </div>
          <atom-text
            v-else
            text="残念、まだいないようです。"
            class="my-2 mx-5"
            font-weight="font-weight-regular"
          />
        </v-window-item>
        <v-window-item :value="tabs[1]">
          <div class="d-flex flex-wrap">
            <module-content-medium
              v-for="item in project.article?.items"
              :key="item?.id"
              :img-key="item?.file?.key"
              :identity-id="item?.file?.identityId"
              :created-at="item?.createdAt"
              :updated-at="item?.updatedAt"
              :title="item?.title"
              class="v-col-12 v-col-sm-6 v-col-md-4"
              @click-func="navigateTo('/article/' + item?.id)"
            >
              <atom-text
                font-size="text-subtitle-2"
                font-weight="font-weight-regular"
                :text="'By ' + item?.user.name"
                class="mx-2"
                style="text-decoration: underline"
                @click="navigateTo('/member/' + item?.user.id)"
              />
            </module-content-medium>
          </div>
        </v-window-item>
      </v-window>
    </v-card>
  </layout-public>
</template>
