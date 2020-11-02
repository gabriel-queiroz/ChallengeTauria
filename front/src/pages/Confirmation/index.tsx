import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Title,
  ContentPage,
  ActionButtons,
  PizzaSize,
  Crust,
  ToppingSelect,
} from '../../components';
import { RouteNames } from '../../routes';
import * as S from './styles';
import { usePurchase } from '../../hooks/purchase';

const Crusts = () => {
  const history = useHistory();
  const {
    toppingsSelected,
    crustSelected,
    pizzaSizeSelected,
    total,
    toppingsTotal,
  } = usePurchase();
  const handleNavigateCrust = () => {
    history.push(RouteNames.topping);
  };

  return (
    <ContentPage>
      <Title showGoBack>Confirmation</Title>
      <S.Container>
        <S.Segment>
          <S.SegmentTitle>Pizza Size</S.SegmentTitle>
          <S.SegmentContent>
            <PizzaSize
              name={pizzaSizeSelected.name}
              price={`$ ${pizzaSizeSelected.price}`}
              size={pizzaSizeSelected.size}
            />
          </S.SegmentContent>
        </S.Segment>
        <S.Segment>
          <S.SegmentTitle>Pizza Crust</S.SegmentTitle>
          <Crust
            name={crustSelected.name}
            type={crustSelected.type}
            price={crustSelected.price}
          />
        </S.Segment>
        <S.Segment>
          <S.SegmentTitle>Pizza Toppings</S.SegmentTitle>
          <S.SegmentContent>
            {toppingsSelected.map(topping => (
              <ToppingSelect title={topping.name} confirmed />
            ))}
            <S.ToppingsTotal>{`$ ${toppingsTotal}`}</S.ToppingsTotal>
          </S.SegmentContent>
        </S.Segment>
        <S.Segment>
          <S.SegmentTitle>Total</S.SegmentTitle>
          <S.SegmentContent>
            <S.TotalPrice>{`$ ${total}`}</S.TotalPrice>
          </S.SegmentContent>
        </S.Segment>
      </S.Container>
      <ActionButtons
        onPrevious={handleNavigateCrust}
        nextDisabled
        nextTitle="Confirm"
      />
    </ContentPage>
  );
};

export default Crusts;
