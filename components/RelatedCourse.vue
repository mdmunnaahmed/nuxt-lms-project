<template>
  <div class="single_rc d-flex align-items-center">
    <div class="rc_img">
      <img :src="'/images/all-img/' + thumb" :alt="thumb" />
    </div>
    <div>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <h4>
        <NuxtLink :to="slug">{{ title }}</NuxtLink>
      </h4>
      <span>${{ price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["thumb", "rating", "title", "price"],
  setup(props) {
    const title = ref(props.title);
    const stitle = title.value
      .trim()
      .toLowerCase()
      .replaceAll(/[^\w\s]/gi, "");
    const slug = stitle.replaceAll(" ", "-").replaceAll("--", "-");
    return {
      slug,
    };
  },
};
</script>

<style lang="scss" scoped>
h4 {
  a {
    font-size: 16px !important;
    margin-top: 0;
    margin-bottom: 5px;
  }
}
.rc_img {
  img {
    max-width: 130px;
    margin-bottom: 0;
  }
}
</style>