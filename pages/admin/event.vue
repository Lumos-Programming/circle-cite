<script setup lang="ts">
import { Event, CreateEventInput, ListEventsQuery } from '~/assets/API'
import { FileInput } from '~/assets/type'
import {
  createEvent,
  deleteEvent,
  updateEvent
} from '~/assets/graphql/mutations'
import { listEvents } from '~/assets/graphql/queries'
const { $getYMD, $listQuery, $extendMutation } = useNuxtApp()
const events = ref<Event[]>([])
const getEvents = async () => {
  events.value = await $listQuery<ListEventsQuery, Event>({ query: listEvents })
}
const filterAttr = (item: Event) => {
  return {
    id: item.id,
    title: item.title || '',
    date: item.date || [],
    description: item.description || '',
    wanted: item.wanted || false,
    published: item.published || false,
    file: item.file || null
  }
}
const input = ref<FileInput<CreateEventInput>>({
  title: '',
  date: [$getYMD(new Date().toLocaleString(), '-')],
  description: '',
  wanted: false,
  published: false,
  file: null
})
const headers = [
  { text: 'id', value: 'id' },
  { text: 'title', value: 'title' },
  { text: 'wanted', value: 'wanted' },
  { text: 'published', value: 'published' },
  { text: 'oparation', value: 'oparation' }
]
getEvents()
// TODO: valiidationを掛けること
</script>
<template>
  <layout-admin>
    <atom-text font-size="text-h4" text="Events" />
    <atom-breadcrumbs class="mb-5" />
    <v-card class="pa-5">
      <div class="d-flex my-2">
        <atom-text text="新規作成" font-size="text-h6" class="my-2" />
        <v-spacer />
        <atom-button
          text="新規作成"
          btn-class="border-solid border-width-1 border-grey-darken-4"
          @btn-click="
            $extendMutation({
              type: 'create',
              key: input.file?.key || '',
              query: createEvent,
              input
            })
          "
        />
      </div>
      <div v-for="[key, item] in Object.entries(input)" class="d-flex">
        <atom-text
          :text="key"
          font-size="text-subtitle-2"
          line-height="line-height-40"
          style="flex: 0 0 120px"
        />
        <atom-input v-model="input[key]" :value="item" :label="key" />
      </div>
    </v-card>
    <v-card class="pa-5 my-5">
      <div class="d-flex my-2">
        <atom-text text="一括取得" font-size="text-h6" class="my-2" />
        <v-spacer />
        <atom-button
          text="再取得"
          btn-class="border-solid border-width-1 border-grey-darken-4"
          @btn-click="getEvents()"
        />
      </div>
      <easy-data-table
        :headers="headers"
        :items="events"
        header-item-class-name="text-subtitle-2 font-weight-bold line-height-36"
        body-row-class-name="height-48"
        buttons-pagination
        show-index
      >
        <template #expand="item">
          <json-editor
            v-model="events[item.index - 1]"
            height="400"
            mode="tree"
          />
        </template>
        <template #item-oparation="item">
          <div class="d-flex flex-nowrap">
            <v-btn
              icon="mdi-update"
              variant="plain"
              @click="
                $extendMutation({
                  type: 'update',
                  key: input.file?.key || '',
                  query: updateEvent,
                  input: filterAttr($findItem(events, 'id', item.id))
                })
              "
            ></v-btn>
            <v-btn
              icon="mdi-delete"
              variant="plain"
              @click="
                $extendMutation({
                  type: 'delete',
                  key: input.file?.key || '',
                  query: deleteEvent,
                  input: { id: item.id }
                })
              "
            ></v-btn>
          </div>
        </template>
      </easy-data-table>
    </v-card>
  </layout-admin>
</template>
