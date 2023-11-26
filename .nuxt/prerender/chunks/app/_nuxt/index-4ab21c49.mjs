import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0$6 } from './nuxt-link-99c863e4.mjs';
import { u as useAuthStore } from './AuthStore-db9531fe.mjs';
import { u as useFrontStore } from './frontStore-3016d556.mjs';
import { useSSRContext, ref, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, createTextVNode } from 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2, c as __nuxt_component_4, b as __nuxt_component_5 } from './Partner-4d5a196f.mjs';
import { _ as __nuxt_component_3 } from './Counter-b662297b.mjs';
import { _ as __nuxt_component_0$7 } from './CourseItem-1efc50d6.mjs';
import { _ as __nuxt_component_1$1 } from './Team-d446ab01.mjs';
import { _ as __nuxt_component_0$8 } from './BlogItem-19391064.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/h3/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/devalue/index.js';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/ufo/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/ofetch/dist/node.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/destr/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/hookable/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/scule/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/klona/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/defu/dist/defu.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/ohash/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unstorage/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unstorage/drivers/fs.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unstorage/drivers/memory.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/pathe/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unhead/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unctx/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue-router/dist/vue-router.node.mjs';
import './useSlug-71b1c58b.mjs';

const _imports_0$1 = "" + publicAssetsURL("images/icon/user2.svg");
const _imports_1 = "" + publicAssetsURL("images/icon/file2.svg");
const _sfc_main$d = {
  setup() {
    const authStore = useAuthStore();
    const frontStore = useFrontStore();
    return {
      authStore,
      frontStore
    };
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$6;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "home",
    class: "home_bg",
    style: { "background-image": "url(images/banner/home.png)", "background-size": "cover", "background-position": "center center" }
  }, _attrs))}><!--[-->`);
  ssrRenderList($setup.frontStore.banner, (b, index2) => {
    _push(`<div class="container"><div class="row"><div class="col-lg-6 col-sm-6 col-xs-12"><div class="home_content"><h1>${ssrInterpolate(b.title)}</h1><p>${ssrInterpolate(b.pera)}</p></div><div class="home_btn">`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: b.btnLink,
      class: "cta inline-flex gap-2 items-center"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span${_scopeId}>${ssrInterpolate(b.btnText)}</span><svg width="13px" height="10px" viewBox="0 0 13 10"${_scopeId}><path d="M1,5 L11,5"${_scopeId}></path><polyline points="8 1 12 5 8 9"${_scopeId}></polyline></svg>`);
        } else {
          return [
            createVNode("span", null, toDisplayString(b.btnText), 1),
            (openBlock(), createBlock("svg", {
              width: "13px",
              height: "10px",
              viewBox: "0 0 13 10"
            }, [
              createVNode("path", { d: "M1,5 L11,5" }),
              createVNode("polyline", { points: "8 1 12 5 8 9" })
            ]))
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div><div class="col-lg-6 col-sm-6 col-xs-12"><div class="home_me_img"><img${ssrRenderAttr("src", b.thumb)} class="img-fluid" alt=""><div class="home_ps"><img${ssrRenderAttr("src", _imports_0$1)} alt=""><h2>${ssrInterpolate($setup.authStore.studentAccounts.length)} +</h2><span>Active students</span></div><div class="home_ps2"><img${ssrRenderAttr("src", _imports_1)} alt=""><h2>4500+</h2><span>Online Courses</span></div></div></div></div></div>`);
  });
  _push(`<!--]--></section>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Banner.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$c = {
  props: ["sectionTitle", "sectionSubtitle"],
  setup() {
    const frontStore = useFrontStore();
    return {
      frontStore
    };
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CourseItem = __nuxt_component_0$7;
  const _component_NuxtLink = __nuxt_component_0$6;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "best-cpurse section-padding" }, _attrs))}><div class="container">`);
  if ($props.sectionTitle || $props.sectionSubtitle) {
    _push(`<div class="section-title">`);
    if ($props.sectionTitle) {
      _push(`<h2>${ssrInterpolate($props.sectionTitle)}</h2>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<p>${ssrInterpolate($props.sectionSubtitle)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="row"><!--[-->`);
  ssrRenderList($setup.frontStore.courses, (c, index2) => {
    _push(`<div class="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp">`);
    _push(ssrRenderComponent(_component_CourseItem, {
      thumb: c.thumb,
      price: c.price,
      tag: c.tag,
      title: c.title,
      lesson: c.lesson,
      duration: c.duration,
      rating: c.rating,
      seats: c.seats
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--><div class="col-lg-12 text-center"><div class="cc_btn">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "btn_one",
    to: "/courses"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`View All Course`);
      } else {
        return [
          createTextVNode("View All Course")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Course.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$b = {
  setup() {
    const frontStore = useFrontStore();
    return {
      frontStore
    };
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$6;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "course_promo section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"><div class="cp_content"><h4>${ssrInterpolate($setup.frontStore.promotion.subtitle)}</h4><h2>${ssrInterpolate($setup.frontStore.promotion.title)}</h2><p>${ssrInterpolate($setup.frontStore.promotion.pera)}</p><ul><!--[-->`);
  ssrRenderList($setup.frontStore.promotion.promo, (p, index2) => {
    _push(`<li><span class="ti-check"></span> ${ssrInterpolate(p)}</li>`);
  });
  _push(`<!--]--></ul></div><div class="cp_btn">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/courses",
    class: "cta d-inline-flex align-items-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Explore Our Courses</span><svg width="13px" height="10px" viewBox="0 0 13 10"${_scopeId}><path d="M1,5 L11,5"${_scopeId}></path><polyline points="8 1 12 5 8 9"${_scopeId}></polyline></svg>`);
      } else {
        return [
          createVNode("span", null, "Explore Our Courses"),
          (openBlock(), createBlock("svg", {
            width: "13px",
            height: "10px",
            viewBox: "0 0 13 10"
          }, [
            createVNode("path", { d: "M1,5 L11,5" }),
            createVNode("polyline", { points: "8 1 12 5 8 9" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0"><div class="cp_img"><img${ssrRenderAttr("src", $setup.frontStore.promotion.thumb)} class="img-fluid" alt="image"></div></div></div></div></section>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/CoursePromotion.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$a = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}><svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fff" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"></path><path fill="#fff" d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></svg></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/SpinnerWhite.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$9 = {
  setup() {
    const frontStore = useFrontStore();
    const email = ref("");
    const success = ref(null);
    const formSubmit = async () => {
      if (email.value.includes("@") && email.value !== "") {
        await frontStore.addSubscription({
          email: email.value
        });
        success.value = email.value;
        console.log(email.value);
        email.value = "";
        setTimeout(() => {
          success.value = null;
        }, 5e3);
      }
    };
    return {
      frontStore,
      email,
      formSubmit,
      success
    };
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UISpinnerWhite = __nuxt_component_0$4;
  _push(`<form${ssrRenderAttrs(mergeProps({ class: "home_subs" }, _attrs))}><input type="email" class="subscribe__input text-lowercase" placeholder="Enter your Email Address"${ssrRenderAttr("value", $setup.email)}><button class="subscribe__btn">`);
  if ($setup.frontStore.loading) {
    _push(ssrRenderComponent(_component_UISpinnerWhite, null, null, _parent));
  } else {
    _push(`<i class="fa fa-paper-plane-o"></i>`);
  }
  _push(`</button>`);
  if ($setup.success) {
    _push(`<small class="text-green-600 position-absolute left-50" style="${ssrRenderStyle({ "transform": "translateX(-50%)" })}"><span class="text-green-700 font-bold">${ssrInterpolate($setup.success)}</span> is now subscribed.</small>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</form>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NewslatterForm.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  const _component_NewslatterForm = __nuxt_component_0$3;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "newsletter_area section-padding" }, _attrs))}><div class="container"><div class="row text-center"><div class="col-lg-6 offset-lg-3 col-sm-12 col-xs-12"><div class="subs_form"><h3>Subscripbe to our newsletter, We don&#39;t make any spam.</h3>`);
  _push(ssrRenderComponent(_component_NewslatterForm, null, null, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Newslatter.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = {
  props: ["icon", "title", "courseCount"]
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$6;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "single_tca" }, _attrs))}><img${ssrRenderAttr("src", $props.icon)} alt=""><h2>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
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
  _push(`</h2><span>${ssrInterpolate($props.courseCount)} Courses</span></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TopicItem.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {
  setup() {
    const frontStore = useFrontStore();
    return {
      frontStore
    };
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TopicItem = __nuxt_component_0$2;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "topic_content_area section-padding" }, _attrs))}><div class="container"><div class="section-title"><h2>Start Learning</h2><p> Popular <span><u>Topics To Learn</u></span> From Today. </p></div><div class="row"><!--[-->`);
  ssrRenderList($setup.frontStore.topics, (t, index2) => {
    _push(`<div class="col-lg-4 col-sm-6 col-xs-12">`);
    _push(ssrRenderComponent(_component_TopicItem, {
      icon: t.icon,
      title: t.title,
      courseCount: t.courseCount
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Topic.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  props: ["thumb", "title", "time", "location", "pera", "date", "time"],
  setup(props) {
    const date = ref(props.date);
    const time = ref(props.time);
    const timeF = time.value.join(" - ");
    const parts = date.value.split("/");
    const day = parseInt(parts[1], 10);
    const month = parseInt(parts[0], 10);
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
      "Dec"
    ];
    const monthName = monthNames[month - 1];
    return {
      day,
      monthName,
      timeF
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "event-slide mb-0" }, _attrs))}><div class="event-img"><img${ssrRenderAttr("src", $props.thumb)} alt=""><div class="event-date"><span class="date">${ssrInterpolate($setup.day)}</span><span class="month">${ssrInterpolate($setup.monthName)}</span></div></div><div class="event-content"><h3><a href="event.html">${ssrInterpolate($props.title)}</a></h3><span><i class="fa fa-clock-o"></i><!--[-->`);
  ssrRenderList($setup.timeF, (t, index2) => {
    _push(`<span>${ssrInterpolate(t)}</span>`);
  });
  _push(`<!--]--></span><span><i class="fa fa-table"></i><strong>${ssrInterpolate($props.location)}</strong></span><p>${ssrInterpolate($props.pera)}</p></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EventItemOne.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  setup() {
    const frontStore = useFrontStore();
    return {
      frontStore
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_EventItemOne = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "our-event section-padding" }, _attrs))}><div class="container"><div class="section-title"><h2>Upcoming Events</h2><p> Join With Us <span><u>Our Events</u></span></p></div><div class="row"><!--[-->`);
  ssrRenderList($setup.frontStore.events, (e, index2) => {
    _push(`<div class="col-lg-4 col-sm-6 col-xs-12">`);
    _push(ssrRenderComponent(_component_EventItemOne, {
      thumb: e.thumb,
      title: e.title,
      pera: e.pera,
      date: e.date,
      time: e.time,
      location: e.location
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--><div class="col-lg-4 col-sm-6 col-xs-12 d-none"><div class="event-slide es"><div class="ed_mb"><span class="date">26</span><span class="month">Oct</span></div><div class="event-content ec_pd"><h3><a href="event.html">Chiter astana event</a></h3><span><i class="fa fa-clock-o"></i>10.00AM - 12.00PM</span><span><i class="fa fa-table"></i><strong>At Penn School</strong></span><p> Lorem ipsum dolor sit amet magna consectetur adipisicing elit. </p></div></div><div class="event-slide es"><div class="ed_mb"><span class="date">29</span><span class="month">Oct</span></div><div class="event-content ec_pd"><h3><a href="event.html">Dasel Bhai Program</a></h3><span><i class="fa fa-clock-o"></i>10.00AM - 12.00PM</span><span><i class="fa fa-table"></i><strong>At Penn School</strong></span><p> Lorem ipsum dolor sit amet magna consectetur adipisicing elit. </p></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Event.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0 = "" + publicAssetsURL("images/all-img/t1.png");
const _sfc_main$3 = {
  props: ["pera", "rating"],
  setup() {
    const frontStore = useFrontStore();
    return {
      frontStore
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "testimonial" }, _attrs))}><div class="testimonial_content"><i class="fa fa-star" style="${ssrRenderStyle({ color: parseInt($props.rating) >= 1 ? "#ffbd35" : "" })}"></i><i class="fa fa-star" style="${ssrRenderStyle({ color: parseInt($props.rating) >= 2 ? "#ffbd35" : "" })}"></i><i class="fa fa-star" style="${ssrRenderStyle({ color: parseInt($props.rating) >= 3 ? "#ffbd35" : "" })}"></i><i class="fa fa-star" style="${ssrRenderStyle({ color: parseInt($props.rating) >= 4 ? "#ffbd35" : "" })}"></i><i class="fa fa-star" style="${ssrRenderStyle({ color: parseInt($props.rating) >= 5 ? "#ffbd35" : "" })}"></i><p>${ssrInterpolate($props.pera)}</p></div><div class="testi_pic_title tpt_one"><div class="pic"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><h4>James Clayton</h4><small class="post">- Design Expert</small></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TestimonialItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  setup() {
    const frontStore = useFrontStore();
    return {
      frontStore
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TestimonialItem = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "testi_home_area section-padding" }, _attrs))}><div class="container"><div class="section-title"><h2>Testimonial</h2><p> What Says <span><u>Our Students</u></span></p></div><div class="row"><!--[-->`);
  ssrRenderList($setup.frontStore.testimonials, (t, index2) => {
    _push(`<div class="col-lg-4 col-md-6">`);
    _push(ssrRenderComponent(_component_TestimonialItem, {
      pera: t.pera,
      rating: t.rating
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Testimonial.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  setup() {
    const frontStore = useFrontStore();
    return {
      frontStore
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BlogItem = __nuxt_component_0$8;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "blog",
    class: "blog_area section-padding"
  }, _attrs))}><div class="container"><div class="section-title"><h2>News</h2><p> Our Latest <span><u>Blogs</u></span></p></div><div class="row"><!--[-->`);
  ssrRenderList($setup.frontStore.posts, (b, index2) => {
    _push(`<div class="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp">`);
    _push(ssrRenderComponent(_component_BlogItem, {
      title: b.title,
      thumb: b.thumb,
      tag: b.tag,
      date: b.date
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Blog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_13 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionBanner = __nuxt_component_0$5;
  const _component_SectionOverview = __nuxt_component_1;
  const _component_SectionAbout = __nuxt_component_2;
  const _component_SectionCounter = __nuxt_component_3;
  const _component_SectionPartner = __nuxt_component_4;
  const _component_SectionWhyChoose = __nuxt_component_5;
  const _component_SectionCourse = __nuxt_component_6;
  const _component_SectionCoursePromotion = __nuxt_component_7;
  const _component_SectionNewslatter = __nuxt_component_8;
  const _component_SectionTopic = __nuxt_component_9;
  const _component_SectionEvent = __nuxt_component_10;
  const _component_SectionTestimonial = __nuxt_component_11;
  const _component_SectionTeam = __nuxt_component_1$1;
  const _component_SectionBlog = __nuxt_component_13;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_SectionBanner, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionOverview, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionAbout, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionCounter, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionPartner, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionWhyChoose, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionCourse, {
    sectionSubtitle: "Choose Our Top Courses",
    sectionTitle: "Browse our Courses"
  }, null, _parent));
  _push(ssrRenderComponent(_component_SectionCoursePromotion, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionNewslatter, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionTopic, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionEvent, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionTestimonial, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionTeam, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionBlog, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-4ab21c49.mjs.map
