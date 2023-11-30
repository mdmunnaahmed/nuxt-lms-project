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
          <label class="mb-1 text-dark opacity-75">Phone</label>
          <input v-model.trim="phone" type="tel" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="mb-1 text-dark opacity-75">Short Bio</label>
          <textarea
            v-model.trim="shortBio"
            rows="4"
            class="form-control"
          ></textarea>
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
                <div class="flex justify-between items-center ps-2">
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
                <div class="row">
                  <div class="col-lg-12">
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
                      <li>
                        <i class="fa fa-phone"></i
                        >{{ authStore.authUser.phone }}
                      </li>
                    </ul>
                  </div>
                  <div class="col-12">
                    <hr>
                  </div>
                  <div class="col-lg-12">
                    <div class="d-flex align-items-start justify-between">
                      <ul>
                        <li>
                          <i class="fa fa-address-book"></i>
                          <span>Address Line 1:</span>
                          {{ authStore.authUser.addr1 }}
                        </li>
                        <li>
                          <i class="fa fa-address-card"></i>
                          <span>Address Line 2:</span>
                          {{ authStore.authUser.addr2 }}
                        </li>
                        <li>
                          <i class="fa fa-file-zip-o"></i>
                          <span>Address Zipcode:</span>
                          {{ authStore.authUser.postCode }}
                        </li>
                      </ul>

                      <button @click="showModal" class="text-green-600">
                        Edit Address
                      </button>
                    </div>
                  </div>
                </div>
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
    const phone = ref(authStore.authUser.phone);
    const profession = ref(authStore.authUser.profession);
    const shortBio = ref(authStore.authUser.shortBio);

    const userInfo = computed(() => {
      return authStore.getAuthUserInfo;
    });

    const submitForm = () => {
      const updatedData = {
        uname: authStore.authUser.uname,
        name: name.value,
        phone: phone.value,
        profession: profession.value,
        shortBio: shortBio.value,
      };
      authStore.updateStudentData(updatedData);

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
      phone,
      profession,
      shortBio,
      success,
      userInfo,
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