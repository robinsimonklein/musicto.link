export type MusicEntityType = 'song';

export type MusicEntity = {
  id: string;
  type: MusicEntityType;
  title: string;
  artistName?: string;
  thumbnailUrl?: string;
  thumbnailWidth?: number;
  thumbnailHeight?: number;
  apiProvider: string;
  platforms: string[];
};

export type MusicLink = {
  url: string;
  entityUniqueId: string;
};

export type MusicData = {
  entitiesByUniqueId: Record<string, MusicEntity>;
  linksByPlatform: Record<string, MusicLink>;
};
