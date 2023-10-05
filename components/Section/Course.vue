<template>
  <!--START COURSE -->
  <div class="best-cpurse section-padding">
    <div class="container">
      <div class="section-title">
        <h2>Popular Courses</h2>
        <p>
          Choose Our <span><u>Top Courses</u></span>
        </p>
      </div>
      <div class="row">
        <div
          class="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp"
          v-for="(c, index) in frontStore.courses"
          :key="index"
        >
          <CourseItem
            :thumb="c.thumb"
            :price="c.price"
            :tag="c.tag"
            :title="c.title"
            :lesson="c.lesson"
            :durtion="c.duration"
            :rating="c.rating"
            :seats="c.seats"
          />
        </div>
        <!--END COL -->
        <div class="col-lg-12 text-center">
          <div class="cc_btn">
            <NuxtLink class="btn_one" to="/courses">View All Course</NuxtLink>
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