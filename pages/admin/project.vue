<script setup lang="ts">
import { CreateProjectInput, ListProjectsQuery, Project } from '~/assets/API'
import {
  createProject,
  deleteProject,
  updateProject
} from '~/assets/graphql/mutations'
import { listProjects } from '~/assets/graphql/queries'
const { $getYMD, $listQuery } = useNuxtApp()
const projects = ref<Project[]>([])
const getProjects = async () => {
  projects.value = await $listQuery<ListProjectsQuery, Project>({
    name: 'listProjects',
    query: listProjects
  })
  console.log(projects.value)
}
const input = ref<CreateProjectInput>({
  name: '',
  description: '',
  start: $getYMD(new Date().toLocaleString(), '-'),
  end: $getYMD(new Date().toLocaleString(), '-'),
  wanted: false,
  published: false,
  userProjectId: null
})
getProjects()
</script>
<template>
  <layout-admin>
    <atom-text font-size="text-h4" text="Projects" />
    <atom-breadcrumbs class="mb-5" />
    <v-card class="pa-5">
      <atom-text
        text="Create / Update / Delete"
        font-size="text-h6"
        class="my-2"
      />
      <div class="d-flex my-2" style="gap: 0 20px">
        <v-btn
          variant="outlined"
          style="flex: 1"
          @click="
            $baseMutation({
              name: 'createProject',
              query: createProject,
              input
            })
          "
        >
          新規作成
        </v-btn>
        <v-btn
          variant="outlined"
          style="flex: 1"
          @click="
            $baseMutation({
              name: 'updateProject',
              query: updateProject,
              input
            })
          "
        >
          更新
        </v-btn>
        <v-btn
          variant="outlined"
          style="flex: 1"
          @click="
            $baseMutation({
              name: 'deleteProject',
              query: deleteProject,
              input
            })
          "
        >
          削除
        </v-btn>
      </div>
      <json-editor v-model="input" height="400" mode="tree" />
    </v-card>
    <v-card class="pa-5 my-5">
      <div class="d-flex my-2">
        <atom-text text="All Projects" font-size="text-h6" class="my-2" />
        <v-spacer />
        <v-btn variant="outlined" @click="getProjects()"> 再取得 </v-btn>
      </div>
      <json-editor v-model="projects" height="400" mode="tree" />
    </v-card>
  </layout-admin>
</template>
