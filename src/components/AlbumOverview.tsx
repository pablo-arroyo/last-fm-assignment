import React from 'react';

import { Button, CardActions, CardMedia, Typography } from '@mui/material';
import { NoStyleLink, MediumCard, MediumCardContent } from './shared';

interface AlbumOverviewProps {
  mbid: string;
  name: string;
  img: string;
}

function AlbumOverview({ name, img, mbid }: AlbumOverviewProps): JSX.Element {
  return (
    <MediumCard>
      <CardMedia component="img" height="400" image={img} alt={name} />
      <MediumCardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </MediumCardContent>
      <CardActions>
        <Button size="small">
          <NoStyleLink to={`album-detail/${mbid}`}>Album Details</NoStyleLink>
        </Button>
      </CardActions>
    </MediumCard>
  );
}

export default AlbumOverview;
