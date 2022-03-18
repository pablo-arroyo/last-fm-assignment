import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import styled from 'styled-components';

const CustomCard = styled(Card)`
  width: 350px;
`;

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
    <CustomCard>
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
        <Button size="small">Go Back</Button>
      </CardActions>
    </CustomCard>
  );
}

export default AlbumDetail;
