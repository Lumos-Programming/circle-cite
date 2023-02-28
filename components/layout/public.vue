<template>
  <div class="bg-grey-color overflow-hidden designed-scrollbar" style="min-height: 100vh">
    <div
      :style="{ maxWidth: '920px', minHeight: 'calc(var(--vh, 1vh) * 100 - 104px)' }"
      class="mx-5 mx-md-auto"
    >
      <module-header />
      <slot />
    </div>
    <module-footer />
  </div>
</template>
