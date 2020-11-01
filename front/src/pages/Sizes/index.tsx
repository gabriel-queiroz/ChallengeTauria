import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Title,
  ActionButtons,
  ContentPage,
  CardSelect,
  PizzaSize,
  PizzaSizeEnum,
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
      <Title>Select Size Your Pizza</Title>
      <S.Container>
        <S.Pizzas>
          <CardSelect
            onClick={() => handleSelectPizza(1)}
            selected={pizza === 1}
          >
            <PizzaSize name="S" price="$8" size={PizzaSizeEnum.Small} />
          </CardSelect>
          <CardSelect
            onClick={() => handleSelectPizza(2)}
            selected={pizza === 2}
          >
            <PizzaSize name="M" price="$10" size={PizzaSizeEnum.Medium} />
          </CardSelect>
          <CardSelect
            onClick={() => handleSelectPizza(3)}
            selected={pizza === 3}
          >
            <PizzaSize name="L" price="$12" size={PizzaSizeEnum.Large} />
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
