import styled from 'styled-components';

const StyledDescription = styled.p`
    font-size: 1.5em;
    font-style: italic;
`;

const WavyStyles = styled.span`
    color: var(--soft-pink);
    font-family: 'Sporting Grotesque Regular', monospace;
    text-decoration: underline wavy;
`;

export default function Description() {
    return(
        <div className='mid'>
            <StyledDescription>
                hey there! this is my <WavyStyles>link tree</WavyStyles> and if you want to know more about me and my work, clicking on any of the links below would give you a great start!
            </StyledDescription>
        </div>
    )
}