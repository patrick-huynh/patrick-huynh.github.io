import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";

interface CardProp {
    title: string;
    body: string;
    footerList: any;
    github?: string;
    external?: string;
    img?: string;
}

export function Card({ title, body, footerList, github, external, img }: CardProp) {
    const primaryColor = "#368bcf";
    return (
        <ScrollAnimation animateIn="flipInX">
            <div className="project">
                <header>
                    <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke={primaryColor} stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    <div className="project-links">
                        {
                            github &&
                            <a className="project-link" href={github} target="_blank" rel="noreferrer">
                                <img src={githubIcon} alt="Visit site" />
                            </a>
                        }
                        {
                            external && <a className="project-link" href={external} target="_blank" rel="noreferrer">
                                <img src={externalLink} alt="Visit site" />
                            </a>
                        }
                    </div>
                </header>

                {
                    img &&
                    <div>
                        <img src={img} className="img-preview" />
                    </div>
                }

                <div className="body">
                    <h3>{title}</h3>
                    <p>
                        {body}
                    </p>
                </div>
                <footer>
                    <ul className="tech-list">
                        {
                            footerList.map((item: any) => (
                                <li>{item}</li>
                            ))
                        }
                    </ul>
                </footer>
            </div>
        </ScrollAnimation>
    )
}