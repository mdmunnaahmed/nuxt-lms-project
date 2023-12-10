<template>
  <div>
    <SectionInnerBanner :title="product.title" slug="product details" />
    <!-- Product Details Area  -->
    <div class="prdct_dtls_page_area section-padding">
      <div class="container">
        <form @submit.prevent="addToCart">
          <div class="row">
            <!-- Product Details Image -->
            <div class="col-md-6 col-xs-12">
              <div class="pd_img fix">
                <img
                  :src="'/images/shop/' + product.thumb"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <!-- Product Details Content -->
            <div class="col-md-6 col-xs-12">
              <div class="prdct_dtls_content">
                <div class="mb-3">
                  <TheRating :rating="product.rating" />
                </div>
                <h4 class="pd_title">{{ product.title }}</h4>
                <div class="pd_price_dtls fix">
                  <!-- Product Price -->
                  <div class="pd_price d-flex">
                    <span class="new">${{ product.discountPrice }}</span>
                    <span class="old text-decoration-line-through"
                      >({{ product.price }})</span
                    >
                  </div>
                </div>
                <div class="pd_text">
                  <h4>overview:</h4>
                  <p>{{ product.overview }}</p>
                </div>
                <div class="pd_img_size">
                  <h4>size:</h4>
                  <span
                    class="d-inline-flex justify-content-center flex-row"
                    @click="selectSize(size)"
                    :class="{ active: selectedSize == size }"
                    v-for="(size, index) in product.sizes"
                    :key="index"
                    >{{ size }}</span
                  >
                </div>

                <div class="pd_clr_qntty_dtls">
                  <div class="pd_clr">
                    <h4>color:</h4>
                    <span
                      class="d-inline-block"
                      @click="selectColor(color)"
                      :class="{ active: selectedColor == color }"
                      v-for="(color, index) in product.colors"
                      :key="index"
                      :style="{
                        backgroundColor: color.colorCode,
                        outlineColor: color.colorCode,
                      }"
                    ></span>
                    <p
                      class="d-inline-block"
                      style="text-transform: capitalize"
                      :style="{ color: selectedColor.colorCode }"
                    >
                      {{ selectedColor.name }}
                    </p>
                  </div>

                  <div class="d-flex gap-2 align-items-center py-3">
                    <h6 class="mb-0">SKU:</h6>
                    <span class="lh-1">{{ product.sku }}</span>
                  </div>

                  <div class="pd_qntty_area float-end">
                    <h4>quantity:</h4>
                    <div class="pd_qty">
                      <input
                        class="form-control shadow-none"
                        type="number"
                        min="1"
                        max="10"
                        v-model="pQty"
                      />
                    </div>
                  </div>
                </div>
                <!-- Product Action -->
                <div class="pd_btn fix mb-0">
                  <button class="btn btn-default acc_btn">add to bag</button>
                </div>
                <small class="text-danger" v-if="loginError"
                  >Please Login before add to cart</small
                >
                <small
                  class="text-success fw-semibold"
                  v-if="success && !frontStore.error"
                  >added to cart</small
                >
                <small class="text-danger fw-semibold" v-if="frontStore.error"
                  >already in cart</small
                >
                <small
                  class="text-danger fw-semibold"
                  v-if="sizeError && !colorError && !success"
                  >Please select a size</small
                >
                <small
                  class="text-danger fw-semibold"
                  v-if="colorError && !success"
                  >Please select a color</small
                >
              </div>
            </div>
          </div>
        </form>
        <div class="row">
          <div class="col-xs-12">
            <div class="pd_tab_area fix">
              <ul class="pd_tab_btn nav nav-tabs">
                <li>
                  <button
                    @click="toggleActive('description')"
                    :class="{ active: currentActive === 'description' }"
                  >
                    Description
                  </button>
                </li>
                <li>
                  <button
                    @click="toggleActive('attributes')"
                    :class="{ active: currentActive === 'attributes' }"
                  >
                    Attributes
                  </button>
                </li>
                <li>
                  <button
                    @click="toggleActive('reviews')"
                    :class="{ active: currentActive === 'reviews' }"
                  >
                    Reviews
                  </button>
                </li>
              </ul>

              <!-- Tab panes -->
              <div class="tab-content">
                <div
                  class="tab-pane fade show"
                  :class="{ active: currentActive === 'description' }"
                >
                  {{ product.description }}
                </div>

                <div
                  class="tab-pane fade show"
                  :class="{ active: currentActive === 'attributes' }"
                >
                  <table class="table table-striped w-50">
                    <thead>
                      <tr>
                        <th>Attributes</th>
                        <th>Values</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Color:</td>
                        <td>
                          <span
                            class="me-2"
                            v-for="(c, index) in product.colors"
                            :key="index"
                            :style="{
                              color: c.colorCode,
                            }"
                            >{{ c.name }},</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>Sizes:</td>
                        <td>
                          <span
                            class="me-2 text-uppercase font-medium"
                            v-for="(s, index) in product.sizes"
                            :key="index"
                            >{{ s }},</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>Brand:</td>
                        <td>
                          {{ product.brand ? product.brand : "Not Specified" }}
                        </td>
                      </tr>
                      <tr>
                        <td>Category:</td>
                        <td>
                          {{
                            product.category
                              ? product.category
                              : "Not Specified"
                          }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div
                  class="tab-pane fade show"
                  :class="{ active: currentActive === 'reviews' }"
                >
                  <div class="pda_rtng_area fix">
                    <h2>
                      {{
                        reviews.length
                          ? (totalRating / reviews.length).toFixed(1)
                          : 0
                      }}
                      <span>(Overall)</span>
                    </h2>
                    <span class="fs-6"
                      >Based on {{ reviews.length }} Comments</span
                    >
                  </div>
                  <div class="rtng_cmnt_area mt-5">
                    <ProductReviewItem
                      v-for="(r, index) in reviews"
                      :key="index"
                      :name="r.name"
                      :comment="r.comment"
                      :rating="r.rating"
                      :date="r.date"
                      :time="r.time"
                    />
                  </div>
                  <div class="col-md-6 rcf_pdnglft">
                    <div class="review-form" v-if="authStore.authUser">
                      <form
                        class="row client-form align-items-center"
                        @submit.prevent="addReview"
                      >
                        <h6 class="review-title mb-3">Add a Review</h6>
                        <div class="col-6">
                          <input
                            type="text"
                            placeholder="Full Name"
                            class="w-100"
                            v-model="name"
                          />
                        </div>
                        <div class="col-6">
                          <fieldset>
                            <div class="rating">
                              <ul
                                class="ratings text-xl flex align-baseline gap-2 h-auto"
                              >
                                <li @click="setRate(1)">
                                  <input
                                    type="radio"
                                    name="rating"
                                    id="rating-1"
                                    value="1"
                                  />
                                  <!-- <label for="rating-1">1 Star</label> -->
                                </li>
                                <li @click="setRate(2)">
                                  <input
                                    type="radio"
                                    name="rating"
                                    id="rating-2"
                                    value="2"
                                  />
                                  <!-- <label for="rating-2">2 Stars</label> -->
                                </li>
                                <li @click="setRate(3)">
                                  <input
                                    type="radio"
                                    name="rating"
                                    id="rating-3"
                                    value="3"
                                  />
                                  <!-- <label for="rating-3">3 Stars</label> -->
                                </li>
                                <li @click="setRate(4)">
                                  <input
                                    type="radio"
                                    name="rating"
                                    id="rating-4"
                                    value="4"
                                  />
                                  <!-- <label for="rating-4">4 Stars</label> -->
                                </li>
                                <li @click="setRate(5)">
                                  <input
                                    type="radio"
                                    name="rating"
                                    id="rating-5"
                                    value="5"
                                  />
                                  <!-- <label for="rating-5">5 Stars</label> -->
                                </li>
                              </ul>
                            </div>
                          </fieldset>
                        </div>
                        <div class="col-md-12 col-12 d-inline-flex">
                          <textarea
                            class="mb-1"
                            rows="5"
                            placeholder="Type Here Message"
                            v-model="comment"
                          ></textarea>
                        </div>
                        <div class="col-12">
                          <small class="text-danger" v-if="error"
                            >Please fill all the form</small
                          >
                          <small class="text-danger" v-if="error2"
                            >Comment should be more than 20 char</small
                          >
                          <small class="text-danger" v-if="existReview"
                            >you already made a comment</small
                          >
                        </div>
                        <div class="col-12 pt-2">
                          <button type="submit" class="custom-button rounded">
                            Submit Review
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Related Product Area -->
    <div class="related_prdct_area text-center">
      <div class="container">
        <!-- Section Title -->
        <div class="rp_title text-center"><h3>Related products</h3></div>
        <div class="row">
          <div
            class="col-lg-3 col-md-4 col-sm-6"
            v-for="(p, index) in relatedProducts"
            :key="index"
          >
            <ProductItem
              :title="p.title"
              :thumb="p.thumb"
              :thumb2="p.thumb2"
              :price="p.price"
              :discountPrice="p.discountPrice"
              :rating="p.rating"
              :status="p.status"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useFrontStore } from "../../stores/frontStore";
