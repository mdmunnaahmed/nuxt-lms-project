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
            <h1>Login Page</h1>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li>/ Login Page</li>
            </ul>
          </div>
          <!-- //.HERO-TEXT -->
        </div>
        <!--- END COL -->
      </div>
      <!--- END CONTAINER -->
    </section>
    <!-- END SECTION TOP -->

    <!-- START LOGIN -->
    <section class="login_register section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-xs-12">
            <form @submit.prevent="submitForm" class="login">
              <h4 class="login_register_title">Sign in to your account</h4>
              <div class="form-group">
                <label for="">Username or Email</label>
                <input
                  type="text"
                  id="username"
                  class="form-control input-label"
                  v-model="uname"
                />
              </div>
              <div class="form-group">
                <label for="">Password</label>
                <input
                  type="password"
                  class="form-control input-label"
                  v-model="password"
                />
              </div>
              <div class="form-group col-lg-12">
                <button class="btn_one">login</button>
              </div>
              <p>
                Don't have an account?
                <NuxtLink to="/register">Register Now</NuxtLink>
              </p>
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
    const uname = ref("");
    const password = ref("");
    const submitForm = () => {
      authStore.loginAccount({
        uname: uname.value,
        password: password.value,
      });
      uname.value = "";
      password.value = "";
    };

    return {
      submitForm,
      uname,
      password,
    };
  },
};
</script>

<style lang="scss" scoped></style>
