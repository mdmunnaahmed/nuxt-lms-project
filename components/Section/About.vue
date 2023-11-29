<template>
  <div>
    <!-- START ABOUT US HOME ONE -->
    <section class="ab_one section-padding">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
            data-wow-offset="0"
          >
            <div class="ab_img">
              <img
                src="/images/all-img/about2.png"
                class="img-fluid"
                alt="image"
              />
            </div>
          </div>
          <!--- END COL -->
          <div
            class="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.1s"
            data-wow-offset="0"
          >
            <div class="ab_content">
              <h2>
                Learn new skills to go
                <u><span>ahead for your </span></u> career.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
                sed do eiusmod tempor incididunt ut labore et simply. From blogs
                to emails to ad copies, auto-generate catchy, original, and
                high-converting copies in popular tones languages.From blogs to
                emails to ad copies, auto-generate catchy, original and
                high-converting copies.
              </p>
              <p>
                <strong
                  >Auto-generate catchy original and high-converting copies in
                  popular tones languages. From blogs to emails to ad copies
                  auto-generate catchy</strong
                >
              </p>
              <NuxtLink class="btn_one" to="/about">Read More us</NuxtLink>
            </div>
          </div>
          <!--- END COL -->
        </div>
        <!--- END ROW -->
      </div>
      <!--- END CONTAINER -->
    </section>
    <!-- END ABOUT US HOME ONE -->
  </div>
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
