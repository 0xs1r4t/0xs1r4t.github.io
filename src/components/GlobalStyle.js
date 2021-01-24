import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
      --black: #0F0F0F;
      --white: #F0F0F0;
      --pink: #E838FF;
      --purple: #6F38FF;
    }

    html {
        margin: 0;
        padding: 0;
        height: 100%
    }

    body {
        display: flex;
	      flex-direction: column;
  	    align-items: center;
  	    justify-content: center;
        height: 100vh;

  	    text-align: center;
  	    font-family: monospace;
  	    background: ${props => props.theme.colors.background};
  	    color: ${props => props.theme.colors.textColor};
	      max-width: 100vw;
    }

    h1 {
      font-family: Cardo, serif;
      color: var(--purple);
      font-weight: 600;
      font-size: 1.5em;
      letter-spacing: 0.05em;
      max-width: 550px;
    }

    ::selection {
      background-color: var(--pink);
      color: var(--white);
      border-bottom: 2px solid var(--white);
    }

    ::-moz-selection {
      background-color: var(--pink);
      color: var(--white);
      border-bottom: 2px solid var(--white);
    }

    @media screen and (max-width: 600px) {
        img {
          width: 95vw;
        }

        h1 {
          font-width: 85vw;
        }
    }
`;

export default GlobalStyle;
