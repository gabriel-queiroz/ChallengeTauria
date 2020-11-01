import React from 'react';
import * as S from './styles';

interface ToppingSelectProps {
  selected?: boolean;
  title: string;
  onClick?: () => void;
  confirmed?: boolean;
}

const ToppingSelect: React.FC<ToppingSelectProps> = ({
  title,
  selected,
  onClick,
  confirmed,
}) => {
  const SelectedIcon = () => {
    if (confirmed) return <S.IconConfirmed />;
    return selected ? <S.IconRemove /> : <S.IconAdd />;
  };
  return (
    <S.Container selected={selected || confirmed} onClick={onClick}>
      <S.Title>{title}</S.Title>
      <SelectedIcon />
    </S.Container>
  );
};

export default ToppingSelect;
