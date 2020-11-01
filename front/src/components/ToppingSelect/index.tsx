import React from 'react';
import * as S from './styles';

interface ToppingSelectProps {
  selected?: boolean;
  title?: string;
  onClick?: () => void;
}

const ToppingSelect: React.FC<ToppingSelectProps> = ({
  title,
  selected,
  onClick,
}) => (
  <S.Container selected={selected} onClick={onClick}>
    <S.Title>{title}</S.Title>
    {selected ? <S.IconRemove /> : <S.IconAdd />}
  </S.Container>
);

export default ToppingSelect;
