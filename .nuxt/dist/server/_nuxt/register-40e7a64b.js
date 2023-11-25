import { ssrRenderSlot, ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { useSSRContext, ref, withCtx, createVNode, createTextVNode } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-99c863e4.js";
import { u as useAuthStore } from "./AuthStore-db9531fe.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "@vue/devtools-api";
const BaseDialog_vue_vue_type_style_index_0_scoped_97d74f83_lang = "";
const _sfc_main$1 = {
  props: {
    showModal: Boolean,
    title: {
      type: String,
      required: false,
      default: ""
    }
  },
  emits: ["clsoe"]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div data-v-97d74f83></div><dialog open data-v-97d74f83><header class="text-center" data-v-97d74f83>`);
  ssrRenderSlot(_ctx.$slots, "ico", {}, null, _push, _parent);
  _push(`</header><section data-v-97d74f83>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</section><footer data-v-97d74f83>`);
  ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
    _push(`<button class="btn btn-danger shadow-lg w-auto px-5 py-2 h-auto" data-v-97d74f83> Close </button>`);
  }, _push, _parent);
  _push(`</footer></dialog><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/BaseDialog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-97d74f83"]]);
const _imports_0 = "" + __publicAssetsURL("icon/check.png");
const register_vue_vue_type_style_index_0_scoped_e8bf2471_lang = "";
const _sfc_main = {
  setup() {
    const authStore = useAuthStore();
    const error = ref(false);
    const success = ref(false);
    const unameError = ref(false);
    const nameError = ref(false);
    const emailError = ref(false);
    const passwordError = ref(false);
    const uname = ref("");
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const checkUname = () => {
      if (uname.value.length < 6) {
        unameError.value = true;
      } else {
        unameError.value = false;
      }
    };
    const checkName = () => {
      if (uname.value.length < 6) {
        nameError.value = true;
      } else {
        nameError.value = false;
      }
    };
    const checkEmail = () => {
      if (!email.value.includes("@")) {
        emailError.value = true;
      } else {
        emailError.value = false;
      }
    };
    const checkPassword = () => {
      if (password.value.length < 6) {
        passwordError.value = true;
      } else {
        passwordError.value = false;
      }
    };
    const submitForm = () => {
      checkUname();
      checkName();
      checkEmail();
      checkPassword();
      if (unameError.value || nameError.value || emailError.value || passwordError.value) {
        error.value = true;
        return;
      }
      error.value = false;
      authStore.addAccount({
        uname: uname.value,
        name: name.value,
        email: email.value,
        password: password.value,
        thumb: "munns.jpg"
      });
      success.value = true;
      uname.value = "";
      name.value = "";
      email.value = "";
      password.value = "";
    };
    const closeDialog = () => {
      error.value = false;
      success.value = false;
    };
    return {
      authStore,
      submitForm,
      uname,
      name,
      email,
      password,
      error,
      success,
      closeDialog,
      checkUname,
      unameError,
      checkName,
      nameError,
      checkEmail,
      emailError,
      checkPassword,
      passwordError
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIBaseDialog = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-e8bf2471><section class="section-top" data-v-e8bf2471><div class="container" data-v-e8bf2471><div class="col-lg-10 offset-lg-1 text-center" data-v-e8bf2471><div class="section-top-title wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0" data-v-e8bf2471><h1 data-v-e8bf2471>Register Page</h1><ul data-v-e8bf2471><li data-v-e8bf2471><a href="index.html" data-v-e8bf2471>Home</a></li><li data-v-e8bf2471>/ Register</li></ul></div></div></div></section>`);
  if ($setup.success) {
    _push(ssrRenderComponent(_component_UIBaseDialog, { onClose: $setup.closeDialog }, {
      ico: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img class="mx-auto" style="${ssrRenderStyle({ "width": "60px", "object-fit": "contain" })}"${ssrRenderAttr("src", _imports_0)} alt="icon" data-v-e8bf2471${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              class: "mx-auto",
              style: { "width": "60px", "object-fit": "contain" },
              src: _imports_0,
              alt: "icon"
            })
          ];
        }
      }),
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<p class="text-center mt-0 text-green-600 mb-2" data-v-e8bf2471${_scopeId}> Account Successfully Created. </p>`);
        } else {
          return [
            createVNode("p", { class: "text-center mt-0 text-green-600 mb-2" }, " Account Successfully Created. ")
          ];
        }
      }),
      actions: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="text-center" data-v-e8bf2471${_scopeId}>`);
          _push2(ssrRenderComponent(_component_NuxtLink, {
            to: "/profile",
            class: "bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 h-auto",
            onClick: $setup.closeDialog
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Go to My Profile `);
              } else {
                return [
                  createTextVNode(" Go to My Profile ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          return [
            createVNode("div", { class: "text-center" }, [
              createVNode(_component_NuxtLink, {
                to: "/profile",
                class: "bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 h-auto",
                onClick: $setup.closeDialog
              }, {
                default: withCtx(() => [
                  createTextVNode(" Go to My Profile ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<section class="login_register section-padding" data-v-e8bf2471><div class="container" data-v-e8bf2471><div class="row" data-v-e8bf2471><div class="col-lg-6 offset-lg-3 col-xs-12" data-v-e8bf2471><form class="register" data-v-e8bf2471><h4 class="login_register_title" data-v-e8bf2471>Create a new account</h4><div class="form-group mb-3" data-v-e8bf2471><label for="" data-v-e8bf2471>Username</label><input${ssrRenderAttr("value", $setup.uname)} type="text" name="username" class="${ssrRenderClass([{ error: $setup.unameError }, "form-control requiredField input-label mb-0"])}" data-v-e8bf2471>`);
  if ($setup.unameError) {
    _push(`<small class="text-red-500" data-v-e8bf2471>username must be more than 6 character</small>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="form-group mb-3" data-v-e8bf2471><label for="" data-v-e8bf2471>Full Name</label><input id="name"${ssrRenderAttr("value", $setup.name)} type="text" class="${ssrRenderClass([{ error: $setup.nameError }, "form-control requiredField input-label mb-0"])}" data-v-e8bf2471></div><div class="form-group mb-3" data-v-e8bf2471><label for="" data-v-e8bf2471>Email Address</label><input${ssrRenderAttr("value", $setup.email)} type="email" class="${ssrRenderClass([{ error: $setup.emailError }, "form-control requiredField input-label mb-0"])}" data-v-e8bf2471></div><div class="form-group mb-3" data-v-e8bf2471><label for="" data-v-e8bf2471>Password</label><input${ssrRenderAttr("value", $setup.password)} type="password" class="${ssrRenderClass([{ error: $setup.passwordError }, "form-control requiredField input-label mb-0"])}" data-v-e8bf2471></div><div class="form-group col-lg-12" data-v-e8bf2471><button class="btn_one" data-v-e8bf2471>Signup Now</button></div><p data-v-e8bf2471>Already have an account? <a href="/login" data-v-e8bf2471>Login</a></p></form></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e8bf2471"]]);
export {
  register as default
};
//# sourceMappingURL=register-40e7a64b.js.map