import { useAuthStore } from "~/stores/AuthStore";
export default {
  setup() {
    const authStore = useAuthStore();
    const frontStore = useFrontStore();
    const route = useRoute();
    const slug = route.params.id;
    const product = frontStore.getIdProduct(slug);

    const selectedSize = ref("");
    const selectSize = (size) => {
      selectedSize.value = size;
    };

    const selectedColor = ref("");
    const selectColor = (color) => {
      selectedColor.value = color;
    };

    const pQty = ref(1);
    const success = ref(false);
    const colorError = ref(false);
    const sizeError = ref(false);
    const loginError = ref(false);
    const addToCart = async () => {
      if (!authStore.authUser) {
        loginError.value = true;
        return;
      }
      loginError.value = false;
      if (selectedSize.value == "") {
        sizeError.value = true;
        return;
      }
      sizeError.value = false;
      if (selectedColor.value == "") {
        colorError.value = true;
        return;
      }
      colorError.value = false;
      await frontStore.addProductToCart({
        uname: authStore.authUser.uname,
        thumb: product.thumb,
        title: product.title,
        price: product.price,
        sku: product.sku,
        quantity: pQty.value,
        size: selectedSize.value,
        color: selectedColor.value,
        id: product.id,
      });
      success.value = true;
    };

    const currentActive = ref("description");
    const toggleActive = (item) => {
      currentActive.value = item;
    };

    const reviews = computed(() => {
      return frontStore.getProductReviews(product.sku);
    });

    const totalRating = computed(() => {
      return frontStore
        .getProductReviews(product.sku)
        .reduce((acc, product) => acc + Number(product.rating), 0);
    });

    const name = ref("");
    const comment = ref("");
    const rate = ref("");
    const setRate = (value) => {
      rate.value = value;
    };
    const error = ref(false);
    const error2 = ref(false);
    const existReview = ref(false);

    const addReview = () => {
      if (name.value == "" || rate.value == "" || comment.value == "") {
        error.value = true;
        return;
      }
      error.value = false;
      if (comment.value.length < 20 && comment.value) {
        error2.value = true;
        return;
      }
      error2.value = false;

      const ifExist = frontStore.ifExistProductReview(
        authStore.authUser ? authStore.authUser.uname : "",
        product.sku
      );
      if (ifExist.length) {
        existReview.value = true;
        return;
      }

      const time = new Date();
      var hour = time.getHours();
      const ampm = hour >= 12 ? "pm" : "am";
      hour = hour % 12;
      hour = hour ? hour : 12;
      const min = time.getMinutes();

      const year = time.getFullYear();
      const month = time.getMonth();
      const day = time.getDate();

      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const monthName = monthNames[month - 1];

      frontStore.addProductReview({
        name: name.value,
        uname: authStore.authUser.uname,
        rating: rate.value,
        comment: comment.value,
        sku: product.sku,
        time: hour + ":" + min + " " + ampm,
        date: day + " " + monthName + ", " + year,
      });
      name.value = "";
      rate.value = "";
      comment.value = "";
    };

    const arrayP = [...frontStore.products];
    const relatedProducts = arrayP.sort(() => Math.random() - 0.5).slice(0, 4);

    return {
      frontStore,
      authStore,
      product,
      selectSize,
      selectedSize,
      selectColor,
      selectedColor,
      pQty,
      addToCart,
      success,
      sizeError,
      colorError,
      toggleActive,
      currentActive,

      reviews,
      addReview,
      name,
      comment,
      rate,
      setRate,
      error,
      error2,
      existReview,
      relatedProducts,
      totalRating,
      loginError,
    };
  },
};
</script>


<style lang="scss" scoped>
fieldset {
  label {
    width: 0;
    overflow: hidden;
  }
  /* You can style inputs directly thanks to appearance:none! */
  input {
    appearance: none;
    text-align: center;
    cursor: pointer;
    height: auto !important;
    width: auto !important;
    margin: 0 !important;
    padding: 2px 6px !important;
    &:focus {
      border-color: red !important;
    }

    &::after {
      content: "☆";
      font-size: calc(var(--size) * 3 / 4);
      line-height: var(--size);
      color: red;
    }
    &:is(:checked, :hover)::after,
    &:has(~ input:is(:checked, :hover))::after {
      content: "★";
    }
    &:hover ~ input::after {
      content: "☆";
    }
  }
}
</style>