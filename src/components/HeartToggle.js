import lightHeart from "../assets/theme-switcher/light-theme-heart.gif";
import darkHeart from "../assets/theme-switcher/dark-theme-heart.gif";

export const LightHeartToggle = () => {
    return (
        <img
            src={lightHeart}
            alt="a gif of a white rotating heart"
            width="100px"
        />
    );
};

export const DarkHeartToggle = () => {
    return (
        <img
            src={darkHeart}
            alt="a gif of a black rotating heart"
            width="100px"
        />
    );
};
