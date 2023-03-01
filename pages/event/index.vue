<script setup lang="ts">
import { Event, ListEventsQuery } from '~/assets/API'
import { listEvents } from '~/assets/graphql/queries'
const { $listQuery } = useNuxtApp()
const { isSignedIn } = useLoginState()
const events = ref<Event[]>([])
const getEvents = async () => {
  events.value = await $listQuery<ListEventsQuery, Event>({
    query: listEvents,
    filter: { published: { eq: true } }
  })
}
await getEvents()
</script>
<template>
  <layout-public>
    <div class="d-flex py-10">
      <atom-text font-size="text-h4" text="Event" />
      <v-spacer />
      <atom-button v-if="isSignedIn" text="新規作成" @btn-click="navigateTo('/admin/event')" />
    </div>
    <div class="d-flex flex-wrap">
      <module-content-medium
        v-for="item in events"
        :key="item.id"
        :img-key="item.file?.key"
        :identity-id="item.file?.identityId"
        :created-at="item.createdAt"
        :updated-at="item.updatedAt"
        :title="item.title"
        class="v-col-12 v-col-sm-6 v-col-md-4"
        @click-func="navigateTo('/event/' + item.id)"
      >
        <atom-text
          font-size="text-subtitle-2"
          :text="item.wanted ? '募集中' : '募集終了'"
          :color="item.wanted ? 'text-white' : 'text-grey-darken-1'"
          class="rounded text-center border-width-1 border-solid pa-1 mx-2"
          :class="[
            item.wanted
              ? 'border-light-blue-darken-4 bg-light-blue-darken-4'
              : 'border-grey-darken-1 bg-transparent'
          ]"
        />
      </module-content-medium>
    </div>
  </layout-public>
</template>
