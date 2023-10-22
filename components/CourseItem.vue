<template>
  <div class="course-slide">
    <div class="course-img">
      <img :src="'/images/'+thumb" alt="" />
      <div class="course-date">
        <span class="month">${{ price }}</span>
      </div>
    </div>
    <div class="course-content">
      <NuxtLink class="c_btn" to="">{{ tag }}</NuxtLink>
      <h3>
        <NuxtLink :to="slug">{{ title }}</NuxtLink>
      </h3>
      <span><i class="fa fa-calendar"></i>{{ lesson }} Lessons</span>
      <span><i class="fa fa-clock-o"></i>4h 15m</span>
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
    const title = ref(props.title);
    const stitle = title.value.toLowerCase().replaceAll(/[^\w\s]/gi, "");
    const slug = stitle.replaceAll(" ", "-").replaceAll("--", "-");
    return { slug };
  },
};
</script>
