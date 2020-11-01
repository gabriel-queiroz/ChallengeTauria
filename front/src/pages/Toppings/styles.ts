import styled, { css } from 'styled-components';
import { colors } from '../../styles';

export const Toppings = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 70%;
  justify-content: center;
  flex-wrap: wrap;
`;

interface MessageAlertProps {
  show: boolean;
}

export const MessageAlert = styled.span<MessageAlertProps>`
  font-size: 0.8rem;
  margin: 0 auto;
  visibility: hidden;
  color: ${colors.redLightMessage};

  ${props =>
    props.show &&
    css`
      visibility: visible;
    `}
`;
