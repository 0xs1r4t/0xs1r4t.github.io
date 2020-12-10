import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'AUTHENTIC Sans';
        src: url("https://cdn.glitch.com/4e08fdce-4f09-4168-8b21-d44271860232%2FAUTHENTICSans-90.woff2?v=1595102445095") format("woff2"),
        url("https://cdn.glitch.com/4e08fdce-4f09-4168-8b21-d44271860232%2FAUTHENTICSans-90.woff?v=1595102445203") format("woff"),
        url("https://cdn.glitch.com/4e08fdce-4f09-4168-8b21-d44271860232%2FAUTHENTICSans-90.otf?v=1595102498458") format("otf");
    }
    @font-face {
        font-family: 'Sporting Grotesque Regular';
        src: url('https://cdn.glitch.com/4e08fdce-4f09-4168-8b21-d44271860232%2FSportingGrotesque-Regular.otf?v=1599669222539') format("otf"),
        url('https://cdn.glitch.com/4e08fdce-4f09-4168-8b21-d44271860232%2FSportingGrotesque-Regular.woff?v=1599671067024') format('woff'),
        url('https://cdn.glitch.com/4e08fdce-4f09-4168-8b21-d44271860232%2FSportingGrotesque-Regular.woff2?v=1599671069801') format('woff2');
    }

    @font-face {
        font-family: 'Sporting Grotesque Bold';
        src: url('https://cdn.glitch.com/4e08fdce-4f09-4168-8b21-d44271860232%2FSportingGrotesque-Bold.otf?v=1599669221861') format("otf"),
        url('https://cdn.glitch.com/4e08fdce-4f09-4168-8b21-d44271860232%2FSportingGrotesque-Bold.woff?v=1599671065908') format('woff'),
        url('https://cdn.glitch.com/4e08fdce-4f09-4168-8b21-d44271860232%2FSportingGrotesque-Bold.woff2?v=1599671066327') format('woff2');
    }

    body {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
        font-family: 'AUTHENTIC Sans', cursive;
        color: white;
        background: #0C0C0C;
    }

    h1 {
        text-align: center;
        font-family: 'Sporting Grotesque Bold', 'Sporting Grotesque Regular', 'AUTHENTIC Sans', sans-serif;
    }
`;

export default GlobalStyle;