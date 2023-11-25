import { e as defineNuxtRouteMiddleware, n as navigateTo } from '../server.mjs';
import { u as useAuthStore } from './AuthStore-db9531fe.mjs';
import 'vue';
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
import 'vue-router';
import 'vue/server-renderer';

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

export { auth as default };
//# sourceMappingURL=auth-89d53d58.mjs.map
