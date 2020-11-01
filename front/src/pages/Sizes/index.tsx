import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Title,
  ActionButtons,
  ContentPage,
  CardSelect,
} from '../../components';
import { RouteNames } from '../../routes';
import * as S from './styles';

const Sizes = () => {
  const history = useHistory();
  const [pizza, setPizza] = useState<number>();
  const handleNavigateCrust = () => {
    history.push(RouteNames.crust);
  };

  const handleSelectPizza = (pizzaId: number) => {
    setPizza(pizzaId);
  };

  return (
    <ContentPage>
      <Title showGoBack>Select Size</Title>
      <S.Container>
        <S.Pizzas>
          <CardSelect
            onClick={() => handleSelectPizza(1)}
            selected={pizza === 1}
          >
            <S.PizzaSmall>S</S.PizzaSmall>
          </CardSelect>
          <CardSelect
            onClick={() => handleSelectPizza(2)}
            selected={pizza === 2}
          >
            <S.PizzaMedium>M</S.PizzaMedium>
          </CardSelect>
          <CardSelect
            onClick={() => handleSelectPizza(3)}
            selected={pizza === 3}
          >
            <S.PizzaBig>G</S.PizzaBig>
          </CardSelect>
        </S.Pizzas>
      </S.Container>
      <ActionButtons
        onNext={handleNavigateCrust}
        previousDisabled
        nextDisabled={!pizza}
      />
    </ContentPage>
  );
};

export default Sizes;
