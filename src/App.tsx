import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Home from './pages/Home';

const GlobalStyle = createGlobalStyle`
   body {
     background-color: #EEE;
     margin: 2rem;
   }
`;

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
