import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    // this is the shared style
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  h1 {
      color: blue !important; // the important is just to show that the style works!
  }

  // anything else you would like to include
`;