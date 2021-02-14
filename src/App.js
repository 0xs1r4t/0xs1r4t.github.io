// light - dark theme toggle -> https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/

// assets
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyle, { lightTheme, darkTheme } from "./theme/themeConfig";
import Content from "./components/Content";
import { LightHeartToggle, DarkHeartToggle } from "./components/HeartToggle";
// import { LightGifToggle, DarkGifToggle } from "./components/GifToggle";
import GifToggle from "./assets/new-website/who-dis.gif";

// Button
const Button = styled.div`
    border: 1px solid rgba(0, 0, 0, 0);
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
            <Button onClick={toggleTheme}>
                {theme === "dark" ? <LightHeartToggle /> : <DarkHeartToggle />}
            </Button>
            {/* theme === "dark" ? <DarkGifToggle /> : <LightGifToggle /> */}
            <img src={GifToggle} alt="new website who dis" />
            <Content />
        </ThemeProvider>
    );
};

export default App;
