import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Title,
  ContentPage,
  ActionButtons,
  PizzaSizeEnum,
  PizzaSize,
  Crust,
  CrustTypeEnum,
  ToppingSelect,
} from '../../components';
import { RouteNames } from '../../routes';
import * as S from './styles';

const Crusts = () => {
  const history = useHistory();
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
            <PizzaSize name="M" price="$12" size={PizzaSizeEnum.Large} />
          </S.SegmentContent>
        </S.Segment>
        <S.Segment>
          <S.SegmentTitle>Pizza Crust</S.SegmentTitle>
          <Crust name="Thin" type={CrustTypeEnum.Thin} />
        </S.Segment>
        <S.Segment>
          <S.SegmentTitle>Pizza Toppings</S.SegmentTitle>
          <S.SegmentContent>
            <ToppingSelect title="abc" confirmed />
            <ToppingSelect title="abc" confirmed />
            <ToppingSelect title="abc" confirmed />
            <ToppingSelect title="abc" confirmed />
            <ToppingSelect title="abc" confirmed />
            <ToppingSelect title="abc" confirmed />
          </S.SegmentContent>
        </S.Segment>
        <S.Segment>
          <S.SegmentTitle>Total</S.SegmentTitle>
          <S.SegmentContent>
            <S.TotalPrice>$20</S.TotalPrice>
          </S.SegmentContent>
        </S.Segment>
      </S.Container>
      <ActionButtons onPrevious={handleNavigateCrust} nextDisabled />
    </ContentPage>
  );
};

export default Crusts;
