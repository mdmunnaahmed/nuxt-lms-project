<template>
  <div class="event-slide">
    <div class="event-img">
      <img :src="thumb" alt="" />
      <div class="event-date">
        <span class="date">{{ day }}</span>
        <span class="month">{{ monthName }}</span>
      </div>
    </div>
    <div class="event-content">
      <h3>
        <NuxtLink :to="'event/' + slug">{{ title }}</NuxtLink>
      </h3>
      <span
        ><i class="fa fa-clock-o"></i>
        <span v-for="(t, index) in timeF" :key="index"> {{ t }} </span>
      </span>
      <span
        ><i class="fa fa-table"></i><strong>{{ location }}</strong></span
      >
      <p>{{ pera }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import useSlug from "~/composables/useSlug";
export default {
  props: ["thumb", "title", "time", "location", "pera", "date", "time"],
  setup(props) {
    const date = ref(props.date);
    const time = ref(props.time);
    const timeF = time.value.join(" - ");
    const title = ref(props.title);
    const { slug } = useSlug(title.value);

    const parts = date.value.split("/");
    const day = parseInt(parts[1], 10);
    const month = parseInt(parts[0], 10);
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
      day,
      monthName,
      timeF,
      slug,
    };
  },
};
</script>