<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <div class="main-wrapper">
      <slot />
    </div>
    <div class="mt-auto"></div>
    <Footer />
  </div>
</template>