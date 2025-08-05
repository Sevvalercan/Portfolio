import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import eczajet from "../../public/eczajet.png";
import examImg from "../../public/exam.png";
import libraryImg from "../../public/library.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
 {
  title: "Computer Engineering Student",
  location: "Fırat University, Elazığ",
  description:
    "During my undergraduate studies in Computer Engineering, I focused on software development, algorithms, data structures, database systems, and core engineering principles.",
  icon: React.createElement(LuGraduationCap),
  date: "2018 ‑ 2023",
},
{
  title: "Software Intern",
  location: "SAGTEK Biomedical, Diyarbakır",
  description:
    "Worked on desktop applications using C#, .NET Framework, and SQL Server. Also performed database operations with PostgreSQL and gained practical experience in corporate software development.",
  icon: React.createElement(CgWorkAlt),
  date: "2021",
},
{
  title: "Software Intern",
  location: "İNSERES, Elazığ",
  description:
    "Contributed to enterprise software projects using Java and MySQL. Gained experience in backend development and database management.",
  icon: React.createElement(CgWorkAlt),
  date: "2021",
},
{
  title: "Jr. Front‑End Developer & Designer",
  location: "Tostbang Technology, Diyarbakır",
  description:
    "Currently working as a front-end developer and UI/UX designer. I develop user-friendly interfaces using technologies like React, Next.js, and Tailwind CSS.",
  icon: React.createElement(FaReact),
  date: "2023 ‑ present",
},
] as const;

export const projectsData = [
  {
    title: "Eczajet",
    description:
      "A web-based platform that helps users easily find on-duty pharmacies, nearby pharmacies, and the medicines they are looking for.",
    tags: ["Next.js", ".NET", "MongoDB", "Express", "Tailwind"],
    imageUrl: eczajet,
  },
  {
    title: "E-Exam System",
    description:
      "A system where users can take exams and solve multiple-choice tests, with an admin panel for managing exams and questions. The backend was developed using .NET Web API and MSSQL.",
    tags: ["Next.js", ".NET", "MSSQL", "Tailwind", "TypeScript"],
    imageUrl: examImg,
  },
  {
    title: "Library Reservation System",
    description:
      "A web-based platform where users can reserve books and make appointments, with an admin panel for managing the system.",
    tags: ["Next.js", ".NET", "MSSQL", "Tailwind", "TypeScript"],
    imageUrl: libraryImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "React",
  "Redux",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Framer Motion",
  ".NET",
  "C#",
  "Java",
  "MSSQL",
  "Figma",
  "UI/UX Design",
  //"Node.js",
  //"Git",
  //"Prisma",
  //"MongoDB",
  //"GraphQL",
  //"Apollo",
  //"Express",
  //"PostgreSQL",
  //"Python",
  //"Django",
] as const;
