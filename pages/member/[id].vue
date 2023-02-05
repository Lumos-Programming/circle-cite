<script setup lang="ts">
import { User, GetUserQuery } from '~/assets/API'
import { getUser } from '~/assets/graphql/queries'
const { $getQuery } = useNuxtApp()
const { params } = useRoute()
const user = ref<User>({} as User)
const fetchUser = async () => {
  user.value = await $getQuery<GetUserQuery, User>({
    query: getUser,
    variables: {
      id: params.id || null
    }
  })
}
await fetchUser()
</script>
<template>
  <layout-public>
    <atom-breadcrumbs
      class="my-5"
      :items="[
        { title: 'member', to: '/member', disabled: false },
        {
          title: user?.name || 'you',
          to: '/member/' + user?.id,
          disabled: true
        }
      ]"
    />
    <div class="d-flex flex-nowrap mx-5 mt-16">
      <div class="mx-5" style="flex: 0 0 200px">
        <module-user-icon
          :img-key="user?.file?.key"
          :identityId="user?.file?.identityId"
        />
      </div>

      <div class="ma-10" style="flex: 1 0 200px">
        <atom-text font-size="text-h4" :text="user?.name" />
        <atom-text
          :text="user?.belongs"
          font-weight="font-weight-regular"
          class="my-2"
        />
        <div class="d-flex flex-nowrap justify-start my-2" style="gap: 0 10px">
          <atom-text
            font-size="text-caption"
            :text="'加入日：' + $getYMD(user?.join)"
            font-weight="font-weight-regular"
          />
          <atom-text
            font-size="text-caption"
            :text="'卒業日：' + $getYMD(user?.leave)"
            font-weight="font-weight-regular"
          />
        </div>
        <div class="d-flex flex-nowra justify-start" style="gap: 0 10px">
          <atom-button-circle
            @btn-click="navigateTo(user?.github, { external: true })"
          >
            <v-img src="/github.svg" class="width-24 height-24 ma-2" />
          </atom-button-circle>
          <atom-button-circle
            @btn-click="navigateTo(user?.twitter, { external: true })"
          >
            <v-img src="/twitter.svg" class="width-24 height-24 ma-2" />
          </atom-button-circle>
          <atom-button-circle
            @btn-click="navigateTo(user?.qiita, { external: true })"
          >
            <v-img src="/qiita.png" class="width-24 height-24 ma-2" />
          </atom-button-circle>
          <atom-button-circle
            @btn-click="navigateTo(user?.zenn, { external: true })"
          >
            <v-img src="/zenn.svg" class="width-24 height-24 ma-2" />
          </atom-button-circle>
          <atom-button-circle
            @btn-click="navigateTo(user?.slide, { external: true })"
          >
            <v-img src="/slideshare.png" class="width-24 height-24 ma-2" />
          </atom-button-circle>
        </div>
        <atom-text text="自己紹介" class="mt-5" />
        <atom-text
          :text="user?.description"
          font-weight="font-weight-regular"
          class="mt-2"
        />
      </div>
    </div>
    <atom-text
      v-if="user?.portfolio?.items.length"
      font-size="text-h5"
      text="ポートフォリオ"
      class="mt-16 mx-5"
    />
    <div
      v-if="user?.portfolio?.items.length"
      class="d-flex flex-wrap ma-5"
      style="gap: 60px 5%"
    >
      <module-content-medium
        v-for="item in user?.portfolio.items"
        :key="item?.id"
        :created-at="item?.createdAt"
        :updated-at="item?.updatedAt"
        :title="item?.title"
        style="flex: 0 1 30%"
        @click-func="navigateTo('/portfolio/' + item?.id)"
      />
    </div>
    <atom-text
      v-if="user?.article?.items.length"
      font-size="text-h5"
      text="執筆記事"
      class="mt-16 mx-5"
    />
    <div
      v-if="user?.article?.items.length"
      class="d-flex flex-wrap ma-5"
      style="gap: 60px 5%"
    >
      <module-content-medium
        v-for="item in user?.article.items"
        :key="item?.id"
        :created-at="item?.createdAt"
        :updated-at="item?.updatedAt"
        :title="item?.title"
        style="flex: 0 1 30%"
        @click-func="navigateTo('/article/' + item?.id)"
      />
    </div>
  </layout-public>
</template>
