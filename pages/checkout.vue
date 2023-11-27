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
                    <li>Sub Total<span>$330.00</span></li>
                    <li>(+) Shipping<span>$10.00</span></li>
                    <li class="last">Total<span>$340.00</span></li>
                  </ul>
                </div>
              </div>
              <!--/ End Order Widget -->
              <!-- Order Widget -->
              <div class="single-widget">
                <h2>Payments</h2>
                <div class="content">
                  <div class="checkbox">
                    <label class="checkbox-inline" for="1"
                      ><input name="updates" id="1" type="checkbox" /> Check
                      Payments</label
                    >
                    <label class="checkbox-inline" for="2"
                      ><input name="news" id="2" type="checkbox" /> Cash On
                      Delivery</label
                    >
                    <label class="checkbox-inline" for="3"
                      ><input name="news" id="3" type="checkbox" />
                      PayPal</label
                    >
                  </div>
                </div>
              </div>
              <!--/ End Order Widget -->
              <!-- Payment Method Widget -->
              <div class="single-widget payement">
                <div class="content">
                  <img
                    src="assets/img/payment-method.html"
                    class="img-fluid"
                    alt="#"
                  />
                </div>
              </div>
              <!--/ End Payment Method Widget -->
              <!-- Button Widget -->
              <div class="single-widget get-button">
                <div class="content">
                  <div class="button">
                    <a href="#" class="btn">proceed to checkout</a>
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
      {{
        cartInfo[0] +
        objectO[0]
      }}
    </ul>
    <!-- Add your checkout form and other content -->
  </div>
</template>

<script>
export default {
  setup() {
    const route = useRoute();
    const cartInfo = route.query.cartInfo;
    return {
      cartInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>