import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Title,
  ActionButtons,
  ContentPage,
  CardSelect,
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
            <S.CrustContent>
              <S.CrustThin>Thin</S.CrustThin>
              <S.CrustPrice>+$2</S.CrustPrice>
            </S.CrustContent>
          </CardSelect>
          <CardSelect
            onClick={() => handleSelectCrust(2)}
            selected={crust === 2}
          >
            <S.CrustContent>
              <S.CrustThick>Thick</S.CrustThick>
              <S.CrustPrice>+$4</S.CrustPrice>
            </S.CrustContent>
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
