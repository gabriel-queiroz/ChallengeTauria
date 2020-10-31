import React from 'react';
import * as S from './styles';

interface ActionButtonsProps {
  onPrevious?: () => {};
  previousDisabled?: boolean;
  onNext?: () => {};
  nextDisabled?: boolean;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onPrevious,
  onNext,
  previousDisabled,
  nextDisabled,
}) => (
  <S.Container>
    <S.Button onClick={onPrevious} disabled={previousDisabled}>
      <S.IconLeft />
      <S.ButtonTitle>previous</S.ButtonTitle>
    </S.Button>
    <S.Button onClick={onNext} disabled={nextDisabled}>
      <S.ButtonTitle>Next</S.ButtonTitle>
      <S.IconRight />
    </S.Button>
  </S.Container>
);

export default ActionButtons;
