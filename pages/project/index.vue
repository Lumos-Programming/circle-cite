<script setup lang="ts">
import { ListProjectsQuery, Project } from '~/assets/API'
import { listProjects } from '~/assets/graphql/queries'
const { $unAuthListQuery } = useNuxtApp()
const projects = ref<Project[]>([])
const getProjects = async () => {
  projects.value = await $unAuthListQuery<ListProjectsQuery, Project>({
    name: 'listProjects',
    query: listProjects
  })
}
getProjects()
</script>
<template>
  <layout-public>
    <atom-text font-size="text-h4" text="Project" class="py-10" />
    <div class="d-flex">
      <v-sheet
        v-for="item in projects"
        :key="item.id"
        style="flex: 0 1 33.3%"
        class="bg-transparent"
      >
        <v-card class="w-100 elevation-5 rounded-lg"
          ><v-img src="sample.jpg"
        /></v-card>
        <div
          class="d-flex flex-nowrap justify-end bg-transparent my-3"
          style="gap: 0 10px"
        >
          <atom-text
            font-size="text-caption"
            :text="$getYMD(item.createdAt)"
            font-weight="font-weight-regular"
          />
          <atom-text
            font-size="text-caption"
            :text="$getYMD(item.updatedAt)"
            font-weight="font-weight-regular"
          />
        </div>
        <atom-text font-size="text-subtitle-1" :text="item.name" />
      </v-sheet>
    </div>
  </layout-public>
</template>
