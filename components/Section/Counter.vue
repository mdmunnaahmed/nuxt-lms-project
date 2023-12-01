<template>
  <!-- START COUNTER -->
  <section id="counts" class="counts section-padding">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Some Facts</h2>
        <p>
          Our Great <span><u>Achievement</u></span>
        </p>
      </div>
      <div class="row gy-4">
        <div class="col-lg-3 col-md-6">
          <div class="count-box">
            <i style="color: #2eca7f" class="ti-face-smile"></i>
            <div>
              <span class="purecounter">{{
                authStore.studentAccounts.length
              }}</span>
              <p>Registered Students</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="count-box">
            <i style="color: #2eca7f" class="ti-files"></i>
            <div>
              <span class="purecounter">{{ frontStore.courses.length }}</span>
              <p>Total Courses</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="count-box">
            <i style="color: #2eca7f" class="ti-pie-chart"></i>
            <div>
              <span class="purecounter">{{ frontStore.orders.length }}</span>
              <p>Total Sells</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="count-box">
            <i style="color: #2eca7f" class="ti-user"></i>
            <div>
              <span class="purecounter">{{
                authStore.instructorAccounts.length
              }}</span>
              <p>Registered Teachers</p>
            </div>
          </div>
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
import { useAuthStore } from "~/stores/AuthStore";
export default {
  setup() {
    const frontStore = useFrontStore();
    const authStore = useAuthStore();
    return {
      frontStore,
      authStore,
    };
  },
};
</script>
