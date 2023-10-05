<template>
  <div class="single_tca">
    <img :src="icon" alt="" />
    <h2>
      <NuxtLink to="/">{{ title }}</NuxtLink>
    </h2>
    <span>{{ courseCount }} Courses</span>
  </div>
</template>

<script>
export default {
  props: ["icon", "title", "courseCount"],
};
</script>