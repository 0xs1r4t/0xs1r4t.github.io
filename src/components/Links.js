import styled from 'styled-components';

const MainLinks = styled.div`
    font-size: var(--large);
    flex-direction: column;
`;

export default function Links() {
    return(
        <div className='mid'>
            <MainLinks>
		<a href='https://github.com/sBx99' aria-label='github'>
			<i class="fab fa-github" aria-hidden='true'></i>
		</a>
		<a href='https://sirat.xyz' aria-label='main website'>🏠</a>
		<a href='https://twitter.com/baekedpies' aria-label='twitter'>
			<i class="fab fa-twitter" aria-hidden='true'></i>
		</a>
		<a href='https://glitch.com/@sirat' aria-label='glitch'>🎏</a>
		<a href='https://linkedin.com/in/siratbaweja' aria-label='linkedin'>
			<i class="fab fa-linkedin" aria-hidden='true'></i>
		</a>
	</MainLinks>
        </div>
    )
}