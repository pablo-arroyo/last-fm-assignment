export type ImageSize = 'small' | 'medium' | 'large' | 'extralarge' | 'mega';

export interface Image {
  '#text': string;
  size: ImageSize;
}

export interface Album {
  name: string;
  mbid: string;
  image: Array<Image>;
}

export interface TopAlbum {
  album: Array<Album>;
}

export interface Wiki {
  published: string;
}

export interface Track {
  name: string;
  duration: number;
}

export interface TrackResponse {
  track: Array<Track>;
}

export interface AlbumInfoResponse {
  artist: string;
  name: string;
  tracks: TrackResponse;
  wiki: Wiki;
}

export interface LastFmAlbumResponse {
  topalbums: TopAlbum;
}
