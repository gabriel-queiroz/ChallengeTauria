import React from 'react';
import { useHistory } from 'react-router-dom';
import { Title, ContentPage, ActionButtons } from '../../components';
import { RouteNames } from '../../routes';

const Crusts = () => {
  const history = useHistory();
  const handleNavigateCrust = () => {
    history.push(RouteNames.topping);
  };

  return (
    <ContentPage>
      <Title showGoBack>Confirmation</Title>
      <ActionButtons onPrevious={handleNavigateCrust} nextDisabled />
    </ContentPage>
  );
};

export default Crusts;
