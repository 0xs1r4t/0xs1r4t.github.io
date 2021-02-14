import lightGif from "../assets/new-website/light-theme.gif";
import darkGif from "../assets/new-website/dark-theme.gif";

export const LightGifToggle = () => {
    return <img src={lightGif} alt="new website who dis - dark" />;
};

export const DarkGifToggle = () => {
    return <img src={darkGif} alt="new website who dis - dark" />;
};
