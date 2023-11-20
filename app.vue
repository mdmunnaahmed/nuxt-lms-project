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
import { useFrontStore } from "./stores/frontStore";
export default {
  setup() {
    const authStore = useAuthStore();
    const frontStore = useFrontStore();
    authStore.getAccounts();
    frontStore.fetchCart(authStore.authUser.uname);
    onMounted(() => {
      authStore.getAuthUser();
    });
    return {
      authStore,
    };
  },
};
</script>
