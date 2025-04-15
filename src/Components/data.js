import mybox from "../Images/Projects/mybox.png";
import sae101 from "../Images/Projects/sae101.png";
import oratis_website from "../Images/Projects/oratis_website.png";
import portfolio from "../Images/Projects/portfolio.png";
import oratisai from "../Images/Projects/oratisai.png";
import butprojets from "../Images/Projects/butprojets.png";

import { FaGitAlt, FaGithub } from "react-icons/fa";

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
  SiOvh,
  SiReplit,
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
  { id: 207, title: "C", icon: <SiCoursera />, color: "#2A73CC" },
  { id: 208, title: "C++", icon: <SiCplusplus />, color: "#00599C" },
  { id: 205, title: "Node.js", icon: <SiNodedotjs />, color: "#5CA74B" },
  { id: 206, title: "Python", icon: <SiPython />, color: "#306998" },
  { id: 209, title: "PSQL", icon: <SiPostgresql />, color: "#336791" },
  { id: 210, title: "PHP", icon: <SiPhp />, color: "#8993BE" },
];

export const skills2 = [
  { id: 301, title: "Github", icon: <FaGithub /> },
  { id: 302, title: "Git", icon: <FaGitAlt />, color: "#DE4C36" },
  { id: 303, title: "OVH", icon: <SiOvh />, color: "#2A73CC" },
  { id: 304, title: "Replit", icon: <SiReplit />, color: "#e56229" },
];

export const timelineData = [
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
    title: "SAE 1.01",
    img: sae101,
    githubLink: "https://codefirst.iut.uca.fr/git/matheo.pichot-moise/sae1-01",
    Language: ["C", "TXT"],
    description:
        "Le projet, réalisé sur une période d’un mois et en binôme, consistait à créer une application en ligne de commande pour gérer des stages. L'objectif était de gérer trois types d'utilisateurs : les étudiants, les responsables de stages et les jurys, tout en sauvegardant les fichiers à chaque modification.\n" +
        " Je me suis principalement occupé de la gestion des étudiants, en veillant à ce que toutes les informations des étudiants soient correctement saisies, mises à jour et sauvegardées. J'ai également développé le système de sauvegarde, en assurant la persistance des données entre les sessions. \n" +
        "J’ai apporté à mon binôme une gestion du projet efficace, notamment par l’utilisation de Code#0 pour centraliser le code, ainsi que des réunions régulières (physiques ou en ligne) sur notre avancée, ce qui nous a permis de terminer ce projet dans les temps et dans de bonnes conditions.",
  },
  {
    id: 2,
    title: "Portfolio",
    link: "https://www.matheo-pichotmoise.fr",
    img: portfolio,
    githubLink: "https://github.com/KucoDEV/kucodev.github.io",
    Language: ["HTML", "CSS", "JavaScript", "React"],
    description:
      "Ce projet est une vitrine de mes compétences, projets et services en tant que développeur passionné par les expériences interactives et le design innovant.",
  },
  {
    id: 3,
    title: "[ 📦 My Box ]",
    img: mybox,
    githubLink: "https://github.com/KucoDEV/MyBox",
    Language: ["HTML", "CSS", "JavaScript", "Python"],
    description:
      "[ 📦 My Box ] est une application Web qui permet aux utilisateurs de créer, enregistrer et consulter leurs notes en ligne. Ce projet est conçu pour offrir une expérience fluide et minimaliste avec un éditeur Markdown et une interface moderne.",
  },
  {
    id: 4,
    title: "OratisAI",
    img: oratisai,
    githubLink: "https://github.com/KucoDEV/OratisAI",
    Language: ["Python"],
    description:
      "ORATIS est un pipeline complet pour la reconnaissance vocale automatique (ASR). Le projet implémente les étapes clés nécessaires pour convertir des fichiers audio en texte. ",
  },
  {
    id: 5,
    title: "BUT-Projets",
    img: butprojets,
    githubLink: "https://github.com/KucoDEV/BUT-Projets",
    Language: ["C"],
    description:
      "Le dossier BUT-Project, qui contient différents projets réalisés dans le cadre de mes études en Informatique BUT. Chaque projet est stocké dans un sous-dossier et comprend sa propre documentation et les fichiers sources nécessaires.",
  },
  {
    id: 6,
    title: "Site Oratis",
    link: "https://www.oratis.fr",
    img: oratis_website,
    githubLink: "https://github.com/OratisDEV/oratisdev.github.io",
    Language: ["HTML", "CSS"],
    description:
      "ORATIS est un groupe de développement créatif et innovant, dédié à la création de solutions technologiques avancées. Ce projet constitue le site web officiel du groupe, présentant son équipe, ses valeurs, et des informations clés.",
  },
];
