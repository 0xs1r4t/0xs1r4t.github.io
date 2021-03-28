import { createGlobalStyle } from "styled-components/macro";

const GlobalStyles = createGlobalStyle`
:root {
  --white: #fff;
  --green: #BF8;
  --purple: #DCF;
  --blue: #00F;
}

* {
    /* border: 2px solid #f0f; */
    margin: 0;
    padding: 0;
}

#root {
    height: 95%;
    overflow: hidden;
}

*, *::before, *::after {
    box-sizing: border-box;
}

html {
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100vw;
}

html,
body {
    overflow: hidden;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: var(--green);
    color: var(--blue);

    overflow-wrap: break-word;
    word-break: break-word;
    text-rendering: optimizeSpeed;
    line-height: 1.2;

    transition: all 0.25s linear;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a, button {
    cursor: pointer;
}

a, a:any-link {
    font-family: inherit;
    color: inherit;
    text-decoration: none;
}

a:hover, a:focus {
    text-decoration: none;
    transform: scale(0.9);
}

button:hover,
button:focus {
    background: #0000;
}

button:focus {
    outline: 1px solid #0000;
    outline-offset: -4px;
}

button:active {
    transform: scale(0.9);
}

::selection {
    background-color: var(--white);
    color: var(--blue);
}

::-moz-selection {
    background-color: var(--white);
    color: var(--blue);
}
`;

export default GlobalStyles;
