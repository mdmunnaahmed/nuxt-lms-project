<template>
  <!-- START COURSE PROMOTION -->
  <section class="course_promo section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp">
          <div class="cp_content">
            <h4>{{ frontStore.promotion.subtitle }}</h4>
            <h2>
              {{ frontStore.promotion.title }}
            </h2>
            <p>
              {{ frontStore.promotion.pera }}
            </p>
            <ul>
              <li v-for="(p, index) in frontStore.promotion.promo" :key="index">
                <span class="ti-check"></span> {{ p }}
              </li>
            </ul>
          </div>
          <div class="cp_btn">
            <NuxtLink to="/courses" class="cta d-inline-flex align-items-center"
              ><span>Explore Our Courses</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </NuxtLink>
          </div>
        </div>
        <!--- END COL -->
        <div
          class="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
          data-wow-offset="0"
        >
          <div class="cp_img">
            <img :src="frontStore.promotion.thumb" class="img-fluid" alt="image" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { useFrontStore } from "../stores/frontStore";
export default {
  setup() {
    const frontStore = useFrontStore();
    return {
      frontStore,
    };
  },
};
</script>