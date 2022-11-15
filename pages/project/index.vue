<script setup lang="ts">
import { ListProjectsQuery, Project } from '~/assets/API'
import { listProjects } from '~/assets/graphql/queries'
const { $listQuery } = useNuxtApp()
const projects = ref<Project[]>([])
const getProjects = async () => {
  projects.value = await $listQuery<ListProjectsQuery, Project>({
    name: 'listProjects',
    query: listProjects
  })
}
getProjects()
</script>
<template>
  <layout-public>
    <atom-text font-size="text-h4" text="Project" class="py-10" />
    <div class="d-flex flex-wrap" style="gap: 60px 5%">
      <v-sheet
        v-for="item in projects"
        :key="item.id"
        style="flex: 0 1 30%"
        class="bg-transparent"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            class="w-100 elevation-5 rounded-lg transition-medium-ease"
            v-bind="props"
            :style="{
              transform: isHovering ? 'scale(1.05)' : 'scale(1.0)'
            }"
            @click="navigateTo('/project/' + item.id)"
          >
            <v-img src="sample.jpg" :aspect-ratio="16 / 9" cover />
          </v-card>
        </v-hover>
        <div
          class="d-flex flex-nowrap justify-end bg-transparent mt-4 mb-2"
          style="gap: 0 10px"
        >
          <atom-text
            font-size="text-caption"
            :text="$getYMD(item.createdAt)"
            font-weight="font-weight-regular"
            ><v-icon size="14" class="mr-1 align-text-bottom">
              mdi-cloud-upload-outline
            </v-icon>
          </atom-text>
          <atom-text
            font-size="text-caption"
            :text="$getYMD(item.updatedAt)"
            font-weight="font-weight-regular"
            ><v-icon size="14" class="mr-1 align-text-bottom">
              mdi-autorenew
            </v-icon>
          </atom-text>
        </div>
        <atom-text
          font-size="text-h6"
          line-height="line-height-lg"
          class="ml-1"
        >
          <NuxtLink :to="'/project/' + item.id">{{ item.name }}</NuxtLink>
        </atom-text>
      </v-sheet>
    </div>
  </layout-public>
</template>
