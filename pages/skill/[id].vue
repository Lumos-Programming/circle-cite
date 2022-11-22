<script setup lang="ts">
import { Skill, GetSkillQuery } from '~/assets/API'
import { getSkill } from '~/assets/graphql/queries'
const { $getQuery } = useNuxtApp()
const { params } = useRoute()
const skill = ref<Skill>({} as Skill)
const fetchSkill = async () => {
  skill.value = await $getQuery<GetSkillQuery, Skill>({
    name: 'getSkill',
    query: getSkill,
    variables: {
      id: params.id || null
    }
  })
}
fetchSkill()
</script>
<template>
  <layout-public>
    <atom-breadcrumbs
      class="my-5"
      :items="[
        { title: 'skill', to: '/skill', disabled: false },
        { title: skill.title, to: '/skill', disabled: true }
      ]"
    />
    <div class="mx-5">
      <atom-text font-size="text-h4" :text="'#' + skill.title" class="mt-16" />
    </div>
    <atom-text
      font-size="text-h5"
      text="このタグを登録中のメンバー"
      class="mt-16 mx-5"
    />
    <div
      v-if="skill?.user?.items"
      class="d-flex flex-nowrap ma-5 pa-2 overflow-x-auto"
      style="gap: 60px 4%"
    >
      <module-user-small
        v-for="item in skill.user.items"
        :key="item?.user.id"
        :path="'/member/' + item?.user.id"
        :img-key="item?.user.file?.key"
        :name="item?.user.name"
        style="flex: 0 1 22%"
      />
    </div>
    <atom-text
      font-size="text-h5"
      text="このタグに関連する記事"
      class="mt-16 mx-5"
    />
    <div
      v-if="skill?.user?.items"
      class="d-flex flex-nowrap ma-5 pa-2 overflow-x-auto"
      style="gap: 60px 5%"
    >
      <module-content-medium
        v-for="item in skill.article?.items"
        :key="item?.article.id"
        :path="'/article/' + item?.article.id"
        :created-at="item?.article.createdAt"
        :updated-at="item?.article.updatedAt"
        :title="item?.article.title"
        style="flex: 0 1 30%"
      />
    </div>
  </layout-public>
</template>
