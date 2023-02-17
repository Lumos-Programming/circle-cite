<script setup lang="ts">
import { User, GetUserQuery } from '~/assets/API'
import { getUser } from '~/assets/graphql/queries'
const { $getQuery } = useNuxtApp()
const { params } = useRoute()
const user = ref<User>({} as User)
const fetchUser = async () => {
  user.value = await $getQuery<GetUserQuery, User>({
    query: getUser,
    variables: {
      id: params.id || null
    }
  })
}
await fetchUser()
</script>
<template>
  <layout-public>
    <atom-breadcrumbs
      class="my-5"
      :items="[
        { title: 'member', to: '/member', disabled: false },
        {
          title: user?.name || 'you',
          to: '/member/' + user?.id,
          disabled: true
        }
      ]"
    />
    <v-card class="d-flex flex-nowrap pa-10 mx-5 mt-16 rounded-lg">
      <module-user-icon
        :img-key="user?.file?.key"
        :identity-id="user?.file?.identityId"
        class="width-80 height-80 mx-5"
      />

      <div class="mx-10" style="flex: 1 0 200px">
        <atom-text font-size="text-h5" :text="user?.name" />
        <atom-text
          :text="user?.university || ''"
          font-size="text-subtitle-2"
          class="mt-1 mb-3 line-clamp-1"
          color="text-grey-darken-1"
          font-weight="font-weight-regular"
        />
        <atom-text
          :text="user?.faculty || ''"
          font-size="text-subtitle-2"
          class="mt-1 mb-3 line-clamp-1"
          color="text-grey-darken-1"
          font-weight="font-weight-regular"
        /><atom-text
          :text="user?.grade + '年'"
          font-size="text-subtitle-2"
          class="mt-1 mb-3 line-clamp-1"
          color="text-grey-darken-1"
          font-weight="font-weight-regular"
        />
        <atom-text
          :text="user?.description"
          font-size="text-subtitle-2"
          font-weight="font-weight-regular"
          class="my-5 line-clamp-3"
        />

        <div class="d-flex flex-nowra justify-start" style="gap: 0 10px">
          <template
            v-for="[key, value] in Object.entries({
              github: user?.github,
              twitter: user?.twitter,
              qiita: user?.qiita,
              zenn: user?.zenn,
              slide: user?.slide
            })"
          >
            <nuxt-link v-if="value" :to="value || '/'" target="_blank" external>
              <atom-button-circle class="width-28 height-28 pa-1">
                <v-img :src="`/${key}.svg`" class="width-20 height-20" />
              </atom-button-circle>
            </nuxt-link>
          </template>
        </div>
        <v-chip-group column class="ml-n3">
          <v-hover
            v-for="item in user.skill?.items.slice(0, 10)"
            :key="item?.skill.id"
            v-slot="{ isHovering, props }"
          >
            <v-chip
              :ripple="false"
              class="ma-2 transition-short-ease-out"
              :class="[isHovering ? 'text-white bg-main-color' : 'bg-white text-grey-darken-4']"
              variant="elevated"
              prepend-icon="mdi-music-accidental-sharp"
              v-bind="props"
              link
              :to="'/skill/' + item?.skill.id"
            >
              {{ item?.skill.title }}
            </v-chip>
          </v-hover>
        </v-chip-group>
      </div>
    </v-card>
    <atom-text
      v-if="user?.portfolio?.items.length"
      font-size="text-h5"
      text="ポートフォリオ"
      class="mt-16 mx-5"
    />
    <div v-if="user?.portfolio?.items.length" class="d-flex flex-wrap ma-5" style="gap: 60px 5%">
      <module-content-medium
        v-for="item in user?.portfolio.items"
        :key="item?.id"
        :created-at="item?.createdAt"
        :updated-at="item?.updatedAt"
        :title="item?.title"
        style="flex: 0 1 30%"
        @click-func="navigateTo('/portfolio/' + item?.id)"
      />
    </div>
    <atom-text
      v-if="user?.article?.items.length"
      font-size="text-h5"
      text="出した記事"
      class="mt-16 mx-5"
    />
    <div v-if="user?.article?.items.length" class="d-flex flex-wrap ma-5" style="gap: 60px 5%">
      <module-content-medium
        v-for="item in user?.article.items"
        :key="item?.id"
        :created-at="item?.createdAt"
        :updated-at="item?.updatedAt"
        :title="item?.title"
        style="flex: 0 1 30%"
        @click-func="navigateTo('/article/' + item?.id)"
      />
    </div>
  </layout-public>
</template>
