<template>
  <div
    class="bg-sub-color overflow-hidden designed-scrollbar"
    style="min-height: calc(var(--vh, 1vh) * 100)"
  >
    <div
      :style="{ maxWidth: '960px' }"
      class="mx-md-auto"
      style="min-height: calc(var(--vh, 1vh) * 100 - 88px)"
    >
      <module-header />
      <slot />
    </div>
    <module-footer />
  </div>
</template>
