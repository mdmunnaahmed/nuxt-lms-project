<template>
  <div class="flex flex-col min-h-screen">
    <UIPreloader v-if="loading" />
    <LayoutHeader />
    <div class="main-wrapper">
      <slot />
    </div>
    <div class="mt-auto"></div>
    <LayoutFooter />
  </div>
</template>

// For example, in a page component
<script setup>
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
