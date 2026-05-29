
import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  git,
  figma,
  frontenduiproject,
  gameverse,
  cards,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Enthusiast",
    icon: creator,
  },
  {
    title: "Marketing & Leadership",
    icon: backend,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences: TExperience[] = [
  {
    title: "Campus Ambassador",
    companyName: "Paytm",
    icon: web,
    iconBg: "#383E56",
    date: "2026 - Present",
    points: [
      "Worked with the marketing and outreach team for campus campaigns.",
      "Recognized as a top performer and received official goodies.",
      "Built strong communication, networking and leadership skills.",
      "Promoted student engagement and brand awareness initiatives.",
    ],
  },

  {
    title: "Campus Ambassador",
    companyName: "EDC IIT Delhi",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Represented EDC IIT Delhi in campus entrepreneurship initiatives.",
      "Collaborated with students and startup communities.",
      "Participated in innovation and startup-oriented events.",
      "Developed networking and management experience.",
    ],
  },

  {
    title: "Hackathon Team Lead",
    companyName: "SIH & Hackathons",
    icon: reactjs,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Led teams in SIH, Visual Vortex and DCode hackathons.",
      "Cleared the internal round of Smart India Hackathon (SIH).",
      "Secured 2nd place in the Visual Vortex Hackathon.",
      "Managed team coordination, presentations and technical planning.",
    ],
  },

  {
    title: "Freelancer & Community Member",
    companyName: "E-Cell & Freelancing",
    icon: git,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Worked on frontend and UI-focused freelance projects.",
      "Active member of entrepreneurship and innovation communities.",
      "Participated in EDC IIT Delhi Startup Clinic as team leader.",
      "Built collaboration, leadership and client communication skills.",
    ],
  },
];



const projects: TProject[] = [
  {
    name: "Frontend UI Project",
    description:
      "A modern React and Tailwind CSS frontend website featuring employee cards, horizontal scrolling sections, responsive layouts and reusable UI components. Focused on mastering real-world frontend architecture and UI design patterns.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "ui-design", color: "pink-text-gradient" },
    ],
    image: frontenduiproject,
    sourceCodeLink: "https://github.com/Khush-Gautam/frontend-ui-project",
    liveLink: "https://frontend-ui-project-navy.vercel.app/",
  },

  {
    name: "GameVerse",
    description:
      "A web application for exploring free-to-play online games using real-time API integration. Includes filtering, sorting, and dynamic rendering with a clean responsive UI built using vanilla web technologies.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "api", color: "green-text-gradient" },
      { name: "responsive-ui", color: "pink-text-gradient" },
    ],
    image: gameverse,
    sourceCodeLink: "https://github.com/Khush-Gautam/gameverse",
    liveLink: "https://khush-gautam.github.io/gameverse/",
  },

  {
    name: "React Job Cards Project",
    description:
      "A React-based job listing UI displaying company job cards using reusable props and component-based architecture. Focused on clean UI, reusability, and frontend best practices.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "props", color: "green-text-gradient" },
      { name: "frontend", color: "pink-text-gradient" },
    ],
    image: cards,
    sourceCodeLink:
      "https://github.com/Khush-Gautam/react-job-cards-project",
    liveLink: "https://react-job-cards-project.vercel.app/",
  },
];
export { services, technologies, experiences, projects };
