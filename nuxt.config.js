export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    port: 3001 // default: 3000
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ToolboxJob - La banque d\'outils pour booster votre recherche d\'emploi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tu es en recherche d\'emploi (Stage, Alternance, CDD, CDI, etc...) et tu cherches à améliorer tes résultats ? Bienvenue sur ToolboxJob une banque d\'outils, formations, newsletters (etc...) qui t\'accompagne dans ta quête du Graal !' },
      { hid: 'author', name: 'author', content: 'Thomas CLEMENT' },
      { hid: 'og:url', name: 'og:url', content: 'https://toolbox-job.vercel.app/' },
      { hid: 'og:title', name: 'og:title', content: 'ToolboxJob - La banque d\'outils pour booster votre recherche d\'emploi' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'ToolboxJob - La banque d\'outils pour booster votre recherche d\'emploi' },
      { hid: 'og:description', name: 'og:description', content: 'Tu es en recherche d\'emploi (Stage, Alternance, CDD, CDI, etc...) et tu cherches à améliorer tes résultats ? Bienvenue sur ToolboxJob une banque d\'outils, formations, newsletters (etc...) qui t\'accompagne dans ta quête du Graal !' },
      { hid: 'og:image', name: 'og:image', content: 'https://toolbox-job.vercel.app/job_search.jpg' },
      { hid: 'og:image:secure_url', name: 'og:image:secure_url', content: 'https://toolbox-job.vercel.app/job_search.jpg' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:image:type', name: 'og:image:type', content: 'image/jpg' },
      { hid: 'og:image:alt', name: 'og:image:alt', content: 'ToolboxJob - La banque d\'outils pour booster votre recherche d\'emploi' },
      { hid: 'twitter:site', name: 'twitter:site', content: 'https://toolbox-job.vercel.app/' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'ToolboxJob - La banque d\'outils pour booster votre recherche d\'emploi' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Tu es en recherche d\'emploi (Stage, Alternance, CDD, CDI, etc...) et tu cherches à améliorer tes résultats ? Bienvenue sur ToolboxJob une banque d\'outils, formations, newsletters (etc...) qui t\'accompagne dans ta quête du Graal !' },
      { hid: 'twitter:image', name: 'twitter:description', content: 'https://toolbox-job.vercel.app/job_search.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      // a simple name
      Rubik: true
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
