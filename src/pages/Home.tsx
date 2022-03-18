import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Grid } from '@mui/material';

import { AlbumList, SearchInput } from '../components';
import { Album, LastFmAlbumResponse } from '../utils/Info.types';
import { getTopAlbumsURL } from '../utils/Network.util';

const CustomGrid = styled(Grid)`
  margin-top: 2rem;
`;

function Home(): JSX.Element {
  const [artistName, setArtistName] = useState('');
  const [albums, setAlbums] = useState<Array<Album>>([]);
  const updateArtistName = (artistNameValue: string): void => {
    setArtistName(artistNameValue);
  };
  const fetchTopAlbums = async (): Promise<Array<Album>> => {
    try {
      const {
        data: {
          topalbums: { album },
        },
      } = await axios.get<LastFmAlbumResponse>(getTopAlbumsURL(artistName));

      return album.filter(({ mbid }) => mbid !== undefined);
    } catch (error) {
      throw Error(
        `Something went wrong trying to fetch top albums -> ${error}`
      );
    }
  };

  const searchClickHandler = (): void => {
    if (artistName === '') {
      alert('Please write an artist name');
    } else {
      fetchTopAlbums()
        .then((result) => {
          setAlbums(result);
        })
        .catch((error) => {
          throw Error(error);
        });
    }
  };

  return (
    <>
      <Grid container justifyContent="center" rowSpacing={2} columnSpacing={2}>
        <Grid item xs>
          <SearchInput
            artistName={artistName}
            setArtistName={updateArtistName}
            onSearchHandler={searchClickHandler}
          />
        </Grid>
      </Grid>
      {albums.length > 0 && (
        <CustomGrid
          container
          justifyContent="center"
          rowSpacing={2}
          columnSpacing={2}
        >
          <AlbumList albumList={albums} />
        </CustomGrid>
      )}
    </>
  );
}

export default Home;
