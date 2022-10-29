<script setup lang="ts">
import { CreateEventInput, Event, ListEventsQuery } from '~/assets/API'
import {
  createEvent,
  deleteEvent,
  updateEvent
} from '~/assets/graphql/mutations'
import { listEvents } from '~/assets/graphql/queries'
const { $listQuery } = useNuxtApp()
const events = ref<Event[]>([])
const getEvents = async () => {
  events.value = await $listQuery<ListEventsQuery, Event>({
    name: 'listEvents',
    query: listEvents
  })
}
const input = ref<CreateEventInput>({
  name: '',
  date: [new Date().toLocaleString()],
  description: '',
  wanted: false,
  published: false,
  userEventId: null
})
getEvents()
</script>
<template>
  <layout-admin>
    <atom-text font-size="text-h4" text="Events" />
    <atom-breadcrumbs class="mb-5" />
    <v-card class="pa-5">
      <atom-text
        text="Create / Update / Delete"
        font-size="text-h6"
        class="my-2"
      />
      <div class="d-flex my-2" style="gap: 0 20px">
        <v-btn
          variant="outlined"
          style="flex: 1"
          @click="
            $baseMutation({ name: 'createEvent', query: createEvent, input })
          "
        >
          新規作成
        </v-btn>
        <v-btn
          variant="outlined"
          style="flex: 1"
          @click="
            $baseMutation({ name: 'updateEvent', query: updateEvent, input })
          "
        >
          更新
        </v-btn>
        <v-btn
          variant="outlined"
          style="flex: 1"
          @click="
            $baseMutation({ name: 'deleteEvent', query: deleteEvent, input })
          "
        >
          削除
        </v-btn>
      </div>
      <json-editor v-model="input" height="400" mode="tree" />
    </v-card>
    <v-card class="pa-5 my-5">
      <div class="d-flex my-2">
        <atom-text text="All Events" font-size="text-h6" class="my-2" />
        <v-spacer />
        <v-btn variant="outlined" @click="getEvents()"> 再取得 </v-btn>
      </div>
      <json-editor v-model="events" height="400" mode="tree" />
    </v-card>
  </layout-admin>
</template>
