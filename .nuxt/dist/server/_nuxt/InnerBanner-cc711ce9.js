import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  props: ["title", "slug"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-top" }, _attrs))}><div class="container"><div class="col-lg-10 offset-lg-1 text-center"><div class="section-top-title wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0"><h1>${ssrInterpolate($props.title)}</h1><ul class="inline-flex gap-2 w-auto"><li><a href="/" class="fw-bold">Home</a></li><li>/</li><li>${ssrInterpolate($props.slug)}</li></ul></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/InnerBanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=InnerBanner-cc711ce9.js.map
