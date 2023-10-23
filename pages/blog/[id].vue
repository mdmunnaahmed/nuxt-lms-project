<template>
  <SectionInnerBanner :title="post.title" slug="blog details" />
  <!-- START BLOG -->
  <section class="blog-page section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-sm-12 col-xs-12">
          <div class="arti_single">
            <div class="arti_img_two">
              <img
                :src="'/images/blog/' + post.thumb"
                class="img-fluid"
                alt="Blog image"
              />
            </div>
            <div class="arti_content"></div>
            <div class="arti_sp">
              <h2>
                {{ post.title }}
              </h2>
              <p>
                {{ post.pera }}
              </p>
            </div>
            <!-- <div class="share_sp">
              <h4>Share</h4>
              <ul>
                <li>
                  <a href="#"><span class="ti-facebook"></span> Facebook</a>
                </li>
                <li>
                  <a href="#"><span class="ti-twitter"></span> Twitter</a>
                </li>
                <li>
                  <a href="#"><span class="ti-instagram"></span> Instagram</a>
                </li>
                <li>
                  <a href="#"><span class="ti-linkedin"></span> Linkedin</a>
                </li>
              </ul>
            </div> -->
          </div>
          <!-- END ARTI SINGLE  -->
          <div class="pt-4"></div>
          <div class="comments_part">
            <h3 class="blog_head_title">Comments</h3>
            <div
              class="single_comment"
              v-for="(comment, index) in comments"
              :key="index"
            >
              <!-- <img src="/images/blog/c1.jpg" alt="" /> -->
              <h4>{{ comment.cid }}</h4>
              <p>
                {{ comment.message }}
              </p>
            </div>
          </div>
          <!--- END COMMENTS PART -->

          <div class="comment_form">
            <h3 class="blog_head_title">Add a Comment</h3>
            <div class="contact comment-box">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="form-group col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                      v-model.trim="name"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      v-model.trim="email"
                    />
                  </div>
                  <div class="form-group col-md-12">
                    <textarea
                      rows="6"
                      class="form-control"
                      placeholder="Your Message"
                      v-model.trim="message"
                    ></textarea>
                  </div>
                  <div class="col-md-12">
                    <small class="text-danger" v-if="error">Please input all the fields</small>
                    <div class="actions">
                      <button class="btn btn_one">Submit Comment</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!--- END COMMENT FORM -->
        </div>
        <!-- END COL-->
        <div class="col-lg-5 col-sm-12 col-xs-12">
          <div class="sidebar-post">
            <div class="blog_search">
              <input
                type="text"
                class="form-control"
                placeholder="Type & Press Enter"
              />
            </div>
          </div>
          <!-- END SINGLE POST -->
          <div class="sidebar-post">
            <div class="newsletter-form">
              <h4>Subscribe for get updates</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ultricies quam nisi my business
              </p>
              <form action="#" class="subscribe">
                <input
                  type="text"
                  class="subscribe__input"
                  placeholder="Email Address"
                />
                <button type="button" class="sub_btn">Subscribe</button>
              </form>
            </div>
          </div>
          <!-- END SINGLE POST -->
          <div class="sidebar-post">
            <div class="sidebar_title"><h4>Popular post</h4></div>
            <div class="single_popular">
              <a href="single_blog.html"
                ><img src="assets/images/blog/blog-1.png" alt=""
              /></a>
              <h5>
                <a href="single_blog.html"
                  >Supercharging Your SEO Game with AI Writing Assistants</a
                >
              </h5>
            </div>
            <!-- END SINGLE POPULAR POST -->
          </div>
          <!-- END SIDEBAR POST -->
          <div class="sidebar-post">
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
              </ul>
            </div>
            <!-- END SOCIAL MEDIA POST -->
          </div>
          <!-- END SIDEBAR POST -->
          <div class="sidebar-post">
            <div class="sidebar_title"><h4>CATEGORIES</h4></div>
            <div class="single_category">
              <ul>
                <li>
                  <a href="#">Education <sup>11</sup></a>
                </li>
              </ul>
            </div>
            <!-- END SOCIAL MEDIA POST -->
          </div>
          <!-- END SIDEBAR POST -->
          <div class="sidebar-post">
            <div class="tag">
              <div class="sidebar_title"><h4>Popular Tag</h4></div>
              <a href="#">Education</a>
            </div>
          </div>
          <div class="sidebar-post">
            <div class="sidebar_title"><h4>Ad Banner</h4></div>
            <div class="sidebar-banner">
              <a href="#"
                ><img
                  src="assets/images/blog/banner.jpg"
                  class="img-fluid"
                  alt=""
              /></a>
            </div>
            <!-- END SOCIAL MEDIA POST -->
          </div>
          <!-- END SIDEBAR POST -->
        </div>
        <!--- END COL -->
      </div>
      <!-- END ROW-->
    </div>
    <!-- END CONTAINER-->
  </section>
  <!-- END BLOG -->
</template>

<script>
import { ref } from "vue";
import { useFrontStore } from "../../stores/frontStore";
export default {
  setup() {
    const frontStore = useFrontStore();
    const route = useRoute();
    const loading = frontStore.loading;
    const error = ref(false);

    const slug = route.params.id;
    const post = frontStore.getIdPost(slug);
    const comments = frontStore.getIdComment.filter((c) => c.cid === slug);

    const name = ref("");
    const email = ref("");
    const message = ref("");
    const submitForm = () => {
      if (name.value === "" || email.value === "" || message.value === "") {
        error.value = true;
      }
      error.value = false;
      console.log(name.value);
      frontStore.addComment({
        cid: slug,
        name: name.value,
        email: email.value,
        message: message.value,
      });
    };

    return {
      frontStore,
      loading,
      post,
      slug,
      comments,
      submitForm,
    };
  },
};
</script>