<template>
  <!-- START BLOG -->
  <section id="blog" class="blog_area section-padding">
    <div class="container">
      <div class="section-title">
        <h2>News</h2>
        <p>
          Our Latest <span><u>Blogs</u></span>
        </p>
      </div>
      <div class="row">
        <div
          class="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
          v-for="(b, index) in frontStore.posts"
          :key="index"
        >
          <BlogItem :title="b.title" :thumb="b.thumb" :tag="b.tag" :date="b.date" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useFrontStore } from "../stores/frontStore";
export default {
  setup() {
    const frontStore = useFrontStore();

    return {
      frontStore,
    };
  },
};
</script>