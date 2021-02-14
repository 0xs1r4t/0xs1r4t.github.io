import styled from "styled-components";

const StyledA = styled.a`
    color: var(--pink);
    text-decoration: none;
    border-bottom: 2px solid var(--purple);

    :hover {
        background: rgba(111, 56, 255, 0.5);
        border-bottom: 0px;
    }
`;

const Link = ({ link, name }) => {
    return (
        <StyledA
            href={link}
            className="highlight"
            target="_blank"
            rel="noopener noreferrer">
            {name}
        </StyledA>
    );
};

export default Link;
