<template>
  <div
    class="bg-grey-color overflow-hidden designed-scrollbar"
    style="min-height: 100vh"
  >
    <div
      :style="{ maxWidth: '920px' }"
      class="mx-5 mx-md-auto"
      style="min-height: calc(var(--vh, 1vh) * 100 - 88px)"
    >
      <module-header />
      <slot />
    </div>
    <module-footer />
  </div>
</template>
