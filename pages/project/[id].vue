<script setup lang="ts">
import { Project, GetProjectQuery } from '~/assets/API'
import { getProject } from '~/assets/graphql/queries'
const { $getQuery, $getImage } = useNuxtApp()
const { params } = useRoute()
const project = ref<Project>({} as Project)
const imageUrl = ref<string>('/no_image.png')
const fetchProject = async () => {
  project.value = await $getQuery<GetProjectQuery, Project>({
    name: 'getProject',
    query: getProject,
    variables: {
      id: params.id || null
    }
  })
  imageUrl.value = await $getImage(project.value.file?.key)
}
fetchProject()
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
      <atom-text font-size="text-h4" :text="project.title" class="mt-16" />
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
        <atom-text
          :text="project.start || ''"
          font-weight="font-weight-regular"
        />
        <atom-text text=" ~ " font-weight="font-weight-regular" />
        <atom-text
          :text="project.end || ''"
          font-weight="font-weight-regular"
        />
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
      v-if="project?.user?.items"
      class="d-flex flex-nowrap ma-5 pa-2 overflow-x-auto"
      style="gap: 60px 4%"
    >
      <module-user-small
        v-for="item in project.user.items"
        :key="item.id"
        :path="'/member/' + item.id"
        :img-key="item.file?.key"
        :name="item.name"
        style="flex: 0 1 22%"
      />
    </div>
    <atom-text font-size="text-h5" text="関連記事" class="mt-16 mx-5" />
    <div
      v-if="project?.article?.items"
      class="d-flex flex-wrap"
      style="gap: 60px 5%"
    >
      <module-content-medium
        v-for="item in project.article.items"
        :key="item.id"
        :path="'/article/' + item.id"
        :created-at="item.createdAt"
        :updated-at="item.updatedAt"
        :title="item.title"
        style="flex: 0 1 30%"
      />
    </div>
  </layout-public>
</template>
