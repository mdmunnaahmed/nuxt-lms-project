<template>
  <!-- START TOP PROMO FEATURES -->
  <section class="tp_feature">
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-lg-4 col-sm-4 col-xs-12 no-padding wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
          data-wow-offset="0"
          v-for="(o, index) in frontStore.overview"
          :key="index"
        >
          <div class="single_tp">
            <h3>{{ o.title }}</h3>
            <p>
              {{ o.pera }}
            </p>
            <NuxtLink :to="o.btnLink" class="cta d-inline-flex align-items-center"
              ><span>Explore</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </NuxtLink>
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
