import React, { createContext, useState, useContext, useEffect } from 'react';

interface PurchaseContextState {
  toppingsSelected: object[];
  crustSelected: object;
  pizzaSizeSelected: object;
  selectPizzaSize(pizzaSize: any): void;
  selectCrust(crust: any): void;
  selectTopping(topping: any): void;
}

const PurchaseContext = createContext<PurchaseContextState>(
  {} as PurchaseContextState,
);

export const PurchaseProvider: React.FC = ({ children }) => {
  const [pizzaSizeSelected, setPizzaSizeSelected] = useState<any>();
  const [crustSelected, setCrustSelected] = useState<any>();
  const [toppingsSelected, setToppingsSelected] = useState<any>([]);

  const selectPizzaSize = (pizzaSize: any) => {
    setPizzaSizeSelected(pizzaSize);
  };

  const selectCrust = (crust: any) => {
    setCrustSelected(crust);
  };

  const selectTopping = (topping: any) => {
    const indexItem = toppingsSelected.findIndex(
      (item: any) => item === topping.id,
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
