import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../styles';

interface ContainerProps {
  selected?: boolean;
}

export const Container = styled.button<ContainerProps>`
  background-color: ${colors.redLight};
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  min-width: 200px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 100ms ease-in-out;
  ${props =>
    props.selected &&
    css`
      background-color: ${colors.greenLight};
    `}
`;

export const Title = styled.span`
  color: ${colors.whiteLight};
`;

export const IconAdd = styled(FontAwesomeIcon).attrs({
  icon: faPlus,
})`
  color: ${colors.whiteLight};
  font-size: 1.2rem;
`;

export const IconRemove = styled(FontAwesomeIcon).attrs({
  icon: faTrash,
})`
  color: ${colors.whiteLight};
  font-size: 1.2rem;
`;
