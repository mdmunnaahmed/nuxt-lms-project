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
                        <a href="#0"
                          ><img
                            src="/images/all-img/ins-details.png"
                            alt="instructor"
                        /></a>
                      </div>
                      <div class="instructor-content">
                        <h6 class="title">
                          <a href="#0">{{ courseInstructor.name }}</a>
                        </h6>
                        <span class="details">{{ courseInstructor.designation }}</span>
                      </div>
                    </div>
                    <p>{{ courseInstructor.bio }}</p>
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
                      <h6 class="review-title">Reviews (03)</h6>
                      <ul class="review-contents">
                        <li>
                          <div class="thumb">
                            <img
                              src="/images/all-img/client04.png"
                              alt="course"
                            />
                          </div>
                          <div class="cont">
                            <h6 class="subtitle">Robot Smith</h6>
                            <div class="ratings cl-theme">
                              <span><i class="fa fa-star"></i></span>
                              <span><i class="fa fa-star"></i></span>
                              <span><i class="fa fa-star"></i></span>
                              <span><i class="fa fa-star"></i></span>
                              <span><i class="fa fa-star"></i></span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Enim unde et culpa voluptatibus repellat
                              voluptates aliquid minima
                            </p>
                          </div>
                        </li>
                        <li>
                          <div class="thumb">
                            <img
                              src="/images/all-img/client02.png"
                              alt="course"
                            />
                          </div>
                          <div class="cont">
                            <h6 class="subtitle">Nicolas Anelca</h6>
                            <div class="ratings cl-theme">
                              <span><i class="fa fa-star"></i></span>
                              <span><i class="fa fa-star"></i></span>
                              <span><i class="fa fa-star"></i></span>
                              <span><i class="fa fa-star"></i></span>
                              <span class="cl-theme-light"
                                ><i class="fa fa-star"></i
                              ></span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Enim unde et culpa voluptatibus repellat
                              voluptates aliquid minima
                            </p>
                          </div>
                        </li>
                        <li>
                          <div class="thumb">
                            <img
                              src="/images/all-img/client03.png"
                              alt="course"
                            />
                          </div>
                          <div class="cont">
                            <h6 class="subtitle">Harry Johnshon</h6>
                            <div class="ratings cl-theme">
                              <span><i class="fa fa-star"></i></span>
                              <span><i class="fa fa-star"></i></span>
                              <span><i class="fa fa-star"></i></span>
                              <span><i class="fa fa-star"></i></span>
                              <span><i class="fa fa-star"></i></span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Enim unde et culpa voluptatibus repellat
                              voluptates aliquid minima
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="review-form">
                      <h6 class="review-title">Add a Review</h6>
                      <form class="row client-form align-items-center">
                        <div class="col-md-4 col-12">
                          <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                          />
                        </div>
                        <div class="col-md-4 col-12">
                          <input
                            type="text"
                            name="email"
                            placeholder="Email Adress"
                          />
                        </div>
                        <div class="col-md-4 col-12">
                          <div class="rating">
                            <span class="rating-title">Your Rating : </span>
                            <ul class="ratings">
                              <li>
                                <a href="#0" title="Give Me One Star"
                                  ><i class="fa fa-star"></i
                                ></a>
                              </li>
                              <li>
                                <a href="#0" title="Give Me Two Star"
                                  ><i class="fa fa-star"></i
                                ></a>
                              </li>
                              <li>
                                <a href="#0" title="Give Me Three Star"
                                  ><i class="fa fa-star"></i
                                ></a>
                              </li>
                              <li>
                                <a href="#0" title="Give Me Four Star"
                                  ><i class="fa fa-star"></i
                                ></a>
                              </li>
                              <li>
                                <a href="#0" title="Give Me Five Star"
                                  ><i class="fa fa-star"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-md-12 col-12 d-inline-flex">
                          <textarea
                            rows="5"
                            placeholder="Type Here Message"
                          ></textarea>
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
              <a class="btn_one hover" href="#">Buy this Course</a>
            </div>
            <div class="related_course">
              <h3>Related Course</h3>
              <div class="single_rc">
                <div class="rc_img">
                  <img src="/images/all-img/rc-1.png" alt="" />
                </div>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <h4><a href="#">UI/UX Design and...</a></h4>
                <span>$42.00</span>
              </div>
              <!--- END SINGLE RELATED COURSE -->
              <div class="single_rc">
                <div class="rc_img">
                  <img src="/images/all-img/rc-2.png" alt="" />
                </div>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <h4><a href="#">Greatest Passion In...</a></h4>
                <span>$37.00</span>
              </div>
              <!--- END SINGLE RELATED COURSE -->
              <div class="single_rc">
                <div class="rc_img">
                  <img src="/images/all-img/rc-3.png" alt="" />
                </div>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <h4><a href="#">incorporate your art ...</a></h4>
                <span>$21.00</span>
              </div>
              <!--- END SINGLE RELATED COURSE -->
            </div>
            <!--- END RELATED COURSE -->
            <div class="sidebar-post d-none">
              <div class="sidebar_title"><h4>CATEGORIES</h4></div>
              <div class="single_category">
                <ul>
                  <li>
                    <a href="#">Education <sup>11</sup></a>
                  </li>
                  <li>
                    <a href="#">Ai Content <sup>44</sup></a>
                  </li>
                  <li>
                    <a href="#">New Course <sup>33</sup></a>
                  </li>
                  <li>
                    <a href="#">Marketing <sup>14</sup></a>
                  </li>
                  <li>
                    <a href="#">Software <sup>21</sup></a>
                  </li>
                  <li>
                    <a href="#">Design <sup>01</sup></a>
                  </li>
                </ul>
              </div>
              <!-- END SOCIAL MEDIA POST -->
            </div>
            <!-- END SIDEBAR POST -->
            <div class="sidebar-post d-none">
              <div class="sidebar_title"><h4>Follow us</h4></div>
              <div class="single_social">
                <ul>
                  <li>
                    <div class="social_item b_facebook">
                      <a href="#" title="facebook"
                        ><i class="fa fa-facebook"></i
                        ><span class="item-list">150K Likes</span></a
                      >
                    </div>
                  </li>

                  <li>
                    <div class="social_item b_twitter">
                      <a href="#" title="twitter"
                        ><i class="fa fa-twitter"></i
                        ><span class="item-list">138K Followers</span></a
                      >
                    </div>
                  </li>

                  <li>
                    <div class="social_item b_youtube">
                      <a href="#" title="youtube"
                        ><i class="fa fa-youtube"></i
                        ><span class="item-list">90K Subscribers</span></a
                      >
                    </div>
                  </li>

                  <li>
                    <div class="social_item b_pinterest">
                      <a href="#" title="pinterest"
                        ><i class="fa fa-pinterest"></i
                        ><span class="item-list">350K Followers</span></a
                      >
                    </div>
                  </li>

                  <li>
                    <div class="social_item b_tumblr">
                      <a href="#" title="rss"
                        ><i class="fa fa-tumblr"></i
                        ><span class="item-list">901 Followers</span></a
                      >
                    </div>
                  </li>

                  <li>
                    <div class="social_item b_rss">
                      <a href="#" title="rss"
                        ><i class="fa fa-rss"></i
                        ><span class="item-list">411 Followers</span></a
                      >
                    </div>
                  </li>
                </ul>
              </div>
              <!-- END SOCIAL MEDIA POST -->
            </div>
            <!-- END SIDEBAR POST -->
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
import { ref, computed } from "vue";
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

    const getInstructor = async () => {
      await authStore.getIdInstructor(course.instructorId);
    };
    getInstructor();

    const courseInstructor = authStore.courseInstructor;

    return {
      course,
      convertedTime,
      changeTab,
      cTab,
      courseInstructor,
      getInstructor,
    };
  },
};
</script>

<style lang="scss" scoped></style>
