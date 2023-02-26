<script setup lang="ts">
import {
  articleSkillInputs,
  eventUserInputs,
  projectUserInputs,
  userSkillInputs
} from '~/assets/enum'
import {
  createArticleSkills,
  deleteArticleSkills,
  updateArticleSkills,
  createEventUsers,
  updateEventUsers,
  deleteEventUsers,
  createProjectUsers,
  updateProjectUsers,
  deleteProjectUsers,
  createUserSkills,
  updateUserSkills,
  deleteUserSkills
} from '~/assets/graphql/mutations'
import {
  listArticleSkills,
  listEventUsers,
  listProjectUsers,
  listUserSkills
} from '~/assets/graphql/queries'
const relations = [
  {
    title: '記事とスキルタグを紐づけるテーブル',
    inputs: articleSkillInputs,
    query: listArticleSkills,
    createMutation: createArticleSkills,
    updateMutation: updateArticleSkills,
    deleteMutation: deleteArticleSkills
  },
  {
    title: 'イベントとユーザーを紐づけるテーブル',
    inputs: eventUserInputs,
    query: listEventUsers,
    createMutation: createEventUsers,
    updateMutation: updateEventUsers,
    deleteMutation: deleteEventUsers
  },
  {
    title: 'プロジェクトとユーザーを紐づけるテーブル',
    inputs: projectUserInputs,
    query: listProjectUsers,
    createMutation: createProjectUsers,
    updateMutation: updateProjectUsers,
    deleteMutation: deleteProjectUsers
  },
  {
    title: 'ユーザーとスキルタグを紐づけるテーブル',
    inputs: userSkillInputs,
    query: listUserSkills,
    createMutation: createUserSkills,
    updateMutation: updateUserSkills,
    deleteMutation: deleteUserSkills
  }
]
</script>
<template>
  <layout-admin>
    <atom-input-relation
      v-for="i in relations"
      :key="i.title"
      :title="i.title"
      :inputs="i.inputs"
      :create-mutation="i.createMutation"
      :update-mutation="i.updateMutation"
      :delete-mutation="i.deleteMutation"
    />
  </layout-admin>
</template>
