<template>
  <div class="single_tca">
    <img :src="'/images/icon/ct' + ind + '.svg'" alt="" />
    <h2 class="text-capitalize">
      <NuxtLink to="/">{{ title }}</NuxtLink>
    </h2>
    <span>{{ courseCount }} Courses</span>
  </div>
</template>

<script>
export default {
  props: ["courseCount", "title", "ind"],
};
</script>