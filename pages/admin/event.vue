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
    <module-data-table
      :headers="
        ['oparation', ...Object.keys(defaultInput)].map((v) => {
          return { title: v, key: v }
        })
      "
      :items="events"
      @fetch-func="getEvents()"
      @edit-func="
        (item) => {
          input = $filterAttr(events[events.indexOf(item.raw)], eventInputs)
        }
      "
      @delete-func="
        (id) =>
          $extendMutation({
            type: 'delete',
            key: input.file?.key || '',
            query: deleteEvent,
            input: { id }
          })
      "
    />
  </layout-admin>
</template>
