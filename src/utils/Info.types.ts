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

export interface AlbumInfo {
  artist: string;
  image: Array<Image>;
  name: string;
  tracks: TrackResponse;
  wiki: Wiki;
}

export interface AlbumInfoResponse {
  album: AlbumInfo;
}

export interface LastFmAlbumResponse {
  topalbums: TopAlbum;
}

export interface AlbumInformation {
  artistName: string;
  albumName: string;
  albumCoverImg: string;
  publishedDate: string;
  trackList: Array<string>;
}
