import { _ as __nuxt_component_0 } from "./InnerBanner-cc711ce9.js";
import { _ as __nuxt_component_0$1 } from "./CourseItem-1efc50d6.js";
import { ref, computed, useSSRContext } from "vue";
import { u as useFrontStore } from "./frontStore-3016d556.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-99c863e4.js";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "@vue/devtools-api";
const _imports_0 = "" + __publicAssetsURL("images/icon/rating-1.svg");
const _imports_1 = "" + __publicAssetsURL("images/icon/rating-2.svg");
const _imports_2 = "" + __publicAssetsURL("images/icon/rating-3.svg");
const _imports_3 = "" + __publicAssetsURL("images/icon/rating-4.svg");
const _imports_4 = "" + __publicAssetsURL("images/icon/rating-5.svg");
const CourseSidebar_vue_vue_type_style_index_0_scoped_8c4cd1ef_lang = "";
const _sfc_main$1 = {
  setup() {
    const frontStore = useFrontStore();
    const searchCourse = ref("");
    const updateSearch = (event) => {
      if (event.target.value.trim().length >= 3) {
        frontStore.searchCourses(event.target.value.trim());
      } else {
        frontStore.searchCourses("");
      }
    };
    const priceRange = ref(0);
    const searchByPrice = (event) => {
      frontStore.searchCoursesByPrice(event.target.value.trim());
    };
    const selectLang = (lang) => {
      const regex = /[\s\W]/g;
      frontStore.searchCoursesByLang(lang.replace(regex, "").toLowerCase());
    };
    const selectSkill = (skill) => {
      frontStore.searchCoursesBySkill(skill.toLowerCase());
    };
    const skillCount = computed(() => {
      return parseInt(frontStore.allSkills.beginner) + parseInt(frontStore.allSkills.intermediate) + parseInt(frontStore.allSkills.expert);
    });
    const cateCount = computed(() => {
      const value = Object.values(frontStore.allCategories);
      let total = 0;
      for (let i = 0; i < value.length; i++) {
        total += value[i];
      }
      return total;
    });
    const categories = computed(() => {
      return Object.entries(frontStore.allCategories);
    });
    const selectedCate = ref("");
    const selectCate = (cate) => {
      selectedCate.value = cate.toLowerCase().trim();
      frontStore.searchCoursesByCate(cate.toLowerCase().trim());
    };
    const selectRating = (rate) => {
      frontStore.searchCoursesByRate(rate);
    };
    return {
      frontStore,
      updateSearch,
      searchCourse,
      searchCourse: frontStore.searchCourse,
      priceRange,
      searchByPrice,
      selectLang,
      skillCount,
      selectSkill,
      categories,
      selectCate,
      selectedCate,
      cateCount,
      selectRating
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-8c4cd1ef><div class="sidebar-post" data-v-8c4cd1ef><div class="blog_search" data-v-8c4cd1ef><input type="text" class="form-control" placeholder="Type to search course" data-v-8c4cd1ef></div></div><div class="rs-slider" data-v-8c4cd1ef><h4 data-v-8c4cd1ef>Price Filter</h4><div class="range-slider" data-v-8c4cd1ef><input type="range" step="10" min="0" max="300" range="true"${ssrRenderAttr("value", $setup.priceRange)} data-v-8c4cd1ef><span class="range-value" data-v-8c4cd1ef>${ssrInterpolate($setup.priceRange)}</span></div></div><div class="sidebar-post" data-v-8c4cd1ef><div class="sidebar_title" data-v-8c4cd1ef><h4 data-v-8c4cd1ef>CATEGORIES</h4></div><div class="single_category" data-v-8c4cd1ef><ul data-v-8c4cd1ef><li data-v-8c4cd1ef><button class="${ssrRenderClass([{ active: $setup.selectedCate == "" }, "cate-item text-capitalize"])}" data-v-8c4cd1ef> All Categories <sup data-v-8c4cd1ef>${ssrInterpolate($setup.cateCount)}</sup></button></li><!--[-->`);
  ssrRenderList($setup.categories, ([cate, count]) => {
    _push(`<li data-v-8c4cd1ef><button class="${ssrRenderClass([{ active: $setup.selectedCate == cate.trim().toLowerCase() }, "cate-item text-capitalize"])}" data-v-8c4cd1ef>${ssrInterpolate(cate)} <sup data-v-8c4cd1ef>${ssrInterpolate(count)}</sup></button></li>`);
  });
  _push(`<!--]--></ul></div></div><div class="sidebar-post" data-v-8c4cd1ef><div class="sidebar_title" data-v-8c4cd1ef><h4 data-v-8c4cd1ef>Language</h4></div><label class="single_langu d-flex align-items-center gap-2 mb-2" data-v-8c4cd1ef><input type="radio" name="lang" checked data-v-8c4cd1ef><span data-v-8c4cd1ef>All Languages</span></label><!--[-->`);
  ssrRenderList($setup.frontStore.allLanguages, (l, index) => {
    _push(`<label class="single_langu d-flex align-items-center gap-2 mb-2" data-v-8c4cd1ef><input type="radio" name="lang" data-v-8c4cd1ef><span data-v-8c4cd1ef>${ssrInterpolate(l)}</span></label>`);
  });
  _push(`<!--]--></div><div class="sidebar-post" data-v-8c4cd1ef><div class="sidebar_title" data-v-8c4cd1ef><h4 data-v-8c4cd1ef>Skill Level</h4></div><label class="single_langu d-flex gap-2 mb-2" data-v-8c4cd1ef><input type="radio" name="skill" checked data-v-8c4cd1ef><span data-v-8c4cd1ef>All Levels (${ssrInterpolate($setup.skillCount)})</span></label><label class="single_langu d-flex gap-2 mb-2" data-v-8c4cd1ef><input type="radio" name="skill" data-v-8c4cd1ef><span data-v-8c4cd1ef>Beginner Levels (${ssrInterpolate($setup.frontStore.allSkills.beginner)})</span></label><label class="single_langu d-flex gap-2 mb-2" data-v-8c4cd1ef><input type="radio" name="skill" data-v-8c4cd1ef><span data-v-8c4cd1ef> Intermediate Level (${ssrInterpolate($setup.frontStore.allSkills.intermediate)})</span></label><label class="single_langu d-flex gap-2 mb-2" data-v-8c4cd1ef><input type="radio" name="skill" data-v-8c4cd1ef><span data-v-8c4cd1ef> Expert Level (${ssrInterpolate($setup.frontStore.allSkills.expert)})</span></label></div><div class="sidebar-post" data-v-8c4cd1ef><div class="sidebar_title" data-v-8c4cd1ef><h4 data-v-8c4cd1ef>Rating by</h4> <button data-v-8c4cd1ef>Clear Rating</button></div><label class="single_rat d-flex align-items-center gap-2 mb-3" data-v-8c4cd1ef><input type="radio" name="rating" data-v-8c4cd1ef><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-8c4cd1ef></label><label class="single_rat d-flex align-items-center gap-2 mb-3" data-v-8c4cd1ef><input type="radio" name="rating" data-v-8c4cd1ef><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-8c4cd1ef></label><label class="single_rat d-flex align-items-center gap-2 mb-3" data-v-8c4cd1ef><input type="radio" name="rating" data-v-8c4cd1ef><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-8c4cd1ef></label><label class="single_rat d-flex align-items-center gap-2 mb-3" data-v-8c4cd1ef><input type="radio" name="rating" data-v-8c4cd1ef><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-8c4cd1ef></label><label class="single_rat d-flex align-items-center gap-2 mb-3" data-v-8c4cd1ef><input type="radio" name="rating" data-v-8c4cd1ef><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-8c4cd1ef></label></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CourseSidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-8c4cd1ef"]]);
const _sfc_main = {
  props: ["sectionTitle", "sectionSubtitle"],
  setup() {
    const frontStore = useFrontStore();
    const searchCourses = computed(() => {
      return frontStore.filteredSearchCourses;
    });
    return {
      frontStore,
      searchCourses
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionInnerBanner = __nuxt_component_0;
  const _component_CourseItem = __nuxt_component_0$1;
  const _component_CourseSidebar = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_SectionInnerBanner, {
    title: "Course Sidebar",
    slug: "courses"
  }, null, _parent));
  _push(`<div class="best-cpurse section-padding"><div class="container"><div class="row"><div class="col-lg-8">`);
  if ($setup.searchCourses.length) {
    _push(`<div class="row"><!--[-->`);
    ssrRenderList($setup.searchCourses, (c, index) => {
      _push(`<div class="col-lg-6 col-md-6 col-xs-12 wow fadeInUp">`);
      _push(ssrRenderComponent(_component_CourseItem, {
        thumb: c.thumb,
        price: c.price,
        tag: c.tag,
        title: c.title,
        lesson: c.lesson,
        durtion: c.duration,
        rating: c.rating,
        seats: c.seats
      }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<p class="text-center">No courses found!</p>`);
  }
  _push(`</div><div class="col-lg-4">`);
  _push(ssrRenderComponent(_component_CourseSidebar, null, null, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/courses-sidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const coursesSidebar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  coursesSidebar as default
};
//# sourceMappingURL=courses-sidebar-8323aef5.js.map
