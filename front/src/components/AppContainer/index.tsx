import React from 'react';
import * as S from './styles';
import { Header } from '..';

const AppContainer: React.FC = ({ children }) => (
  <S.Container>
    <Header />
    <S.Content>{children}</S.Content>
  </S.Container>
);

export default AppContainer;
