<template>
  <div>
    <SectionInnerBanner title="My Profile" slug="dashboard" />

    <UIModal :show="modal" title="Edit Profile Info" @close="closeDialog">
      <form @submit.prevent="submitForm">
        <div class="mb-2">
          <label class="mb-1 text-dark opacity-75">Name</label>
          <input v-model="name" type="text" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="mb-1 text-dark opacity-75">Profession</label>
          <input v-model.trim="profession" type="text" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="mb-1 text-dark opacity-75">Short Bio</label>
          <textarea v-model.trim="shortbio" rows="4" class="form-control"></textarea>
        </div>
        <small class="text-green-600" v-if="success"
          >Your profile data Updated!</small
        >
        <button class="btn_one w-100 mt-3">Submit</button>
      </form>
    </UIModal>

    <!-- START AGENT PROFILE -->
    <section class="template_agent pb-5 pt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-sm-12 col-xs-12">
            <div class="single_agent">
              <div class="single_agent_image">
                <img
                  :src="'/images/all-img/' + authStore.authUser.thumb"
                  class="img-fluid"
                  alt="user"
                  style="border-radius: 50%"
                />
              </div>
              <div class="single_agent_content">
                <div class="flex justify-between items-center">
                  <h4>
                    {{ authStore.authUser.name }}
                    <span
                      class="text-green-600 text-xl font-medium"
                      v-if="authStore.authUser.accountType"
                      >({{ authStore.authUser.profession }})</span
                    >
                  </h4>
                  <button @click="showModal" class="text-green-600">
                    Edit Info
                  </button>
                </div>
                <h5>{{ authStore.authUser.accountType }}</h5>
                <p>{{ authStore.authUser.shortBio }}</p>
                <ul>
                  <li>
                    <i class="fa fa-envelope-o"></i
                    ><NuxtLink
                      :to="'mailto:' + authStore.authUser.email"
                      class="text-primary"
                      >{{ authStore.authUser.email }}</NuxtLink
                    >
                  </li>
                  <li><i class="fa fa-phone"></i>(+123) 123 123 123</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import { useAuthStore } from "../stores/AuthStore";
export default {
  setup() {
    const success = ref(false);
    const modal = ref(false);
    const authStore = useAuthStore();
    const name = ref(authStore.authUser.name);
    const profession = ref('34252345623');
    const shortBio = ref(authStore.authUser.shortBio);

    const userInfo = computed(() => {
      return authStore.getAuthUserInfo
    });

    const submitForm = () => {
      authStore.updateStudentData({
        uname: authStore.authUser.uname,
        profession: profession.value,
        shortBio: shortBio.value,
      });

      success.value = true;
      new Promise((resolve) => setTimeout(resolve, 600));
      modal.value = false;
    };
    const showModal = () => {
      modal.value = true;
    };
    const closeDialog = () => {
      modal.value = false;
    };
    return {
      authStore,
      modal,
      showModal,
      closeDialog,
      submitForm,
      name,
      profession,
      shortBio,
      success,
      userInfo
    };
  },
};
</script>

<style scoped>
.single_agent_image img {
  width: 360px;
  height: 360px;
  object-fit: cover;
}
</style>