import React from 'react';
import * as S from './styles';

interface ActionButtonsProps {
  onPrevious?: () => void;
  previousDisabled?: boolean;
  onNext?: () => void;
  nextTitle?: string;
  previousTitle?: string;
  nextDisabled?: boolean;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onPrevious,
  onNext,
  previousDisabled,
  nextDisabled,
  nextTitle,
  previousTitle,
}) => (
  <S.Container>
    <S.Button onClick={onPrevious} disabled={previousDisabled}>
      <S.IconLeft />
      <S.ButtonTitle>{previousTitle}</S.ButtonTitle>
    </S.Button>
    <S.Button onClick={onNext} disabled={nextDisabled}>
      <S.ButtonTitle>{nextTitle}</S.ButtonTitle>
      <S.IconRight />
    </S.Button>
  </S.Container>
);

ActionButtons.defaultProps = {
  previousTitle: 'previous',
  nextTitle: 'next',
};

export default ActionButtons;
