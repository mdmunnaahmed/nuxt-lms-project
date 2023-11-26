import { ref, mergeProps, useSSRContext } from 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass } from 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  props: ["title", "pera", "index"],
  setup() {
    const faqOpen = ref(false);
    const toggleOpen = () => {
      faqOpen.value = !faqOpen.value;
    };
    return {
      faqOpen,
      toggleOpen
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "accordion-item px-4" }, _attrs))} data-v-962af4c7><h2 class="accordion-header py-3" data-v-962af4c7><button class="accordion-button" data-v-962af4c7>${ssrInterpolate($props.title)}</button></h2><div class="${ssrRenderClass([{ "active": $setup.faqOpen }, "accordion-collapse"])}" data-v-962af4c7><div class="accordion-body" data-v-962af4c7>${ssrInterpolate($props.pera)}</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FaqItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-962af4c7"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=FaqItem-114da97f.mjs.map
