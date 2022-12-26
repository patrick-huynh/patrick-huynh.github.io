import { Container } from "./styles";
import PatrickHuynh from "../../assets/Patrick_Huynh.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import { Skills } from "./Skills";
import ReactTooltip from 'react-tooltip';


export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            My name is Patrick Huynh and I'm studying computer science at the University of Waterloo</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>I am passionate in working on innovative software projects and striving for creative tech solutions.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>

          <p>Some of my sports and hobbies include photography, working out and ulitmate frisbee.</p>
        </ScrollAnimation>



        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>These are some of my skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          {
            Skills.map((item: any, idx: number) => {
              const { alt, icon } = item;
              return (
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={(0.1 + (idx / 100)) * 1000}>
                    <img data-tip={alt} src={icon} alt={alt} />
                  </ScrollAnimation>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={PatrickHuynh} alt="Patrick Huynh" />
        </ScrollAnimation>
      </div>
      <ReactTooltip />
    </Container >
  )
}
