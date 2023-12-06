<template>
  <div class="course-slide">
    <div class="course-img">
      <img :src="'/images/all-img/' + thumb" alt="" />
      <div class="course-date">
        <span class="month">${{ price }}</span>
      </div>
    </div>
    <div class="course-content">
      <NuxtLink class="c_btn" to="">{{ tag }}</NuxtLink>
      <h3>
        <NuxtLink :to="{ path: '/courses/' + slug, exact: true }">{{
          title
        }}</NuxtLink>
      </h3>
      <span><i class="fa fa-calendar"></i>{{ lesson }} Lessons</span>
      <span
        ><i class="fa fa-clock-o"></i>{{ convertedTime.hours }}h
        {{ convertedTime.minutes }}m</span
      >
      <span><i class="fa fa-star"></i>{{ rating }}</span>
      <span
        ><i class="fa fa-table"></i
        ><strong>{{ seats }} Seats Available</strong></span
      >
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import useSlug from "~/composables/useSlug";
export default {
  props: [
    "thumb",
    "price",
    "tag",
    "title",
    "lesson",
    "duration",
    "rating",
    "seats",
  ],
  setup(props) {
    const totalM = ref(props.duration);

    const title = ref(props.title);
    const { slug } = useSlug(title.value);

    const convertedTime = computed(() => {
      const hours = Math.floor(totalM.value / 60);
      const minutes = totalM.value % 60;
      return {
        minutes,
        hours,
      };
    });
    return { slug, totalM, convertedTime };
  },
};
</script>
