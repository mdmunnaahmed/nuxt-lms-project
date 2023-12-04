<template>
  <NuxtLink
    :to="{
      path: '/courses',
      query: {
        searchCate: JSON.stringify(title),
      },
    }"
    class="single_tca"
  >
    <img :src="'/images/icon/ct' + ind + '.svg'" alt="icon" />
    <div>
      <h2 class="text-capitalize">
        {{ title }}
      </h2>
      <span>{{ courseCount }} Courses</span>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ["courseCount", "title", "ind"],
};
</script>