import React, { useEffect, useState } from 'react';
import { CircularProgress, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import {
  AlbumInfo,
  AlbumInfoResponse,
  AlbumInformation,
  getAlbumInfoURL,
} from '../utils';
import { AlbumDetail } from '../components';

const fetchAlbumInformation = async (mbid: string): Promise<AlbumInfo> => {
  try {
    const {
      data: { album: albumInfo },
    } = await axios.get<AlbumInfoResponse>(getAlbumInfoURL(mbid));

    return albumInfo;
  } catch (error) {
    throw new Error(
      `Something went wrong trying to fetch album information -> ${error}`
    );
  }
};

const parseResponseIntoAlbumInformation = ({
  artist: artistName,
  name: albumName,
  image,
  tracks,
  wiki,
}: AlbumInfo): AlbumInformation => {
  const albumImg = image.find(({ size }) => size === 'mega');
  const albumCoverImg = albumImg ? albumImg['#text'] : 'not-found';

  return {
    artistName,
    albumName,
    albumCoverImg,
    trackList: tracks.track.map((trackInfo) => trackInfo.name),
    publishedDate: wiki?.published ?? 'Published date not available',
  };
};

function AlbumDetailPage(): JSX.Element {
  const [albumInformation, setAlbumInformation] =
    useState<AlbumInformation | null>(null);
  const { mbid } = useParams();
  useEffect(() => {
    if (mbid) {
      fetchAlbumInformation(mbid)
        .then((albumInfoResponse) => {
          setAlbumInformation(
            parseResponseIntoAlbumInformation(albumInfoResponse)
          );
        })
        .catch((error) => {
          throw Error(error);
        });
    }
  }, [mbid]);

  return (
    <Grid container justifyContent="center">
      {albumInformation ? (
        <AlbumDetail
          albumName={albumInformation.albumName}
          albumCoverImg={albumInformation.albumCoverImg}
          artistName={albumInformation.artistName}
          publishedDate={albumInformation.publishedDate}
          trackList={albumInformation.trackList}
        />
      ) : (
        <CircularProgress />
      )}
    </Grid>
  );
}

export default AlbumDetailPage;
