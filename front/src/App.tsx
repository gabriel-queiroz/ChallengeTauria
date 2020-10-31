import React from 'react';
import { Global as GlobalStyle } from './styles';
import Routes from './routes';
import { AppContainer } from './components';

const App = () => (
  <>
    <GlobalStyle />
    <AppContainer>
      <Routes />
    </AppContainer>
  </>
);

export default App;
