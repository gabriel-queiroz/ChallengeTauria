import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  align-self: flex-end;
`;

export const Button = styled.button`
  margin: 1rem;
  background-color: ${colors.redLight};
  color: ${colors.whiteLight};
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 8rem;
  justify-content: center;

  &:disabled {
    background-color: ${colors.blackLight};
    cursor: not-allowed;
  }
`;

export const ButtonTitle = styled.span`
  font-size: 1.2rem;
`;

export const IconLeft = styled(FontAwesomeIcon).attrs({
  icon: faArrowLeft,
})`
  color: ${colors.whiteLight};
  font-size: 1rem;
  margin-right: 0.5rem;
`;

export const IconRight = styled(IconLeft).attrs({
  icon: faArrowRight,
})`
  margin-left: 0.5rem;
`;
