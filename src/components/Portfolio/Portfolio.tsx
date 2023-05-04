import { Container } from "./styles";
import { PortfolioContent } from "./PortfolioContent";
import { Card } from "./Card";


export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {
          PortfolioContent.map(({ title, description, github, technologies, img }) => (
            <Card title={title} body={description} footerList={technologies} github={github} img={img} />
          ))
        }
      </div>
    </Container>
  );
}