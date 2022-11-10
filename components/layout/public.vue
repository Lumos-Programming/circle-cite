<template>
  <div class="bg-grey-lighten-4" style="width: 100vw; min-height: 100vh">
    <module-header />
    <div :style="{ maxWidth: '960px' }" class="px-5 mx-md-auto">
      <slot />
    </div>
  </div>
</template>
