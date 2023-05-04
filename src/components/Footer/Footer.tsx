import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import { Socials } from '../../utils/Socials'

export function Footer() {
  return (
    <Container className="footer">
      <div>
        <p>
          Made with React.
        </p>
      </div>
      <div>
        <p>
          {"Thanks for dropping by :) Connect with me →"}
        </p>
      </div>
      <div className="social-media">
        {
          Socials.map(({ name, link, icon }) => (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <img src={icon} alt={name} />
            </a>
          ))
        }
      </div>
    </Container>
  )
}
