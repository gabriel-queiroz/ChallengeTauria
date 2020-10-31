import React from 'react';
import { useHistory } from 'react-router-dom';
import { Title, ActionButtons, ContentPage } from '../../components';
import { RouteNames } from '../../routes';

const Sizes = () => {
  const history = useHistory();

  const handleNavigateCrust = () => {
    history.push(RouteNames.crust);
  };

  return (
    <ContentPage>
      <Title showGoBack>Select Size</Title>
      <ActionButtons onNext={handleNavigateCrust} previousDisabled />
    </ContentPage>
  );
};

export default Sizes;
