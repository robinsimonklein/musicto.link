<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const siteConfig = useSiteConfig();

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  bodyAttrs: {
    class: 'bg-white dark:bg-gray-950',
  },
  titleTemplate: titleChunk => {
    return titleChunk
      ? `${titleChunk} • Listen in your music app`
      : 'musicto.link - Multi-platform link for your song or album.';
  },
  link: [
    { rel: 'icon', href: 'favicon.svg' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#b10303' },
  ],
  meta: [
    { name: 'msapplication-TileColor', content: '#b10303' },
    { name: 'theme-color', content: '#ffffff' },
  ],
});

useSeoMeta({
  ogLocale: 'en',
  ogSiteName: 'musicto.link',
  ogTitle: 'musicto.link - Multi-platform link for your song or album.',
  twitterTitle: 'musicto.link - Multi-platform link for your song or album.',
  description: 'Share a multi-platform song link so everyone can listen in their music app.',
  ogDescription: 'Share a multi-platform song link so everyone can listen in their music app.',
  twitterDescription: 'Share a multi-platform song link so everyone can listen in their music app.',
  ogUrl: 'https://musicto.link',
  twitterCard: 'summary_large_image',
  ogType: 'website',
});
</script>
