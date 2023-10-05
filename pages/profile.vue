<template>
  <NuxtPage />
</template>

<script>
import { useAuthStore } from "../stores/AuthStore";
export default {
  setup() {
    const authStore = useAuthStore();
    definePageMeta({
      middleware: "auth",
    });
    return {
      authStore,
    };
  },
};
</script>
