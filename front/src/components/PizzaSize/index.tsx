import React from 'react';
import * as S from './styles';

// eslint-disable-next-line no-shadow
export enum SizeEnum {
  Small,
  Medium,
  Large,
}

interface PizzaSizeProps {
  price: string;
  name: string;
  size: SizeEnum;
}

const PizzaSize: React.FC<PizzaSizeProps> = ({ name, price, size }) => {
  const SelectedPizzaSize = () => {
    switch (size) {
      case SizeEnum.Large:
        return <S.PizzaLarge>{name}</S.PizzaLarge>;
      case SizeEnum.Medium:
        return <S.PizzaMedium>{name}</S.PizzaMedium>;
      default:
        return <S.PizzaSmall>{name}</S.PizzaSmall>;
    }
  };

  return (
    <S.PizzaContent>
      <SelectedPizzaSize />
      <S.PizzaPrice>{price}</S.PizzaPrice>
    </S.PizzaContent>
  );
};

export default PizzaSize;
