<script setup lang="ts">
import { ListSkillsQuery, Skill } from '~/assets/API'
import { listSkills } from '~/assets/graphql/queries'
const { $listQuery } = useNuxtApp()
const skills = ref<Skill[]>([])
const getSkills = async () => {
  skills.value = await $listQuery<ListSkillsQuery, Skill>({
    name: 'listSkills',
    query: listSkills
  })
}
getSkills()
</script>
<template>
  <layout-public>
    <atom-text font-size="text-h4" text="Skills" class="py-10" />
    <v-chip-group column>
      <v-hover
        v-for="item in skills"
        :key="item.id"
        v-slot="{ isHovering, props }"
      >
        <v-chip
          :ripple="false"
          class="ma-2 elevation-5 transition-short-ease-out"
          :class="[
            isHovering
              ? 'text-white bg-grey-darken-4'
              : 'bg-white grey-darken-4'
          ]"
          variant="elevated"
          prepend-icon="mdi-music-accidental-sharp"
          v-bind="props"
          link
          :to="'/skill/' + item.id"
        >
          {{ item.title }}
        </v-chip>
      </v-hover>
    </v-chip-group>
  </layout-public>
</template>
