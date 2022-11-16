<template>
  <div
    class="bg-grey-lighten-5 overflow-hidden designed-scrollbar"
    style="min-height: calc(var(--vh, 1vh) * 100)"
  >
    <div :style="{ maxWidth: '960px' }" class="mx-5 mx-md-auto">
      <module-header />
      <slot />
    </div>
  </div>
</template>
