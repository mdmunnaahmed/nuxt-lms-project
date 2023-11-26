<template>
  <div>
    <SectionInnerBanner title="Shop wishes" slug="shop" />
    <!-- Start product Area -->
    <section id="product_area" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title">
              <h2>Our Products</h2>
              <p>
                Check Our <span><u>All Products</u></span>
              </p>
            </div>
          </div>
        </div>

        <div class="text-center">
          <div class="row">
            <div
              class="col-lg-3 col-md-4 col-sm-6"
              v-for="(p, index) in frontStore.products"
              :key="index"
            >
              <ProductItem
                :thumb="p.thumb"
                :thumb2="p.thumb2"
                :title="p.title"
                :price="p.price"
                :discountPrice="p.discountPrice"
                :rating="p.rating"
                :status="p.status"
              />
            </div>
            <!-- End Col -->
          </div>
        </div>
      </div>
    </section>
    <!-- End product Area -->
  </div>
</template>

<script>
import { useFrontStore } from "~/stores/frontStore";
export default {
  setup() {
    const frontStore = useFrontStore();
    return {
      frontStore,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>