import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  height: 100%;
  display: flex;
  background-color: ${colors.whiteDark};
  flex-direction: column;
`;

export const Content = styled.div`
  width: 95%;
  max-width: 1400px;
  margin: 0 auto;
  flex: 1;
  padding: 1rem 0px;
`;
