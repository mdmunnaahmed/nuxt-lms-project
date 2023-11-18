<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
import { onMounted } from "vue";

import { useAuthStore } from "../stores/AuthStore";
export default {
  setup() {
    const authStore = useAuthStore();
    authStore.getAccounts();
    onMounted(() => {
      authStore.getAuthUser();
    });
    return {
      authStore,
    };
  },
};
</script>
