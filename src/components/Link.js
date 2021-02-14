import styled from "styled-components";

const StyledA = styled.a`
    color: var(--pink);
    text-decoration: none;
    border-bottom: 2px solid var(--purple);

    :hover {
        background: rgba(111, 56, 255, 0.5);
        border-bottom: 0px;
    }

    :active {
        background: var(--transparentPink);
        transform: scale(1.075);
    }
`;

const Link = ({ link, name }) => {
    return (
        <StyledA
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            alt={name}>
            {name}
        </StyledA>
    );
};

export default Link;
