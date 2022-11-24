<script setup lang="ts">
import { Skill, CreateSkillInput, ListSkillsQuery } from '~/assets/API'
import {
  createSkill,
  deleteSkill,
  updateSkill
} from '~/assets/graphql/mutations'
import { listSkills } from '~/assets/graphql/queries'
const { $listQuery, $baseMutation } = useNuxtApp()
const skills = ref<Skill[]>([])
const getSkills = async () => {
  skills.value = await $listQuery<ListSkillsQuery, Skill>({
    name: 'listSkills',
    query: listSkills
  })
}
const filterAttr = (item: Skill) => {
  return {
    id: item.id,
    title: item.title || ''
  }
}
const input = ref<CreateSkillInput & { [key: string]: any }>({
  title: ''
})
const headers = [
  { text: 'id', value: 'id' },
  { text: 'title', value: 'title' },
  { text: 'oparation', value: 'oparation' }
]
getSkills()
// TODO: valiidationを掛けること
</script>
<template>
  <layout-admin>
    <atom-text font-size="text-h4" text="Skills" />
    <atom-breadcrumbs class="mb-5" />
    <v-card class="pa-5">
      <div class="d-flex my-2">
        <atom-text text="新規作成" font-size="text-h6" class="my-2" />
        <v-spacer />
        <atom-button
          text="新規作成"
          btn-class="border-solid border-width-1 border-grey-darken-4"
          @btn-click="
            $baseMutation({
              name: 'createSkill',
              query: createSkill,
              input
            })
          "
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
    </v-card>
    <v-card class="pa-5 my-5">
      <div class="d-flex my-2">
        <atom-text text="一括取得" font-size="text-h6" class="my-2" />
        <v-spacer />
        <atom-button
          text="再取得"
          btn-class="border-solid border-width-1 border-grey-darken-4"
          @btn-click="getSkills()"
        />
      </div>
      <easy-data-table
        :headers="headers"
        :items="skills"
        header-item-class-name="text-subtitle-2 font-weight-bold line-height-36"
        body-row-class-name="height-48"
        buttons-pagination
        show-index
      >
        <template #expand="item">
          <json-editor
            v-model="skills[item.index - 1]"
            height="400"
            mode="tree"
          />
        </template>
        <template #item-oparation="item">
          <div class="d-flex flex-nowrap">
            <v-btn
              icon="mdi-update"
              variant="plain"
              @click="
                $baseMutation({
                  name: 'updateSkill',
                  query: updateSkill,
                  input: filterAttr($findItem(skills, 'id', item.id))
                })
              "
            ></v-btn>
            <v-btn
              icon="mdi-delete"
              variant="plain"
              @click="
                $baseMutation({
                  name: 'deleteSkill',
                  query: deleteSkill,
                  input: { id: item.id }
                })
              "
            ></v-btn>
          </div>
        </template>
      </easy-data-table>
    </v-card>
  </layout-admin>
</template>
