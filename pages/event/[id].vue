<script setup lang="ts">
import {
  Event,
  GetEventQuery,
  EventUsers,
  CreateEventUsersInput,
  DeleteEventUsersInput
} from '~/assets/API'
import { getEvent } from '~/assets/graphql/queries'
import { createEventUsers, deleteEventUsers } from '~/assets/graphql/mutations'
const { $getQuery, $getImage, $baseMutation } = useNuxtApp()
const { params } = useRoute()
const { isSignedIn } = useLoginState()
const { myUser } = useMyUser()
const { banEdit } = useEditState()
const event = ref<Event>({} as Event)
const imageUrl = ref<string>('/no_image.png')
const enter = async () => {
  const res = await $baseMutation<CreateEventUsersInput, EventUsers>({
    query: createEventUsers,
    input: { userID: myUser.value.id, eventID: params.id }
  })
  if (!event.value.user?.items) return
  event.value.user.items.push(res)
}
const leave = async () => {
  const res = event.value.user?.items.find((v) => v?.userID === myUser.value.id)
  if (!res) return
  await $baseMutation<DeleteEventUsersInput, EventUsers>({
    query: deleteEventUsers,
    input: { id: res.id }
  })
  if (!event.value.user?.items.length) return
  event.value.user.items = event.value.user?.items.filter(
    (v) => v?.userID !== myUser.value.id
  )
}
const fetchEvent = async () => {
  event.value = await $getQuery<GetEventQuery, Event>({
    query: getEvent,
    variables: {
      id: params.id || null
    }
  })
  imageUrl.value = await $getImage(
    event.value.file?.key,
    event.value.file?.identityId
  )
}
await fetchEvent()
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
      <div class="d-flex mt-16 justify-space-between">
        <atom-text font-size="text-h4" :text="event.title" />
        <template v-if="isSignedIn">
          <atom-button
            v-if="!event.user?.items.map((v) => v?.userID).includes(myUser.id)"
            :loading="banEdit"
            text="参加する"
            @btn-click="enter()"
          />
          <atom-button
            v-else
            :loading="banEdit"
            text="参加をやめる"
            @btn-click="leave()"
          />
        </template>
      </div>
      <div
        class="d-flex flex-nowrap justify-start bg-transparent my-2"
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
        <atom-text
          :text="event.wanted ? '募集中' : '募集終了'"
          font-size="text-caption"
          class="rounded-pill text-center border-width-1 border-solid py-1 px-5 mx-2"
          :class="[
            event.wanted
              ? 'border-light-blue-darken-4 bg-light-blue-darken-4'
              : 'border-grey-darken-1 bg-transparent'
          ]"
          :color="event.wanted ? 'text-white' : 'text-grey-darken-1'"
        />
      </div>
      <v-card class="rounded-lg ma-5">
        <v-img :src="imageUrl" :aspect-ratio="16 / 9" cover />
      </v-card>
      <div class="d-flex flex-wrap flex-sm-nowrap my-2">
        <atom-text text="日時：" />
        <atom-text
          :text="event.date?.join('、')"
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
      v-if="event?.user?.items.length"
      class="d-flex flex-nowrap ma-5 pa-2 overflow-x-auto"
      style="gap: 60px 4%"
    >
      <module-user-small
        v-for="item in event.user.items"
        :key="item?.user.id"
        :path="'/member/' + item?.user.id"
        :img-key="item?.user.file?.key"
        :identity-id="item?.user.file?.identityId"
        :name="item?.user.name"
        style="flex: 0 1 22%"
      />
    </div>
    <atom-text
      v-else
      text="残念、まだいないようです。"
      class="my-2 mx-5"
      font-weight="font-weight-regular"
    />
    <atom-text
      v-if="event?.article?.items.length"
      font-size="text-h5"
      text="関連記事"
      class="mt-16 mx-5"
    />
    <div
      v-if="event?.article?.items.length"
      class="d-flex flex-wrap ma-5"
      style="gap: 60px 5%"
    >
      <module-content-small
        v-for="item in event.article.items"
        :key="item?.id"
        :path="'/article/' + item?.id"
        :title="item?.title"
        style="flex: 0 1 30%"
      />
    </div>
  </layout-public>
</template>
