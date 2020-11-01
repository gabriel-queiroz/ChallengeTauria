import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div``;

export const Pizzas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PizzaSmall = styled.div`
  background-color: ${colors.redLight};
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  font-size: 2rem;
  color: ${colors.whiteLight};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PizzaMedium = styled(PizzaSmall)`
  width: 8rem;
  height: 8rem;
`;

export const PizzaBig = styled(PizzaSmall)`
  width: 11rem;
  height: 11rem;
`;
