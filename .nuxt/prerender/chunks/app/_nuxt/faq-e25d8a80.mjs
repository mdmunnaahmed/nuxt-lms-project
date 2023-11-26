import { _ as __nuxt_component_0 } from './InnerBanner-cc711ce9.mjs';
import { _ as __nuxt_component_1 } from './FaqItem-114da97f.mjs';
import { u as useFrontStore } from './frontStore-3016d556.mjs';
import { useSSRContext } from 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/ofetch/dist/node.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/hookable/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unctx/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/defu/dist/defu.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unhead/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/h3/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/ufo/dist/index.mjs';
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

const _sfc_main = {
  setup() {
    const frontStore = useFrontStore();
    return {
      frontStore
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionInnerBanner = __nuxt_component_0;
  const _component_FaqItem = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_SectionInnerBanner, {
    title: "Frequently Asked Questions",
    slug: "faq"
  }, null, _parent));
  _push(`<div class="container faq_area section-padding"><!--[-->`);
  ssrRenderList($setup.frontStore.faqs, (f, index) => {
    _push(ssrRenderComponent(_component_FaqItem, {
      key: index,
      title: f.title,
      pera: f.pera,
      index
    }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faq = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { faq as default };
//# sourceMappingURL=faq-e25d8a80.mjs.map
