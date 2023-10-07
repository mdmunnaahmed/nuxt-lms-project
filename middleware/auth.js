// middleware/auth.js
import { useAuthStore } from "~/stores/AuthStore";
export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  const isLoggedIn =  true;
  if (!isLoggedIn && to.path !== "/login" && to.path !== "/register") {
    return navigateTo("/login");
  } else if (isLoggedIn && to.path === "/profile") {
    return navigateTo("/profile/dashboard");
  } else if (isLoggedIn && (to.path === "/login" || to.path === "/register")) {
    return navigateTo("/profile/dashboard");
  }
});
