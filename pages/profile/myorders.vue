<template>
  <div>
    <SectionInnerBanner
      title="My order History"
      slug="myorders"
      slugLink="profile"
    />
    <div class="container pt-5 pb-5">
      <table class="table shopping-summery">
        <thead>
          <tr class="main-hading">
            <th>PRODUCT</th>
            <th>NAME</th>
            <th class="text-center">UNIT PRICE</th>
            <th class="text-center">QUANTITY</th>
            <th class="text-center">TOTAL</th>
            <th class="text-center">ORDER STAUS</th>
          </tr>
        </thead>
        <tbody v-for="(oc, index) in products" :key="index">
          <OrderItem
            v-for="(c, index) in oc.products"
            :key="index"
            :title="c.title"
            :price="c.price"
            :thumb="c.thumb"
            :ind="index + 1"
            :id="c.id"
            :sku="c.sku"
            :quantity="c.quantity"
            :status="oc.status"
          />
        </tbody>
      </table>
      <p class="text-center" v-if="!products">No records found</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useFrontStore } from "~/stores/frontStore";
import { useAuthStore } from "~/stores/AuthStore";
export default {
  setup() {
    const frontStore = useFrontStore();
    const authStore = useAuthStore();
    const products = frontStore.getUserOrderHistory(authStore.authUser.uname);
    return {
      frontStore,
      authStore,
      products,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>