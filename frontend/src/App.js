import React from 'react';
import GlobalStyle from './styles';

import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyle backgroundColor="rgba(0,0,0,0.9)" />
      <Routes />
    </>
  );
}

export default App;
