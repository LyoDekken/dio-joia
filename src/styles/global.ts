import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }: any) => css`
    body {
      background-color: ${theme.colors.white};
    }

    body,
    input,
    textarea,
    button {
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
    }
  `}

`;

export default GlobalStyles;
