import React from 'react';
import { useHistory } from 'react-router-dom';
import { Title, ContentPage, ActionButtons } from '../../components';
import { RouteNames } from '../../routes';

const Crusts = () => {
  const history = useHistory();

  const handleNavigateSize = () => {
    history.push(RouteNames.size);
  };

  const handleNavigateTopping = () => {
    history.push(RouteNames.topping);
  };
  return (
    <ContentPage>
      <Title showGoBack>Select Crust</Title>
      <ActionButtons
        onPrevious={handleNavigateSize}
        onNext={handleNavigateTopping}
      />
    </ContentPage>
  );
};

export default Crusts;
