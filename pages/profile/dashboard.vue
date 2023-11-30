<template>
  <div>
    <SectionInnerBanner title="My Profile" slug="dashboard" />

    <UIModal :show="modal" title="Edit Profile Info" @close="closeDialog">
      <form @submit.prevent="submitForm">
        <div class="mb-2">
          <label class="mb-1 text-dark opacity-75">Name</label>
          <input
            v-model="name"
            type="text"
            class="form-control"
            @blur="handleBlur('name')"
            :class="{ 'border-red-500': !name }"
          />
        </div>
        <div class="mb-2">
          <label class="mb-1 text-dark opacity-75">Profession</label>
          <input
            v-model.trim="profession"
            type="text"
            class="form-control"
            @blur="handleBlur('profession')"
            :class="{ 'border-red-500': !profession }"
          />
        </div>
        <div class="mb-2">
          <label class="mb-1 text-dark opacity-75">Phone</label>
          <input
            v-model.trim="phone"
            type="tel"
            class="form-control"
            @blur="handleBlur('phone')"
            :class="{ 'border-red-500': !phone }"
          />
        </div>
        <div class="mb-2">
          <label class="mb-1 text-dark opacity-75">Short Bio</label>
          <textarea
            v-model.trim="shortBio"
            rows="4"
            class="form-control"
            @blur="handleBlur('shortBio')"
            :class="{ 'border-red-500': !shortBio }"
          ></textarea>
        </div>
        <small class="text-green-600" v-if="success"
          >Your profile data Updated!</small
        >
        <small class="text-red-600" v-if="error & !success"
          >Fill all the fields</small
        >
        <button class="btn_one w-100 mt-3">Submit</button>
      </form>
    </UIModal>

    <UIModal :show="addrModal" title="Edit Address Info" @close="closeDialog">
      <form @submit.prevent="submitForm2">
        <div class="mb-2">
          <label class="mb-1 text-dark opacity-75">Address Line 1</label>
          <input
            name="address"
            v-model.trim="addr1"
            type="text"
            class="form-control street address"
            @blur="handleBlur('addr1')"
            :class="{ 'border-red-500': !addr1 }"
          />
        </div>
        <div class="mb-2">
          <label class="mb-1 text-dark opacity-75">Address Line 2</label>
          <input
            name="address"
            v-model.trim="addr2"
            type="text"
            class="form-control street address"
            @blur="handleBlur('addr2')"
            :class="{ 'border-red-500': !addr2 }"
          />
        </div>
        <div class="mb-2">
          <label class="mb-1 text-dark opacity-75">Zip Code</label>
          <input
            name="zip code"
            v-model.trim="postCode"
            type="text"
            class="form-control"
            @blur="handleBlur('postCode')"
            :class="{ 'border-red-500': !postCode }"
          />
        </div>
        <small class="text-green-600" v-if="success"
          >Your profile data Updated!</small
        >
        <small class="text-red-600" v-if="error & !success"
          >Fill all the fields</small
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
                    <hr />
                  </div>
                  <div class="col-lg-12">
                    <div class="d-flex align-items-start justify-between">
                      <ul>
                        <li style="font-size: 16px !important">
                          <i class="fa fa-address-book" style="width: 14px"></i>
                          <span
                            class="text-gray-500 inline-block"
                            style="min-width: 150px"
                            >Address Line 1:</span
                          >
                          {{ authStore.authUser.addr1 }}
                        </li>
                        <li style="font-size: 16px !important">
                          <i class="fa fa-address-card" style="width: 14px"></i>
                          <span
                            class="text-gray-500 inline-block"
                            style="min-width: 150px"
                            >Address Line 2:</span
                          >
                          {{ authStore.authUser.addr2 }}
                        </li>
                        <li style="font-size: 16px !important">
                          <i class="fa fa-file-zip-o" style="width: 14px"></i>
                          <span
                            class="text-gray-500 inline-block"
                            style="min-width: 150px"
                            >Address Zipcode:</span
                          >
                          {{ authStore.authUser.postCode }}
                        </li>
                      </ul>

                      <button @click="showModal2" class="text-green-600">
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
    const error = ref(false);
    const modal = ref(false);
    const addrModal = ref(false);
    const authStore = useAuthStore();
    const name = ref(authStore.authUser.name);
    const phone = ref(authStore.authUser.phone);
    const profession = ref(authStore.authUser.profession);
    const shortBio = ref(authStore.authUser.shortBio);
    const addr1 = ref(authStore.authUser.addr1);
    const addr2 = ref(authStore.authUser.addr2);
    const postCode = ref(authStore.authUser.postCode);

    const handleBlur = (fieldName) => {
      if (!this[fieldName]) {
        this[fieldName] = "border-red-500";
      } else {
        this[fieldName] = "";
      }
    };

    const isFormValid = computed(() => {
      // Check if any of the values is empty
      return name.value && phone.value && profession.value && shortBio.value;
    });

    const submitForm = async () => {
      if (isFormValid.value) {
        const updatedData = {
          uname: authStore.authUser.uname,
          name: name.value,
          phone: phone.value,
          profession: profession.value,
          shortBio: shortBio.value,
        };
        authStore.updateStudentData(updatedData);
        success.value = true;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        modal.value = false;
        success.value = false;
      } else {
        error.value = true;
        success.value = false;
        return;
      }
      error.value = false;
    };

    const isFormValid2 = computed(() => {
      // Check if any of the values is empty
      return addr1.value && addr2.value && postCode.value;
    });
    const submitForm2 = async () => {
      if (isFormValid2.value) {
        const updatedData = {
          uname: authStore.authUser.uname,
          addr1: addr1.value,
          addr2: addr2.value,
          postCode: postCode.value,
        };
        authStore.updateStudentData(updatedData);

        success.value = true;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        addrModal.value = false;
        success.value = false;
      } else {
        error.value = true;
        success.value = false;
        return;
      }
      error.value = false;
    };

    const showModal = () => {
      modal.value = true;
    };
    const showModal2 = () => {
      addrModal.value = true;
    };
    const closeDialog = () => {
      modal.value = false;
      addrModal.value = false;
    };
    return {
      authStore,
      modal,
      showModal,
      showModal2,
      closeDialog,
      submitForm,
      submitForm2,
      name,
      phone,
      profession,
      shortBio,
      success,
      error,
      addr1,
      addr2,
      postCode,
      handleBlur,
      addrModal,
      isFormValid,
      isFormValid2,
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
.border-red-500 {
  border-color: red !important;
}
</style>