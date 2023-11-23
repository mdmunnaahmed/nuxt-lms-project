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
              <h4>{{ comment.name }}</h4>
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
                  <div class="form-group col-md-12 pb-1">
                    <textarea
                      rows="6"
                      class="form-control mb-1"
                      placeholder="Your Message"
                      v-model.trim="message"
                    ></textarea>
                    <small :class="{ 'text-danger': commentLength > 200 }"
                      >{{ commentLength }} of 200</small
                    >
                  </div>
                  <div class="col-md-12">
                    <UISpinner v-if="loading" />
                    <small
                      class="text-danger mb-2 inline-block"
                      v-if="error && !error2"
                      >Please input all the fields</small
                    >
                    <small
                      class="text-success mb-2 inline-block"
                      v-if="success && !error2"
                      >Comment published</small
                    >
                    <small class="text-danger mb-2 inline-block" v-if="error2"
                      >Message must be less than the specified letter
                    </small>
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
                placeholder="Type your keyword"
                v-model="searchTerm"
                @input="updateSearch"
              />
              <ul v-if="searchTerm">
                <li v-for="(b, index) in filteredSearchData" :key="index">
                  <BlogSearchItem
                    :title="b.title"
                    :thumb="b.thumb"
                    :tag="b.tag"
                    :date="b.date"
                  />
                </li>
              </ul>
            </div>
          </div>
          <!-- END SINGLE POST -->
          <div class="sidebar-post">
            <div class="sidebar_title"><h4>Popular post</h4></div>
            <SinglePopular
              class="single_popular"
              v-for="(pp, index) in popularPost"
              :key="index"
              :title="pp.title"
              :thumb="pp.thumb"
            >
            </SinglePopular>
            <!-- END SINGLE POPULAR POST -->
          </div>
          <!-- END SIDEBAR POST -->
          <!-- <div class="sidebar-post">
            <div class="sidebar_title"><h4>CATEGORIES</h4></div>
            <div class="single_category">
              <ul>
                <li>
                  <a href="#">Education <sup>11</sup></a>
                </li>
              </ul>
            </div>
          </div> -->
          <!-- <div class="sidebar-post">
            <div class="tag">
              <div class="sidebar_title"><h4>Popular Tag</h4></div>
              <a href="#">Education</a>
            </div>
          </div> -->
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
import { ref, computed } from "vue";
import { useFrontStore } from "../../stores/frontStore";
export default {
  setup() {
    const frontStore = useFrontStore();
    const route = useRoute();
    const loading = frontStore.loading;
    const error = ref(false);
    const error2 = ref(false);
    const success = ref(false);
    const searchTerm = ref("");

    const slug = route.params.id;
    const post = frontStore.getIdPost(slug);
    const comments = computed(() =>
      frontStore.getIdComment.filter((c) => c.cid === slug)
    );

    const name = ref("");
    const email = ref("");
    const message = ref("");

    const commentLength = computed(() => {
      return message.value.length;
    });
    const submitForm = async () => {
      if (
        name.value === "" ||
        email.value === "" ||
        message.value === "" ||
        message.value.length > 200
      ) {
        error.value = true;
        if (message.value.length > 200) {
          error2.value = true;
        }
        return;
      }
      error.value = false;
      error2.value = false;
      await frontStore.addComment({
        cid: slug,
        name: name.value,
        email: email.value,
        message: message.value,
      });
      name.value = "";
      email.value = "";
      message.value = "";
      success.value = true;
      await new Promise((resolve) => setTimeout(resolve, 5000));
      success.value = false;
    };
    const arrayC = [...frontStore.posts];
    const popularPost = arrayC.sort(() => Math.random() - 0.5).slice(0, 5);

    // search post
    const updateSearch = (event) => {
      frontStore.setSearchTerm(event.target.value);
    };
    const filteredSearchData = computed(() => {
      return frontStore.filteredSearchData.slice(0, 4);
    });

    return {
      frontStore,
      post,
      loading,
      error,
      error2,
      success,
      slug,
      comments,
      submitForm,
      name,
      email,
      message,
      commentLength,
      popularPost,
      updateSearch,
      searchTerm: frontStore.searchTerm,
      filteredSearchData,
      searchTerm,
    };
  },
};
</script>