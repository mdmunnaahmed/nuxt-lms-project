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
          class="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp d-none"
          data-wow-duration="1s"
          data-wow-delay="0.1s"
          data-wow-offset="0"
        >
          <div class="single_blog">
            <div class="content_box">
              <span
                >August 25, 2023 | <a href="blog_single.html">Design</a></span
              >
              <h2>
                <a href="blog_single.html"
                  >Professional Mobile Painting and Sculpting</a
                >
              </h2>
              <a href="#" class="cta d-inline-flex align-items-center"
                ><span class="mb-0">READ MORE</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>
            </div>
          </div>
          <div class="single_blog">
            <div class="content_box">
              <span
                >August 25, 2023 | <a href="blog_single.html">Design</a></span
              >
              <h2>
                <a href="blog_single.html"
                  >Professional Mobile Painting and Sculpting</a
                >
              </h2>
              <a href="#" class="cta d-inline-flex align-items-center"
                ><span class="mb-0">READ MORE</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <!-- END COL-->
        <div
          class="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
          v-for="(b, index) in frontStore.posts"
          :key="index"
        >
          <BlogItem :title="b.title" :thumb="b.thumb" :tag="b.tag" :date="b.date" />
        </div>
      </div>
      <!-- / END ROW -->
    </div>
    <!-- END CONTAINER  -->
  </section>
  <!-- END BLOG -->
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