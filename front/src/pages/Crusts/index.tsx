import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Title,
  ActionButtons,
  ContentPage,
  CardSelect,
  Crust,
  CrustTypeEnum,
} from '../../components';
import CrustInterface from '../../interfaces/Crust';
import { RouteNames } from '../../routes';
import * as S from './styles';
import { usePurchase } from '../../hooks/purchase';

const Sizes = () => {
  const history = useHistory();
  const { selectCrust, crustSelected } = usePurchase();
  const crusts: CrustInterface[] = [
    {
      id: 1,
      name: 'Thin',
      type: CrustTypeEnum.Thin,
      price: 2,
    },
    {
      id: 2,
      name: 'Thick',
      type: CrustTypeEnum.Thick,
      price: 4,
    },
  ];
  const handleNavigateTopping = () => {
    history.push(RouteNames.topping);
  };

  const handleSelectCrust = (crust: CrustInterface) => {
    selectCrust(crust);
  };
  const handleNavigateSize = () => {
    history.push(RouteNames.size);
  };

  return (
    <ContentPage>
      <Title showGoBack>Select Crust Your Pizza</Title>
      <S.Container>
        <S.Crusts>
          {crusts.map(crust => (
            <CardSelect
              onClick={() => handleSelectCrust(crust)}
              selected={crustSelected.id === crust.id}
            >
              <Crust name={crust.name} price={crust.price} type={crust.type} />
            </CardSelect>
          ))}
        </S.Crusts>
      </S.Container>
      <ActionButtons
        onPrevious={handleNavigateSize}
        onNext={handleNavigateTopping}
        nextDisabled={!crustSelected}
      />
    </ContentPage>
  );
};

export default Sizes;
