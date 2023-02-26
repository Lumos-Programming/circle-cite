<script setup lang="ts">
import { Event, UpdateEventInput, ListEventsQuery } from '~/assets/API'
import { FileInput } from '~/assets/type'
import { eventInputs } from '~/assets/enum'
import { createEvent, deleteEvent, updateEvent } from '~/assets/graphql/mutations'
import { listEvents } from '~/assets/graphql/queries'
const { $listQuery, $extendMutation, $filterAttr } = useNuxtApp()
const { banEdit } = useEditState()
const { setExistError, setErrorMessages } = useErrorState()
const events = ref<Event[]>([])
const form = ref<any>()
const getEvents = async () => {
  events.value = await $listQuery<ListEventsQuery, Event>({ query: listEvents })
}
const mutateEvent = async () => {
  const validate = await form.value?.validate()
  if (!validate.valid) {
    setExistError(true)
    setErrorMessages(
      form.value?.errors.map((v: any) => v.errorMessages.map((m: string) => `${v.id}：${m}`)).flat()
    )
    return
  }
  await $extendMutation({
    type: input.value.id ? 'update' : 'create',
    key: input.value.file?.key || '',
    query: input.value.id ? updateEvent : createEvent,
    input: input.value.id
      ? $filterAttr(input.value, eventInputs)
      : $filterAttr(input.value, eventInputs, ['id']),
    file: input.value.file?.file
  })
}
const defaultInput = Object.fromEntries(eventInputs.map((v) => [v.key, v.default]))
const input = ref<FileInput<Partial<UpdateEventInput>>>(defaultInput)
await getEvents()
</script>
<template>
  <layout-admin>
    <div>
      <div class="d-flex my-2">
        <atom-text
          :text="input.id ? input.id + 'の更新' : '新規作成'"
          font-size="text-h6"
          class="my-2"
        />
        <v-spacer />
        <atom-button
          :loading="banEdit"
          text="リセット"
          btn-class="border-solid border-width-1 border-grey-darken-4 mr-3"
          @btn-click="input = defaultInput"
        />
        <atom-button
          :loading="banEdit"
          :text="input.id ? '更新' : '新規作成'"
          btn-class="border-solid border-width-1 border-grey-darken-4"
          @btn-click="mutateEvent()"
        />
      </div>
      <v-form ref="form">
        <atom-input
          v-for="item in eventInputs"
          :key="item.key"
          v-model="input[item.key]"
          :input="item"
        />
      </v-form>
    </div>
    <div class="my-5">
      <div class="d-flex my-2">
        <atom-text text="一括取得" font-size="text-h6" class="my-2" />
        <v-spacer />
        <atom-button
          :loading="banEdit"
          text="再取得"
          btn-class="border-solid border-width-1 border-grey-darken-4"
          @btn-click="getEvents()"
        />
      </div>
      <v-data-table
        :headers="
          ['oparation', ...Object.keys(defaultInput)].map((v) => {
            return { title: v, key: v }
          })
        "
        :items="events"
        density="compact"
        :style="{ '--v-table-header-height': '40px' }"
        class="white-space-nowrap"
      >
        <template #[`item.oparation`]="{ item }">
          <div class="d-flex flex-nowrap">
            <v-icon
              size="24"
              class="ma-2"
              @click="input = $filterAttr(events[events.indexOf(item.raw)], eventInputs)"
              >mdi-pencil
            </v-icon>
            <v-icon
              size="24"
              class="ma-2"
              @click="
                $extendMutation({
                  type: 'delete',
                  key: input.file?.key || '',
                  query: deleteEvent,
                  input: { id: item.id }
                })
              "
              >mdi-delete
            </v-icon>
          </div>
        </template>
      </v-data-table>
    </div>
  </layout-admin>
</template>
