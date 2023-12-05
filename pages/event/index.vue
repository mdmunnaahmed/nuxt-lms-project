<template>
  <div>
    <SectionInnerBanner title="Upcoming Events" slug="event" />
    <!-- START EVENT -->
    <section class="our-event section-padding">
      <div class="container">
        <div class="row gy-4">
          <div
            class="col-lg-4 col-sm-6 col-xs-12"
            v-for="(e, index) in frontStore.events"
            :key="index"
          >
            <EventItemOne
              :thumb="e.thumb"
              :title="e.title"
              :pera="e.pera"
              :date="e.date"
              :time="e.time"
              :location="e.location"
            />
          </div>
        </div>
        <!-- END ROW -->
      </div>
      <!-- END CONTAINER -->
    </section>
    <!-- END EVENT -->
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