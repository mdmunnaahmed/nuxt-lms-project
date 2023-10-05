<template>
  <div class="testimonial">
    <div class="testimonial_content">
      <i
        class="fa fa-star"
        :style="{ color: parseInt(rating) >= 1 ? '#ffbd35' : '' }"
      ></i>
      <i
        class="fa fa-star"
        :style="{ color: parseInt(rating) >= 2 ? '#ffbd35' : '' }"
      ></i>
      <i
        class="fa fa-star"
        :style="{ color: parseInt(rating) >= 3 ? '#ffbd35' : '' }"
      ></i>
      <i
        class="fa fa-star"
        :style="{ color: parseInt(rating) >= 4 ? '#ffbd35' : '' }"
      ></i>
      <i
        class="fa fa-star"
        :style="{ color: parseInt(rating) >= 5 ? '#ffbd35' : '' }"
      ></i>
      <!-- <span style="color: #ffbd35" class="fw-semibold"> ({{ rating }})</span> -->
      <p>
        {{ pera }}
      </p>
    </div>
    <div class="testi_pic_title tpt_one">
      <div class="pic">
        <img src="@/images/all-img/t1.png" alt="" />
      </div>
      <h4>James Clayton</h4>
      <small class="post">- Design Expert</small>
    </div>
  </div>
</template>

<script>
import { useFrontStore } from "../stores/frontStore";
export default {
  props: ["pera", "rating"],
  setup() {
    const frontStore = useFrontStore();
    return {
      frontStore,
    };
  },
};
</script>