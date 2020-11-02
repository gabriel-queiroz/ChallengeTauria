import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Title,
  ContentPage,
  ActionButtons,
  ToppingSelect,
} from '../../components';
import { RouteNames } from '../../routes';
import * as S from './styles';
import { usePurchase } from '../../hooks/purchase';
import ToppingInterface from '../../interfaces/Topping';

const Toppings = () => {
  const history = useHistory();
  const { selectTopping, toppingsSelected } = usePurchase();
  const toppings: ToppingInterface[] = [
    { id: 1, name: 'Pepperoni' },
    { id: 2, name: 'Mushrooms' },
    { id: 3, name: 'Onions' },
    { id: 4, name: 'Sausage' },
    { id: 5, name: 'Bacon' },
    { id: 6, name: 'Extra cheese' },
    { id: 7, name: 'Black olives' },
    { id: 8, name: 'Green peppers' },
    { id: 9, name: 'Pineapple' },
    { id: 10, name: 'Spinach' },
  ];

  const handleNavigateCrust = () => {
    history.push(RouteNames.crust);
  };

  const handleNavigateConfirmation = () => {
    history.push(RouteNames.confirmation);
  };

  const handleSelectItem = (topping: ToppingInterface) => {
    selectTopping(topping);
  };

  const handleIsToppingSelected = (id: number): boolean => {
    return !!toppingsSelected.find(item => item.id === id);
  };

  return (
    <ContentPage>
      <Title showGoBack>Select Toppings your pizza</Title>
      <S.Toppings>
        {toppings.map(topping => (
          <ToppingSelect
            key={topping.id}
            title={topping.name}
            selected={handleIsToppingSelected(topping.id)}
            onClick={() => handleSelectItem(topping)}
          />
        ))}
      </S.Toppings>

      <S.MessageAlert show={toppingsSelected.length > 3}>
        Ao adicionar mais de 3 sabores, será cobrado $50 por cada sabor extra
      </S.MessageAlert>

      <ActionButtons
        onPrevious={handleNavigateCrust}
        onNext={handleNavigateConfirmation}
        nextDisabled={toppingsSelected.length === 0}
      />
    </ContentPage>
  );
};

export default Toppings;
