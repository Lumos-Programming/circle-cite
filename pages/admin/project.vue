<script setup lang="ts">
import { Project, UpdateProjectInput, ListProjectsQuery } from '~/assets/API'
import { FileInput } from '~/assets/type'
import {
  createProject,
  deleteProject,
  updateProject
} from '~/assets/graphql/mutations'
import { listProjects } from '~/assets/graphql/queries'
const { $getYMD, $listQuery, $extendMutation, $filterAttr, $excludeAttr } =
  useNuxtApp()
const { banEdit } = useEditState()
const projects = ref<Project[]>([])
const getProjects = async () => {
  projects.value = await $listQuery<ListProjectsQuery, Project>({
    query: listProjects
  })
}
const mutateProject = async () => {
  await $extendMutation({
    type: input.value.id ? 'update' : 'create',
    key: input.value.file?.key || '',
    query: input.value.id ? updateProject : createProject,
    input: input.value.id ? input.value : $excludeAttr(input.value, ['id']),
    file: input.value.file?.file
  })
}
const defaultInput = {
  id: '',
  title: '',
  description: '',
  start: $getYMD(new Date().toLocaleString(), '-'),
  end: $getYMD(new Date().toLocaleString(), '-'),
  wanted: false,
  published: false,
  file: null
}
const input = ref<FileInput<UpdateProjectInput>>(defaultInput)
const headers = ['id', 'title', 'wanted', 'published', 'oparation']
await getProjects()
// TODO: valiidationを掛けること
</script>
<template>
  <layout-admin>
    <div>
      <div class="d-flex my-2">
        <atom-text
          :text="input.id ? input.id + 'の更新' : '新規作成'"
          font-size="text-h6"
          class="my-2"
        />
        <v-spacer />
        <atom-button
          :loading="banEdit"
          text="リセット"
          btn-class="border-solid border-width-1 border-grey-darken-4 mr-3"
          @btn-click="input = defaultInput"
        />
        <atom-button
          :loading="banEdit"
          :text="input.id ? '更新' : '新規作成'"
          btn-class="border-solid border-width-1 border-grey-darken-4"
          @btn-click="mutateProject()"
        />
      </div>
      <div v-for="[key, item] in Object.entries(input)" class="d-flex">
        <atom-text
          :text="key"
          font-size="text-subtitle-2"
          line-height="line-height-40"
          style="flex: 0 0 120px"
        />
        <atom-input v-model="input[key]" :value="item" :label="key" />
      </div>
    </div>
    <div class="my-5">
      <div class="d-flex my-2">
        <atom-text text="一括取得" font-size="text-h6" class="my-2" />
        <v-spacer />
        <atom-button
          :loading="banEdit"
          text="再取得"
          btn-class="border-solid border-width-1 border-grey-darken-4"
          @btn-click="getProjects()"
        />
      </div>
      <easy-data-table
        :headers="
          headers.map((v) => {
            return { text: v, value: v }
          })
        "
        :items="projects"
        header-item-class-name="text-subtitle-2 font-weight-bold line-height-36"
        body-row-class-name="height-36 line-height-36 one-line-reader"
        buttons-pagination
        show-index
      >
        <template #item-oparation="item">
          <div class="d-flex flex-nowrap">
            <v-icon
              size="24"
              class="ma-2"
              @click="
                input = $filterAttr(projects[item.index - 1], [
                  'id',
                  'title',
                  'start',
                  'end',
                  'description',
                  'wanted',
                  'published',
                  'file'
                ])
              "
              >mdi-pencil
            </v-icon>
            <v-icon
              size="24"
              class="ma-2"
              @click="
                $extendMutation({
                  type: 'delete',
                  key: input.file?.key || '',
                  query: deleteProject,
                  input: { id: item.id }
                })
              "
              >mdi-delete
            </v-icon>
          </div>
        </template>
      </easy-data-table>
    </div>
  </layout-admin>
</template>
