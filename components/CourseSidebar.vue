<template>
  <div>
    <div class="sidebar-post">
      <div class="blog_search">
        <input
          type="text"
          class="form-control"
          placeholder="Type &amp; Press Enter"
        />
      </div>
    </div>
    <!-- END SINGLE POST -->
    <div class="rs-slider">
      <h4>Price Filter</h4>
      <div class="range-slider">
        <input type="range" value="500" min="0" max="500" range="true" />
        <span class="range-value">143</span>
      </div>
    </div>
    <!-- END SINGLE POST -->
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
      <div class="sidebar_title"><h4>Language</h4></div>
      <label class="single_langu d-flex align-items-center gap-2 mb-2">
        <input type="checkbox" />
        <span>Spanish Language</span>
      </label>
      <!-- END SINGLE LANGU -->
      <label class="single_langu d-flex align-items-center gap-2 mb-2">
        <input type="checkbox" />
        <span>United Kingdom (UK)</span>
      </label>
      <!-- END SINGLE LANGU -->
      <label class="single_langu d-flex align-items-center gap-2 mb-2">
        <input type="checkbox" />
        <span>United States (US)</span>
      </label>
      <!-- END SINGLE LANGU -->
      <label class="single_langu d-flex align-items-center gap-2 mb-2">
        <input type="checkbox" />
        <span> Arabic Language</span>
      </label>
      <!-- END SINGLE LANGU -->
    </div>
    <!-- END SIDEBAR POST -->
    <div class="sidebar-post">
      <div class="sidebar_title"><h4>Skill Level</h4></div>
      <label class="single_langu d-flex gap-2 mb-2">
        <input type="checkbox" />
        <span>All Levels (82)</span>
      </label>
      <!-- END SINGLE LANGU -->
      <label class="single_langu d-flex gap-2 mb-2">
        <input type="checkbox" />
        <span>Beginner Levels (42)</span>
      </label>
      <!-- END SINGLE LANGU -->
      <label class="single_langu d-flex gap-2 mb-2">
        <input type="checkbox" />
        <span> Intermediate Level (62)</span>
      </label>
      <!-- END SINGLE LANGU -->
      <label class="single_langu d-flex gap-2 mb-2">
        <input type="checkbox" />
        <span> Expert Level (32)</span>
      </label>
      <!-- END SINGLE LANGU -->
    </div>
    <!-- END SIDEBAR POST -->
    <div class="sidebar-post">
      <div class="sidebar_title"><h4>Rating by</h4></div>
      <label class="single_rat d-flex align-items-center gap-2 mb-3">
        <input type="checkbox" />
        <img src="/images/icon/rating-1.svg" alt="" />
      </label>
      <!-- END SINGLE LANGU -->
      <label class="single_rat d-flex align-items-center gap-2 mb-3">
        <input type="checkbox" />
        <img src="/images/icon/rating-2.svg" alt="" />
      </label>
      <!-- END SINGLE LANGU -->
      <label class="single_rat d-flex align-items-center gap-2 mb-3">
        <input type="checkbox" />
        <img src="/images/icon/rating-3.svg" alt="" />
      </label>
      <!-- END SINGLE LANGU -->
      <label class="single_rat d-flex align-items-center gap-2 mb-3">
        <input type="checkbox" />
        <img src="/images/icon/rating-4.svg" alt="" />
      </label>
      <!-- END SINGLE LANGU -->
      <label class="single_rat d-flex align-items-center gap-2 mb-3">
        <input type="checkbox" />
        <img src="/images/icon/rating-5.svg" alt="" />
      </label>
      <!-- END SINGLE LANGU -->
    </div>
    <!-- END SIDEBAR POST -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>