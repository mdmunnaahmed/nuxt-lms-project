<template>
  <div>
    <SectionInnerBanner title="Checkout your Products" slug="checkout" />
    <section class="shop checkout section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-12">
            <div class="checkout-form">
              <h2>Make Your Checkout Here</h2>
              <p>Please register in order to checkout more quickly</p>
              <!-- Form -->
              <form class="form" method="post" action="#">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-group">
                      <label>First Name<span>*</span></label>
                      <input
                        type="text"
                        name="name"
                        placeholder=""
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-group">
                      <label>Last Name<span>*</span></label>
                      <input
                        type="text"
                        name="name"
                        placeholder=""
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-group">
                      <label>Email Address<span>*</span></label>
                      <input
                        type="email"
                        name="email"
                        placeholder=""
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-group">
                      <label>Phone Number<span>*</span></label>
                      <input
                        type="number"
                        name="number"
                        placeholder=""
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-group">
                      <label>Address Line 1<span>*</span></label>
                      <input
                        type="text"
                        name="address"
                        placeholder=""
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-group">
                      <label>Address Line 2<span>*</span></label>
                      <input
                        type="text"
                        name="address"
                        placeholder=""
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-group">
                      <label>Postal Code<span>*</span></label>
                      <input
                        type="text"
                        name="post"
                        placeholder=""
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group create-account">
                      <input id="cbox" type="checkbox" />
                      <label>Create an account?</label>
                    </div>
                  </div>
                </div>
              </form>
              <!--/ End Form -->
            </div>
          </div>
          <div class="col-lg-4 col-12">
            <div class="order-details">
              <!-- Order Widget -->
              <div class="single-widget">
                <h2>CART TOTALS</h2>
                <div class="content">
                  <ul>
                    <li>
                      Sub Total<span>${{ totalPrice.toFixed(2) }}</span>
                    </li>
                    <li>(+) Shipping<span>$0.00</span></li>
                    <li>
                      (-) Discount<span
                        >${{ discount ? discount.toFixed(2) : 0 }}</span
                      >
                    </li>
                    <li class="last">
                      Total<span>${{ youPay.toFixed(2) }}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <!--/ End Order Widget -->
              <!-- Order Widget -->
              <div class="single-widget">
                <h2>Payments</h2>
                <div class="content d-flex flex-column px-4 ms-1 mt-3 gap-2">
                  <label
                    ><input name="payment-method" type="radio" /> Cash On
                    Delivery</label
                  >
                  <label
                    ><input name="payment-method" type="radio" /> Bkash</label
                  >
                </div>
              </div>
              <!--/ End Order Widget -->
              <!-- Button Widget -->
              <div class="single-widget get-button">
                <div class="content">
                  <div class="button">
                    <a href="#" class="btn">proceed to payment</a>
                  </div>
                </div>
              </div>
              <!--/ End Button Widget -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div>
    <h2>Checkout</h2>
    <ul>
      <li v-for="(c, index) in cartInfo" :key="index">
        {{ c }}
      </li>
    </ul>
    <!-- Add your checkout form and other content -->
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useFrontStore } from "../../stores/frontStore";
export default {
  setup() {
    const frontStore = useFrontStore();
    const route = useRoute();
    const cartInfo = JSON.parse(route.query.cartInfo);
    const discount = JSON.parse(route.query.discountAmount);
    // Compute the total price
    const items = ref(cartInfo);
    const totalPrice = computed(() => {
      return items.value.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    });
    const discountAmount = computed(() => {
      if (frontStore.appliedCoupon.length) {
        return frontStore.appliedCoupon[0].discount;
      }
    });
    const youPay = computed(() => {
      if (discount) {
        return totalPrice.value - discount;
      }
      return totalPrice.value;
    });
    return {
      frontStore,
      cartInfo,
      totalPrice,
      discountAmount,
      youPay,
      discount
    };
  },
};
</script>

<style lang="scss" scoped>
</style>