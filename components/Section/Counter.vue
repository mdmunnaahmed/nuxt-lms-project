<template>
  <!-- START COUNTER -->
  <section id="counts" class="counts section-padding">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Some Fun Fact</h2>
        <p>
          Our Great <span><u>Achievement</u></span>
        </p>
      </div>
      <div class="row gy-4">
        <div
          class="col-lg-3 col-md-6"
          v-for="(c, index) in frontStore.counter"
          :key="index"
        >
          <CounterItem :icon="c.icon" :count="c.count" :subtitle="c.subtitle" />
        </div>
      </div>
      <!--- END ROW -->
    </div>
    <!--- END CONTAINER -->
  </section>
  <!-- END COUNTER -->
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
