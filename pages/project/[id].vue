<script setup lang="ts">
import {
  Project,
  GetProjectQuery,
  ProjectUsers,
  CreateProjectUsersInput,
  DeleteProjectUsersInput
} from '~/assets/API'
import { getProject } from '~/assets/graphql/queries'
import {
  createProjectUsers,
  deleteProjectUsers
} from '~/assets/graphql/mutations'
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
  const res = project.value.user?.items.find(
    (v) => v?.userID === myUser.value.id
  )
  if (!res) return
  await $baseMutation<DeleteProjectUsersInput, ProjectUsers>({
    query: deleteProjectUsers,
    input: { id: res.id }
  })
  if (!project.value.user?.items.length) return
  project.value.user.items = project.value.user?.items.filter(
    (v) => v?.userID !== myUser.value.id
  )
}
const fetchProject = async () => {
  project.value = await $getQuery<GetProjectQuery, Project>({
    query: getProject,
    variables: {
      id: params.id || null
    }
  })
  imageUrl.value = await $getImage(
    project.value.file?.key,
    project.value.file?.identityId
  )
}
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
            v-if="
              !project.user?.items.map((v) => v?.userID).includes(myUser.id)
            "
            :loading="banEdit"
            text="参加する"
            @btn-click="enter()"
          />
          <atom-button
            v-else
            :loading="banEdit"
            text="参加をやめる"
            @btn-click="leave()"
          />
        </template>
      </div>
      <div
        class="d-flex flex-nowrap justify-start bg-transparent mt-2 mb-2"
        style="gap: 0 10px"
      >
        <atom-text
          font-size="text-caption"
          :text="$getYMD(project.createdAt)"
          font-weight="font-weight-regular"
          ><v-icon size="14" class="mr-1 align-text-bottom">
            mdi-cloud-upload-outline
          </v-icon>
        </atom-text>
        <atom-text
          font-size="text-caption"
          :text="$getYMD(project.updatedAt)"
          font-weight="font-weight-regular"
          ><v-icon size="14" class="mr-1 align-text-bottom">
            mdi-autorenew
          </v-icon>
        </atom-text>
      </div>
      <v-card class="rounded-lg ma-5">
        <v-img :src="imageUrl" :aspect-ratio="16 / 9" cover />
      </v-card>
      <div class="d-flex flex-wrap flex-sm-nowrap my-2">
        <atom-text text="期間：" />
        <atom-text :text="project.start" font-weight="font-weight-regular" />
        <atom-text text=" ~ " font-weight="font-weight-regular" />
        <atom-text :text="project.end" font-weight="font-weight-regular" />
      </div>
      <div class="d-flex flex-wrap flex-sm-nowrap my-2">
        <atom-text text="概要：" />
        <atom-text
          :text="project.description"
          font-weight="font-weight-regular"
        />
      </div>
    </div>
    <atom-text font-size="text-h5" text="参加メンバー" class="mt-16 mx-5" />
    <div
      v-if="project?.user?.items.length"
      class="d-flex flex-nowrap ma-5 pa-2 overflow-x-auto"
      style="gap: 60px 4%"
    >
      <module-user-small
        v-for="item in project.user.items"
        :key="item?.user.id"
        :path="'/member/' + item?.user.id"
        :img-key="item?.user.file?.key"
        :identity-id="item?.user.file?.identityId"
        :name="item?.user.name"
        style="flex: 0 1 22%"
      />
    </div>
    <atom-text
      v-else
      text="残念、まだいないようです。"
      class="my-2 mx-5"
      font-weight="font-weight-regular"
    />
    <atom-text
      v-if="project?.article?.items.length"
      font-size="text-h5"
      text="関連記事"
      class="mt-16 mx-5"
    />
    <div
      v-if="project?.article?.items.length"
      class="d-flex flex-wrap"
      style="gap: 60px 5%"
    >
      <module-content-medium
        v-for="item in project.article.items"
        :key="item?.id"
        :title="item?.title"
        style="flex: 0 1 30%"
        @click-func="navigateTo('/article/' + item?.id)"
      />
    </div>
  </layout-public>
</template>
