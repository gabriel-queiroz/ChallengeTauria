import React from 'react';
import * as S from './styles';

interface CardSelectProps {
  selected?: boolean;
  onClick: () => void;
}

const CardSelect: React.FC<CardSelectProps> = ({
  children,
  selected,
  onClick,
}) => (
  <S.Container onClick={onClick} selected={selected}>
    <S.IconContainer selected={selected}>
      <S.Icon />
    </S.IconContainer>
    <S.Content>{children}</S.Content>
  </S.Container>
);

export default CardSelect;
