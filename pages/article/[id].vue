<script setup lang="ts">
import { Article, GetArticleQuery } from '~/assets/API'
import { getArticle } from '~/assets/graphql/queries'
const { $getQuery } = useNuxtApp()
const { params } = useRoute()
const article = ref<Article>({} as Article)
const fetchArticle = async () => {
  article.value = await $getQuery<GetArticleQuery, Article>({
    name: 'getArticle',
    query: getArticle,
    variables: { id: params.id || null }
  })
}
fetchArticle()
</script>
<template>
  <layout-public>
    <atom-breadcrumbs
      class="my-5"
      :items="[
        { title: 'article', to: '/article', disabled: false },
        { title: article.title, to: '/article', disabled: true }
      ]"
    />
    <div class="mx-5">
      <atom-text font-size="text-h4" :text="article.title" class="mt-16" />
      <div
        class="d-flex flex-nowrap justify-start bg-transparent mt-2 mb-2"
        style="gap: 0 10px"
      >
        <atom-text
          font-size="text-caption"
          :text="$getYMD(article.createdAt)"
          font-weight="font-weight-regular"
          ><v-icon size="14" class="mr-1 align-text-bottom">
            mdi-cloud-upload-outline
          </v-icon>
        </atom-text>
        <atom-text
          font-size="text-caption"
          :text="$getYMD(article.updatedAt)"
          font-weight="font-weight-regular"
          ><v-icon size="14" class="mr-1 align-text-bottom">
            mdi-autorenew
          </v-icon>
        </atom-text>
        <atom-text
          font-size="text-caption"
          font-weight="font-weight-regular"
          text="|"
        />
        <atom-text
          font-size="text-caption"
          font-weight="font-weight-regular"
          :text="article.user?.name"
          class="cursor-pointer"
          style="text-decoration: underline"
          @click="navigateTo('/member/' + article.user.id)"
        />
      </div>
      <v-chip-group v-if="article.skill?.items.length" column>
        <v-hover
          v-for="item in article.skill.items"
          :key="item?.id"
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
            variant="flat"
            prepend-icon="mdi-music-accidental-sharp"
            v-bind="props"
            link
            :to="'/skill/' + item?.id"
          >
            {{ item?.skill.title }}
          </v-chip>
        </v-hover>
      </v-chip-group>
      <div class="mt-16">{{ article.body }}</div>
    </div>
  </layout-public>
</template>
