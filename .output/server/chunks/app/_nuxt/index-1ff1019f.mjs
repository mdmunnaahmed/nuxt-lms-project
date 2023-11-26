import { _ as __nuxt_component_0 } from './InnerBanner-cc711ce9.mjs';
import { _ as __nuxt_component_0$1 } from './CourseItem-1efc50d6.mjs';
import { ref, computed, useSSRContext } from 'vue';
import { u as useFrontStore } from './frontStore-3016d556.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './nuxt-link-99c863e4.mjs';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';

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
  const _component_CourseItem = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_SectionInnerBanner, {
    title: "All Courses",
    slug: "courses"
  }, null, _parent));
  _push(`<div class="best-cpurse section-padding"><div class="container"><div class="row"><!--[-->`);
  ssrRenderList($setup.reloadCourses, (c, index2) => {
    _push(`<div class="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/courses/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-1ff1019f.mjs.map
