<template>
  <div>
    <SectionInnerBanner title="Cart to your Home" slug="cart" />

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
                    <i @click="clearCart" class="ti-trash remove-icon"></i>
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
                  :id="c.id"
                  :sku="c.sku"
                  :type="c.type"
                />
              </tbody>
            </table>
            <!--/ End Shopping Summery -->
          </div>
        </div>
        <div class="row" v-if="uCart.length">
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
                        Cart Subtotal<span>${{ totalPrice ? totalPrice.toFixed(2) : totalPrice }}</span>
                      </li>
                      <li>Shipping<span>Free</span></li>
                      <li>
                        Coupon<span
                          >${{ discountAmount ? Number(discountAmount).toFixed(2) : 0.00 }}</span
                        >
                      </li>
                      <li class="last">
                        You Pay<span>${{ youPay.toFixed(2) }}</span>
                      </li>
                    </ul>
                    <div class="button5">
                      <NuxtLink
                        @click="navigateToNextPage"
                        class="btn_one w-100 text-center rounded-0"
                        :to="{
                          path: '/checkout',
                          query: {
                            cartInfo: JSON.stringify(orderItems),
                            discountAmount: discountAmount ? discountAmount : 0,
                          },
                        }"
                        >Checkout</NuxtLink
                      >
                      <NuxtLink to="/courses" class="btn"
                        >Continue shopping</NuxtLink
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--/ End Total Amount -->
          </div>
        </div>
        <div v-else class="text-center">
          <span class="text-center">your cart is empty</span>
          <NuxtLink to="/courses" class="ms-1 text-decoration-underline"
            >Go to Courses</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref, computed } from "vue";
import { useFrontStore } from "../../stores/frontStore";
import { useAuthStore } from "~/stores/AuthStore";
export default {
  setup() {
    const frontStore = useFrontStore();
    const authStore = useAuthStore();
    const uCart = computed(() => {
      return frontStore.getUCarts(authStore.authUser ? authStore.authUser.uname : "");
    });

    const coupon = ref("munns");
    const discount = () => {
      if (coupon.value) {
        frontStore.applyCoupon({
          coupon: coupon.value,
          spend: youPay.value,
        });
      }
    };

    const orderItems = computed(() => {
      return frontStore.getUserOrderItems(
        authStore.authUser ? authStore.authUser.uname : ""
      );
    });

    const totalPrice = computed(() => {
      return orderItems.value.reduce(
        (total, item) => total + item.price * (item.quantity ? item.quantity : 1),
        0
      );
    });

    const discountAmount = computed(() => {
      if (frontStore.appliedCoupon.length) {
        return frontStore.appliedCoupon[0].discount;
      }
    });

    const clearCoup = () => {
      frontStore.clearCoupon();
    };

    const clearCart = () => {
      const confirmed = window.confirm(
        "Are you sure you want to clear the entire cart?"
      );
      if (confirmed) {
        frontStore.clearCart(
          authStore.authUser ? authStore.authUser.uname : ""
        );
      }
    };

    const youPay = computed(() => {
      if (frontStore.appliedCoupon.length) {
        return (
          parseInt(totalPrice.value) -
          parseInt(frontStore.appliedCoupon[0].discount)
        );
      }
      return parseInt(totalPrice.value);
    });

    return {
      frontStore,
      uCart,
      coupon,
      discount,
      youPay,
      discountAmount,
      clearCoup,
      clearCart,
      orderItems,
      totalPrice,
    };
  },
};
</script>

<style lang="scss" scoped>
.btn_one {
  &::before {
    border-radius: 0;
  }
}
</style>