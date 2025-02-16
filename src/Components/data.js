import placeholder from '../Images/Projects/placeholder.png';

import { FaBootstrap, FaGitAlt, FaGithub, FaLaptopCode } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiCoursera,
  SiCplusplus,
  SiPostgresql,
  SiPython,
  SiPhp,
} from "react-icons/si";
import { GiOpenBook } from "react-icons/gi";

export const startLink = "";

export const myPersonalInfo = [
  { id: 201, title: "Prénom", info: "Mathéo" },
  { id: 202, title: "Nom", info: "PICHOT-MOÏSE" },
  { id: 203, title: "Date naissance", info: "04 Déc 2006" },
  { id: 204, title: "Nationalité", info: "Française" },
  { id: 206, title: "Langues", info: "Français, Anglais" },
  { id: 208, title: "N° de téléphone", info: "+33 7 69 72 43 27" },
  { id: 207, title: "Email", info: "contact@matheo-pichotmoise.fr" },
  { id: 209, title: "Freelance", info: "Disponible", color: "#01ef92" },
];

export const skills = [
  { id: 201, title: "HTML", icon: <SiHtml5 />, color: "#e56229" },
  { id: 202, title: "CSS", icon: <SiCss3 />, color: "#007FFF" },
  { id: 203, title: "JavaScript", icon: <SiJavascript />, color: "#EAD41C" },
  { id: 204, title: "React", icon: <SiReact />, color: "#00CEF2" },
  { id: 205, title: "Node.js", icon: <SiNodedotjs />, color: "#5CA74B" },
  { id: 206, title: "Python", icon: <SiPython />, color: "#306998" },
  { id: 207, title: "C", icon: <SiCoursera />, color: "#2A73CC" },
  { id: 208, title: "C++", icon: <SiCplusplus />, color: "#00599C" },
  { id: 209, title: "PSQL", icon: <SiPostgresql />, color: "#336791" },
  { id: 210, title: "PHP", icon: <SiPhp />, color: "#8993BE" },
];

export const skills2 = [
  { id: 301, title: "Bootstrap", icon: <FaBootstrap />, color: "#733DBE" },
  { id: 302, title: "Github", icon: <FaGithub /> },
  { id: 303, title: "Git", icon: <FaGitAlt />, color: "#DE4C36" },
];

export const timelineData = [
  {
    date: "2022 - Aujourd’hui",
    title: "Développelment",
    organization: "Freelance",
    icon: <FaLaptopCode />,
  },
  {
    date: "Septembre 2024 - Aujourd’hui",
    title: "Etudiant BUT Informatique",
    organization: "IUT Clermont-Ferrand",
    icon: <GiOpenBook />,
  },
  {
    date: "Juillet 2024",
    title: "Baccalauréat Scientifique STI2D",
    organization: "Lycée La Fayette",
    icon: <GiOpenBook />,
  },
];

export const myProjects = [
  {
    id: 1,
    title: "Portfolio",
    link: "https://www.matheo-pichotmoise.fr",
    img: placeholder,
    githubLink: "https://github.com/KucoDEV/kucodev.github.io",
    Language: ["HTML", "CSS", "JavaScript", "React"],
    description:
      "Ce projet est une vitrine de mes compétences, projets et services en tant que développeur passionné par les expériences interactives et le design innovant.",
  },
  {
    id: 2,
    title: "[ 📦 My Box ]",
    link: "/",
    img: placeholder,
    githubLink: "https://github.com/KucoDEV/MyBox",
    Language: ["HTML", "CSS", "JavaScript", "Python"],
    description:
      "[ 📦 My Box ] est une application Web qui permet aux utilisateurs de créer, enregistrer et consulter leurs notes en ligne. Ce projet est conçu pour offrir une expérience fluide et minimaliste avec un éditeur Markdown et une interface moderne.",
  },
  {
    id: 3,
    title: "OratisAI",
    link: "/",
    img: placeholder,
    githubLink: "https://github.com/KucoDEV/OratisAI",
    Language: ["Python"],
    description:
      "ORATIS est un pipeline complet pour la reconnaissance vocale automatique (ASR). Le projet implémente les étapes clés nécessaires pour convertir des fichiers audio en texte. ",
  },
  {
    id: 4,
    title: "BUT-Projets",
    link: "/",
    img: placeholder,
    githubLink: "https://github.com/KucoDEV/BUT-Projets",
    Language: ["C"],
    description:
      "Le dossier BUT-Project, qui contient différents projets réalisés dans le cadre de mes études en Informatique BUT. Chaque projet est stocké dans un sous-dossier et comprend sa propre documentation et les fichiers sources nécessaires.",
  },
  {
    id: 5,
    title: "KeyWins",
    link: "/",
    img: placeholder,
    githubLink: "https://github.com/KucoDEV/KeyWins",
    Language: ["HTML", "CSS", "JavaScript"],
    description:
      "KeyWins est une extension de navigateur conçue pour automatiser la participation aux batailles de case gratuites sur Key-Drop.com. Il comprend une interface utilisateur intuitive pour configurer les préférences et gérer l'automatisation.",
  },
  {
    id: 6,
    title: "Site Oratis",
    link: "/",
    img: placeholder,
    githubLink: "https://github.com/OratisDEV/oratisdev.github.io",
    Language: ["HTML", "CSS"],
    description:
      "ORATIS est un groupe de développement créatif et innovant, dédié à la création de solutions technologiques avancées. Ce projet constitue le site web officiel du groupe, présentant son équipe, ses valeurs, et des informations clés.",
  },
];
