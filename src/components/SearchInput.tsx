import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import styled from 'styled-components';

const GridButtonItem = styled(Grid)`
  display: flex;
  margin-left: 1rem;
`;

interface SearchInputProps {
  artistName: string;
  setArtistName: (artistName: string) => void;
  onSearchHandler: () => void;
  favoriteTrackListHandler: () => void;
}

function SearchInput({
  artistName,
  setArtistName,
  onSearchHandler,
  favoriteTrackListHandler,
}: SearchInputProps): JSX.Element {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <TextField
          id="search-input"
          label="Artist Name"
          variant="filled"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
          required
        />
      </Grid>
      <GridButtonItem item alignItems="stretch">
        <Button
          type="submit"
          size="large"
          variant="contained"
          onClick={onSearchHandler}
        >
          Search
        </Button>
      </GridButtonItem>
      <GridButtonItem item alignItems="stretch">
        <Button
          type="submit"
          size="large"
          variant="contained"
          onClick={favoriteTrackListHandler}
        >
          Favorite Tracks
        </Button>
      </GridButtonItem>
    </Grid>
  );
}

export default SearchInput;
