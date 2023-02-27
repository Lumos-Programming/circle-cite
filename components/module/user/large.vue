<script setup lang="ts">
import { User } from '~/assets/API'
withDefaults(
  defineProps<{
    user: User
  }>(),
  {}
)
</script>
<template>
  <v-card class="d-flex flex-column flex-sm-row rounded-lg pa-5">
    <div class="v-col-12 v-col-sm-3">
      <module-user-icon
        :img-key="user.file?.key"
        :identity-id="user.file?.identityId"
        class="height-80 width-80 mx-auto"
        :class="{ 'border-width-5 border-solid border-accent-color': user.jobHunting }"
      />
    </div>

    <div class="v-col-auto" :style="{ flex: 1 }">
      <atom-text font-size="text-h6" class="text-center text-sm-left" :text="user.name" />
      <atom-text
        font-size="text-caption"
        class="mt-3 line-clamp-1"
        color="text-grey-darken-1"
        :text="'大学： ' + (user.university || '')"
      />
      <atom-text
        font-size="text-caption"
        class="mt-1 line-clamp-1"
        color="text-grey-darken-1"
        :text="'学部： ' + (user.faculty || '')"
      ></atom-text>
      <atom-text
        font-size="text-caption"
        class="mt-1 mb-3 line-clamp-1"
        color="text-grey-darken-1"
        :text="'学年： ' + (user.grade || 1) + '年'"
      ></atom-text>
      <v-chip-group class="ml-n3">
        <v-hover v-for="item in user.skill?.items" v-slot="{ isHovering, props }">
          <v-chip
            :ripple="false"
            class="ma-2 transition-short-ease-out rounded text-caption"
            :class="[isHovering ? 'text-white bg-main-color' : 'bg-white text-grey-darken-4']"
            variant="elevated"
            v-bind="props"
            link
            :to="item?.skill.id ? '/skill/' + item?.skill.id : '/'"
          >
            {{ item?.skill.title }}
          </v-chip>
        </v-hover>
      </v-chip-group>
      <div class="d-flex flex-nowrap justify-center justify-sm-start height-28" style="gap: 0 4px">
        <template
          v-for="[key, value] in Object.entries({
            github: user.github,
            twitter: user.twitter,
            qiita: user.qiita,
            zenn: user.zenn
          })"
        >
          <nuxt-link v-if="value" :to="value || '/'" target="_blank" external>
            <atom-button-circle class="width-28 height-28 pa-1">
              <v-img :src="`/${key}.svg`" class="width-20 height-20" />
            </atom-button-circle>
          </nuxt-link>
        </template>
      </div>
    </div>
  </v-card>
</template>
