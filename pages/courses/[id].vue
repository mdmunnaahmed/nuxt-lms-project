<template>
  <div>
    <SectionInnerBanner title="Course Details" slug="course details" />
    <!-- START EVENT -->
    <section class="our_event section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-sm-8 col-xs-12">
            <div class="single_event_single">
              <img
                alt=""
                class="img-fluid"
                :src="'/images/all-img/' + course.thumb"
              />
              <div class="single_event_text_single">
                <h4>{{ course.title }}</h4>
                <span
                  ><i class="fa fa-calendar"></i>{{ course.publishDate }}</span
                >
                <span
                  ><i class="fa fa-clock-o"></i
                  >{{
                    convertedTime.hours +
                    "h" +
                    " " +
                    convertedTime.minutes +
                    "min"
                  }}</span
                >
                <span
                  ><i class="fa fa-table"></i
                  ><strong>{{ course.seats }} Seats Available</strong></span
                >
                <p>{{ course.description }}</p>
              </div>
            </div>
            <!--- END SINGLE EVENT -->
            <div class="course-details-content section-bg">
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                  <a
                    href="javascript:void(0)"
                    class="nav-link"
                    @click="changeTab('overview')"
                    :class="{ active: cTab == 'overview' }"
                    >Overview</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="javascript:void(0)"
                    class="nav-link"
                    @click="changeTab('instructor')"
                    :class="{ active: cTab == 'instructor' }"
                    >instructor</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="javascript:void(0)"
                    class="nav-link"
                    @click="changeTab('reviews')"
                    :class="{ active: cTab == 'reviews' }"
                    >reviews</a
                  >
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane show fade"
                  :class="{ active: cTab == 'overview' }"
                  id="overview"
                >
                  <div class="overview">
                    <p>{{ course.overview.description }}</p>
                    <iframe
                      width="900"
                      height="506"
                      :src="course.overview.videoLink"
                      title="10 Excel Formula used daily at WORK (Excel formula for job interview)"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                    <div class="details-buttons-area">
                      <ul class="social-icons">
                        <li>
                          <a href="#0" class="active"
                            ><i class="fa fa-facebook"></i
                          ></a>
                        </li>
                        <li>
                          <a href="#0"><i class="fa fa-twitter"></i></a>
                        </li>
                        <li>
                          <a href="#0"><i class="fa fa-instagram"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane show fade"
                  :class="{ active: cTab == 'instructor' }"
                  id="instructor"
                >
                  <div class="overview text-center">
                    <div class="instructor-item">
                      <div class="instructor-thumb">
                        <img
                          :src="'/images/all-img/' + instructor[0].thumb"
                          alt="instructor"
                        />
                      </div>
                      <div class="instructor-content">
                        <h6 class="title">{{ instructor[0].name }}</h6>
                        <span class="details">{{
                          instructor[0].profession
                        }}</span>
                      </div>
                    </div>
                    <p>{{ instructor[0].shortBio }}</p>
                    <div class="details-buttons-area">
                      <ul class="social-icons justify-content-center w-100">
                        <li>
                          <a href="#0"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li>
                          <a href="#0" class="active"
                            ><i class="fa fa-twitter"></i
                          ></a>
                        </li>
                        <li>
                          <a href="#0"><i class="fa fa-instagram"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane show fade"
                  :class="{ active: cTab == 'reviews' }"
                  id="reviews"
                >
                  <div class="client-review">
                    <div class="review-comments">
                      <h6 class="review-title">
                        Reviews ({{ reviews.length }})
                      </h6>
                      <ul class="review-contents">
                        <CourseReviewItem
                          v-for="(r, index) in reviews"
                          :key="index"
                          :name="r.name"
                          :rating="r.rating"
                          :comment="r.comment"
                        />
                      </ul>
                    </div>
                    <div class="review-form" v-if="itemPurchased.length">
                      <h6 class="review-title">Add a Review</h6>
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
                            <span class="rating-title">Your Rating :</span>
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
                          <small class="text-danger" v-if="authStore.authUser"
                            >Please Login to Comment</small
                          >
                          <small class="text-danger" v-if="error"
                            >Please fill all the form</small
                          >
                          <small class="text-danger" v-if="error2"
                            >Comment should be more than 20 char</small
                          >
                          <small class="text-danger" v-if="existReview"
                            >You already made a review.</small
                          >
                        </div>
                        <div class="col-12">
                          <button
                            type="submit"
                            class="custom-button rounded mt-2"
                          >
                            Submit Review
                          </button>
                        </div>
                      </form>
                    </div>
                    <p
                      v-else-if="!authStore.authUser"
                      class="fw-bold text-amber-600"
                    >
                      Please login to review.
                    </p>
                    <div v-else>
                      <p class="fw-bold text-amber-600">
                        Please purchase the item to review.
                      </p>
                      <small
                        >Note: just ordering item doesn't allow to
                        review.</small
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--- END COL -->
          <div class="col-lg-4 col-sm-4 col-xs-12">
            <div class="course_features">
              <h3>Course features</h3>
              <ul>
                <li>
                  <i class="fa fa-calendar"></i> Course duration
                  <b>{{
                    convertedTime.hours +
                    "h" +
                    " " +
                    convertedTime.minutes +
                    "min"
                  }}</b>
                </li>
                <li>
                  <i class="fa fa-user"></i> Total Lectures
                  <b>{{ course.lessons }}</b>
                </li>
                <li>
                  <i class="fa fa-user"></i> Total Students
                  <b>{{ course.enrolled }}</b>
                </li>
                <li>
                  <i class="fa fa-trophy"></i> Certification
                  <b>{{ course.certificate ? "Yes" : "No" }}</b>
                </li>
              </ul>
            </div>
            <div class="event_info_price">
              <h4>Price - {{ course.price }}$</h4>
            </div>
            <div class="event_info_register">
              <button class="btn_one hover w-100" @click="addToCart">
                Buy this Course
              </button>
              <small class="text-danger d-block text-center" v-if="loginError"
                >Please Login before add to cart</small
              >
              <small
                class="text-danger block text-center"
                v-if="frontStore.error"
                >{{ frontStore.error }}</small
              >
              <small
                class="text-success block text-center"
                v-if="success && !frontStore.error"
                >added to cart</small
              >
            </div>
            <div class="related_course">
              <h3>Related Course</h3>
              <RelatedCourse
                v-for="(rc, index) in relatedCourse"
                :key="index"
                :title="rc.title"
                :thumb="rc.thumb"
                :price="rc.price"
                :rating="rc.rating"
              />
            </div>
          </div>
          <!--- END COL -->
        </div>
        <!-- END ROW -->
      </div>
      <!-- END CONTAINER -->
    </section>
    <!-- END EVENT -->
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useFrontStore } from "../../stores/frontStore";
import { useAuthStore } from "../../stores/AuthStore";
export default {
  setup() {
    const cTab = ref("overview");

    const frontStore = useFrontStore();
    const authStore = useAuthStore();

    const route = useRoute();
    const slug = route.params.id;
    const course = frontStore.getIdCourse(slug);

    const convertedTime = computed(() => {
      const hours = Math.floor(course.duration / 60);
      const minutes = course.duration % 60;
      return {
        minutes,
        hours,
      };
    });

    const changeTab = (tab) => {
      cTab.value = tab;
    };

    const reviews = computed(() => {
      return frontStore.getCourseReviews(course.sku);
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

      const ifExist = frontStore.ifExistReview(
        authStore.authUser ? authStore.authUser.uname : "",
        course.sku
      );
      if (ifExist.length) {
        existReview.value = true;
        return;
      }
      frontStore.addCourseReview({
        name: name.value,
        uname: authStore.authUser.uname,
        rating: rate.value,
        comment: comment.value,
        sku: course.sku,
      });
      name.value = "";
      rate.value = "";
      comment.value = "";
    };

    const arrayC = [...frontStore.courses];
    const relatedCourse = arrayC.sort(() => Math.random() - 0.5).slice(0, 3);
    const success = ref(false);
    const loginError = ref(false);
    const addToCart = async () => {
      if (!authStore.authUser) {
        loginError.value = true;
        return;
      }
      loginError.value = false;
      await frontStore.addToCart({
        uname: authStore.authUser.uname,
        thumb: course.thumb,
        title: course.title,
        price: course.price,
        uCode: course.uCode,
        type: "course",
        id: course.id,
      });
      success.value = true;
    };

    const itemPurchased = computed(() => {
      return frontStore.checkForReview(
        authStore.authUser ? authStore.authUser.uname : "",
        course.sku
      );
    });
    const instructor = authStore.getUser(course.uname);

    return {
      authStore,
      frontStore,
      course,
      convertedTime,
      changeTab,
      cTab,
      reviews,
      addReview,
      name,
      comment,
      rate,
      setRate,
      error,
      error2,
      relatedCourse,
      addToCart,
      success,
      itemPurchased,
      existReview,
      instructor,
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
