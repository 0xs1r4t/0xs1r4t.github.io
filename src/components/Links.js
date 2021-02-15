import styled from "styled-components";

const StyledA = styled.a`
    color: ${({ theme }) => theme.link.color};

    box-shadow: inset 0 -0.15em 0 ${({ theme }) => theme.link.underline};
    transition: all 0.25s;

    :hover {
        color: ${({ theme }) => theme.color};
        box-shadow: inset 0 -1.35em 0 ${({ theme }) => theme.link.background};
        border-bottom: 0px;
    }
`;

const Link = ({ link, name }) => {
    return (
        <StyledA href={link} target="_blank" rel="noopener noreferrer" alt={name}>
            {name}
        </StyledA>
    );
};

const StyledCreds = styled.a`
    color: ${({ theme }) => theme.color};
    transition: all 0.25s linear;
    text-decoration: none;
`;

export const CreditLink = ({ link, name }) => {
    return (
        <StyledCreds href={link} target="_blank" rel="noopenner noreferrer" alt={name}>
            {name}
        </StyledCreds>
    );
};

export default Link;
