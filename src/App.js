// light - dark theme toggle -> https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/

// assets
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyle, { lightTheme, darkTheme } from "./theme/themeConfig";
import Content from "./components/Content";
import Credits from "./components/Credits";
import { WebGif, LightHeartToggle, DarkHeartToggle } from "./components/Images";

// Button
const Button = styled.div`
    border: 1px solid rgba(0, 0, 0, 0);
`;

// fixed toggle
const FixToggle = styled.div`
    position: fixed;
    top: 1em;
    left: 1em;
    z-index: 10;
`;

// App
const App = () => {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    };

    return (
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
            <GlobalStyle />
            <FixToggle>
                <Button onClick={toggleTheme}>
                    {theme === "dark" ? <LightHeartToggle /> : <DarkHeartToggle />}
                </Button>
            </FixToggle>
            <WebGif />
            <Content />
            <Credits />
        </ThemeProvider>
    );
};

export default App;
