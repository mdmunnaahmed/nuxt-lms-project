<template>
  <div>
    <!-- START SECTION TOP -->
    <section class="section-top">
      <div class="container">
        <div class="col-lg-10 offset-lg-1 text-center">
          <div
            class="section-top-title wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            data-wow-offset="0"
          >
            <h1>Register Page</h1>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li>/ Register</li>
            </ul>
          </div>
          <!-- //.HERO-TEXT -->
        </div>
        <!--- END COL -->
      </div>
      <!--- END CONTAINER -->
    </section>
    <!-- END SECTION TOP -->

    <UIBaseDialog v-if="success" @close="closeDialog">
      <template #ico>
        <img
          class="mx-auto"
          style="width: 60px; object-fit: contain"
          src="icon/check.png"
          alt="icon"
        />
      </template>
      <template #default>
        <p class="text-center mt-0 text-green-600 mb-2">Account Successfully Created.</p>
      </template>
      <template #actions>
        <div class="text-center">
          <NuxtLink
            to="/profile"
            class="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 h-auto"
            @click="closeDialog"
          >
            Go to My Profile
          </NuxtLink>
        </div>
      </template>
    </UIBaseDialog>

    <!-- START LOGIN AND REGISTER -->
    <section class="login_register section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-xs-12">
            <form @submit.prevent="submitForm" class="register">
              <h4 class="login_register_title">Create a new account</h4>
              <div class="form-group mb-3">
                <label for="">Username</label>
                <input
                  v-model.trim="uname"
                  type="text"
                  class="form-control requiredField input-label mb-0"
                  name="username"
                  @blur="checkUname"
                  :class="{ error: unameError }"
                />
                <small class="text-red-500" v-if="unameError"
                  >username must be more than 6 character</small
                >
              </div>
              <div class="form-group mb-3">
                <label for="">Full Name</label>
                <input
                  id="name"
                  v-model.trim="name"
                  type="text"
                  class="form-control requiredField input-label mb-0"
                  @blur="checkName"
                  :class="{ error: nameError }"
                />
              </div>
              <div class="form-group mb-3">
                <label for="">Email Address</label>
                <input
                  v-model.trim="email"
                  type="email"
                  class="form-control requiredField input-label mb-0"
                  @blur="checkEmail"
                  :class="{ error: emailError }"
                />
              </div>
              <div class="form-group mb-3">
                <label for="">Password</label>
                <input
                  v-model.trim="password"
                  type="password"
                  class="form-control requiredField input-label mb-0"
                  @blur="checkPassword"
                  :class="{ error: passwordError }"
                />
              </div>
              <div class="form-group col-lg-12">
                <button class="btn_one">Signup Now</button>
              </div>
              <p>Already have an account? <a href="/login">Login</a></p>
            </form>
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
    const authStore = useAuthStore();
    const error = ref(false);
    const success = ref(false);

    const unameError = ref(false);
    const nameError = ref(false);
    const emailError = ref(false);
    const passwordError = ref(false);

    const uname = ref("");
    const name = ref("");
    const email = ref("");
    const password = ref("");

    authStore.getAccounts();

    const checkUname = () => {
      if (uname.value.length < 6) {
        unameError.value = true;
      } else {
        unameError.value = false;
      }
    };
    const checkName = () => {
      if (uname.value.length < 6) {
        nameError.value = true;
      } else {
        nameError.value = false;
      }
    };
    const checkEmail = () => {
      if (!email.value.includes("@")) {
        emailError.value = true;
      } else {
        emailError.value = false;
      }
    };
    const checkPassword = () => {
      if (password.value.length < 6) {
        passwordError.value = true;
      } else {
        passwordError.value = false;
      }
    };

    const submitForm = () => {
      checkUname();
      checkName();
      checkEmail();
      checkPassword();
      if (
        unameError.value ||
        nameError.value ||
        emailError.value ||
        passwordError.value
      ) {
        error.value = true;
        return;
      }
      error.value = false;
      authStore.addAccount({
        uname: uname.value,
        name: name.value,
        email: email.value,
        password: password.value,
      });
      success.value = true;
      console.log(success.value);
      uname.value = "";
      name.value = "";
      email.value = "";
      password.value = "";
    };
    const closeDialog = () => {
      error.value = false;
      success.value = false;
    };

    return {
      authStore,
      submitForm,
      uname,
      name,
      email,
      password,
      error,
      success,
      closeDialog,
      checkUname,
      unameError,
      checkName,
      nameError,
      checkEmail,
      emailError,
      checkPassword,
      passwordError,
    };
  },
};
</script>

<style lang="scss" scoped>
input.error {
  border-color: red;
}
</style>
