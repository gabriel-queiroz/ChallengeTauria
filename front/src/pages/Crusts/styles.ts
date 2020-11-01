import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div``;

export const Crusts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CrustThick = styled.div`
  background-color: ${colors.redLight};
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  font-size: 2rem;
  color: ${colors.whiteLight};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1rem solid ${colors.blackDark};
`;

export const CrustThin = styled(CrustThick)`
  border: 0.5rem solid ${colors.blackDark};
`;

export const CrustPrice = styled.h4`
  margin-top: 1rem;
  font-size: 2rem;
`;

export const CrustContent = styled.h4`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;
