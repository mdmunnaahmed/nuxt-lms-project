<template>
  <div>
    <SectionInnerBanner :title="cateCourses.length? 'Results for '+  searchCate : 'All Courses'" slug="courses" />
    <div class="best-cpurse section-padding">
      <div class="container">
        <p class="mb-3 text-center" v-if="searchCate.length">
          Total
          {{ cateCourses.length ? cateCourses.length : "" }}
          results found for '{{ searchCate }}'
        </p>
        <div class="row">
          <div
            class="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp"
            v-for="(c, index) in cateCourses.length
              ? cateCourses
              : reloadCourses"
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
          <div
            class="col-lg-12 text-center"
            v-if="
              (cateCourses.length ? cateCourses.length : frontStore.courses.length) >= Number(showItem)
            "
          >
            <div class="cc_btn">
              <button @click="showMoreItem" class="btn_one">View More</button>
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

    const route = useRoute();
    const searchCate = route.query.searchCate
      ? JSON.parse(route.query.searchCate)
      : "";
    const cateCourses = computed(() => {
      return frontStore
        .getCateCourse(searchCate)
        .slice(0, Number(showItem.value));
    });

    return {
      frontStore,
      reloadCourses,
      showMoreItem,
      showItem,
      searchCate,
      cateCourses,
    };
  },
};
</script>