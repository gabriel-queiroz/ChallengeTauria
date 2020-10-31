import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: ${colors.redLight};
`;

export const ButtonGoBack = styled.button``;

export const Icon = styled(FontAwesomeIcon).attrs({
  icon: faArrowLeft,
})`
  color: ${colors.redLight};
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;
