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
    '/share/**': {
      swr: process.env.NODE_ENV === 'development' ? false : 24 * 60 * 60, // 1 day
      security: {
        headers: {
          contentSecurityPolicy: {
            'img-src': ["'self'", 'data:', 'https://is1-ssl.mzstatic.com'],
          },
        },
      },
    },
  },

  modules: ['@nuxthub/core', '@nuxt/ui', '@nuxt/fonts', '@vueuse/nuxt', 'nuxt-og-image', 'nuxt-security'],

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
  security: {
    headers: {
      crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
    },
  },
});
