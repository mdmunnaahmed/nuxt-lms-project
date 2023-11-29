<template>
  <div>
    <SectionInnerBanner title="Checkout your Products" slug="checkout" />
    <section class="shop checkout section">
      <div class="container">
        <form class="form" @submit.prevent="checkout">
          <div class="row">
            <div class="col-lg-8 col-12">
              <div class="checkout-form">
                <h2>Make Your Checkout Here</h2>
                <p v-if="authStore.isLoggedIn">
                  Your account will be automatically created.
                </p>
                <p v-else>You are logged in as...</p>
                <!-- Form -->
                <div class="row">
                  <div class="col-12 pb-2">
                    <small class="text-danger" v-if="error"
                      >Please fill out the form correctly</small
                    >
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-group">
                      <label>Full Name<span>*</span></label>
                      <input type="text" required="required" v-model="name" />
                    </div>
                  </div>
                  <div
                    class="col-lg-6 col-md-6 col-12"
                    v-if="!authStore.authUser"
                  >
                    <div class="form-group">
                      <label>Username<span>*</span></label>
                      <input type="text" required="required" v-model="uname" />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-group">
                      <label>Email Address<span>*</span></label>
                      <input type="email" required="required" v-model="email" />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-group">
                      <label>Address Line 1<span>*</span></label>
                      <input type="text" required="required" v-model="addr1" />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-group">
                      <label>Address Line 2<span>*</span></label>
                      <input type="text" required="required" v-model="addr2" />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="form-group">
                      <label>Postal Code<span>*</span></label>
                      <input
                        type="text"
                        required="required"
                        v-model="postCode"
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label>Note to Rider</label>
                      <textarea
                        class="w-100 px-3 py-2"
                        rows="6"
                        v-model="noteToRider"
                        placeholder="your message request to rider..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <!--/ End Form -->
              </div>
            </div>
            <div class="col-lg-4 col-12">
              <div class="order-details">
                <!-- Order Widget -->
                <div class="single-widget">
                  <h2>CART TOTALS</h2>
                  <ul class="px-4 ms-1 mt-3 d-flex flex-col gap-3">
                    <CheckoutItem
                      v-for="(c, index) in cartInfo"
                      :key="index"
                      :thumb="c.thumb"
                      :title="c.title"
                      :slug="c.title"
                      :quantity="c.quantity"
                      :price="c.price"
                    ></CheckoutItem>
                  </ul>
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
                      ><input name="payment-method" type="radio" value="cashondelivery" v-model="deliveryOption" /> Cash On
                      Delivery</label
                    >
                    <label
                      ><input name="payment-method" type="radio" value="bkash" v-model="deliveryOption" /> Bkash</label
                    >
                  </div>
                </div>
                <!--/ End Order Widget -->
                <!-- Button Widget -->
                <div class="single-widget get-button">
                  <div class="content">
                    <div class="button">
                      <button :disabled="!deliveryOption" class="btn">proceed to payment</button>
                    </div>
                  </div>
                </div>
                <!--/ End Button Widget -->
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
    <section class="shop-services section home">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-12">
            <!-- Start Single Service -->
            <div class="single-service">
              <i class="ti-rocket"></i>
              <h4>Free shiping</h4>
              <p>Orders over $100</p>
            </div>
            <!-- End Single Service -->
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <!-- Start Single Service -->
            <div class="single-service">
              <i class="ti-reload"></i>
              <h4>Free Return</h4>
              <p>Within 30 days</p>
            </div>
            <!-- End Single Service -->
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <!-- Start Single Service -->
            <div class="single-service">
              <i class="ti-lock"></i>
              <h4>Sucure Payment</h4>
              <p>100% secure payment</p>
            </div>
            <!-- End Single Service -->
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <!-- Start Single Service -->
            <div class="single-service">
              <i class="ti-tag"></i>
              <h4>Best Price</h4>
              <p>Guaranteed price</p>
            </div>
            <!-- End Single Service -->
          </div>
        </div>
      </div>
    </section>
    <UIBaseDialog v-if="success">
      <template #ico>
        <img
          class="mx-auto"
          style="width: 60px; object-fit: contain"
          src="/icon/check.png"
          alt="icon"
        />
      </template>
      <template #default>
        <p class="text-center mt-0 text-green-600 mb-2">
          Your order has been successfully placed.
        </p>
      </template>
      <template #actions>
        <div class="text-center">
          <NuxtLink
            to="/profile/myorders"
            class="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 h-auto"
            @click="closeDialog"
          >
            Checkout the order
          </NuxtLink>
        </div>
      </template>
    </UIBaseDialog>
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
    const route = useRoute();
    const cartInfo = JSON.parse(route.query.cartInfo);
    const discount = JSON.parse(route.query.discountAmount);

    const authUser = authStore.authUser;
    const name = ref(authUser ? authUser.name : "");
    const uname = ref("");
    const email = ref(authUser ? authUser.email : "");
    const addr1 = ref(authUser ? authUser.addr1 : "");
    const addr2 = ref(authUser ? authUser.addr2 : "");
    const postCode = ref(authUser ? authUser.postCode : "");
    const noteToRider = ref("");

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

    const error = ref(false);
    const success = ref(false);
    const deliveryOption = ref('')
    const checkout = () => {
      if (
        !name.value ||
        !email.value ||
        !addr1.value ||
        !addr2.value ||
        !postCode.value
      ) {
        error.value = true;
        return;
      }
      if (uname.value) {
        error.value = true;
        authStore.addAccount({
          uname: uname.value,
          name: name.value,
          email: email.value,
          password: password.value,
          thumb: "munns.jpg",
        });
        success.value = true;
        error.value = false;
        uname.value = "";
        name.value = "";
        email.value = "";
        password.value = "";
      }
      frontStore.checkoutProducts({
        uname: authStore.authUser.uname,
        userInfo: {
          name: name,
          email: email,
          addr1: addr1,
          addr2: addr2,
          postCode: postCode,
          noteToRider: noteToRider,
        },
        products: cartInfo,
        status: "pending",
      });
      error.value = false;
      success.value = true;
      frontStore.cart = [];
    };
    // const closeDialog = () => {
    //   error.value = false;
    //   success.value = false;
    // };
    return {
      authStore,
      frontStore,
      name,
      uname,
      email,
      addr1,
      addr2,
      postCode,
      noteToRider,
      cartInfo,
      totalPrice,
      discountAmount,
      youPay,
      discount,
      checkout,
      error,
      success,
      deliveryOption
      // closeDialog
    };
  },
};
</script>

<style lang="scss" scoped>
input {
  &:disabled {
    background-color: #80808050 !important;
  }
}
.btn.disabled, .btn:disabled, fieldset:disabled .btn {
  background: gray;
  cursor: no-drop !important;
}
</style>