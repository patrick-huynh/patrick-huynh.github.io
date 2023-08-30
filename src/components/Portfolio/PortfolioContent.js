import Biquadris from "../../assets/biquadris.png";
import SudokuSolver from "../../assets/sudoku-solver.png";
import ShoppingBot from "../../assets/shopping-bot.png";
import DrGoose from "../../assets/dr-goose.png";
import DataManager from "../../assets/data-manager.png";

export const PortfolioContent = [
  {
    title: "Biquadris (Tetris)",
    description:
      "A CS246 final project, a 2-player Tetris-based game that allows players to compete in real time. Used advanced C++ as well as object oriented programming techniques.",
    github: "https://github.com/patrick-huynh/cs246/tree/main/final",
    technologies: ["C++", "Polymorphism", "X11"],
    img: Biquadris,
  },
  {
    title: "Dr. Goose",
    description:
      "An all-in-one student utility Google Chrome extension built in JS. Built to maximize productivity and minimizing the chance of burn out.",
    github: "https://github.com/patrick-huynh/Hack-the-North-2020-",
    technologies: ["JavaScript", "CSS", "Chrome API"],
    img: DrGoose,
  },
  {
    title: "Shopping Bot",
    description:
      "A light-weight bot that notifies users when new or out of stock online products are restocked on a variety of online store.",
    technologies: ["Python", "BeautifulSoup", "Requests", "Twilio API"],
    github: "https://github.com/patrick-huynh/Shopping-Bot",
    img: ShoppingBot,
  },
  {
    title: "Sudoku Solver",
    description:
      "A simple sudoku solver that uses backtracking algorithm to generate a possible solution.",
    technologies: ["C++", "Backtracking"],
    github: "https://github.com/patrick-huynh/Sudoku-Solver",
    img: SudokuSolver,
  },
  {
    title: "Data Manager",
    description:
      "Collaborated with a team to advertise, sell, and distribute school merchandise to high school graduates.",
    technologies: ["Excel"],
    img: DataManager,
  },
];
