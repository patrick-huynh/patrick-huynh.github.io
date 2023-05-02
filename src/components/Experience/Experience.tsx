import { Container } from "./styles"
import { useEffect } from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { Experiences } from "./Experiences"

export function Experience() {
    useEffect(() => {
        let html = document.getElementsByTagName("html")[0];
        console.log(html.classList)
    }, [])


    const primaryColor = "#368bcf";
    return (
        <Container id="experience">
            <h2>Experience</h2>
            <div className="experiences">
                <VerticalTimeline lineColor="#368bcf">

                    {
                        Experiences.map(({ title, company, icon, location, date, description, keyTerms }) => {
                            return (
                                <VerticalTimelineElement
                                    iconStyle={{ background: primaryColor, color: '#fff' }}
                                    date={date}
                                    textClassName="experience-timeline-element"
                                    contentStyle={{ background: "#2b2b2b" }}
                                    contentArrowStyle={{ borderRightColor: "#2b2b2b" }}
                                    icon={
                                        <div className="timeline-icon">
                                            <img
                                                src={icon}
                                                className="timeline-icon-img"
                                            />
                                        </div>
                                    }
                                >
                                    {
                                        <ul className="tech-list">
                                            {
                                                keyTerms.map((item: any) => (
                                                    <li>{item}</li>
                                                ))
                                            }
                                        </ul>
                                    }
                                    <h3 className="vertical-timeline-element-title">{title}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{location}</h4>
                                    <p>{description}</p>

                                </VerticalTimelineElement>
                            )
                        })
                    }
                </VerticalTimeline>
            </div>
        </Container>
    )
}