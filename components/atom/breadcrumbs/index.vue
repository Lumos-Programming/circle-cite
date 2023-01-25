<script setup lang="ts">
type Breadcrumbs = {
  title: string
  to: string
  disabled: boolean
}
const props = withDefaults(
  defineProps<{
    items: Breadcrumbs[]
  }>(),
  {
    items: () => []
  }
)
const { path } = useRoute()
const breadcrumbs = computed(() => {
  return props.items.length
    ? [{ title: 'top', to: '/', disabled: path === '/' }, ...props.items]
    : [
        { title: 'top', to: '/', disabled: path === '/' },
        ...path
          .slice(1)
          .split('/')
          .map((v) => {
            return {
              title: v,
              to: '/' + v,
              disabled: path.endsWith(v)
            }
          })
      ]
})
</script>
<template>
  <v-breadcrumbs
    :items="breadcrumbs"
    class="pa-0 text-caption line-height-lg"
    style="--v-disabled-opacity: 0.5"
  ></v-breadcrumbs>
</template>
