import React from 'react';
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
import PizzaSizeInterface from '../../interfaces/PizzaSize';
import * as S from './styles';
import { usePurchase } from '../../hooks/purchase';

const Sizes = () => {
  const history = useHistory();
  const { selectPizzaSize, pizzaSizeSelected } = usePurchase();

  const pizzasSizes: PizzaSizeInterface[] = [
    { id: 1, name: 'S', price: 8, size: PizzaSizeEnum.Small },
    { id: 2, name: 'M', price: 10, size: PizzaSizeEnum.Medium },
    { id: 3, name: 'L', price: 10, size: PizzaSizeEnum.Large },
  ];

  const handleNavigateCrust = () => {
    history.push(RouteNames.crust);
  };

  const handleSelectPizza = (pizzaSizeInterface: PizzaSizeInterface) => {
    selectPizzaSize(pizzaSizeInterface);
  };

  return (
    <ContentPage>
      <Title>Select Size Your Pizza</Title>
      <S.Container>
        <S.Pizzas>
          {pizzasSizes.map(pizzaSize => (
            <CardSelect
              onClick={() => handleSelectPizza(pizzaSize)}
              selected={pizzaSizeSelected.id === pizzaSize.id}
            >
              <PizzaSize
                name={pizzaSize.name}
                price={`$ ${pizzaSize.price}`}
                size={pizzaSize.size}
              />
            </CardSelect>
          ))}
        </S.Pizzas>
      </S.Container>
      <ActionButtons
        onNext={handleNavigateCrust}
        previousDisabled
        nextDisabled={!pizzaSizeSelected}
      />
    </ContentPage>
  );
};

export default Sizes;
