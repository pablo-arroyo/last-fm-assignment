import React from 'react';
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { MediumCard, NoStyleLink } from './shared';

interface AlbumDetailProps {
  artistName: string;
  albumName: string;
  albumCoverImg: string;
  publishedDate: string;
  trackList: Array<string>;
}

function AlbumDetail({
  artistName,
  albumCoverImg,
  albumName,
  publishedDate,
  trackList,
}: AlbumDetailProps): JSX.Element {
  return (
    <MediumCard>
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
        {trackList.length > 0 &&
          trackList.map((track) => (
            <Typography
              key={track}
              gutterBottom
              variant="body1"
              component="div"
            >
              `* ${track}`
            </Typography>
          ))}
      </CardContent>
      <CardActions>
        <Button size="small">
          <NoStyleLink to="/">Go back</NoStyleLink>
        </Button>
      </CardActions>
    </MediumCard>
  );
}

export default AlbumDetail;
