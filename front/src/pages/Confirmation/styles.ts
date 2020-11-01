import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  margin: 0 auto;
  width: 70%;
`;

export const Segment = styled.div`
  padding: 20px 0px;
  border-bottom: 1px solid ${colors.redLight};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SegmentTitle = styled.h4`
  color: ${colors.redLight};
  font-size: 1.5rem;
`;

export const SegmentContent = styled.div``;
