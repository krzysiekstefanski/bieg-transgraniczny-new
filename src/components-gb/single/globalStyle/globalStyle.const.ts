import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: "Inter", sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font: 112.5%/1.45em "Inter", serif;
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    min-height: 100%;
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    border: 0;

    &:focus {
      outline: none;
    }
  }

  *:before {
    box-sizing: inherit;
  }

  *:after {
    box-sizing: inherit;
  }

  button, html input[type="button"], input[type="reset"], input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
    overflow: visible;
  }

  input {
    font-family: inherit;
  }

  a {
    text-decoration: none;
  }
`;
