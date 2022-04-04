import React from 'react';
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { StarBorder as StarBorderIcon } from '@mui/icons-material';
import { LargeCard, NoStyleLink } from './shared';

interface AlbumDetailProps {
  artistName: string;
  albumName: string;
  albumCoverImg: string;
  publishedDate: string;
  trackList: Array<string>;
}

const favoriteClickHandler = (track: string): void => {
  const favoriteTrack = localStorage.getItem(track);
  if (favoriteTrack) {
    localStorage.removeItem(track);
    alert(`${track} removed from your favorite track list`);
  } else {
    localStorage.setItem(track, track);
    alert(`Added ${track} to favorite track list`);
  }
};

function AlbumDetail({
  artistName,
  albumCoverImg,
  albumName,
  publishedDate,
  trackList,
}: AlbumDetailProps): JSX.Element {
  return (
    <LargeCard>
      <CardMedia
        component="img"
        height="400"
        image={albumCoverImg}
        alt={albumName}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {artistName}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {albumName}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">
          {publishedDate}
        </Typography>
        <List>
          {trackList.length > 0 &&
            trackList.map((track) => (
              <ListItem
                key={track}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="favorite"
                    onClick={() => {
                      favoriteClickHandler(track);
                    }}
                  >
                    <StarBorderIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={track} />
              </ListItem>
            ))}
        </List>
      </CardContent>
      <CardActions>
        <Button size="small">
          <NoStyleLink to="/">Go back</NoStyleLink>
        </Button>
      </CardActions>
    </LargeCard>
  );
}

export default AlbumDetail;
