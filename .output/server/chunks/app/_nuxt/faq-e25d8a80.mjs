import { _ as __nuxt_component_0 } from './InnerBanner-cc711ce9.mjs';
import { _ as __nuxt_component_1 } from './FaqItem-114da97f.mjs';
import { u as useFrontStore } from './frontStore-3016d556.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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
