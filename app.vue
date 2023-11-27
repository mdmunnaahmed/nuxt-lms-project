<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useAuthStore } from "./stores/AuthStore";
export default {
  setup() {
    const authStore = useAuthStore();
    onBeforeMount(async () => {
      await authStore.checkAuthentication();
    });
  },
};
</script>