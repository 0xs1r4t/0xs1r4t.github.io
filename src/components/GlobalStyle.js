import { createGlobalStyle } from 'styled-components'

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
  	    background: var(--black);
  	    color: var(--white);
	      max-width: 100vw;
    }

    h1 {
      font-family: Cardo, serif;
      color: var(--purple);
      font-weight: 600;
      font-size: 1.5em;
      letter-spacing: 0.05em;
    }

    .highlight {
      color: var(--pink);
      text-decoration: none;
      border-bottom: 2px solid var(--purple);
    }

    .highlight:hover {
      background: rgba(111, 56, 255, 0.5);
      border-bottom: 0px;
    }

    ::selection {
      background-color: var(--pink);
      color: var(--white);
    }

    ::-moz-selection {
      background-color: var(--pink);
      color: var(--white);
    }

    @media screen and (max-width: 600px) {
        img {
          width: 95vw;
      }
    }
`

export default GlobalStyle
