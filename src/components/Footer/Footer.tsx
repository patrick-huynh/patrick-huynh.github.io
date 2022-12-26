import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'

import { githubLink, linkedinLink } from '../../utils/Links'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Patrick</span>
        <span>Huynh</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          Inspired by Vinayak
          <span>❤️</span>
        </p>

      </div>

      <div className="social-media">
        <a
          href={linkedinLink}
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </Container>
  )
}
