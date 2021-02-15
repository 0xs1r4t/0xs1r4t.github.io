import Link from "./Links";
import styled from "styled-components";
// useSound -
// import useSound from "use-sound";
// import boopSfx from "../../sounds/boop.mp3";

const StyledWrapper = styled.div`
    text-align: justify;
    word-break: break-word;
    color: ${({ theme }) => theme.color};
    font-size: 1.75em;
    letter-spacing: 0.05em;
    max-width: 525px;
    padding: 1em 1em 0 1em;
`;

const WrapName = styled.span`
    font-style: italic;
    background: ${({ theme }) => theme.link.background};
`;

const Content = () => {
    return (
        <StyledWrapper>
            hey there! i am <WrapName>Sirat Baweja</WrapName> and i like creating things with code.
            find me on <Link link="https://sirat.xyz/" name="sirat.xyz" /> which is coming real
            soon! or you can just check out my{" "}
            <Link link="https://github.com/sBx99/" name="github" /> or{" "}
            <Link link="https://linkedin.com/in/siratbaweja/" name="linkedin" />
        </StyledWrapper>
    );
};

export default Content;
