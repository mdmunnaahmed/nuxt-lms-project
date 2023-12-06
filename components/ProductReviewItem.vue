<template>
  <div>
    <div class="single_rtng_cmnt">
      <div class="rtngs d-flex align-items-center gap-1">
        <TheRating :rating="rating" />
        <span>({{ rating }})</span>
      </div>
      <div class="rtng_author">
        <h3>{{ name }}</h3>
        <span>{{ time }}</span>
        <span>{{ date }}</span>
      </div>
      <p>{{ comment }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "comment", "rating", 'time', 'date'],
};
</script>

<style lang="scss" scoped>
</style>