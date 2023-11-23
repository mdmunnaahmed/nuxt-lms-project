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
                      <form
                        @submit.prevent="discount"
                        class="flex items-center"
                      >
                        <input
                          placeholder="Enter Your Coupon"
                          v-model="coupon"
                        />
                        <button
                          class="btn px-4"
                          v-if="!frontStore.appliedCoupon.length"
                        >
                          Apply
                        </button>
                        <button
                          class="btn px-4"
                          v-if="frontStore.appliedCoupon.length"
                          @click="clearCoup"
                        >
                          clear
                        </button>
                      </form>
                      <small v-if="frontStore.success">{{
                        frontStore.success
                      }}</small>
                      <small class="text-danger" v-if="frontStore.error">{{
                        frontStore.error
                      }}</small>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-7 col-12">
                  <div class="right">
                    <ul>
                      <li>
                        Cart Subtotal<span>{{ frontStore.totalPrice }}</span>
                      </li>
                      <li>Shipping<span>Free</span></li>
                      <li>
                        Coupon<span
                          >${{ discountAmount ? discountAmount : 0 }}</span
                        >
                      </li>
                      <li class="last">
                        You Pay<span>${{ youPay }}</span>
                      </li>
                    </ul>
                    <div class="button5">
                      <a href="#" class="btn">Checkout</a>
                      <a href="/courses" class="btn">Continue shopping</a>
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

    const coupon = ref("munna");
    const discount = () => {
      if (!coupon.value == "") {
        frontStore.applyCoupon({
          coupon: coupon.value,
          spend: youPay.value,
        });
      }
    };
    const discountAmount = computed(() => {
      if (frontStore.appliedCoupon.length) {
        return frontStore.appliedCoupon[0].discount;
      }
    });

    const clearCoup = () => {
      frontStore.clearCoupon();
    };

    const youPay = computed(() => {
      if (frontStore.appliedCoupon.length) {
        return (
          parseInt(frontStore.totalPrice) -
          parseInt(frontStore.appliedCoupon[0].discount)
        );
      }
      return parseInt(frontStore.totalPrice);
    });

    return {
      frontStore,
      uCart,
      coupon,
      coupon,
      discount,
      youPay,
      discountAmount,
      clearCoup,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>