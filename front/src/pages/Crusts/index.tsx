import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Title,
  ActionButtons,
  ContentPage,
  CardSelect,
  Crust,
  CrustTypeEnum,
} from '../../components';
import { RouteNames } from '../../routes';
import * as S from './styles';

const Sizes = () => {
  const history = useHistory();
  const [crust, setCrust] = useState<number>();
  const handleNavigateTopping = () => {
    history.push(RouteNames.topping);
  };

  const handleSelectCrust = (pizzaId: number) => {
    setCrust(pizzaId);
  };
  const handleNavigateSize = () => {
    history.push(RouteNames.size);
  };

  return (
    <ContentPage>
      <Title>Select Crust Your Pizza</Title>
      <S.Container>
        <S.Crusts>
          <CardSelect
            onClick={() => handleSelectCrust(1)}
            selected={crust === 1}
          >
            <Crust name="Thin" type={CrustTypeEnum.Thin} />
          </CardSelect>
          <CardSelect
            onClick={() => handleSelectCrust(2)}
            selected={crust === 2}
          >
            <Crust name="Thick" type={CrustTypeEnum.Thick} />
          </CardSelect>
        </S.Crusts>
      </S.Container>
      <ActionButtons
        onPrevious={handleNavigateSize}
        onNext={handleNavigateTopping}
        nextDisabled={!crust}
      />
    </ContentPage>
  );
};

export default Sizes;
