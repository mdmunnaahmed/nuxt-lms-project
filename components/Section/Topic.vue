<template>
  <!-- START TOPIC-->
  <section class="topic_content_area section-padding">
    <div class="container">
      <div class="section-title">
        <h2>Start Learning</h2>
        <p>
          Popular <span><u>Topics To Learn</u></span> From Today.
        </p>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6 col-xs-12" v-for="(t, index) in topics" :key="index">
          <TopicItem :title="t[0]" :courseCount="t[1]" :ind="index + 1" />
        </div>
      </div>
      <!-- END ROW -->
    </div>
    <!-- END CONTAINER -->
  </section>
  <!-- END TOPIC -->
</template>

<script>
import { useFrontStore } from "../stores/frontStore";
export default {
  setup() {
    const frontStore = useFrontStore();
    const topics = computed(() => {
      return Object.entries(frontStore.allCategories);
    });
    return {
      frontStore,
      topics,
    };
  },
};
</script>
