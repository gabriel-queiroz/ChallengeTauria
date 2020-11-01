import React from 'react';

import { useHistory } from 'react-router-dom';
import * as S from './styles';

interface TitleProps {
  showGoBack?: boolean;
}

const Title: React.FC<TitleProps> = ({ children, showGoBack }) => {
  const history = useHistory();
  const handleGoBack = () => history.goBack();

  return (
    <S.Container>
      {showGoBack && (
        <S.ButtonGoBack onClick={handleGoBack}>
          <S.Icon />
        </S.ButtonGoBack>
      )}

      <S.Title>{children}</S.Title>
    </S.Container>
  );
};

export default Title;
