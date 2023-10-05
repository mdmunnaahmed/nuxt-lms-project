<template>
  <!-- START EVENT -->
  <section class="our-event section-padding">
    <div class="container">
      <div class="section-title">
        <h2>Upcoming Events</h2>
        <p>
          Join With Us <span><u>Our Events</u></span>
        </p>
      </div>
      <div class="row">
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
        <!-- END COL -->
        <div class="col-lg-4 col-sm-6 col-xs-12 d-none">
          <div class="event-slide es">
            <div class="ed_mb">
              <span class="date">26</span>
              <span class="month">Oct</span>
            </div>
            <div class="event-content ec_pd">
              <h3><a href="event.html">Chiter astana event</a></h3>
              <span><i class="fa fa-clock-o"></i>10.00AM - 12.00PM</span>
              <span
                ><i class="fa fa-table"></i
                ><strong>At Penn School</strong></span
              >
              <p>
                Lorem ipsum dolor sit amet magna consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <!-- END EVENT -->
          <div class="event-slide es">
            <div class="ed_mb">
              <span class="date">29</span>
              <span class="month">Oct</span>
            </div>
            <div class="event-content ec_pd">
              <h3><a href="event.html">Dasel Bhai Program</a></h3>
              <span><i class="fa fa-clock-o"></i>10.00AM - 12.00PM</span>
              <span
                ><i class="fa fa-table"></i
                ><strong>At Penn School</strong></span
              >
              <p>
                Lorem ipsum dolor sit amet magna consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <!-- END EVENT -->
        </div>
        <!-- END COL -->
      </div>
      <!-- END ROW -->
    </div>
    <!-- END CONTAINER -->
  </section>
  <!-- END EVENT -->
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