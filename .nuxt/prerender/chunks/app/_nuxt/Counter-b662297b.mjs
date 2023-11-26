import { useSSRContext, mergeProps } from 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrInterpolate } from 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { u as useFrontStore } from './frontStore-3016d556.mjs';

const _sfc_main$1 = {
  props: {
    icon: {
      type: String,
      required: true,
      default: null
    },
    count: {
      type: Number,
      required: true,
      default: 0
    },
    subtitle: {
      type: String,
      required: true,
      default: null
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "count-box" }, _attrs))}><i style="${ssrRenderStyle({ "color": "#2eca7f" })}" class="${ssrRenderClass($props.icon)}"></i><div><span class="purecounter">${ssrInterpolate($props.count)}</span><p>${ssrInterpolate($props.subtitle)}</p></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CounterItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  setup() {
    const frontStore = useFrontStore();
    return {
      frontStore
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CounterItem = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "counts",
    class: "counts section-padding"
  }, _attrs))}><div class="container" data-aos="fade-up"><div class="section-title"><h2>Some Fun Fact</h2><p> Our Great <span><u>Achievement</u></span></p></div><div class="row gy-4"><!--[-->`);
  ssrRenderList($setup.frontStore.counter, (c, index) => {
    _push(`<div class="col-lg-3 col-md-6">`);
    _push(ssrRenderComponent(_component_CounterItem, {
      icon: c.icon,
      count: c.count,
      subtitle: c.subtitle
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Counter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=Counter-b662297b.mjs.map
