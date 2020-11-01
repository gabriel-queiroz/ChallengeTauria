import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  margin: 0 auto;
  width: 70%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Segment = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid ${colors.redLight};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SegmentTitle = styled.h4`
  color: ${colors.redLight};
  font-size: 1.5rem;
  flex: 1;
  width: 50%;
`;

export const SegmentContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const TotalPrice = styled.h5`
  font-size: 5rem;
`;
