import styled from 'styled-components';
// import Twemoji from 'react-twemoji';

const HeaderStyle = styled.h1`
    font-family: 'Sporting Grotesque Bold', monospace;
    font-size: var(--large);
    height: var(--large);
`;

export default function Header() {
    return(
        <div className='mid'>
            <HeaderStyle>
                Sirat Baweja
                <br />
                🔗🌴
            </HeaderStyle>
        </div>
    )
}