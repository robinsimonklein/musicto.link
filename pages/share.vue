<template>
  <div>
    <template v-if="data">
      <UContainer>
        <div v-if="data.metadata">
          <div class="flex flex-col items-center mt-10 mb-20">
            <div class="relative">
              <div class="rounded-2xl overflow-hidden aspect-1 w-[240px] max-w-full mb-10 z-10 relative">
                <img
                  v-if="data.metadata.thumbnailUrl"
                  class="w-full h-full object-cover"
                  :src="data.metadata.thumbnailUrl"
                  loading="lazy"
                />
              </div>
              <img
                v-if="data.metadata.thumbnailUrl"
                class="w-full h-full object-cover z-0 absolute inset-0 blur-3xl opacity-[99]"
                :src="data.metadata.thumbnailUrl"
                loading="lazy"
              />
            </div>
            <h1 class="relative z-10 font-bold text-3xl text-center font-heading">{{ data.metadata.title }}</h1>
            <p class="relative z-10 dark:text-gray-400 mt-0.5 text-center">{{ data.metadata.artistName }}</p>
          </div>
        </div>
        <div v-if="links?.length">
          <ul class="space-y-4 max-w-xl mx-auto">
            <li v-for="(link, index) in links" :key="index">
              <div class="relative flex items-center border dark:border-gray-800 p-5 rounded-2xl dark:bg-gray-900/10">
                <div class="flex items-center">
                  <div v-if="platformInfos[link.platform]" class="mr-3">
                    <img
                      class="inline-block w-[32px] h-[32px] object-contain"
                      :src="`/icon/platform/${link.platform}.svg`"
                      loading="lazy"
                    />
                  </div>
                  <p class="text-md">
                    {{ platformInfos[link.platform] ? platformInfos[link.platform].label : link.platform }}
                  </p>
                </div>
                <UButton
                  class="ml-auto before:absolute before:inset-0"
                  :to="link.url"
                  variant="ghost"
                  color="gray"
                  icon="i-heroicons-play-20-solid"
                  external
                >
                  Listen
                </UButton>
              </div>
            </li>
          </ul>
        </div>
      </UContainer>
    </template>
    <template v-else>
      <UContainer>
        <div class="my-16 text-center">
          <p class="text-center mb-10">Oops, we didn't find your song.</p>
          <UButton size="xl" to="/">Try another</UButton>
        </div>
      </UContainer>
    </template>
  </div>
</template>

<script setup lang="ts">
const platformInfos: Record<string, { label: string; position: number }> = {
  appleMusic: { label: 'Apple Music', position: 1 },
  spotify: { label: 'Spotify', position: 2 },
  deezer: { label: 'Deezer', position: 3 },
  youtubeMusic: { label: 'YouTube Music', position: 4 },
  youtube: { label: 'YouTube', position: 5 },
  itunes: { label: 'iTunes', position: 9 },
  amazonMusic: { label: 'Amazon Music', position: 6 },
  tidal: { label: 'Tidal', position: 7 },
  napster: { label: 'Napster', position: 8 },
};

const route = useRoute();
const url = route.query.url;

const siteConfig = useSiteConfig();

const { data } = await useFetch('/api/links', {
  query: { url },
});

const links = computed(() => {
  if (!data.value?.links?.length) return [];
  return data.value?.links.sort((a, b) => platformInfos[a.platform].position - platformInfos[b.platform].position);
});

defineOgImageComponent('Share', {
  title: data.value?.metadata.title,
  subtitle: data.value?.metadata.artistName,
  thumbnail: data.value?.metadata.thumbnailUrl,
});

const title = computed(() => `${data.value?.metadata.title} - ${data.value?.metadata.artistName}`);
const description = computed(
  () =>
    `Liste to "${data.value?.metadata.title}" by ${data.value?.metadata.artistName || 'unknown'} on your favourite music app.`,
);

useSeoMeta({
  title: title,
  ogTitle: title,
  twitterTitle: title,
  ogUrl: `${new URL(route.fullPath, siteConfig.url).toString()}`,
  description: description,
  ogDescription: description,
  twitterDescription: description,
  // @ts-ignore
  ogType: `music.${data.value?.metadata.type || 'song'}`,
});

useHead({
  meta: [{ name: 'robots', content: 'noindex' }],
});
</script>
