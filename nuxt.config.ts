// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  site: {
    url: 'https://musicto.link',
  },

  runtimeConfig: {
    musicLinksApi: process.env.NUXT_MUSIC_LINKS_API,
  },

  routeRules: {
    '/share': {
      swr: 24 * 60 * 60, // 1 day
    },
  },

  modules: ['@nuxthub/core', '@nuxt/ui', '@nuxt/fonts', '@vueuse/nuxt', 'nuxt-og-image'],

  hub: {
    cache: true,
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },
  ogImage: {
    fonts: ['Open+Sans:500', 'Archivo:700'],
  },
});
