<template>
  <!-- START ABOUT US HOME ONE -->
  <section class="ab_one section-padding">
    <div class="container">
      <div class="row" v-for="(a, index) in frontStore.about" :key="index">
        <div
          class="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
          data-wow-offset="0"
        >
          <div class="ab_img">
            <img :src="a.thumb" class="img-fluid" alt="image" />
            <!-- <div class="wc_year">
							<h3><span>6k+</span> <br />Happy Clients</h3>
						</div> -->
          </div>
        </div>
        <div
          class="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.1s"
          data-wow-offset="0"
        >
          <div class="ab_content">
            <h2>{{ a.title }}</h2>
            <p>
              {{ a.pera }}
            </p>
          </div>
          <div class="abmv" v-for="(mv, index) in a.mv" :key="index">
            <span class="ti-medall"></span>
            <h4>{{ mv.title }}</h4>
            <p>
              {{ mv.pera }}
            </p>
          </div>
          <NuxtLink class="btn_one" to="/about">Discover More</NuxtLink>
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
