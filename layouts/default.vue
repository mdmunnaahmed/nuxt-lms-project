<template>
  <div class="flex flex-col min-h-screen">
    <UIPreloader v-if="$nuxt.loading" />
    <Header />
    <div class="main-wrapper">
      <slot />
    </div>
    <div class="mt-auto"></div>
    <Footer />
  </div>
</template>
