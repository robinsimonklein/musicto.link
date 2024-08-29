import { MusicData } from '~/server/types/music';

export const getCachedMusicData = defineCachedFunction(
  async (url: string) => {
    const { musicLinksApi } = useRuntimeConfig();
    return await $fetch<MusicData>(musicLinksApi, { query: { url } });
  },
  {
    maxAge: 60 * 60, // 1 hour
    name: 'musicData',
    getKey: (url: string) => url,
  },
);
