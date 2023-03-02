<script setup lang="ts">
import { Project, UpdateProjectInput, ListProjectsQuery } from '~/assets/API'
import { FileInput } from '~/assets/type'
import { projectInputs } from '~/assets/enum'
import { createProject, deleteProject, updateProject } from '~/assets/graphql/mutations'
import { listProjects } from '~/assets/graphql/queries'
const { $listQuery, $extendMutation, $filterAttr } = useNuxtApp()
const { setExistError, setErrorMessages } = useErrorState()
const { banEdit } = useEditState()
const form = ref<any>()
const projects = ref<Project[]>([])
const getProjects = async () => {
  projects.value = await $listQuery<ListProjectsQuery, Project>({
    query: listProjects
  })
}
const mutateProject = async () => {
  const validate = await form.value?.validate()
  if (!validate.valid) {
    setExistError(true)
    setErrorMessages(
      form.value?.errors.map((v: any) => v.errorMessages.map((m: string) => `${v.id}：${m}`)).flat()
    )
    return
  }
  await $extendMutation({
    type: input.value.id ? 'update' : 'create',
    key: input.value.file?.key || '',
    query: input.value.id ? updateProject : createProject,
    input: input.value.id
      ? $filterAttr(input.value, projectInputs)
      : $filterAttr(input.value, projectInputs, ['id']),
    file: input.value.file?.file
  })
}
const defaultInput = Object.fromEntries(projectInputs.map((v) => [v.key, v.default]))
const input = ref<FileInput<Partial<UpdateProjectInput>>>(defaultInput)
await getProjects()
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
      <v-form ref="form">
        <atom-input
          v-for="item in projectInputs"
          :key="item.key"
          v-model="input[item.key]"
          :input="item"
        />
      </v-form>
    </div>
    <module-data-table
      :headers="
        ['oparation', ...Object.keys(defaultInput)].map((v) => {
          return { title: v, key: v }
        })
      "
      :items="projects"
      @fetch-func="getProjects()"
      @edit-func="
        (item) => {
          input = $filterAttr(projects[projects.indexOf(item.raw)], projectInputs)
        }
      "
      @delete-func="
        (id) =>
          $extendMutation({
            type: 'delete',
            key: input.file?.key || '',
            query: deleteProject,
            input: { id }
          })
      "
    />
  </layout-admin>
</template>
