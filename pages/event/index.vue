<script setup lang="ts">
import { Event, ListEventsQuery } from '~/assets/API'
import { listEvents } from '~/assets/graphql/queries'
const { $listQuery } = useNuxtApp()
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
    <atom-text font-size="text-h4" text="Event" class="py-10" />
    <div class="d-flex flex-wrap" style="gap: 60px 5%">
      <module-content-medium
        v-for="item in events"
        :key="item.id"
        :func="navigateTo('/event/' + item.id)"
        :img-key="item.file?.key"
        :identity-id="item.file?.identityId"
        :created-at="item.createdAt"
        :updated-at="item.updatedAt"
        :title="item.title"
        style="flex: 0 1 30%"
      >
        <atom-text
          :text="item.wanted ? '募集中' : '募集終了'"
          class="rounded-pill text-center border-width-1 border-solid pa-1 mx-2 mb-5"
          :class="[
            item.wanted
              ? 'border-light-blue-darken-4 bg-light-blue-darken-4'
              : 'border-grey-darken-1 bg-transparent'
          ]"
          :color="item.wanted ? 'text-white' : 'text-grey-darken-1'"
        />
      </module-content-medium>
    </div>
  </layout-public>
</template>
