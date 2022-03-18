import React from 'react';
import styled from 'styled-components';

import {
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

interface AlbumOverviewProps {
  name: string;
  img: string;
}

const CustomCard = styled(Card)`
  width: 350px;
`;

const CustomCardContent = styled(CardContent)`
  height: 5rem;
`;

function AlbumOverview({ name, img }: AlbumOverviewProps): JSX.Element {
  return (
    <CustomCard>
      <CardMedia component="img" height="400" image={img} alt={name} />
      <CustomCardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CustomCardContent>
      <CardActions>
        <Button size="small">Album Details</Button>
      </CardActions>
    </CustomCard>
  );
}

export default AlbumOverview;
