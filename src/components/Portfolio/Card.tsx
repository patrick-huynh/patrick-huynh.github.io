import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";

export function Card() {
    return (
        <ScrollAnimation animateIn="flipInX">
            <div className="project">
                <header>
                    <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    <div className="project-links">
                        <a href="https://ecommerce.vinayaksingh.in/wp-content/uploads/2022/08/Ecommerce.apk" target="_blank" rel="noreferrer">
                            <img src={DownloadApp} alt="Download App" />
                        </a>
                        <a href="https://ecommerce.vinayaksingh.in/" target="_blank" rel="noreferrer">
                            <img src={externalLink} alt="Visit site" />
                        </a>
                    </div>
                </header>
                <div className="body">
                    <h3>Demo - Ecommerce Site + App</h3>
                    <p>
                        The Website is made with the help of Wordpress and woocommerce. The Android app is made with the help of Java that converted website into app.
                    </p>
                </div>
                <footer>
                    <ul className="tech-list">
                        <li>Wordpress</li>
                        <li>Woocommerce</li>
                        <li>JavaScript</li>

                    </ul>
                </footer>
            </div>
        </ScrollAnimation>
    )
}