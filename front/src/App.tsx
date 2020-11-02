import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Global as GlobalStyle } from './styles';
import Routes from './routes';
import { AppContainer } from './components';
import AppProvider from './hooks';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <AppProvider>
    <GlobalStyle />
    <AppContainer>
      <Routes />
      <ToastContainer />
    </AppContainer>
  </AppProvider>
);

export default App;
