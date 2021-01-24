// light - dark theme toggle -> https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/

// assets
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import Link from "./components/Link";
import GlobalStyle from "./components/GlobalStyle";
import darkTheme from "./theme/darkTheme";
import lightTheme from "./theme/lightTheme";

// Button

const Button = styled.div`
    font-size: 2em;
    color: #afb;
    border: 1px solid rgba(0, 0, 0, 0);
`;

const App = () => {
    const stored = localStorage.getItem("isDarkMode");
    const [isDarkMode, setIsDarkMode] = useState(
        stored === "true" ? true : false,
    );

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Button
                onClick={() => {
                    setIsDarkMode(!isDarkMode);
                    localStorage.setItem("isDarkMode", !isDarkMode);
                }}>
                Toggle Dark Mode
            </Button>
            <img src={darkTheme.whoDis} alt="new website who dis 👀" />
            <h1>
                find me on <Link link="https://sirat.xyz/" name="sirat.xyz" />{" "}
                which is coming real soon! or you can just find me on{" "}
                <Link link="https://github.com/sBx99/" name="github" /> or{" "}
                <Link
                    link="https://linkedin.com/in/siratbaweja/"
                    name="linkedin"
                />
            </h1>
        </ThemeProvider>
    );
};

export default App;
