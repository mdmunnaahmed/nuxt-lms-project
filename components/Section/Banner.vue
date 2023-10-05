<template>
  <!-- START HOME -->
  <section
    id="home"
    class="home_bg"
    style="
      background-image: url(images/banner/home.png);
      background-size: cover;
      background-position: center center;
    "
  >
    <div class="container" v-for="(b, index) in frontStore.banner" :key="index">
      <div class="row">
        <div class="col-lg-6 col-sm-6 col-xs-12">
          <div class="home_content">
            <h1>{{ b.title }}</h1>
            <p>
              {{ b.pera }}
            </p>
          </div>
          <div class="home_btn">
            <NuxtLink :to="b.btnLink" class="cta inline-flex gap-2 items-center"
              ><span>{{ b.btnText }}</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </NuxtLink>
          </div>
        </div>
        <!-- END COL-->
        <div class="col-lg-6 col-sm-6 col-xs-12">
          <div class="home_me_img">
            <img :src="b.thumb" class="img-fluid" alt="" />
            <div class="home_ps">
              <img src="images/icon/user2.svg" alt="" />
              <h2>{{ authStore.studentAccounts.length }} +</h2>
              <span>Active students</span>
            </div>
            <div class="home_ps2">
              <img src="images/icon/file2.svg" alt="" />
              <h2>4500+</h2>
              <span>Online Courses</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useAuthStore } from "../stores/AuthStore";
import { useFrontStore } from "../stores/frontStore";
export default {
  setup() {
    const authStore = useAuthStore();
    const frontStore = useFrontStore();
    return {
      authStore,
      frontStore,
    };
  },
};
</script>
