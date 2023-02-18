<script setup lang="ts">
import { Project, ListProjectsQuery } from '~/assets/API'
import { listProjects } from '~/assets/graphql/queries'
const { $listQuery } = useNuxtApp()
const projects = ref<Project[]>([])
const getProjects = async () => {
  projects.value = await $listQuery<ListProjectsQuery, Project>({
    query: listProjects,
    filter: { published: { eq: true } }
  })
}
await getProjects()
</script>
<template>
  <layout-public>
    <atom-text font-size="text-h4" text="Project" class="py-10" />
    <div class="d-flex flex-wrap">
      <module-content-medium
        v-for="item in projects"
        :key="item.id"
        :img-key="item.file?.key"
        :identity-id="item.file?.identityId"
        :created-at="item.createdAt"
        :updated-at="item.updatedAt"
        :title="item.title"
        class="v-col-12 v-col-sm-6 v-col-md-4"
        @click-func="navigateTo('/project/' + item.id)"
      >
        <atom-text
          font-size="text-subtitle-2"
          :text="item.wanted ? '募集中' : '募集終了'"
          :color="item.wanted ? 'text-white' : 'text-grey-darken-1'"
          class="rounded text-center border-width-1 border-solid pa-1 mx-2"
          :class="[
            item.wanted
              ? 'border-light-blue-darken-4 bg-light-blue-darken-4'
              : 'border-grey-darken-1 bg-transparent'
          ]"
        />
      </module-content-medium>
    </div>
  </layout-public>
</template>
