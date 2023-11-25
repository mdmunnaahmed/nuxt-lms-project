import { _ as __nuxt_component_0 } from './InnerBanner-cc711ce9.mjs';
import { _ as __nuxt_component_0$1 } from './BlogItem-19391064.mjs';
import { u as useFrontStore } from './frontStore-3016d556.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
import './useSlug-71b1c58b.mjs';
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
  const _component_BlogItem = __nuxt_component_0$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_SectionInnerBanner, {
    title: "Blogs",
    slug: "blog"
  }, null, _parent));
  _push(`<section id="blog" class="blog_area section-padding"><div class="container"><div class="row"><!--[-->`);
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
  _push(`<!--]--></div></div></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-0231964c.mjs.map
