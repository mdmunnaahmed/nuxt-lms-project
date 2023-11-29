<template>
  <!-- START SECTION TOP -->
  <section class="section-top">
    <div class="container">
      <div class="col-lg-10 offset-lg-1 text-center">
        <div
          class="section-top-title wow fadeInRight"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
          data-wow-offset="0"
        >
          <h1>{{ title }}</h1>
          <ul class="inline-flex gap-2 w-auto">
            <li><a href="/" class="fw-bold">Home</a></li>
            <li v-if="slugLink">/</li>
            <li><NuxtLink to="/profile">{{ slugLink }}</NuxtLink></li>
            <li>/</li>
            <li>{{ slug }}</li>
          </ul>
        </div>
        <!-- //.HERO-TEXT -->
      </div>
      <!--- END COL -->
    </div>
    <!--- END CONTAINER -->
  </section>
  <!-- END SECTION TOP -->
</template>

<script>
export default {
  props: ["title", "slug", 'slugLink'],
};
</script>