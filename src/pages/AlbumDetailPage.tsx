import React from 'react';
import { useParams } from 'react-router-dom';

function AlbumDetailPage(): JSX.Element {
  const { mbid } = useParams();

  return <div>{`Hello AlbumDetailPage -> ${mbid}`}</div>;
}

export default AlbumDetailPage;
