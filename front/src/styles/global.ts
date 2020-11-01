import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root{
     height: 100%;
  }
  body {
    background: ${colors.whiteLight};
    color: ${colors.blackLight};
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
    background-color: transparent;
    outline: none;
    border: none;
  }

  @media screen and (max-width: 900px){
    body, input, button {
    font-size: 12px;
  }
  }
`;
