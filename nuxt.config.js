export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Portfólio - Atyson Jaime',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Portfólio do Atyson Jaime',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'portfolio atyson jaime, atyson, atyson jaime, portfolio',
      },
      {
        hid: 'designer',
        name: 'designer',
        content: 'Atyson Jaime <atysonjaime@gmail.com>',
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Portfólio - Atyson Jaime',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Portfólio do Atyson Jaime',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://atysonjaime.github.io',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Portfólio - Atyson Jaime',
      },
      {
        hid: 'copyright',
        name: 'copyright',
        content: 'https://atysonjaime.github.io',
      },
      { hid: 'category', name: 'category', content: 'website' },
      { hid: 'robots', name: 'robots', content: 'index,follow' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: {
    color: '#15283c',
    continuous: true,
    failedColor: '#a94442',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/bootstrapIcons',
    { src: '~/plugins/particles', srr: false, mode: 'client' },
  ],

  styleResources: {
    scss: ['assets/sass/main.scss'],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'pt-br',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
