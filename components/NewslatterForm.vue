<template>
  <form @submit.prevent="formSubmit" class="home_subs">
    <input
      type="email"
      class="subscribe__input text-lowercase"
      placeholder="Enter your Email Address"
      v-model="email"
    />
    <button class="subscribe__btn">
      <UISpinnerWhite v-if="frontStore.loading" />
      <i class="fa fa-paper-plane-o" v-else></i>
    </button>
    <small class="text-green-600 position-absolute left-50" style="transform: translateX(-50%)" v-if="success"
      ><span class="text-green-700 font-bold">{{ success }}</span> is now
      subscribed.</small
    >
  </form>
</template>

<script>
import { ref } from "vue";
import { useFrontStore } from "~/stores/frontStore";
export default {
  setup() {
    const frontStore = useFrontStore();
    const email = ref("");
    const success = ref(null);
    const formSubmit = async () => {
      if (email.value.includes("@") && email.value !== "") {
        await frontStore.addSubscription({
          email: email.value,
        });
        success.value = email.value;
        console.log(email.value);
        email.value = "";
        setTimeout(() => {
          success.value = null
        }, 5000); // Adjust the time as needed
      }
    };
    return {
      frontStore,
      email,
      formSubmit,
      success,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>