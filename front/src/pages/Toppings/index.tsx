import React from 'react';
import { useHistory } from 'react-router-dom';
import { Title, ContentPage, ActionButtons } from '../../components';
import { RouteNames } from '../../routes';

const Toppings = () => {
  const history = useHistory();
  const handleNavigateCrust = () => {
    history.push(RouteNames.crust);
  };

  const handleNavigateConfirmation = () => {
    history.push(RouteNames.confirmation);
  };

  return (
    <ContentPage>
      <Title showGoBack>Select Topping</Title>
      <ActionButtons
        onPrevious={handleNavigateCrust}
        onNext={handleNavigateConfirmation}
      />
    </ContentPage>
  );
};

export default Toppings;
