import React from 'react';
import { StyledEngineProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import GlobalStyle from './commons/styles/global-style';
import Main from './containers/Main';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <Main />
    </StyledEngineProvider>
  );
}

export default App;
