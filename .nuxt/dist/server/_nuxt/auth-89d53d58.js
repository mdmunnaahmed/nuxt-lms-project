import "vue";
import "hookable";
import { e as defineNuxtRouteMiddleware, n as navigateTo } from "../server.mjs";
import "destr";
import "devalue";
import "defu";
import "klona";
import { u as useAuthStore } from "./AuthStore-db9531fe.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "@vue/devtools-api";
import "vue/server-renderer";
const auth = /* @__PURE__ */ defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  const isLoggedIn = authStore.isLoggedIn;
  if (!isLoggedIn && to.path !== "/login" && to.path !== "/register") {
    return navigateTo("/login");
  } else if (isLoggedIn && to.path === "/profile") {
    return navigateTo("/profile/dashboard");
  } else if (isLoggedIn && (to.path === "/login" || to.path === "/register")) {
    return navigateTo("/profile/dashboard");
  }
});
export {
  auth as default
};
//# sourceMappingURL=auth-89d53d58.js.map
