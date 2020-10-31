import styled from 'styled-components';
import { colors } from '../../styles';

export const Header = styled.header`
  width: 100%;
  height: 5%;
  background-color: ${colors.redLight};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: ${colors.whiteLight};
  font-size: 2rem;
`;
