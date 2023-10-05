<template>
  <!-- START COMPANY PARTNER LOGO  -->
  <div class="partner-logo section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="partner_title">
            <h3>Trusted Company Arround The World!</h3>
          </div>
          <div class="partner flex gap-3">
            <img
              v-for="(p, index) in frontStore.partners"
              :key="index"
              :src="p.icon"
              alt="image"
              class="mw-100"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
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
