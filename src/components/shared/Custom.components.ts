import styled from 'styled-components';
import { Box, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const MediumCard = styled(Card)`
  width: 350px;
`;

const LargeCard = styled(Card)`
  width: 750px;
`;

const MediumCardContent = styled(CardContent)`
  height: 5rem;
`;

const NoStyleLink = styled(Link)`
  text-decoration: none;
`;

const FlexBox = styled(Box)`
  display: flex;
`;

export { LargeCard, MediumCard, MediumCardContent, NoStyleLink, FlexBox };
