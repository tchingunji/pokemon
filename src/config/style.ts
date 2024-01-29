import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', Helvetica, Sans-Serif;
    box-sizing: border-box;
    font-size: 14px;
    text-decoration: none;
  }

  .Toastify__toast-container--top-right {
    background-color: transparent !important;
  }
`;

export default GlobalStyle;
