<template>
  <div class="flex flex-col min-h-screen">
    <UIPreloader v-if="$nuxt.loading" />
    <LayoutHeader />
    <div class="main-wrapper">
      <slot />
    </div>
    <div class="mt-auto"></div>
    <LayoutFooter />
  </div>
</template>
