export default defineNuxtConfig({
  // css: ["@/assets/main.scss"],
  ssr: true,

  css: ["~/assets/css/bootstrap.min.css", "~/assets/fonts/font-awesome.min.css", "~/assets/fonts/themify-icons.css", "~/assets/css/shop.css", "~/assets/css/style.css"],
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],

  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },
  devtools: {
    enabled: false,
  },
  generate: {
    // Disable prerendering temporarily
    exclude: ["/path-to-prerendered-page"],
  },
});
