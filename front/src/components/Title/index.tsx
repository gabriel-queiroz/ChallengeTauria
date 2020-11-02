import React from 'react';
import * as S from './styles';

interface TitleProps {
  showGoBack?: boolean;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <S.Container>
      <S.Title>{children}</S.Title>
    </S.Container>
  );
};

export default Title;
