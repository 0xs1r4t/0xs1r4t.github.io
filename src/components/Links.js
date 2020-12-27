import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const SpacedLinks = styled.a`
  padding: 0.25em;
`

export default function Links() {
  return (
    <div className="mid links">
      <SpacedLinks href="https://github.com/sBx99" aria-label="github">
        {
          // <i class="fab fa-github" aria-hidden="true"></i>
        }
        <FontAwesomeIcon icon={faGithub} aria-label="hidden" />
      </SpacedLinks>
      <SpacedLinks href="https://sirat.xyz" aria-label="main website">
        🏠
      </SpacedLinks>
      <SpacedLinks href="https://twitter.com/baekedpies" aria-label="twitter">
        <FontAwesomeIcon icon={faTwitter} aria-label="hidden" />
      </SpacedLinks>
      <SpacedLinks href="https://glitch.com/@sirat" aria-label="glitch">
        🎏
      </SpacedLinks>
      <SpacedLinks
        href="https://linkedin.com/in/siratbaweja"
        aria-label="linkedin">
        <FontAwesomeIcon icon={faLinkedin} aria-label="hidden" />
      </SpacedLinks>
    </div>
  )
}
