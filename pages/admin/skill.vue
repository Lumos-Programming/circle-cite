<script setup lang="ts">
import { Skill, UpdateSkillInput, ListSkillsQuery } from '~/assets/API'
import { IndexSignature } from '~/assets/type'
import {
  createSkill,
  deleteSkill,
  updateSkill
} from '~/assets/graphql/mutations'
import { listSkills } from '~/assets/graphql/queries'
const { $listQuery, $baseMutation, $filterAttr, $excludeAttr } = useNuxtApp()
const { banEdit } = useEditState()
const skills = ref<Skill[]>([])
const getSkills = async () => {
  skills.value = await $listQuery<ListSkillsQuery, Skill>({ query: listSkills })
}
const mutateSkill = async () => {
  await $baseMutation({
    query: input.value.id ? updateSkill : createSkill,
    input: input.value.id ? input.value : $excludeAttr(input.value, ['id'])
  })
}
const defaultInput = {
  id: '',
  title: ''
}
const input = ref<IndexSignature<UpdateSkillInput>>(defaultInput)
const headers = ['id', 'title', 'oparation']
await getSkills()
// TODO: valiidationを掛けること
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
          @btn-click="mutateSkill()"
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
    </div>
    <div class="my-5">
      <div class="d-flex my-2">
        <atom-text text="一括取得" font-size="text-h6" class="my-2" />
        <v-spacer />
        <atom-button
          :loading="banEdit"
          text="再取得"
          btn-class="border-solid border-width-1 border-grey-darken-4"
          @btn-click="getSkills()"
        />
      </div>
      <easy-data-table
        :headers="
          headers.map((v) => {
            return { text: v, value: v }
          })
        "
        :items="skills"
        header-item-class-name="text-subtitle-2 font-weight-bold line-height-36"
        body-row-class-name="height-36 line-height-36 one-line-reader"
        buttons-pagination
        show-index
      >
        <template #item-oparation="item">
          <div class="d-flex flex-nowrap">
            <v-icon
              size="24"
              class="ma-2"
              @click="
                input = $filterAttr(skills[item.index - 1], ['id', 'title'])
              "
              >mdi-pencil
            </v-icon>
            <v-icon
              size="24"
              class="ma-2"
              @click="
                $baseMutation({
                  query: deleteSkill,
                  input: { id: item.id }
                })
              "
              >mdi-delete
            </v-icon>
          </div>
        </template>
      </easy-data-table>
    </div>
  </layout-admin>
</template>
