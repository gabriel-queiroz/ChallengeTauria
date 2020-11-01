import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../styles';

interface ContainerProps {
  selected?: boolean;
}

export const Container = styled.button<ContainerProps>`
  padding: 2rem;
  min-height: 350px;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  ${props =>
    props.selected &&
    css`
      box-shadow: 0 8px 20px 0 ${colors.grayLight};
    `}
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  flex: 1;
`;

export const IconContainer = styled.div<ContainerProps>`
  align-self: flex-end;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  display: none;
  position: absolute;

  ${props =>
    props.selected &&
    css`
      display: flex;
    `}
`;

export const Icon = styled(FontAwesomeIcon).attrs({
  icon: faCheckCircle,
})`
  color: ${colors.greenLight};
  font-size: 2rem;
  align-self: flex-end;
  display: flex;
`;
