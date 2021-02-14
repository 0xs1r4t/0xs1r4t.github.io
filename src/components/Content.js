import Link from "./Link";
import styled from "styled-components";
// useSound -
// import useSound from "use-sound";
// import boopSfx from "../../sounds/boop.mp3";

const Wrapper = styled.div`
    padding: 1em;
    word-break: break-word;
    color: var(--purple);
    font-size: 2em;
    letter-spacing: 0.05em;
    max-width: 500px;

    @media (max-width: 768px) {
        font-size: 1.5em;
    }
`;

const Content = () => {
    return (
        <Wrapper>
            find me on <Link link="https://sirat.xyz/" name="sirat.xyz" /> which is coming real
            soon! or you can just find me on <Link link="https://github.com/sBx99/" name="github" />{" "}
            or <Link link="https://linkedin.com/in/siratbaweja/" name="linkedin" />
        </Wrapper>
    );
};

export default Content;
