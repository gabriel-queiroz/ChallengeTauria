import React, { createContext, useState, useContext } from 'react';
import Crust from '../interfaces/Crust';
import PizzaSize from '../interfaces/PizzaSize';
import Topping from '../interfaces/Topping';

interface PurchaseContextState {
  selectPizzaSize(pizzaSize: PizzaSize): void;
  selectCrust(crust: Crust): void;
  selectTopping(topping: Topping): void;
  toppingsSelected: Topping[];
  crustSelected: Crust;
  pizzaSizeSelected: PizzaSize;
  total: number;
}

const PurchaseContext = createContext<PurchaseContextState>(
  {} as PurchaseContextState,
);

export const PurchaseProvider: React.FC = ({ children }) => {
  const [pizzaSizeSelected, setPizzaSizeSelected] = useState<PizzaSize>(
    {} as PizzaSize,
  );
  const [crustSelected, setCrustSelected] = useState<Crust>({} as Crust);
  const [toppingsSelected, setToppingsSelected] = useState<Topping[]>([]);
  const [total] = useState<number>(0);

  const selectPizzaSize = (pizzaSize: PizzaSize) => {
    setPizzaSizeSelected(pizzaSize);
  };

  const selectCrust = (crust: Crust) => {
    setCrustSelected(crust);
  };

  const selectTopping = (topping: Topping) => {
    const indexItem = toppingsSelected.findIndex(
      (item: Topping) => item.id === topping.id,
    );

    if (indexItem !== -1) {
      toppingsSelected.splice(indexItem, 1);
      setToppingsSelected([...toppingsSelected]);
      return;
    }
    setToppingsSelected([...toppingsSelected, topping]);
  };

  return (
    <PurchaseContext.Provider
      value={{
        selectTopping,
        selectCrust,
        selectPizzaSize,
        pizzaSizeSelected,
        crustSelected,
        toppingsSelected,
        total,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
};

export function usePurchase(): PurchaseContextState {
  const context = useContext(PurchaseContext);
  if (!context) {
    throw new Error('usePurchase must  be used within a PurchaseProvider');
  }
  return context;
}
