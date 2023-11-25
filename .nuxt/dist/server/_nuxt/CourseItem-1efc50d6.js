import { _ as __nuxt_component_0$1 } from "./nuxt-link-99c863e4.js";
import { ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
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
    const title = ref(props.title);
    const stitle = title.value.toLowerCase().replaceAll(/[^\w\s]/gi, "");
    const slug = stitle.replaceAll(" ", "-").replaceAll("--", "-");
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "course-slide" }, _attrs))}><div class="course-img"><img${ssrRenderAttr("src", "/images/all-img/" + $props.thumb)} alt=""><div class="course-date"><span class="month">$${ssrInterpolate($props.price)}</span></div></div><div class="course-content">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "c_btn",
    to: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.tag)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.tag), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3>`);
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
  _push(`</h3><span><i class="fa fa-calendar"></i>${ssrInterpolate($props.lesson)} Lessons</span><span><i class="fa fa-clock-o"></i>${ssrInterpolate($setup.convertedTime.hours)}h ${ssrInterpolate($setup.convertedTime.minutes)}m</span><span><i class="fa fa-star"></i>${ssrInterpolate($props.rating)}</span><span><i class="fa fa-table"></i><strong>${ssrInterpolate($props.seats)} Seats Available</strong></span></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CourseItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=CourseItem-1efc50d6.js.map
