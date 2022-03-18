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

export interface LastFmResponse {
  topalbums: TopAlbum;
}
