// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/stylelint-module",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
  ],

  typescript: {
    typeCheck: true,
  },

  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },

  pinia: {
    storesDirs: ["./stores/**"],
  },

  app: {
    head: {
      title: "Atyson Jaime - Portfólio",

      meta: [
        { charset: "utf-8" },

        { name: "viewport", content: "width=device-width, initial-scale=1" },

        {
          hid: "description",

          name: "description",

          content: "Portfólio do Atyson Jaime",
        },

        { name: "format-detection", content: "telephone=no" },

        {
          hid: "keywords",

          name: "keywords",

          content: "portfolio atyson jaime, atyson, atyson jaime, portfolio",
        },

        {
          hid: "designer",

          name: "designer",

          content: "Atyson Jaime <atysonjaime@gmail.com>",
        },

        { hid: "og:type", name: "og:type", content: "website" },

        {
          hid: "og:title",

          name: "og:title",

          content: "Portfólio - Atyson Jaime",
        },

        {
          hid: "og:description",

          name: "og:description",

          content: "Portfólio do Atyson Jaime",
        },

        {
          hid: "og:url",

          name: "og:url",

          content: "https://atysonjaime.github.io",
        },

        {
          hid: "og:site_name",

          name: "og:site_name",

          content: "Portfólio - Atyson Jaime",
        },

        {
          hid: "copyright",

          name: "copyright",

          content: "https://atysonjaime.github.io",
        },

        { hid: "category", name: "category", content: "website" },

        { hid: "robots", name: "robots", content: "index,follow" },
      ],

      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

        // Material Design Icons

        {
          rel: "stylesheet",

          href: "https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css",
        },

        // Font Awesome

        {
          rel: "stylesheet",

          href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css",
        },

        // Font Family Poppins

        {
          rel: "preconnect",

          href: "https://fonts.googleapis.com",
        },

        {
          rel: "preconnect",

          href: "https://fonts.gstatic.com",

          crossorigin: "use-credentials",
        },

        {
          rel: "stylesheet",

          href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        },

        // Buefy

        {
          rel: "stylesheet",

          href: "https://unpkg.com/buefy@0.9.27/dist/buefy.min.css",
        },
      ],

      script: [
        // Buefy

        {
          src: "https://unpkg.com/buefy/dist/buefy.min.js",
        },
      ],
    },
  },
});
