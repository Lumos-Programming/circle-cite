<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string | null
    path: string
    belongs: string | null
    github: string | null
    twitter: string | null
    qiita: string | null
    zenn: string | null
    imgKey: string
    identityId: string
  }>(),
  {
    name: '',
    path: '/',
    belongs: '',
    github: '',
    twitter: '',
    qiita: '',
    zenn: '',
    imgKey: '',
    identityId: ''
  }
)
</script>
<template>
  <v-card class="elevation-5 rounded-lg pa-10">
    <v-hover v-slot="{ isHovering, props }">
      <module-user-icon
        :img-key="imgKey"
        :identityId="identityId"
        v-bind="props"
        :style="{ transform: isHovering ? 'scale(1.05)' : 'scale(1.0)' }"
        class="height-80 width-80 mx-auto"
        @click-func="navigateTo(path)"
      />
    </v-hover>
    <atom-text font-size="text-h6" class="text-center mt-5" :text="name" />
    <atom-text
      font-size="text-subtitle-2"
      class="text-center mt-1 mb-3 line-clamp-1"
      color="text-grey-darken-1"
      :text="belongs"
    />
    <div class="d-flex flex-nowrap justify-center" style="gap: 0 4px">
      <nuxt-link v-if="github" :to="github || '/'" target="_blank" external>
        <atom-button-circle class="width-28 height-28 pa-1">
          <v-img src="/github.svg" class="width-20 height-20" />
        </atom-button-circle>
      </nuxt-link>
      <nuxt-link v-if="twitter" :to="twitter || '/'" target="_blank" external>
        <atom-button-circle class="width-28 height-28 pa-1">
          <v-img
            src="/twitter.svg"
            class="width-20 height-20"
          /> </atom-button-circle
      ></nuxt-link>
      <nuxt-link v-if="qiita" :to="qiita || '/'" target="_blank" external>
        <atom-button-circle class="width-28 height-28 pa-1">
          <v-img
            src="/qiita.png"
            class="width-20 height-20"
          /> </atom-button-circle
      ></nuxt-link>
      <nuxt-link v-if="zenn" :to="zenn || '/'" target="_blank" external>
        <atom-button-circle class="width-28 height-28 pa-1">
          <v-img
            src="/zenn.svg"
            class="width-20 height-20"
          /> </atom-button-circle
      ></nuxt-link>
    </div>
  </v-card>
</template>
