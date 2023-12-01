<template>
  <div>
    <SectionInnerBanner title="All Courses" slug="courses" />
    <div class="best-cpurse section-padding">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp"
            v-for="(c, index) in reloadCourses"
            :key="index"
          >
            <CourseItem
              :thumb="c.thumb"
              :price="c.price"
              :tag="c.tag"
              :title="c.title"
              :lesson="c.lesson"
              :duration="c.duration"
              :rating="c.rating"
              :seats="c.seats"
            />
          </div>
          <!--END COL -->
          <div class="col-lg-12 text-center">
            <div class="cc_btn">
              <button
                v-if="frontStore.courses.length !== reloadCourses.length"
                @click="showMoreItem"
                class="btn_one"
              >
                View More
              </button>
            </div>
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
    const showItem = ref(6);
    const reloadCourses = computed(() => {
      return frontStore.courses.slice(0, Number(showItem.value));
    });
    const showMoreItem = () => {
      showItem.value += 6;
    };
    return {
      frontStore,
      reloadCourses,
      showMoreItem,
    };
  },
};
</script>