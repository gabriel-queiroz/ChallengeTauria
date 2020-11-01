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
            <S.PizzaContent>
              <S.PizzaSmall>S</S.PizzaSmall>
              <S.PizzaPrice>$8</S.PizzaPrice>
            </S.PizzaContent>
          </CardSelect>
          <CardSelect
            onClick={() => handleSelectPizza(2)}
            selected={pizza === 2}
          >
            <S.PizzaContent>
              <S.PizzaMedium>M</S.PizzaMedium>
              <S.PizzaPrice>$10</S.PizzaPrice>
            </S.PizzaContent>
          </CardSelect>
          <CardSelect
            onClick={() => handleSelectPizza(3)}
            selected={pizza === 3}
          >
            <S.PizzaContent>
              <S.PizzaBig>G</S.PizzaBig>
              <S.PizzaPrice>$12</S.PizzaPrice>
            </S.PizzaContent>
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
