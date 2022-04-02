const LAST_FM_API_KEY = '9d317bf0e5d05c97bed5366584c17b54';
const LAST_FM_URI = 'http://ws.audioscrobbler.com/2.0';

export const getTopAlbumsURL = (artistName: string): string =>
  // eslint-disable-next-line max-len
  `${LAST_FM_URI}?method=artist.gettopalbums&artist=${artistName}&api_key=${LAST_FM_API_KEY}&format=json`;

export const getAlbumInfoURL = (albumMbid: string): string =>
  // eslint-disable-next-line max-len
  `${LAST_FM_URI}?method=album.getinfo&mbid=${albumMbid}&api_key=${LAST_FM_API_KEY}&format=json`;
