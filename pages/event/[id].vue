<template>
  <div>
    <SectionInnerBanner :title="event.title" slug="event-details" />
    <!-- START EVENT -->
    <section class="our_event section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-8 col-xs-12">
            <div class="single_event_single">
              <img
                alt=""
                class="img-responsive"
                :src="'/' + event.thumb"
              />
              <div class="single_event_text_single">
                <h4>{{ event.title }}</h4>
                <span
                  ><i class="fa fa-calendar"></i
                  >{{ day + " " + monthName + ", " + year }}</span
                >
                <span><i class="fa fa-clock-o"></i>{{ timeF }}</span>
                <span
                  ><i class="fa fa-table"></i
                  ><strong>{{ event.location }}</strong></span
                >
                <p>{{ event.pera }}</p>
              </div>
              <div class="single_event_text_single_description">
                <h3>Event Descriptions</h3>
                <p>{{ event.description }}</p>
              </div>
            </div>
            <!--- END SINGLE EVENT -->
          </div>
          <!--- END COL -->
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="event_info">
              <h3>Buy Ticket</h3>
              <ul>
                <li>
                  <i class="fa fa-calendar"></i>
                  <h4>Total Seats</h4>
                  <p>1200</p>
                </li>
                <li>
                  <i class="fa fa-clock-o"></i>
                  <h4>Ticket price</h4>
                  <p>$50</p>
                </li>
                <li>
                  <i class="fa fa-phone"></i>
                  <h4>Contact for details</h4>
                  <p>+88 123 456 789</p>
                </li>
                <li>
                  <i class="fa fa-map"></i>
                  <h4>Event Venue</h4>
                  <p>3783 Columbia Mine Road Shinnston, WV 26431</p>
                </li>
              </ul>
              <div class="event_info_register">
                <a class="btn_one" href="course.html">Register For book</a>
              </div>
            </div>
          </div>
          <!--- END COL -->
        </div>
        <!-- END ROW -->
      </div>
      <!-- END CONTAINER -->
    </section>
    <!-- END EVENT -->
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useFrontStore } from "../../stores/frontStore";
import { useAuthStore } from "../../stores/AuthStore";
export default {
  setup() {
    const frontStore = useFrontStore();
    const route = useRoute();
    const slug = route.params.id;
    const event = frontStore.getIdEvent(slug);

    const date = ref(event.date);
    const time = ref(event.time);
    const timeF = time.value.join(" - ");
    const parts = date.value.split("/");
    const day = parseInt(parts[1], 10);
    const month = parseInt(parts[0], 10);
    const year = parseInt(parts[2], 10);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthName = monthNames[month - 1];

    return {
      event,
      monthName,
      timeF,
      day,
      year,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>