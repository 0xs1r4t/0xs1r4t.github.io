import { createGlobalStyle } from "styled-components";

// fonts
import avaraTtf from "../assets/fonts/avara.ttf";
import avaraWoff from "../assets/fonts/avara.woff";
import avaraWoff2 from "../assets/fonts/avara.woff2";

export const lightTheme = {
    background: "#f0f0f0",
    textColor: "#0f0f0f",
    heartToggle: "../assets/theme-switcher/dark-theme-heart.gif",
    whoDis: "../assets/new-website/light-theme.gif",
};

export const darkTheme = {
    background: "#0f0f0f",
    textColor: "#f0f0f0",
    heartToggle: "../assets/theme-switcher/light-theme-heart.gif",
    whoDis: "../assets/new-website/dark-theme.gif",
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Avara";
    src: url(${avaraWoff2}) format("woff2"),
        url(${avaraWoff}) format("woff"),
        url(${avaraTtf}) format("ttf");
    font-weight: normal;
    display: swap;
  }

    * {
      --black: #0F0F0F;
      --white: #F0F0F0;
      --pink: #E838FF;
      --transparentPink: #f0f8;
      --transparentPurple: #00f8;
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
        max-width: 100vw;

  	    text-align: center;
        font-family: "Avara", serif;
  	    background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.textColor};
        transition: all 0.25s linear;
    }

    ::selection {
      background-color: var(--transparentPink);
      color: ${({ theme }) => theme.textColor};
      border-bottom: 2px solid var(--white);
    }

    ::-moz-selection {
      background-color: var(--transparentPink);
      color: ${({ theme }) => theme.textColor};
      border-bottom: 2px solid var(--white);
    }

    @media screen and (max-width: 600px) {
        img {
          width: 95vw;
        }
    }
`;

export default GlobalStyle;
