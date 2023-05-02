import Martinrea from "../../assets/martinrea.png";
import Cooperators from "../../assets/cooperators.png";

export const Experiences = [
  {
    title: "Software Engineer",
    company: "Martinrea Alfield",
    icon: Martinrea,
    location: "Vaughan, ON",
    date: "January 2023 - April 2023",
    description: (
      <p>
        • Integrated a modified version of ORB‑SLAM3 using C++ on a completely
        vision‑based autonomous intelligent vehicle (AIV) resulting in a fully
        automated delivery transport system
        <br />
        <br />• Collaborated with a team to implement the SLAM algorithm by
        unifying the Intel RealSense Depth cameras and IMU using the Extended
        Kalman Filter, so the AIV can support autonomous long distance
        navigation, removing encoder error accumulation.
        <br />
        <br />• Developed in a Linux environment on NVIDIA Jetsons using CUDA to
        parallelize bit‑wise masking, resulting in drastic performance boosts in
        real‑time generation of topdowns.
      </p>
    ),
    keyTerms: ["C++", "SLAM", "CUDA", "Robotics", "Computer Vision"],
  },
  {
    title: "Frontend Developer",
    company: "Martinrea Alfield",
    icon: Martinrea,
    location: "Vaughan, ON",
    date: "May 2022 - August 2022",
    description: (
      <p>
        • Implemented a portable and scalable application in HTML/CSS/JS/React
        that unifies different parts of the plant by creating a digital
        representation of the factory that will be used by various stakeholders
        including managers, maintainers, integrators, and developers
        <br />
        <br />• Integrated the Django‑based RESTful API and designed an abstract
        state management structure using Redux Toolkit and Axios to manage
        device registration, map configuration, and user authentication
        <br />
        <br /> • Led the development of a maintainable interface for a
        self‑driving autonomous intelligent vehicle (AIV) using advanced
        JavaScript/React design patterns (HOC, Provider, Hooks)
      </p>
    ),
    keyTerms: [
      "React",
      "Javascript",
      "HTML/CSS",
      "Redux",
      "Axios",
      "Cytoscape",
    ],
  },
  {
    title: "Full Stack Software Developer",
    company: "The Co-operators",
    icon: Cooperators,
    location: "Kitchener, ON",
    date: "August 2021 - December 2021",
    description: (
      <p>
        • Launched a Business Continuity Plan software using a MERN stack so
        clients can digitize CRUD operations of different plans including
        business model plans used by over 120 clients nation‑wide
        <br />
        <br />• Consolidated data from the frontend by centralizing the
        application state using Redux and storing it into the database with
        MongoDB • Assisted in creating the front‑end interface for an A.I. based
        chat bot using React and JavaScript frameworks that would autonomously
        provide customer service for clients and customers
        <br />
        <br />• Collaborated in an Agile workflow using Jira for ticket
        management, Bitbucket for version control, and Confluence
      </p>
    ),
    keyTerms: ["MonogoDB", "Express", "React", "Node", "HTML/CSS"],
  },
];
