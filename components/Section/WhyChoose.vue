<template>
  <!-- START WHY CHOOSE US-->
  <section class="marketing_content_area section-padding">
    <div class="container">
      <div class="section-title">
        <h2>Why Choose Mun's</h2>
        <p>
          Find the <span><u>best features</u></span> of Mun's.
        </p>
      </div>
      <div class="row gy-4">
        <div
          class="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp"
          v-for="(f, index) in frontStore.features"
          :key="index"
        >
          <FeatureItem :icon="f.icon" :title="f.title" :pera="f.pera" />
        </div>
      </div>
      <!-- END ROW -->
    </div>
    <!-- END CONTAINER -->
  </section>
  <!-- END WHY CHOOSE US -->
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
