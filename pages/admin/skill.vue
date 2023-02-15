<script setup lang="ts">
import { Skill, UpdateSkillInput, ListSkillsQuery } from '~/assets/API'
import { IndexSignature } from '~/assets/type'
import { skillInputs } from '~/assets/enum'
import { createSkill, deleteSkill, updateSkill } from '~/assets/graphql/mutations'
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
      <div v-for="item in skillInputs">
        <atom-input
          :key="item.key"
          v-model="input[item.key]"
          :input="item"
          :is-file="
            skillInputs
              .filter((v) => v.type === 'fileinput')
              .map((v) => v.key)
              .includes(item.key)
          "
        />
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
      <v-data-table
        :headers="
          ['oparation', ...Object.keys(defaultInput)].map((v) => {
            return { title: v, key: v }
          })
        "
        :items="skills"
        density="compact"
        :style="{ '--v-table-header-height': '40px' }"
        class="white-space-nowrap"
      >
        <template #[`item.oparation`]="{ item }">
          <div class="d-flex flex-nowrap">
            <v-icon
              size="24"
              class="ma-2"
              @click="
                input = $filterAttr(
                  skills[skills.indexOf(item.raw)],
                  Object.keys(defaultInput),
                  skillInputs
                )
              "
              >mdi-pencil
            </v-icon>
            <v-icon
              size="24"
              class="ma-2"
              @click="
                $extendMutation({
                  type: 'delete',
                  key: input.file?.key || '',
                  query: deleteSkill,
                  input: { id: item.id }
                })
              "
              >mdi-delete
            </v-icon>
          </div>
        </template>
      </v-data-table>
    </div>
  </layout-admin>
</template>
