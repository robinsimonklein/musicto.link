import { MusicData } from '~/server/types/music';

export const fetchMusicData = async (url: string) => {
  const { musicLinksApi } = useRuntimeConfig();
  return await $fetch<MusicData>(musicLinksApi, { query: { url } });
};
