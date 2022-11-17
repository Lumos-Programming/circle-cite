<script setup lang="ts">
import { CreateSkillInput, ListSkillsQuery, Skill } from '~/assets/API'
import {
  createSkill,
  deleteSkill,
  updateSkill
} from '~/assets/graphql/mutations'
import { listSkills } from '~/assets/graphql/queries'
const { $listQuery } = useNuxtApp()
const skills = ref<Skill[]>([])
const getSkills = async () => {
  skills.value = await $listQuery<ListSkillsQuery, Skill>({
    name: 'listSkills',
    query: listSkills
  })
}
const input = ref<CreateSkillInput>({
  name: ''
})
getSkills()
</script>
<template>
  <layout-admin>
    <atom-text font-size="text-h4" text="Skills" />
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
            $baseMutation({ name: 'createSkill', query: createSkill, input })
          "
        >
          新規作成
        </v-btn>
        <v-btn
          variant="outlined"
          style="flex: 1"
          @click="
            $baseMutation({ name: 'updateSkill', query: updateSkill, input })
          "
        >
          更新
        </v-btn>
        <v-btn
          variant="outlined"
          style="flex: 1"
          @click="
            $baseMutation({ name: 'deleteSkill', query: deleteSkill, input })
          "
        >
          削除
        </v-btn>
      </div>
      <json-editor v-model="input" height="400" mode="tree" />
    </v-card>
    <v-card class="pa-5 my-5">
      <div class="d-flex my-2">
        <atom-text text="All Skills" font-size="text-h6" class="my-2" />
        <v-spacer />
        <v-btn variant="outlined" @click="getSkills()"> 再取得 </v-btn>
      </div>
      <json-editor v-model="skills" height="400" mode="tree" />
    </v-card>
  </layout-admin>
</template>
