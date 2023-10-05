<template>
  <!-- START TESTIMONIALS-->
  <section class="testi_home_area section-padding">
    <div class="container">
      <div class="section-title">
        <h2>Testimonial</h2>
        <p>
          What Says <span><u>Our Students</u></span>
        </p>
      </div>
      <div class="row">
        <div
          class="col-lg-4 col-md-6"
          v-for="(t, index) in frontStore.testimonials"
          :key="index"
        >
          <TestimonialItem :pera="t.pera" :rating="t.rating" />
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
