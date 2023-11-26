import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './InnerBanner-cc711ce9.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-99c863e4.mjs';
import { useSSRContext, ref, computed, withCtx, createTextVNode, toDisplayString, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRoute } from '../server.mjs';
import { u as useFrontStore } from './frontStore-3016d556.mjs';
import { u as useAuthStore } from './AuthStore-db9531fe.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$3 = {
  props: ["rating"],
  setup(props) {
    const getStarClass = (index) => {
      const floorRating = Math.floor(props.rating);
      if (index <= floorRating) {
        return "fa fa-star cl-theme";
      } else if (index === floorRating + 1 && props.rating % 1 !== 0) {
        return "fa fa-star-half-empty cl-theme";
      } else {
        return "fa fa-star text-black-400";
      }
    };
    return {
      getStarClass
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ratings" }, _attrs))}><!--[-->`);
  ssrRenderList(5, (i) => {
    _push(`<span><i class="${ssrRenderClass($setup.getStarClass(i))}"></i></span>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheRating.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0 = "" + publicAssetsURL("images/all-img/client04.png");
const _sfc_main$2 = {
  props: ["name", "rating", "comment"]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheRating = __nuxt_component_0;
  _push(`<li${ssrRenderAttrs(_attrs)}><div class="thumb"><img${ssrRenderAttr("src", _imports_0)} alt="course"></div><div class="cont"><h6 class="subtitle">${ssrInterpolate($props.name)}</h6>`);
  _push(ssrRenderComponent(_component_TheRating, { rating: $props.rating }, null, _parent));
  _push(`<p>${ssrInterpolate($props.comment)}</p></div></li>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CourseReviewItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  props: ["thumb", "rating", "title", "price"],
  setup(props) {
    const title = ref(props.title);
    const stitle = title.value.trim().toLowerCase().replaceAll(/[^\w\s]/gi, "");
    const slug = stitle.replaceAll(" ", "-").replaceAll("--", "-");
    return {
      slug
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "single_rc d-flex align-items-center" }, _attrs))} data-v-409a8c83><div class="rc_img" data-v-409a8c83><img${ssrRenderAttr("src", "/images/all-img/" + $props.thumb)}${ssrRenderAttr("alt", $props.thumb)} data-v-409a8c83></div><div data-v-409a8c83><i class="fa fa-star" data-v-409a8c83></i><i class="fa fa-star" data-v-409a8c83></i><i class="fa fa-star" data-v-409a8c83></i><i class="fa fa-star" data-v-409a8c83></i><i class="fa fa-star" data-v-409a8c83></i><h4 data-v-409a8c83>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: $setup.slug }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.title)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4><span data-v-409a8c83>$${ssrInterpolate($props.price)}</span></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RelatedCourse.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-409a8c83"]]);
const _sfc_main = {
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
        hours
      };
    });
    const changeTab = (tab) => {
      cTab.value = tab;
    };
    const reviews = frontStore.courseReviews;
    const name = ref("");
    const comment = ref("");
    const rate = ref("");
    const setRate = (value) => {
      rate.value = value;
    };
    const notLogIn = ref(false);
    const error = ref(false);
    const error2 = ref(false);
    const addReview = () => {
      if (!authStore.isLoggedIn) {
        notLogIn.value = true;
        return;
      }
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
      notLogIn.value = false;
      frontStore.addCourseReview({
        name: name.value,
        username: "username",
        rating: rate.value,
        comment: comment.value
      });
    };
    const arrayC = [...frontStore.courses];
    const relatedCourse = arrayC.sort(() => Math.random() - 0.5).slice(0, 3);
    const success = ref(false);
    const addToCart = async () => {
      await frontStore.addToCart({
        uname: authStore.authUser.uname,
        thumb: course.thumb,
        title: course.title,
        price: course.price,
        uCode: course.uCode,
        quantity: 1,
        id: course.id
      });
      success.value = true;
    };
    return {
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
      notLogIn,
      error,
      error2,
      relatedCourse,
      addToCart,
      success
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionInnerBanner = __nuxt_component_0$1;
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_CourseReviewItem = __nuxt_component_2;
  const _component_RelatedCourse = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-979b3842>`);
  _push(ssrRenderComponent(_component_SectionInnerBanner, {
    title: "Course Details",
    slug: "course details"
  }, null, _parent));
  _push(`<section class="our_event section-padding" data-v-979b3842><div class="container" data-v-979b3842><div class="row" data-v-979b3842><div class="col-lg-8 col-sm-8 col-xs-12" data-v-979b3842><div class="single_event_single" data-v-979b3842><img alt="" class="img-fluid"${ssrRenderAttr("src", "/images/all-img/" + $setup.course.thumb)} data-v-979b3842><div class="single_event_text_single" data-v-979b3842><h4 data-v-979b3842>${ssrInterpolate($setup.course.title)}</h4><span data-v-979b3842><i class="fa fa-calendar" data-v-979b3842></i>${ssrInterpolate($setup.course.publishDate)}</span><span data-v-979b3842><i class="fa fa-clock-o" data-v-979b3842></i>${ssrInterpolate($setup.convertedTime.hours + "h " + $setup.convertedTime.minutes + "min")}</span><span data-v-979b3842><i class="fa fa-table" data-v-979b3842></i><strong data-v-979b3842>${ssrInterpolate($setup.course.seats)} Seats Available</strong></span><p data-v-979b3842>${ssrInterpolate($setup.course.description)}</p></div></div><div class="course-details-content section-bg" data-v-979b3842><ul class="nav nav-tabs" role="tablist" data-v-979b3842><li class="nav-item" data-v-979b3842><a href="javascript:void(0)" class="${ssrRenderClass([{ active: $setup.cTab == "overview" }, "nav-link"])}" data-v-979b3842>Overview</a></li><li class="nav-item" data-v-979b3842><a href="javascript:void(0)" class="${ssrRenderClass([{ active: $setup.cTab == "instructor" }, "nav-link"])}" data-v-979b3842>instructor</a></li><li class="nav-item" data-v-979b3842><a href="javascript:void(0)" class="${ssrRenderClass([{ active: $setup.cTab == "reviews" }, "nav-link"])}" data-v-979b3842>reviews</a></li></ul><div class="tab-content" id="myTabContent" data-v-979b3842><div class="${ssrRenderClass([{ active: $setup.cTab == "overview" }, "tab-pane show fade"])}" id="overview" data-v-979b3842><div class="overview" data-v-979b3842><p data-v-979b3842>${ssrInterpolate($setup.course.overview.description)}</p><iframe width="900" height="506"${ssrRenderAttr("src", $setup.course.overview.videoLink)} title="10 Excel Formula used daily at WORK (Excel formula for job interview)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-v-979b3842></iframe><div class="details-buttons-area" data-v-979b3842><ul class="social-icons" data-v-979b3842><li data-v-979b3842><a href="#0" class="active" data-v-979b3842><i class="fa fa-facebook" data-v-979b3842></i></a></li><li data-v-979b3842><a href="#0" data-v-979b3842><i class="fa fa-twitter" data-v-979b3842></i></a></li><li data-v-979b3842><a href="#0" data-v-979b3842><i class="fa fa-instagram" data-v-979b3842></i></a></li></ul></div></div></div><div class="${ssrRenderClass([{ active: $setup.cTab == "instructor" }, "tab-pane show fade"])}" id="instructor" data-v-979b3842><div class="overview text-center" data-v-979b3842><div class="instructor-item" data-v-979b3842><div class="instructor-thumb" data-v-979b3842><a${ssrRenderAttr("href", $setup.frontStore.courseInstructor.username)} data-v-979b3842><img${ssrRenderAttr(
    "src",
    "/images/all-img/" + $setup.frontStore.courseInstructor.thumb
  )} alt="instructor" data-v-979b3842></a></div><div class="instructor-content" data-v-979b3842><h6 class="title" data-v-979b3842>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: $setup.frontStore.courseInstructor.username
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($setup.frontStore.courseInstructor.name)}`);
      } else {
        return [
          createTextVNode(toDisplayString($setup.frontStore.courseInstructor.name), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6><span class="details" data-v-979b3842>${ssrInterpolate($setup.frontStore.courseInstructor.designation)}</span></div></div><p data-v-979b3842>${ssrInterpolate($setup.frontStore.courseInstructor.bio)}</p><div class="details-buttons-area" data-v-979b3842><ul class="social-icons justify-content-center w-100" data-v-979b3842><li data-v-979b3842><a href="#0" data-v-979b3842><i class="fa fa-facebook" data-v-979b3842></i></a></li><li data-v-979b3842><a href="#0" class="active" data-v-979b3842><i class="fa fa-twitter" data-v-979b3842></i></a></li><li data-v-979b3842><a href="#0" data-v-979b3842><i class="fa fa-instagram" data-v-979b3842></i></a></li></ul></div></div></div><div class="${ssrRenderClass([{ active: $setup.cTab == "reviews" }, "tab-pane show fade"])}" id="reviews" data-v-979b3842><div class="client-review" data-v-979b3842><div class="review-comments" data-v-979b3842><h6 class="review-title" data-v-979b3842>Reviews (03)</h6><ul class="review-contents" data-v-979b3842><!--[-->`);
  ssrRenderList($setup.reviews, (r, index) => {
    _push(ssrRenderComponent(_component_CourseReviewItem, {
      key: index,
      name: r.name,
      rating: r.rating,
      comment: r.comment
    }, null, _parent));
  });
  _push(`<!--]--></ul></div><div class="review-form" data-v-979b3842><h6 class="review-title" data-v-979b3842>Add a Review</h6><form class="row client-form align-items-center" data-v-979b3842><div class="col-6" data-v-979b3842><input type="text" placeholder="Full Name" class="w-100"${ssrRenderAttr("value", $setup.name)} data-v-979b3842></div><div class="col-6" data-v-979b3842><fieldset data-v-979b3842><span class="rating-title" data-v-979b3842>Your Rating :</span><div class="rating" data-v-979b3842><ul class="ratings text-xl flex align-baseline gap-2 h-auto" data-v-979b3842><li data-v-979b3842><input type="radio" name="rating" id="rating-1" value="1" data-v-979b3842></li><li data-v-979b3842><input type="radio" name="rating" id="rating-2" value="2" data-v-979b3842></li><li data-v-979b3842><input type="radio" name="rating" id="rating-3" value="3" data-v-979b3842></li><li data-v-979b3842><input type="radio" name="rating" id="rating-4" value="4" data-v-979b3842></li><li data-v-979b3842><input type="radio" name="rating" id="rating-5" value="5" data-v-979b3842></li></ul></div></fieldset></div><div class="col-md-12 col-12 d-inline-flex" data-v-979b3842><textarea rows="5" placeholder="Type Here Message" data-v-979b3842>${ssrInterpolate($setup.comment)}</textarea></div><div class="col-12" data-v-979b3842>`);
  if ($setup.notLogIn) {
    _push(`<small class="text-danger" data-v-979b3842>Please Login to Comment</small>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.error) {
    _push(`<small class="text-danger" data-v-979b3842>Please fill all the form</small>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.error2) {
    _push(`<small class="text-danger" data-v-979b3842>Comment should be more than 20 char</small>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="col-12" data-v-979b3842><button type="submit" class="custom-button rounded" data-v-979b3842> Submit Review </button></div></form></div></div></div></div></div></div><div class="col-lg-4 col-sm-4 col-xs-12" data-v-979b3842><div class="course_features" data-v-979b3842><h3 data-v-979b3842>Course features</h3><ul data-v-979b3842><li data-v-979b3842><i class="fa fa-calendar" data-v-979b3842></i> Course duration <b data-v-979b3842>${ssrInterpolate($setup.convertedTime.hours + "h " + $setup.convertedTime.minutes + "min")}</b></li><li data-v-979b3842><i class="fa fa-user" data-v-979b3842></i> Total Lectures <b data-v-979b3842>${ssrInterpolate($setup.course.lessons)}</b></li><li data-v-979b3842><i class="fa fa-user" data-v-979b3842></i> Total Students <b data-v-979b3842>${ssrInterpolate($setup.course.enrolled)}</b></li><li data-v-979b3842><i class="fa fa-trophy" data-v-979b3842></i> Certification <b data-v-979b3842>${ssrInterpolate($setup.course.certificate ? "Yes" : "No")}</b></li></ul></div><div class="event_info_price" data-v-979b3842><h4 data-v-979b3842>Price - ${ssrInterpolate($setup.course.price)}$</h4></div><div class="event_info_register" data-v-979b3842><button class="btn_one hover w-100" data-v-979b3842> Buy this Course </button>`);
  if ($setup.frontStore.error) {
    _push(`<small class="text-danger block text-center" data-v-979b3842>${ssrInterpolate($setup.frontStore.error)}</small>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.success && !$setup.frontStore.error) {
    _push(`<small class="text-success block text-center" data-v-979b3842>added to cart</small>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="related_course" data-v-979b3842><h3 data-v-979b3842>Related Course</h3><!--[-->`);
  ssrRenderList($setup.relatedCourse, (rc, index) => {
    _push(ssrRenderComponent(_component_RelatedCourse, {
      key: index,
      title: rc.title,
      thumb: rc.thumb,
      price: rc.price,
      rating: rc.rating
    }, null, _parent));
  });
  _push(`<!--]--></div><div class="sidebar-post d-none" data-v-979b3842><div class="sidebar_title" data-v-979b3842><h4 data-v-979b3842>CATEGORIES</h4></div><div class="single_category" data-v-979b3842><ul data-v-979b3842><li data-v-979b3842><a href="#" data-v-979b3842>Education <sup data-v-979b3842>11</sup></a></li><li data-v-979b3842><a href="#" data-v-979b3842>Ai Content <sup data-v-979b3842>44</sup></a></li><li data-v-979b3842><a href="#" data-v-979b3842>New Course <sup data-v-979b3842>33</sup></a></li><li data-v-979b3842><a href="#" data-v-979b3842>Marketing <sup data-v-979b3842>14</sup></a></li><li data-v-979b3842><a href="#" data-v-979b3842>Software <sup data-v-979b3842>21</sup></a></li><li data-v-979b3842><a href="#" data-v-979b3842>Design <sup data-v-979b3842>01</sup></a></li></ul></div></div><div class="sidebar-post d-none" data-v-979b3842><div class="sidebar_title" data-v-979b3842><h4 data-v-979b3842>Follow us</h4></div><div class="single_social" data-v-979b3842><ul data-v-979b3842><li data-v-979b3842><div class="social_item b_facebook" data-v-979b3842><a href="#" title="facebook" data-v-979b3842><i class="fa fa-facebook" data-v-979b3842></i><span class="item-list" data-v-979b3842>150K Likes</span></a></div></li><li data-v-979b3842><div class="social_item b_twitter" data-v-979b3842><a href="#" title="twitter" data-v-979b3842><i class="fa fa-twitter" data-v-979b3842></i><span class="item-list" data-v-979b3842>138K Followers</span></a></div></li><li data-v-979b3842><div class="social_item b_youtube" data-v-979b3842><a href="#" title="youtube" data-v-979b3842><i class="fa fa-youtube" data-v-979b3842></i><span class="item-list" data-v-979b3842>90K Subscribers</span></a></div></li><li data-v-979b3842><div class="social_item b_pinterest" data-v-979b3842><a href="#" title="pinterest" data-v-979b3842><i class="fa fa-pinterest" data-v-979b3842></i><span class="item-list" data-v-979b3842>350K Followers</span></a></div></li><li data-v-979b3842><div class="social_item b_tumblr" data-v-979b3842><a href="#" title="rss" data-v-979b3842><i class="fa fa-tumblr" data-v-979b3842></i><span class="item-list" data-v-979b3842>901 Followers</span></a></div></li><li data-v-979b3842><div class="social_item b_rss" data-v-979b3842><a href="#" title="rss" data-v-979b3842><i class="fa fa-rss" data-v-979b3842></i><span class="item-list" data-v-979b3842>411 Followers</span></a></div></li></ul></div></div></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/courses/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-979b3842"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-c27571f7.mjs.map
