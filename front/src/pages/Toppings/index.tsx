import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Title,
  ContentPage,
  ActionButtons,
  ToppingSelect,
} from '../../components';
import { RouteNames } from '../../routes';
import * as S from './styles';

const Toppings = () => {
  const history = useHistory();
  const [toppingSelects, setToppingSelects] = useState<number[]>([]);
  const toppings = [
    { id: 1, name: 'Pepperoni' },
    { id: 2, name: 'Mushrooms' },
    { id: 3, name: 'Onions' },
    { id: 4, name: 'Bacon' },
    { id: 5, name: 'Extra cheese' },
    { id: 6, name: 'Black olives' },
    { id: 7, name: 'Green peppers' },
    { id: 8, name: 'Pineapple' },
    { id: 9, name: 'Spinach' },
  ];

  const handleNavigateCrust = () => {
    history.push(RouteNames.crust);
  };

  const handleNavigateConfirmation = () => {
    history.push(RouteNames.confirmation);
  };

  const handleSelectItem = (id: number) => {
    const indexItem = toppingSelects.findIndex(item => item === id);

    if (indexItem !== -1) {
      toppingSelects.splice(indexItem, 1);
      setToppingSelects([...toppingSelects]);
      return;
    }
    setToppingSelects([...toppingSelects, id]);
  };

  return (
    <ContentPage>
      <Title showGoBack>Select Toppings your pizza</Title>
      <S.Toppings>
        {toppings.map(topping => (
          <ToppingSelect
            key={topping.id}
            title={topping.name}
            selected={toppingSelects.includes(topping.id)}
            onClick={() => handleSelectItem(topping.id)}
          />
        ))}
      </S.Toppings>
      <ActionButtons
        onPrevious={handleNavigateCrust}
        onNext={handleNavigateConfirmation}
      />
    </ContentPage>
  );
};

export default Toppings;
