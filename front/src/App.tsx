import React from 'react';
import { Global as GlobalStyle } from './styles';
import Routes from './routes';
import { AppContainer } from './components';
import AppProvider from './hooks';

const App = () => (
  <AppProvider>
    <GlobalStyle />
    <AppContainer>
      <Routes />
    </AppContainer>
  </AppProvider>
);

export default App;
