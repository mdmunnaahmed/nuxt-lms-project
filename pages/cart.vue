<template>
  <div>
    <SectionInnerBanner title="Cart Page" slug="cart" />

    <div class="shopping-cart section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- Shopping Summery -->
            <table class="table shopping-summery">
              <thead>
                <tr class="main-hading">
                  <th>PRODUCT</th>
                  <th>NAME</th>
                  <th class="text-center">UNIT PRICE</th>
                  <th class="text-center">QUANTITY</th>
                  <th class="text-center">TOTAL</th>
                  <th class="text-center">
                    <i class="ti-trash remove-icon"></i>
                  </th>
                </tr>
              </thead>
              <tbody>
                <CartItem
                  v-for="(c, index) in uCart"
                  :key="index"
                  :title="c.title"
                  :price="c.price"
                  :thumb="c.thumb"
                  :ind="index + 1"
                />
              </tbody>
            </table>
            <!--/ End Shopping Summery -->
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <!-- Total Amount -->
            <div class="total-amount">
              <div class="row">
                <div class="col-lg-8 col-md-5 col-12">
                  <div class="left">
                    <div class="coupon">
                      <form @submit.prevent="discount">
                        <input
                          placeholder="Enter Your Coupon"
                          v-model="coupon"
                        />
                        <button class="btn">Apply</button>
                      </form>
                      <small v-if="frontStore.success">{{
                        frontStore.success
                      }}</small>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-7 col-12">
                  <div class="right">
                    <ul>
                      <li>Cart Subtotal<span>$330.00</span></li>
                      <li>Shipping<span>Free</span></li>
                      <li v-for="(c, index) in getCoupon" :key="index">
                        Coupon<span>${{ c.discount }}</span>
                      </li>
                      <li>You Save<span>$20.00</span></li>
                      <li class="last">You Pay<span>$310.00</span></li>
                    </ul>
                    <div class="button5">
                      <a href="#" class="btn">Checkout</a>
                      <a href="#" class="btn">Continue shopping</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--/ End Total Amount -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref, computed } from "vue";
import { useFrontStore } from "../../stores/frontStore";
export default {
  setup() {
    const frontStore = useFrontStore();
    const uCart = frontStore.getUCarts;
    const couponApplied = computed(() => {
      return frontStore.appliedCoupon;
    });

    const coupon = ref("munna");
    const discount = () => {
      if (!coupon.value == "") {
        frontStore.applyCoupon({
          coupon: coupon.value,
        });
      }
    };

    const getCoupon = computed(() => {
      return frontStore.appliedCoupon;
    });

    return {
      frontStore,
      uCart,
      coupon,
      coupon,
      discount,
      couponApplied,
      getCoupon,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>