import { _ as __nuxt_component_0 } from './InnerBanner-cc711ce9.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-99c863e4.mjs';
import { useSSRContext, ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString } from 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue/index.mjs';
import { u as useSlug } from './useSlug-71b1c58b.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { u as useFrontStore } from './frontStore-3016d556.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/ufo/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/ofetch/dist/node.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/hookable/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unctx/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/defu/dist/defu.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unhead/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/h3/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/destr/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/scule/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/klona/dist/index.mjs';
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

const _sfc_main$1 = {
  props: [
    "thumb",
    "price",
    "tag",
    "title",
    "lesson",
    "duration",
    "rating",
    "seats"
  ],
  setup(props) {
    const totalM = ref(props.duration);
    const { slug } = useSlug(props.title);
    const convertedTime = computed(() => {
      const hours = Math.floor(totalM.value / 60);
      const minutes = totalM.value % 60;
      return {
        minutes,
        hours
      };
    });
    return { slug, totalM, convertedTime };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "course-slide2" }, _attrs))}><div class="course-img2"><img${ssrRenderAttr("src", "/images/all-img/" + $props.thumb)} alt=""><div class="course-date2"><span class="month2">$${ssrInterpolate($props.price)}</span></div></div><div class="course-content2"><a class="c_btn2" href="">${ssrInterpolate($props.tag)}</a><h3>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "courses/" + $setup.slug
  }, {
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
  _push(`</h3><div class="co_list"><span><i class="fa fa-calendar"></i>${ssrInterpolate($props.lesson)} Lessons</span><span><i class="fa fa-clock-o"></i>${ssrInterpolate($setup.convertedTime.hours)}h ${ssrInterpolate($setup.convertedTime.minutes)}m</span><span><i class="fa fa-star"></i>${ssrInterpolate($props.rating)}</span><span><i class="fa fa-table"></i><strong>${ssrInterpolate($props.seats)} Seats Available</strong></span></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CourseItemTwo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  props: ["sectionTitle", "sectionSubtitle"],
  setup() {
    const frontStore = useFrontStore();
    const showItem = ref(6);
    const reloadCourses = computed(() => {
      return frontStore.courses.slice(0, Number(showItem.value));
    });
    const showMoreItem = () => {
      showItem.value += 6;
    };
    return {
      frontStore,
      reloadCourses,
      showMoreItem
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionInnerBanner = __nuxt_component_0;
  const _component_CourseItemTwo = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_SectionInnerBanner, {
    title: "All Courses",
    slug: "courses"
  }, null, _parent));
  _push(`<div class="best-cpurse section-padding"><div class="container"><div class="row"><!--[-->`);
  ssrRenderList($setup.reloadCourses, (c, index) => {
    _push(`<div class="col-lg-6 col-sm-12 col-xs-12">`);
    _push(ssrRenderComponent(_component_CourseItemTwo, {
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
  _push(`<!--]--><div class="col-lg-12 text-center"><div class="cc_btn">`);
  if ($setup.frontStore.courses.length !== $setup.reloadCourses.length) {
    _push(`<button class="btn_one"> View More </button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/courses-two.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const coursesTwo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { coursesTwo as default };
//# sourceMappingURL=courses-two-2f922d50.mjs.map
