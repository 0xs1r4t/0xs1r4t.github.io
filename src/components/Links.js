import styled from 'styled-components';

import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const StyledLinks = styled.a`
    font-size: var(--large);
    flex-direction: column;
`;

const StyledA = styled.a`
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
`;

const IconLink = props => {
    const { name } = props;
    const { link } = props;
    return <StyledA aria-label={ name } href={ link } />
}

const StyledIconLink = styled(IconLink)`
    font-size: var(--large);
    flex-direction: column;
    font-weight: bold;
    background-color: var(--soft-green);
    text-decoration: none;

    &:hover {
        background-color: var(--soft-pink);
    }
`;

export default function Links() {
    return(
        <div className='mid'>
            <StyledLinks>
            <StyledIconLink name='Github' link='https://github.com/sBx99'>
                <GitHubIcon />
            </StyledIconLink>
            <StyledIconLink name='My Home Page' link='https://sirat.xyz'>
                🏠
            </StyledIconLink>
            <StyledIconLink name='Twitter' link='https://twitter.com/baekedpies'>
                <TwitterIcon />
            </StyledIconLink>
            <StyledIconLink name='Glitch' link='https://glitch.com/@sBx99'>
                🎏
            </StyledIconLink>
            <StyledIconLink name='LinkedIn' link='https://linkedin.com/in/siratbaweja'>
                <LinkedInIcon />
            </StyledIconLink>
            </StyledLinks>
        </div>
    )
}