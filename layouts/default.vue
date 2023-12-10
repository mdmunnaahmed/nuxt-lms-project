<template>
  <div class="flex flex-col min-h-screen">
    <SpeedInsights/>
    <UIPreloader v-if="loading" />
    <div v-else>
      <LayoutHeader />
      <div class="main-wrapper">
        <slot />
      </div>
      <div class="mt-auto"></div>
      <LayoutFooter />
    </div>
  </div>
</template>

// For example, in a page component
<script setup>
import { SpeedInsights } from "@vercel/speed-insights/next"
import { useAuthStore } from "~/stores/AuthStore";
import { onMounted } from "vue";
import { ref } from "vue";
const authStore = useAuthStore();
const loading = ref(true); // Set to false when your app is ready
onMounted(() => {
  // Simulate loading delay (remove this in production)
  setTimeout(async () => {
    await authStore.checkAuthentication();
    loading.value = false; // Hide the preloader
  }, 0);
});
</script>


<style>
.page-left-enter-active,
.page-right-enter-active,
.page-left-leave-active,
.page-right-leave-active {
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
  transition: all 1250ms linear;
}

.page-left-enter-from,
.page-right-leave-to {
  transform: translateX(100%);
}

.page-left-leave-to,
.page-right-enter-from {
  transform: translateX(-100%);
}

.page-left-enter-to,
.page-right-enter-to {
  transform: translateX(0);
}
</style>