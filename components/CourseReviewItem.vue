<template>
  <li>
    <div class="thumb">
      <img src="/images/all-img/client04.png" alt="course" />
    </div>
    <div class="cont">
      <h6 class="subtitle">{{ name }}</h6>
      <TheRating :rating="rating" />
      <p>{{ comment }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ["name", "rating", "comment"],
};
</script>