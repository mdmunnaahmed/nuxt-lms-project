import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0 } from './InnerBanner-cc711ce9.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderTeleport, ssrRenderSlot } from 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext, ref, withCtx, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString } from 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-99c863e4.mjs';
import { _ as __nuxt_component_3 } from './Counter-b662297b.mjs';
import { u as useAuthStore } from './AuthStore-db9531fe.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/h3/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/devalue/index.js';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/ufo/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/ofetch/dist/node.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/destr/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/hookable/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/scule/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/klona/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/defu/dist/defu.mjs';
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
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unhead/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/unctx/dist/index.mjs';
import 'file:///mnt/F8E02105E020CC26/vue-projects/nuxt-lms-project/node_modules/vue-router/dist/vue-router.node.mjs';
import './frontStore-3016d556.mjs';

const _sfc_main$1 = {
  props: {
    show: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: false
    },
    fixed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["close"],
  methods: {
    tryClose() {
      if (this.fixed) {
        return;
      }
      this.$emit("close");
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderTeleport(_push, (_push2) => {
    if ($props.show) {
      _push2(`<div class="backdrop" data-v-32de6309></div>`);
    } else {
      _push2(`<!---->`);
    }
    if ($props.show) {
      _push2(`<dialog open data-v-32de6309><div class="dialog-header flex justify-between items-center" data-v-32de6309>`);
      ssrRenderSlot(_ctx.$slots, "header", {}, () => {
        _push2(`<h6 class="title font-bold" data-v-32de6309>${ssrInterpolate($props.title)}</h6>`);
        ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
          _push2(`<button class="close text-red-600 p-1 px-2" data-v-32de6309><svg width="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000" data-v-32de6309><g id="SVGRepo_bgCarrier" stroke-width="0" data-v-32de6309></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-32de6309></g><g id="SVGRepo_iconCarrier" data-v-32de6309><path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#ff0000" data-v-32de6309></path></g></svg></button>`);
        }, _push2, _parent);
      }, _push2, _parent);
      _push2(`</div><section class="dialog-body" data-v-32de6309>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
      _push2(`</section></dialog>`);
    } else {
      _push2(`<!---->`);
    }
  }, "body", false, _parent);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Modal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-32de6309"]]);
const _imports_0 = "" + publicAssetsURL("images/icon/fb.svg");
const _imports_1 = "" + publicAssetsURL("images/icon/tw.svg");
const _imports_2 = "" + publicAssetsURL("images/icon/pn.svg");
const _imports_3 = "" + publicAssetsURL("images/icon/ins.svg");
const _sfc_main = {
  setup() {
    const success = ref(false);
    const modal = ref(false);
    const authStore = useAuthStore();
    const name = ref(authStore.authUser.name);
    const profession = ref(authStore.authUser.profession);
    const shortBio = ref(authStore.authUser.shortBio);
    const submitForm = async () => {
      if (authStore.authUser.profession === "" || authStore.authUser.shortBio === "")
        ;
      authStore.addAccountInfo({
        profession: profession.value,
        shortBio: shortBio.value
      });
      success.value = true;
      await new Promise((resolve) => setTimeout(resolve, 600));
      modal.value = false;
    };
    const showModal = () => {
      modal.value = true;
    };
    const clsoeDialog = () => {
      modal.value = false;
    };
    return {
      authStore,
      modal,
      showModal,
      clsoeDialog,
      submitForm,
      name,
      profession,
      shortBio,
      success
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionInnerBanner = __nuxt_component_0;
  const _component_UIModal = __nuxt_component_1;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_SectionCounter = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-4ec3a149>`);
  _push(ssrRenderComponent(_component_SectionInnerBanner, {
    title: "My Profile",
    slug: "dashboard"
  }, null, _parent));
  _push(ssrRenderComponent(_component_UIModal, {
    show: $setup.modal,
    title: "Edit Profile Info",
    onClose: $setup.clsoeDialog
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<form data-v-4ec3a149${_scopeId}><div class="mb-2" data-v-4ec3a149${_scopeId}><label class="mb-1 text-dark opacity-75" data-v-4ec3a149${_scopeId}>Name</label><input${ssrRenderAttr("value", $setup.name)} type="text" class="form-control" data-v-4ec3a149${_scopeId}></div><div class="mb-2" data-v-4ec3a149${_scopeId}><label class="mb-1 text-dark opacity-75" data-v-4ec3a149${_scopeId}>Profession</label><input${ssrRenderAttr("value", $setup.profession)} type="text" class="form-control" data-v-4ec3a149${_scopeId}></div><div class="mb-2" data-v-4ec3a149${_scopeId}><label class="mb-1 text-dark opacity-75" data-v-4ec3a149${_scopeId}>Short Bio</label><textarea rows="4" class="form-control" data-v-4ec3a149${_scopeId}>${ssrInterpolate(_ctx.shortbio)}</textarea></div>`);
        if ($setup.success) {
          _push2(`<small class="text-green-600" data-v-4ec3a149${_scopeId}>Your profile data Updated!</small>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<button class="btn_one w-100 mt-3" data-v-4ec3a149${_scopeId}>Submit</button></form>`);
      } else {
        return [
          createVNode("form", {
            onSubmit: withModifiers($setup.submitForm, ["prevent"])
          }, [
            createVNode("div", { class: "mb-2" }, [
              createVNode("label", { class: "mb-1 text-dark opacity-75" }, "Name"),
              withDirectives(createVNode("input", {
                "onUpdate:modelValue": ($event) => $setup.name = $event,
                type: "text",
                class: "form-control"
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelText, $setup.name]
              ])
            ]),
            createVNode("div", { class: "mb-2" }, [
              createVNode("label", { class: "mb-1 text-dark opacity-75" }, "Profession"),
              withDirectives(createVNode("input", {
                "onUpdate:modelValue": ($event) => $setup.profession = $event,
                type: "text",
                class: "form-control"
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelText, $setup.profession]
              ])
            ]),
            createVNode("div", { class: "mb-2" }, [
              createVNode("label", { class: "mb-1 text-dark opacity-75" }, "Short Bio"),
              withDirectives(createVNode("textarea", {
                "onUpdate:modelValue": ($event) => _ctx.shortbio = $event,
                rows: "4",
                class: "form-control"
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelText, _ctx.shortbio]
              ])
            ]),
            $setup.success ? (openBlock(), createBlock("small", {
              key: 0,
              class: "text-green-600"
            }, "Your profile data Updated!")) : createCommentVNode("", true),
            createVNode("button", { class: "btn_one w-100 mt-3" }, "Submit")
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<section class="template_agent section-padding" data-v-4ec3a149><div class="container" data-v-4ec3a149><div class="row" data-v-4ec3a149><div class="col-lg-12 col-sm-12 col-xs-12" data-v-4ec3a149><div class="single_agent" data-v-4ec3a149><div class="single_agent_image" data-v-4ec3a149><img${ssrRenderAttr("src", "/images/all-img/" + $setup.authStore.authUser.thumb)} class="img-fluid" alt="" style="${ssrRenderStyle({ "border-radius": "50%" })}" data-v-4ec3a149></div><div class="single_agent_content" data-v-4ec3a149><div class="flex justify-between items-center" data-v-4ec3a149><h4 data-v-4ec3a149>${ssrInterpolate($setup.authStore.authUser.name)}</h4><button class="text-green-600" data-v-4ec3a149> Edit Info </button></div><h5 data-v-4ec3a149>${ssrInterpolate($setup.authStore.authUser.profession)}</h5><p data-v-4ec3a149> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever type book. </p><ul data-v-4ec3a149><li data-v-4ec3a149><i class="fa fa-envelope-o" data-v-4ec3a149></i>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "mailto:" + $setup.authStore.authUser.email,
    class: "text-primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($setup.authStore.authUser.email)}`);
      } else {
        return [
          createTextVNode(toDisplayString($setup.authStore.authUser.email), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-4ec3a149><i class="fa fa-phone" data-v-4ec3a149></i>(+123) 123 123 123</li><li data-v-4ec3a149><i class="fa fa-plane" data-v-4ec3a149></i>www.yourdomainname.com</li><li data-v-4ec3a149><i class="fa fa-skype" data-v-4ec3a149></i>skype.address</li></ul></div><div class="agent_social" data-v-4ec3a149><ul class="list-inline flex gap-2" data-v-4ec3a149><li data-v-4ec3a149><a href="#" class="top_f_facebook" data-v-4ec3a149><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-4ec3a149></a></li><li data-v-4ec3a149><a href="#" class="top_f_facebook" data-v-4ec3a149><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-4ec3a149></a></li><li data-v-4ec3a149><a href="#" class="top_f_facebook" data-v-4ec3a149><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-4ec3a149></a></li><li data-v-4ec3a149><a href="#" class="top_f_facebook" data-v-4ec3a149><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-4ec3a149></a></li></ul></div></div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_SectionCounter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4ec3a149"]]);

export { dashboard as default };
//# sourceMappingURL=dashboard-fa29f79f.mjs.map
