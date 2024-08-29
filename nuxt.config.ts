// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },

  runtimeConfig: {
    musicLinksApi: process.env.NUXT_MUSIC_LINKS_API,
  },

  modules: ['@nuxthub/core'],

  hub: {
    cache: true,
  },
});
