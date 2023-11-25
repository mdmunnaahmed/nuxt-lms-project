import { _ as __nuxt_component_0 } from './Spinner-3d2f92c0.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-99c863e4.mjs';
import { ref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { useRouter } from 'vue-router';
import { u as useAuthStore } from './AuthStore-db9531fe.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    const success = ref(false);
    const uname = ref("username");
    const password = ref("username");
    const submitForm = () => {
      authStore.loginAccount({
        uname: uname.value,
        password: password.value
      });
      success.value = true;
      uname.value = "";
      password.value = "";
      router.push("/profile");
    };
    const closeDialog = () => {
      success.value = false;
    };
    return {
      authStore,
      submitForm,
      uname,
      password,
      success,
      closeDialog
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UISpinner = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><section class="section-top"><div class="container"><div class="col-lg-10 offset-lg-1 text-center"><div class="section-top-title wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0"><h1>Login Page</h1><ul><li><a href="index.html">Home</a></li><li>/ Login Page</li></ul></div></div></div></section><section class="login_register section-padding"><div class="container"><div class="row"><div class="col-lg-6 offset-lg-3 col-xs-12"><form class="login"><h4 class="login_register_title">Sign in to your account</h4><div class="form-group mb-3"><label for="">Username or Email</label><input type="text" id="username" class="form-control input-label"${ssrRenderAttr("value", $setup.uname)}></div><div class="form-group mb-3"><label for="">Password</label><input type="password" class="form-control input-label"${ssrRenderAttr("value", $setup.password)}></div>`);
  if ($setup.authStore.loading) {
    _push(ssrRenderComponent(_component_UISpinner, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<p>${ssrInterpolate($setup.authStore.serverError)}</p><div class="form-group col-lg-12 mt-3"><button class="btn_one">login</button></div><p> Don&#39;t have an account? `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/register" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Register Now`);
      } else {
        return [
          createTextVNode("Register Now")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></form></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { login as default };
//# sourceMappingURL=login-5468c671.mjs.map
