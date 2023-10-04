<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
import { onBeforeMount } from "vue";

import { useAuthStore } from "../stores/AuthStore";
export default {
  setup() {
    const authStore = useAuthStore();
    authStore.getAccounts();
    onBeforeMount(() => {
      authStore.getAuthUser();
    });
    return {
      authStore,
    };
  },
};
</script>
