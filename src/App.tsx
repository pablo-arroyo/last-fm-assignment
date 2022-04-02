import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Home from './pages/Home';
import AlbumDetailPage from './pages/AlbumDetailPage';

const GlobalStyle = createGlobalStyle`
   body {
     background-color: #EEE;
     margin: 2rem;
   }
`;

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="album-detail/:mbid" element={<AlbumDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
