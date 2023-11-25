import { _ as __nuxt_component_0$1 } from "./nuxt-link-99c863e4.js";
import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, useSSRContext } from "vue";
import { u as useSlug } from "./useSlug-71b1c58b.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  props: ["date", "thumb", "title", "tag"],
  setup(props) {
    const title = ref(props.title);
    const date = ref(props.date);
    const { slug } = useSlug(title.value);
    function formatDate(inputDate) {
      const parts = inputDate.split("/");
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10);
      const year = parseInt(parts[2], 10);
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      const monthName = monthNames[month - 1];
      const formattedDate2 = `${day} ${monthName}, ${year}`;
      return formattedDate2;
    }
    const formattedDate = formatDate(date.value);
    return { slug, formattedDate };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "single_blog" }, _attrs))}><img${ssrRenderAttr("src", "/images/blog/" + $props.thumb)} class="img-fluid" alt="image"><div class="content_box"><span>${ssrInterpolate($setup.formattedDate)} | <a href="">${ssrInterpolate($props.tag)}</a></span><h2>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/blog/" + $setup.slug
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
  _push(`</h2>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "blog/" + $setup.slug,
    class: "cta d-inline-flex align-items-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="mb-0"${_scopeId}>READ MORE</span><svg width="13px" height="10px" viewBox="0 0 13 10"${_scopeId}><path d="M1,5 L11,5"${_scopeId}></path><polyline points="8 1 12 5 8 9"${_scopeId}></polyline></svg>`);
      } else {
        return [
          createVNode("span", { class: "mb-0" }, "READ MORE"),
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
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=BlogItem-19391064.js.map
