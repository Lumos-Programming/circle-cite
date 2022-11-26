<script setup lang="ts">
import {
  CreateArticleInput,
  CreateEventInput,
  CreateProjectInput,
  CreateSkillInput,
  CreateUserInput,
  ListArticlesQuery,
  ListEventsQuery,
  ListProjectsQuery,
  ListSkillsQuery,
  ListUsersQuery
} from '~/assets/API'
import {
  listArticles,
  listEvents,
  listProjects,
  listSkills,
  listUsers
} from '~/assets/graphql/queries'
const { $listQuery } = useNuxtApp()
const members = ref<CreateUserInput[]>([])
const articles = ref<CreateArticleInput[]>([])
const projects = ref<CreateProjectInput[]>([])
const events = ref<CreateEventInput[]>([])
const skills = ref<CreateSkillInput[]>([])
members.value = await $listQuery<ListUsersQuery, CreateUserInput>({
  query: listUsers
})
articles.value = await $listQuery<ListArticlesQuery, CreateArticleInput>({
  query: listArticles
})
projects.value = await $listQuery<ListProjectsQuery, CreateProjectInput>({
  query: listProjects
})
events.value = await $listQuery<ListEventsQuery, CreateEventInput>({
  query: listEvents
})
skills.value = await $listQuery<ListSkillsQuery, CreateSkillInput>({
  query: listSkills
})
</script>
<template>
  <layout-admin>
    <atom-text font-size="text-h4" text="Admin Top" />
    <atom-breadcrumbs class="mb-5" />
    <v-card class="pa-5">
      <atom-text font-size="text-h6" text="Overview(仮置き)" class="mb-3" />
      <atom-text :text="'Member : ' + members.length" class="mb-1" />
      <atom-text :text="'Article : ' + articles.length" class="mb-1" />
      <atom-text :text="'Project : ' + projects.length" class="mb-1" />
      <atom-text :text="'Event : ' + events.length" class="mb-1" />
      <atom-text :text="'Skill : ' + skills.length" class="mb-1" />
    </v-card>
  </layout-admin>
</template>
