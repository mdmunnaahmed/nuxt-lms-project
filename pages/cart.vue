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
                      <form action="#" target="_blank">
                        <input name="Coupon" placeholder="Enter Your Coupon" />
                        <button class="btn">Apply</button>
                      </form>
                    </div>
                    <div class="checkbox">
                      <label class="checkbox-inline" for="2"
                        ><input name="news" id="2" type="checkbox" /> Shipping
                        (+10$)</label
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-7 col-12">
                  <div class="right">
                    <ul>
                      <li>Cart Subtotal<span>$330.00</span></li>
                      <li>Shipping<span>Free</span></li>
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
import { ref, computed, onMounted } from "vue";
import { useFrontStore } from "../../stores/frontStore";
export default {
  setup() {
    const frontStore = useFrontStore();

    const uCart = frontStore.getUCarts;

    return {
      uCart,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>