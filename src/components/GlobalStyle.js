import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,700;1,400;1,700&display=swap');

    @font-face {
        font-family: 'Sporting Grotesque Regular';
        src: url('https://cdn.glitch.com/4e08fdce-4f09-4168-8b21-d44271860232%2FSportingGrotesque-Regular.otf?v=1599669222539') format("otf"),
            url('https://cdn.glitch.com/4e08fdce-4f09-4168-8b21-d44271860232%2FSportingGrotesque-Regular.woff?v=1599671067024') format('woff'),
            url('https://cdn.glitch.com/4e08fdce-4f09-4168-8b21-d44271860232%2FSportingGrotesque-Regular.woff2?v=1599671069801') format('woff2');
    }

    @font-face {
        font-family: 'Sporting Grotesque Bold';
        src: url('https://cdn.glitch.com/4e08fdce-4f09-4168-8b21-d44271860232%2FSportingGrotesque-Bold.otf?v=1599669221861') format("otf"),
            url('https://cdn.glitch.com/4e08fdce-4f09-4168-8b21-d44271860232%2FSportingGrotesque-Bold.woff?v=1599671065908') format('woff'),
            url('https://cdn.glitch.com/4e08fdce-4f09-4168-8b21-d44271860232%2FSportingGrotesque-Bold.woff2?v=1599671066327') format('woff2');
    }

    @font-face {
        font-family: 'AUTHENTIC Sans';
        src: url("https://cdn.glitch.com/4e08fdce-4f09-4168-8b21-d44271860232%2FAUTHENTICSans-90.woff2?v=1595102445095") format("woff2"),
            url("https://cdn.glitch.com/4e08fdce-4f09-4168-8b21-d44271860232%2FAUTHENTICSans-90.woff?v=1595102445203") format("woff"),
            url("https://cdn.glitch.com/4e08fdce-4f09-4168-8b21-d44271860232%2FAUTHENTICSans-90.otf?v=1595102498458") format("otf");
    }

    /* variable names will be changed later */

    * {
  	    --white: white;
  	    --black: black;
	    --soft-pink: #f0c9f4;
  	    --soft-purple: #CEB3FE;
  	    --bright-blue: #396FFD;
  	    --bright-pink: #FF69B4;
	    --bright-purple: #8651d3;
  	    --soft-green: #BEFEB3;
	    --distance: 0.5em;
	    --large: 2em;
    }

    html {
  	    display: flex;
	    flex-direction: column;
  	    margin: 0;
  	    padding: 0;
  	    align-items: center;
  	    justify-content: center;
	    height: 100vh;
    }

    body {
  	    text-align: center;
  	    font-family: 'AUTHENTIC Sans', 'Space Mono', monospace;
  	    background: var(--bright-purple);
  	    color: var(--soft-green);
	    max-width: 100vw;
    }

    .mid {
        display: flex;
	    flex-direction: column;
	    max-width: 650px;
	    align-items: center;
	    align-content: center;
	    justify-items: center;
        justify-content: center;
        margin: 4em;
    }

    a {
      font-weight: bold;
      color: var(--soft-green);
    text-decoration: none;
  }

  a:hover {
      color: var(--soft-pink);
  }


  ::-moz-selection {
    background-color: var(--bright-blue);
    color: var(--soft-purple);
  }

  ::selection {
    background-color: var(--bright-blue);
    color: var(--soft-purple);
  }

  /* a rainbow animation i might use later*/
  @keyframes RainbowAnim {
    0%,
    100% {
      background-image: linear-gradient(to right, pink, yellow, cyan, violet);
    }
    25% {
      background-image: linear-gradient(to right, violet, pink, yellow, cyan);
    }
    50% {
      background-image: linear-gradient(to right, cyan, violet, pink, yellow);
    }
    75% {
      background-image: linear-gradient(to right, yellow, cyan, violet, pink);
    }
  }
`;

export default GlobalStyle;