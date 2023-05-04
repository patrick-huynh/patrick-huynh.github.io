import Particles from "react-tsparticles";
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Portfolio } from "../Portfolio/Portfolio";
import { Experience } from "../Experience/Experience";

export function Main() {
  return (
    <Container>
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      <Portfolio></Portfolio>
      {/* <Contact></Contact> */}

    </Container>
  );
}
