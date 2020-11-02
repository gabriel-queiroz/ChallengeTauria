import React, { createContext, useState, useContext, useEffect } from 'react';
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
  const [total, setTotal] = useState<number>(0);

  const selectPizzaSize = (pizzaSize: PizzaSize) => {
    setPizzaSizeSelected(pizzaSize);
  };

  const selectCrust = (crust: Crust) => {
    setCrustSelected(crust);
  };

  useEffect(() => {
    let totalValue = 0;
    if (crustSelected) {
      totalValue += crustSelected.price;
    }
    if (pizzaSizeSelected) {
      totalValue += pizzaSizeSelected.price;
    }
    if (toppingsSelected.length > 3) {
      const valueToppings = toppingsSelected.length - 3;
      totalValue += valueToppings * 0.5;
    }
    setTotal(totalValue);
  }, [crustSelected, toppingsSelected, pizzaSizeSelected]);

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
