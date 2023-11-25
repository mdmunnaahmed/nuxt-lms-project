import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, mergeProps, ref, computed, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-99c863e4.mjs';
import { u as useAuthStore } from './AuthStore-db9531fe.mjs';
import { u as useFrontStore } from './frontStore-3016d556.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "preloader" }, _attrs))} data-v-cf4d3e9a><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" data-v-cf4d3e9a><g data-v-cf4d3e9a><circle cx="3" cy="12" r="2" fill="green" data-v-cf4d3e9a></circle><circle cx="21" cy="12" r="2" fill="green" data-v-cf4d3e9a></circle><circle cx="12" cy="21" r="2" fill="green" data-v-cf4d3e9a></circle><circle cx="12" cy="3" r="2" fill="green" data-v-cf4d3e9a></circle><circle cx="5.64" cy="5.64" r="2" fill="green" data-v-cf4d3e9a></circle><circle cx="18.36" cy="18.36" r="2" fill="green" data-v-cf4d3e9a></circle><circle cx="5.64" cy="18.36" r="2" fill="green" data-v-cf4d3e9a></circle><circle cx="18.36" cy="5.64" r="2" fill="green" data-v-cf4d3e9a></circle><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" data-v-cf4d3e9a></animateTransform></g></svg></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Preloader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-cf4d3e9a"]]);
const _imports_0$1 = "" + publicAssetsURL("images/all-img/logo.png");
const _sfc_main$2 = {
  setup() {
    const authStore = useAuthStore();
    const frontStore = useFrontStore();
    const isScrolled = ref(false);
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 0;
    };
    const cartCount = computed(() => {
      return frontStore.cart.length;
    });
    return {
      frontStore,
      authStore,
      isScrolled,
      handleScroll,
      cartCount
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "navigation",
    class: ["fixed-top navbar-light bg-faded site-navigation py-1", { navShadow: $setup.isScrolled }]
  }, _attrs))} data-v-4befcfa4><div class="container" data-v-4befcfa4><div class="row align-items-center" data-v-4befcfa4><div class="col-lg-2 col-md-3 col-sm-4" data-v-4befcfa4><div class="site-logo" data-v-4befcfa4>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="" class="mt-0" data-v-4befcfa4${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$1,
            alt: "",
            class: "mt-0"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-6 col-md-9 col-sm-8" data-v-4befcfa4><div class="header_right" data-v-4befcfa4><nav id="main-menu" class="ms-auto" data-v-4befcfa4><ul data-v-4befcfa4><li data-v-4befcfa4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link",
    to: "javascript:void(0)"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home <span class="ti-angle-down" data-v-4befcfa4${_scopeId}></span>`);
      } else {
        return [
          createTextVNode("Home "),
          createVNode("span", { class: "ti-angle-down" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul data-v-4befcfa4><li data-v-4befcfa4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home 01`);
      } else {
        return [
          createTextVNode("Home 01")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li data-v-4befcfa4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link",
    to: "javascript:void(0)"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Pages <span class="ti-angle-down" data-v-4befcfa4${_scopeId}></span>`);
      } else {
        return [
          createTextVNode("Pages "),
          createVNode("span", { class: "ti-angle-down" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul data-v-4befcfa4><li data-v-4befcfa4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link",
    to: "/about"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About Us`);
      } else {
        return [
          createTextVNode("About Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-4befcfa4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link",
    to: "/team"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Instructor`);
      } else {
        return [
          createTextVNode("Instructor")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-4befcfa4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link",
    to: "/faq"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`FAQ&#39;s`);
      } else {
        return [
          createTextVNode("FAQ's")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-4befcfa4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link",
    to: "/event"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Event`);
      } else {
        return [
          createTextVNode("Event")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li data-v-4befcfa4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link",
    to: "javascript:void(0)"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Courses <span class="ti-angle-down" data-v-4befcfa4${_scopeId}></span>`);
      } else {
        return [
          createTextVNode("Courses "),
          createVNode("span", { class: "ti-angle-down" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul data-v-4befcfa4><li data-v-4befcfa4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link",
    to: "/courses"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Courses One`);
      } else {
        return [
          createTextVNode("Courses One")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-4befcfa4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link",
    to: "/courses-two"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Courses Two`);
      } else {
        return [
          createTextVNode("Courses Two")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-4befcfa4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link",
    to: "/courses-sidebar"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Course Sidebar`);
      } else {
        return [
          createTextVNode("Course Sidebar")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li data-v-4befcfa4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link",
    to: "javascript:void(0)"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Shop <span class="ti-angle-down" data-v-4befcfa4${_scopeId}></span>`);
      } else {
        return [
          createTextVNode("Shop "),
          createVNode("span", { class: "ti-angle-down" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul data-v-4befcfa4><li data-v-4befcfa4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link",
    to: "/shop"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Shop`);
      } else {
        return [
          createTextVNode("Shop")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-4befcfa4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link",
    to: "/cart"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Cart Page`);
      } else {
        return [
          createTextVNode("Cart Page")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li data-v-4befcfa4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link",
    to: "javascript:void(0)"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog <span class="ti-angle-down" data-v-4befcfa4${_scopeId}></span>`);
      } else {
        return [
          createTextVNode("Blog "),
          createVNode("span", { class: "ti-angle-down" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul data-v-4befcfa4><li data-v-4befcfa4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link",
    to: "/blog"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog List`);
      } else {
        return [
          createTextVNode("Blog List")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li data-v-4befcfa4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "nav-link",
    to: "/contact"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav><div id="mobile_menu" data-v-4befcfa4></div></div></div><div class="col-lg-4 col-md-3 col-sm-8 text-end" data-v-4befcfa4>`);
  if ($setup.authStore.isLoggedIn) {
    _push(`<div class="home_lc d-flex align-items-center justify-content-end mt-0" data-v-4befcfa4>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/wishlist",
      class: "hlc"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="ti-heart" data-v-4befcfa4${_scopeId}></i><span class="gactive" data-v-4befcfa4${_scopeId}>0</span>`);
        } else {
          return [
            createVNode("i", { class: "ti-heart" }),
            createVNode("span", { class: "gactive" }, "0")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/cart",
      class: "hlc"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="ti-shopping-cart-full" data-v-4befcfa4${_scopeId}></i><span class="gactive" data-v-4befcfa4${_scopeId}>${ssrInterpolate($setup.cartCount)}</span>`);
        } else {
          return [
            createVNode("i", { class: "ti-shopping-cart-full" }),
            createVNode("span", { class: "gactive" }, toDisplayString($setup.cartCount), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_NuxtLink, {
      class: "btn_one text-white",
      to: "/profile"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Profile`);
        } else {
          return [
            createTextVNode("Profile")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (!$setup.authStore.isLoggedIn) {
    _push(`<div class="call_to_action" data-v-4befcfa4>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      class: "btn_one text-white",
      to: "/login"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Login`);
        } else {
          return [
            createTextVNode("Login")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_NuxtLink, {
      class: "btn_two",
      to: "/register"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Sign Up`);
        } else {
          return [
            createTextVNode("Sign Up")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-4befcfa4"]]);
const _imports_0 = "" + publicAssetsURL("images/all-img/logo2.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-3 col-sm-6 col-xs-12"><div class="single_footer">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim.</p></div><div class="foot_social"><ul><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`TW`);
      } else {
        return [
          createTextVNode("TW")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`FB`);
      } else {
        return [
          createTextVNode("FB")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`INS`);
      } else {
        return [
          createTextVNode("INS")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`YT`);
      } else {
        return [
          createTextVNode("YT")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div><div class="col-lg-3 col-sm-6 col-xs-12"><div class="single_footer"><h4>Courses</h4><ul><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Creative Writing`);
      } else {
        return [
          createTextVNode("Creative Writing")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Digital Marketing`);
      } else {
        return [
          createTextVNode("Digital Marketing")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`SEO Business`);
      } else {
        return [
          createTextVNode("SEO Business")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Social Marketing`);
      } else {
        return [
          createTextVNode("Social Marketing")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Graphic Design`);
      } else {
        return [
          createTextVNode("Graphic Design")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Website Development`);
      } else {
        return [
          createTextVNode("Website Development")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div><div class="col-lg-3 col-sm-6 col-xs-12"><div class="single_footer"><h4>Company</h4><ul><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About us`);
      } else {
        return [
          createTextVNode("About us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Knowledge Base`);
      } else {
        return [
          createTextVNode("Knowledge Base")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Affiliate Program`);
      } else {
        return [
          createTextVNode("Affiliate Program")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Community`);
      } else {
        return [
          createTextVNode("Community")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Market API`);
      } else {
        return [
          createTextVNode("Market API")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Support team`);
      } else {
        return [
          createTextVNode("Support team")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div><div class="col-lg-3 col-sm-6 col-xs-12"><div class="single_footer"><h4>Contact Info</h4><div class="sf_contact"><span class="ti-mobile"></span><h3>Phone number</h3><p>+88 457 845 695</p></div><div class="sf_contact"><span class="ti-email"></span><h3>Email Address</h3><p>example#yourmail.com</p></div><div class="sf_contact"><span class="ti-map"></span><h3>Office Address</h3><p>California, USA</p></div></div></div></div><div class="row fc"><div class="col-lg-6 col-sm-6 col-xs-12"><div class="footer_copyright"><p>\xA9 ${ssrInterpolate(( new Date()).getFullYear())}. All Rights Reserved.</p></div></div><div class="col-lg-6 col-sm-6 col-xs-12"><div class="footer_menu"><ul><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Terms of use`);
      } else {
        return [
          createTextVNode("Terms of use")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Privacy Policy`);
      } else {
        return [
          createTextVNode("Privacy Policy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Cookie Policy`);
      } else {
        return [
          createTextVNode("Cookie Policy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UIPreloader = __nuxt_component_0;
  const _component_LayoutHeader = __nuxt_component_1;
  const _component_LayoutFooter = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen" }, _attrs))}>`);
  if (_ctx.$nuxt.loading) {
    _push(ssrRenderComponent(_component_UIPreloader, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_LayoutHeader, null, null, _parent));
  _push(`<div class="main-wrapper">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div class="mt-auto"></div>`);
  _push(ssrRenderComponent(_component_LayoutFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-0aa334bd.mjs.map
