import React from 'react';
import { Grid } from '@mui/material';
import { Album } from '../pages/Home.types';
import { AlbumOverview } from './index';

interface AlbumListProps {
  albumList: Array<Album>;
}

function AlbumList({ albumList }: AlbumListProps): JSX.Element {
  return (
    <>
      {albumList.map(({ name, image, mbid }) => {
        const albumImage = image.find(({ size }) => size === 'extralarge');

        return (
          <Grid key={mbid} item md>
            <AlbumOverview
              name={name}
              img={albumImage ? albumImage['#text'] : 'not-found'}
            />
          </Grid>
        );
      })}
    </>
  );
}

export default AlbumList;
