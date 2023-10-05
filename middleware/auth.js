// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
  if (false) {
    return navigateTo(to.fullPath);
  }
  return navigateTo("/login");
});
