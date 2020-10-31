import React from 'react';
import { Global as GlobalStyle } from './styles';
import Routes from './routes';
import { Header } from './components';

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Routes />
  </>
);

export default App;
