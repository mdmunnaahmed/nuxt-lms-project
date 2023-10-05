// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = false;
  if (!isLoggedIn && to.path !== "/login" && to.path !== "/register") {
    return navigateTo("/login");
  } else if (isLoggedIn && to.path === "/profile") {
    return navigateTo("/profile/dashboard");
  } else if (isLoggedIn && (to.path === "/login" || to.path === "/register")) {
    return navigateTo("/profile/dashboard");
  }
});
