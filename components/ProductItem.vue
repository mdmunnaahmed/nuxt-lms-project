<template>
  <div class="product-grid">
    <div class="product-image">
      <NuxtLink :to="{ path: '/shop/' + slug, exact: true }">
        <img class="pic-1" :src="'/images/shop/' + thumb" alt="product image" />
        <img
          class="pic-2"
          :src="'/images/shop/' + thumb2"
          alt="product image"
        />
      </NuxtLink>
      <ul class="social">
        <li>
          <a href="#" data-tip="Add to Wishlist"><i class="ti-bag"></i></a>
        </li>
        <li>
          <a href="#" data-tip="Add to Cart"
            ><i class="ti-shopping-cart"></i
          ></a>
        </li>
      </ul>
      <span class="product-new-label">{{ status }}</span>
    </div>
    <TheRating class="mt-2 mb-0" :rating="rating" />
    <div class="product-content">
      <h3 class="title">
        <NuxtLink :to="{ path: '/shop/' + slug, exact: true }">{{
          title
        }}</NuxtLink>
      </h3>
      <div class="price">
        ${{ discountPrice }}<span>${{ price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import useSlug from "~/composables/useSlug";
export default {
  props: [
    "thumb",
    "thumb2",
    "title",
    "price",
    "discountPrice",
    "rating",
    "status",
  ],
  setup(props) {
    const title = ref(props.title);
    const { slug } = useSlug(title.value);
    return { slug };
  },
};
</script>

<style lang="scss" scoped>
</style>