<template>
  <div>
    <SectionInnerBanner title="Course Sidebar" slug="courses" />
    <div class="best-cpurse section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="row" v-if="searchCourses.length">
              <div
                class="col-lg-6 col-md-6 col-xs-12 wow fadeInUp"
                v-for="(c, index) in searchCourses"
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
            </div>
            <p v-else class="text-center">No courses found!</p>
          </div>
          <div class="col-lg-4">
            <CourseSidebar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { useFrontStore } from "../stores/frontStore";
export default {
  props: ["sectionTitle", "sectionSubtitle"],
  setup() {
    const frontStore = useFrontStore();

    const searchCourses = computed(() => {
      return frontStore.filteredSearchCourses;
    });
    return {
      frontStore,
      searchCourses,
    };
  },
};
</script>