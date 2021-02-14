import whoDis from "../assets/new-website/who-dis.gif";
import lightHeart from "../assets/theme-switcher/light-theme-heart.gif";
import darkHeart from "../assets/theme-switcher/dark-theme-heart.gif";

import styled from "styled-components";

// image styling
const StyledImg = styled.img`
    filter: drop-shadow(0 0 15px var(--purple));
`;

export const GifToggle = () => {
    return <StyledImg src={whoDis} alt="new website who dis" />;
};

// image styling
const StyledToggle = styled.img`
    filter: drop-shadow(0 0 0.75em var(--purple));
    width: 8em;
`;

export const LightHeartToggle = () => {
    return <StyledToggle src={lightHeart} alt="a gif of a white rotating heart" width="100px" />;
};

export const DarkHeartToggle = () => {
    return <StyledToggle src={darkHeart} alt="a gif of a black rotating heart" width="100px" />;
};
