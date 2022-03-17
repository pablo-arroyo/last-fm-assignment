import React, { useState } from 'react';
import { Grid } from '@mui/material';

import AlbumDetail from '../components/AlbumDetail';
import AlbumOverview from '../components/AlbumOverview';
import SearchInput from '../components/SearchInput';

function Home(): JSX.Element {
  const [artistName, setArtistName] = useState('');
  const updateArtistName = (artistNameValue: string): void => {
    setArtistName(artistNameValue);
  };
  const searchClickHandler = (): void => {
    alert(`Search Clicked!! Artist Name Value -> ${artistName}`);
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
      <Grid container justifyContent="center" rowSpacing={2} columnSpacing={2}>
        <Grid item xs>
          <AlbumOverview />
          <AlbumDetail />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
