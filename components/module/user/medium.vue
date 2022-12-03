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
  <v-sheet class="bg-transparent">
    <v-hover v-slot="{ isHovering, props }">
      <module-user-icon
        :img-key="imgKey"
        :identityId="identityId"
        v-bind="props"
        :style="{ transform: isHovering ? 'scale(1.05)' : 'scale(1.0)' }"
        @click-func="navigateTo(path)"
      />
    </v-hover>
    <atom-text font-size="text-h5" class="text-center my-3" :text="name" />
    <atom-text class="text-center ma-3" :text="belongs" />
    <div class="d-flex flex-nowrap justify-center" style="gap: 0 4px">
      <atom-button-circle @btn-click="$externalLink(github)">
        <v-img src="/github.svg" class="width-24 height-24 ma-2" />
      </atom-button-circle>
      <atom-button-circle @btn-click="$externalLink(twitter)">
        <v-img src="/twitter.svg" class="width-24 height-24 ma-2" />
      </atom-button-circle>
      <atom-button-circle @btn-click="$externalLink(qiita)">
        <v-img src="/qiita.png" class="width-24 height-24 ma-2" />
      </atom-button-circle>
      <atom-button-circle @btn-click="$externalLink(zenn)">
        <v-img src="/zenn.svg" class="width-24 height-24 ma-2" />
      </atom-button-circle>
    </div>
  </v-sheet>
</template>
