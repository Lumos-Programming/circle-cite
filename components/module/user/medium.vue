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
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        class="elevation-5 rounded-lg pa-5 transition-medium-ease-out"
        v-bind="props"
        :style="{ transform: isHovering ? 'scale(1.05)' : 'scale(1.0)' }"
        @click="navigateTo('/member/' + user.id)"
      >
        <module-user-icon
          :img-key="user.file?.key"
          :identity-id="user.file?.identityId"
          class="height-80 width-80 mx-auto"
          :class="{ 'border-width-5 border-solid border-accent-color': user.jobHunting }"
        />
        <atom-text font-size="text-h6" class="text-center mt-5" :text="user.name" />
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
        <v-chip-group class="ml-n2">
          <v-chip
            v-for="item in user.skill?.items"
            :ripple="false"
            class="ma-1 transition-short-ease-out rounded text-caption text-black"
            variant="outlined"
          >
            {{ item?.skill.title }}
          </v-chip>
        </v-chip-group>
        <div class="d-flex flex-nowrap justify-center height-28" style="gap: 0 4px">
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
      </v-card>
    </v-hover>
  </div>
</template>
