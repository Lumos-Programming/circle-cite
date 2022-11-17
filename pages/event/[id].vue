<script setup lang="ts">
import { Event, GetEventQuery } from '~/assets/API'
import { getEvent } from '~/assets/graphql/queries'
const { $getQuery, $getImage } = useNuxtApp()
const { params } = useRoute()
const event = ref<Event>({} as Event)
const imageUrl = ref<string>('/no_image.png')
const fetchEvent = async () => {
  event.value = await $getQuery<GetEventQuery, Event>({
    name: 'getEvent',
    query: getEvent,
    variables: {
      id: params.id || null
    }
  })
  imageUrl.value = await $getImage(event.value.file?.key)
}
fetchEvent()
</script>
<template>
  <layout-public>
    <atom-breadcrumbs
      class="my-5"
      :items="[
        { title: 'event', to: '/event', disabled: false },
        { title: event.title, to: '/event', disabled: true }
      ]"
    />
    <div class="mx-5">
      <atom-text font-size="text-h4" :text="event.title" class="mt-16" />
      <div
        class="d-flex flex-nowrap justify-start bg-transparent mt-2 mb-2"
        style="gap: 0 10px"
      >
        <atom-text
          font-size="text-caption"
          :text="$getYMD(event.createdAt)"
          font-weight="font-weight-regular"
          ><v-icon size="14" class="mr-1 align-text-bottom">
            mdi-cloud-upload-outline
          </v-icon>
        </atom-text>
        <atom-text
          font-size="text-caption"
          :text="$getYMD(event.updatedAt)"
          font-weight="font-weight-regular"
          ><v-icon size="14" class="mr-1 align-text-bottom">
            mdi-autorenew
          </v-icon>
        </atom-text>
      </div>
      <v-card class="rounded-lg ma-5">
        <v-img :src="imageUrl" :aspect-ratio="16 / 9" cover />
      </v-card>
      <div class="d-flex flex-wrap flex-sm-nowrap my-2">
        <atom-text text="日時：" />
        <atom-text
          :text="event.date?.join('、') || ''"
          font-weight="font-weight-regular"
        />
      </div>
      <div class="d-flex flex-wrap flex-sm-nowrap my-2">
        <atom-text text="概要：" />
        <atom-text
          :text="event.description"
          font-weight="font-weight-regular"
        />
      </div>
    </div>
    <atom-text font-size="text-h5" text="参加メンバー" class="mt-16 mx-5" />
    <div
      v-if="event?.user?.items"
      class="d-flex flex-nowrap ma-5 pa-2 overflow-x-auto"
      style="gap: 60px 4%"
    >
      <module-user-small
        v-for="item in event.user.items"
        :key="item.id"
        :path="'/member/' + item.id"
        :img-key="item.file?.key"
        :name="item.name"
        style="flex: 0 1 22%"
      />
    </div>
    <atom-text font-size="text-h5" text="関連記事" class="mt-16 mx-5" />
    <div
      v-if="event?.article?.items"
      class="d-flex flex-wrap ma-5"
      style="gap: 60px 5%"
    >
      <module-content-medium
        v-for="item in event.article.items"
        :key="item.id"
        :path="'/article/' + item.id"
        :created-at="item.createdAt"
        :updated-at="item.updatedAt"
        :title="item.title"
        style="flex: 0 1 30%"
      />
    </div>
  </layout-public>
</template>
