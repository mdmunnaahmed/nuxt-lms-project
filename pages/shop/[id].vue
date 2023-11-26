<template>
  <div>
    <SectionInnerBanner :title="product.title" slug="product details" />
    <!-- Product Details Area  -->
    <div class="prdct_dtls_page_area section-padding">
      <div class="container">
        <form action="">
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
                <div class="pd_img_size fix">
                  <h4>size:</h4>
                  <span
                    @click="selectSize(size)"
                    :class="{ active: selectedSize == size }"
                    v-for="(size, index) in product.sizes"
                    :key="index"
                    >{{ size }}</span
                  >
                </div>
                <div class="pd_clr_qntty_dtls fix">
                  <div class="pd_clr">
                    <h4>color:</h4>
                    <span
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
                      style="text-transform: capitalize"
                      :style="{ color: selectedColor.colorCode }"
                    >
                      {{ selectedColor.name }}
                    </p>
                  </div>
                  <div class="pd_qntty_area">
                    <h4>quantity:</h4>
                    <div class="pd_qty fix">
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
                <div class="pd_btn fix">
                  <button class="btn btn-default acc_btn">add to bag</button>
                  <a class="btn btn-default acc_btn btn_icn"
                    ><i class="fa fa-heart"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div class="row">
          <div class="col-xs-12">
            <div class="pd_tab_area fix">
              <ul class="pd_tab_btn nav nav-tabs">
                <li>
                  <a class="active" href="">Description</a>
                </li>
                <li>
                  <a href="">Attributes</a>
                </li>
                <li>
                  <a href="">Reviews</a>
                </li>
              </ul>

              <!-- Tab panes -->
              <div class="tab-content">
                <div class="tab-pane fade show">
                  {{ product.description }}
                </div>

                <div class="tab-pane fade show">
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

                <div class="tab-pane fade show active">
                  <div class="pda_rtng_area fix">
                    <h2>4.5 <span>(Overall)</span></h2>
                    <span class="fs-6">Based on 9 Comments</span>
                  </div>
                  <div class="rtng_cmnt_area mt-5">
                    <div class="single_rtng_cmnt">
                      <div class="rtngs">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                        <span>(4)</span>
                      </div>
                      <div class="rtng_author">
                        <h3>John Doe</h3>
                        <span>11:20</span>
                        <span>6 May 2023</span>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                    </div>
                  </div>
                  <div class="col-md-6 rcf_pdnglft">
                    <div class="review-form">
                      <h6 class="review-title mb-3">Add a Review</h6>
                      <form
                        class="row client-form align-items-center"
                        @submit.prevent="addReview"
                      >
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
                            rows="5"
                            placeholder="Type Here Message"
                            v-model="comment"
                          ></textarea>
                        </div>
                        <div class="col-12">
                          <small class="text-danger" v-if="notLogIn"
                            >Please Login to Comment</small
                          >
                          <small class="text-danger" v-if="error"
                            >Please fill all the form</small
                          >
                          <small class="text-danger" v-if="error2"
                            >Comment should be more than 20 char</small
                          >
                        </div>
                        <div class="col-12">
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
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="product-grid">
              <div class="product-image">
                <a href="#">
                  <img
                    class="pic-1"
                    src="/images/shop/1.jpg"
                    alt="Product Image"
                  />
                  <img
                    class="pic-2"
                    src="/images/shop/2.jpg"
                    alt="Product Image"
                  />
                </a>
                <ul class="social">
                  <li>
                    <a href="#" data-tip="Quick View"
                      ><i class="ti-zoom-in"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" data-tip="Add to Wishlist"
                      ><i class="ti-bag"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" data-tip="Add to Cart"
                      ><i class="ti-shopping-cart"></i
                    ></a>
                  </li>
                </ul>
                <span class="product-new-label">Sale</span>
              </div>
              <ul class="rating">
                <li class="fa fa-star"></li>
                <li class="fa fa-star"></li>
                <li class="fa fa-star"></li>
                <li class="fa fa-star"></li>
                <li class="fa fa-star"></li>
              </ul>
              <div class="product-content">
                <h3 class="title"><a href="#">Product Title</a></h3>
                <div class="price">
                  $16.00
                  <span>$20.00</span>
                </div>
                <a class="add-to-cart" href="#">+ Add To Cart</a>
              </div>
            </div>
          </div>
          <!-- End Col -->

          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="product-grid">
              <div class="product-image">
                <a href="#">
                  <img
                    class="pic-1"
                    src="/images/shop/3.jpg"
                    alt="Product Image"
                  />
                  <img
                    class="pic-2"
                    src="/images/shop/4.jpg"
                    alt="Product Image"
                  />
                </a>
                <ul class="social">
                  <li>
                    <a href="#" data-tip="Quick View"
                      ><i class="ti-zoom-in"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" data-tip="Add to Wishlist"
                      ><i class="ti-bag"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" data-tip="Add to Cart"
                      ><i class="ti-shopping-cart"></i
                    ></a>
                  </li>
                </ul>
                <span class="product-new-label">-20%</span>
              </div>
              <ul class="rating">
                <li class="fa fa-star"></li>
                <li class="fa fa-star"></li>
                <li class="fa fa-star"></li>
                <li class="fa fa-star"></li>
                <li class="fa fa-star"></li>
              </ul>
              <div class="product-content">
                <h3 class="title"><a href="#">Product Title</a></h3>
                <div class="price">
                  $16.00
                  <span>$20.00</span>
                </div>
                <a class="add-to-cart" href="#">+ Add To Cart</a>
              </div>
            </div>
          </div>
          <!-- End Col -->

          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="product-grid">
              <div class="product-image">
                <a href="#">
                  <img
                    class="pic-1"
                    src="/images/shop/5.jpg"
                    alt="Product Image"
                  />
                  <img
                    class="pic-2"
                    src="/images/shop/6.jpg"
                    alt="Product Image"
                  />
                </a>
                <ul class="social">
                  <li>
                    <a href="#" data-tip="Quick View"
                      ><i class="ti-zoom-in"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" data-tip="Add to Wishlist"
                      ><i class="ti-bag"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" data-tip="Add to Cart"
                      ><i class="ti-shopping-cart"></i
                    ></a>
                  </li>
                </ul>
                <span class="product-new-label">Sale</span>
              </div>
              <ul class="rating">
                <li class="fa fa-star"></li>
                <li class="fa fa-star"></li>
                <li class="fa fa-star"></li>
                <li class="fa fa-star"></li>
                <li class="fa fa-star disable"></li>
              </ul>
              <div class="product-content">
                <h3 class="title"><a href="#">Product Title</a></h3>
                <div class="price">
                  $16.00
                  <span>$20.00</span>
                </div>
                <a class="add-to-cart" href="#">+ Add To Cart</a>
              </div>
            </div>
          </div>
          <!-- End Col -->

          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="product-grid">
              <div class="product-image">
                <a href="#">
                  <img
                    class="pic-1"
                    src="/images/shop/7.jpg"
                    alt="Product Image"
                  />
                  <img
                    class="pic-2"
                    src="/images/shop/8.jpg"
                    alt="Product Image"
                  />
                </a>
                <ul class="social">
                  <li>
                    <a href="#" data-tip="Quick View"
                      ><i class="ti-zoom-in"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" data-tip="Add to Wishlist"
                      ><i class="ti-bag"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#" data-tip="Add to Cart"
                      ><i class="ti-shopping-cart"></i
                    ></a>
                  </li>
                </ul>
                <span class="product-new-label">New</span>
              </div>
              <ul class="rating">
                <li class="fa fa-star"></li>
                <li class="fa fa-star"></li>
                <li class="fa fa-star"></li>
                <li class="fa fa-star"></li>
                <li class="fa fa-star"></li>
              </ul>
              <div class="product-content">
                <h3 class="title"><a href="#">Product Title</a></h3>
                <div class="price">
                  $16.00
                  <span>$20.00</span>
                </div>
                <a class="add-to-cart" href="#">+ Add To Cart</a>
              </div>
            </div>
          </div>
          <!-- End Col -->
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

    const addToCart = async () => {
      await frontStore.addProductToCart({
        uname: authStore.authUser.uname,
        thumb: course.thumb,
        title: course.title,
        price: course.price,
        uCode: course.uCode,
        quantity: 1,
        id: course.id,
      });
      success.value = true;
    };

    return {
      product,
      selectSize,
      selectedSize,
      selectColor,
      selectedColor,
      pQty,
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