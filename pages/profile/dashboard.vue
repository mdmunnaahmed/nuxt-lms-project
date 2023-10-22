<template>
  <div>
    <SectionInnerBanner title="My Profile" slug="dashboard" />
    
    <UIModal :show="modal" title="Edit Profile Info" @close="clsoeDialog">
      <form @submit.prevent="submitForm">
        <div class="mb-2">
          <label class="mb-1 text-dark opacity-75">Name</label>
          <input v-model="name" type="text" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="mb-1 text-dark opacity-75">Profession</label>
          <input v-model="profession" type="text" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="mb-1 text-dark opacity-75">Short Bio</label>
          <textarea v-model="shortbio" rows="4" class="form-control"></textarea>
        </div>
        <small class="text-green-600" v-if="success"
          >Your profile data Updated!</small
        >
        <button class="btn_one w-100 mt-3">Submit</button>
      </form>
    </UIModal>

    <!-- START AGENT PROFILE -->
    <section class="template_agent section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-sm-12 col-xs-12">
            <div class="single_agent">
              <div class="single_agent_image">
                <img
                  src="@/images/all-img/team-details.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="single_agent_content">
                <div class="flex justify-between items-center">
                  <h4>{{ authStore.authUser.name }}</h4>
                  <button @click="showModal" class="text-green-600">
                    Edit Info
                  </button>
                </div>
                <h5>{{ authStore.authUser.profession }}</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever type book.
                </p>
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
                  <li><i class="fa fa-plane"></i>www.yourdomainname.com</li>
                  <li><i class="fa fa-skype"></i>skype.address</li>
                </ul>
              </div>
              <div class="agent_social">
                <ul class="list-inline flex gap-2">
                  <li>
                    <a href="#" class="top_f_facebook"
                      ><img src="@/images/icon/fb.svg" alt=""
                    /></a>
                  </li>
                  <li>
                    <a href="#" class="top_f_facebook"
                      ><img src="@/images/icon/tw.svg" alt=""
                    /></a>
                  </li>
                  <li>
                    <a href="#" class="top_f_facebook"
                      ><img src="@/images/icon/pn.svg" alt=""
                    /></a>
                  </li>
                  <li>
                    <a href="#" class="top_f_facebook"
                      ><img src="@/images/icon/ins.svg" alt=""
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- START COUNTER -->
    <SectionCounter />
    <!-- END COUNTER -->

    <!--START COURSE -->
    <SectionCourse />
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
    const profession = ref(authStore.authUser.profession);
    const shortBio = ref(authStore.authUser.shortBio);
    const submitForm = async () => {
      if (
        authStore.authUser.profession === "" ||
        authStore.authUser.shortBio === ""
      ) {
      }
      authStore.addAccountInfo({
        profession: profession.value,
        shortBio: shortBio.value,
      });

      success.value = true;
      await new Promise((resolve) => setTimeout(resolve, 600));
      modal.value = false;
    };
    const showModal = () => {
      modal.value = true;
    };
    const clsoeDialog = () => {
      modal.value = false;
    };
    return {
      authStore,
      modal,
      showModal,
      clsoeDialog,
      submitForm,
      name,
      profession,
      shortBio,
      success,
    };
  },
};
</script>
