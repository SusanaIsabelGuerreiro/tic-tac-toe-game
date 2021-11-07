import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, 
  body {
    height: 100%;
    padding: 0;
    margin: 0;
  }
  body, button {
    font-family: 'Trebuchet MS', sans-serif;
  }
`;

export default GlobalStyle;
