// Type by [Raphaël Bastide](https://raphaelbastide.com/avara/) - [@velvetype](https://twitter.com/velvetype)
// By Raphaël Bastide and some contributions by Wei Huang + Lucas Le Bihan + Walid Bouchouchi + Jérémy Landes!

import styled from "styled-components";
import { CreditLink } from "./Links";

const StyledCredits = styled.div`
    position: fixed;
    bottom: 1.5em;
    right: 1.5em;
    padding: 0.75em 0.5em;
    z-index: 10;

    font-size: 0.75em;
    border: 1px solid ${({ theme }) => theme.color};
    border-radius: 10px;

    max-width: 150px;
    word-break: break-word;
    letter-spacing: 0.05em;

    :hover,
    :active {
        background: ${({ theme }) => theme.link.background};
    }

    @media (max-width: 768px) {
        font-size: 0.5em;
    }
`;

const Credits = () => {
    return (
        <StyledCredits>
            Typeface by the{" "}
            <CreditLink link="https://velvetyne.fr/fonts/avara" name="Velvetyne Type Foundary">
                Velvetyne Type Foundary
            </CreditLink>
        </StyledCredits>
    );
};

export default Credits;
