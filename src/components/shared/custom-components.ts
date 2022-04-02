import styled from 'styled-components';
import { Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const MediumCard = styled(Card)`
  width: 350px;
`;

const MediumCardContent = styled(CardContent)`
  height: 5rem;
`;

const NoStyleLink = styled(Link)`
  text-decoration: none;
`;

export { MediumCard, MediumCardContent, NoStyleLink };
