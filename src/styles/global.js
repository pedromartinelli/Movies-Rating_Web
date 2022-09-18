import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;

    outline: none;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  button, a {
    cursor: pointer;
    transition: 0.2s;
  } 

  button:hover, a:hover {
    filter: brightness(0.9);
  }

`;