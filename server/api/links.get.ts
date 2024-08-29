import { z } from 'zod';
import { MusicData, MusicEntityType } from '~/server/types/music';

type ResponseMetadata = {
  type: MusicEntityType | 'unknown';
  title?: string;
  artistName?: string;
  thumbnailUrl?: string;
};

type ResponseLink = {
  platform: string;
  url: string;
};

const supportedPlatforms = [
  'itunes',
  'appleMusic',
  'youtubeMusic',
  'youtube',
  'tidal',
  'spotify',
  'napster',
  'deezer',
  'amazonMusic',
];

export default defineCachedEventHandler(
  async event => {
    const query = await getValidatedQuery(event, data => {
      return z
        .object({
          url: z.string().url(),
        })
        .parse(data);
    });

    const url = query.url;

    if (!url) {
      return createError({ statusCode: 400, statusMessage: 'Missing required query parameter: url.' });
    }

    try {
      const data = await fetchMusicData(url);

      const links = getLinks(data);
      const metadata = getMetadata(data);

      return { metadata, links };
    } catch (error) {
      return createError({
        statusCode: 500,
        statusMessage: 'Could not retrieve song.',
        message: (error as Error).message,
      });
    }
  },
  {
    maxAge: 60 * 60, // 1 hour
  },
);

function getLinks(data: MusicData): ResponseLink[] {
  if (!data.linksByPlatform) return [];

  const platforms = Object.entries(data.linksByPlatform);

  return platforms
    .filter(([platform]) => supportedPlatforms.includes(platform))
    .map(([platform, link]) => {
      return { platform, url: link.url } as ResponseLink;
    });
}

function getMetadata(data: MusicData): ResponseMetadata {
  const metadata: ResponseMetadata = { type: 'unknown' };
  if (!data) return metadata;

  const itunesLinks = data.linksByPlatform['itunes'];
  if (!itunesLinks) return metadata;

  const itunesEntityUniqueId = itunesLinks?.entityUniqueId;
  if (!itunesEntityUniqueId) return metadata;

  const entity = data.entitiesByUniqueId[itunesEntityUniqueId];
  if (!entity) return metadata;

  metadata.type = entity.type;
  metadata.title = entity.title;
  metadata.artistName = entity.artistName;
  metadata.thumbnailUrl = entity.thumbnailUrl;

  return metadata;
}
