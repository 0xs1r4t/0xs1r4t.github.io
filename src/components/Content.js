import Link from "./Links";
import styled from "styled-components";
// useSound -
// import useSound from "use-sound";
// import boopSfx from "../../sounds/boop.mp3";

const StyledWrapper = styled.div`
    word-break: break-word;
    color: ${({ theme }) => theme.color});
    font-size: 2em;
    letter-spacing: 0.05em;
    max-width: 500px;
    padding: 1em 1em 0 1em;
`;

const Content = () => {
    return (
        <StyledWrapper>
            find me on <Link link="https://sirat.xyz/" name="sirat.xyz" /> which is coming real
            soon! or you can just find me on <Link link="https://github.com/sBx99/" name="github" />{" "}
            or <Link link="https://linkedin.com/in/siratbaweja/" name="linkedin" />
        </StyledWrapper>
    );
};

export default Content;
