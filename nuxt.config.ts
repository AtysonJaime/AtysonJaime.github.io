// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/stylelint-module", "@nuxt/image"],

  typescript: {
    typeCheck: true,
  },
});