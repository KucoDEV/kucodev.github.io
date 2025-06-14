import mybox from "../Images/Projects/mybox.png";
import sae101 from "../Images/Projects/sae101.png";
import oratis_website from "../Images/Projects/oratis_website.png";
import streamit from "../Images/Projects/streamit.png";
import oratisai from "../Images/Projects/oratisai.png";
import inout from "../Images/Projects/inout.png";

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
    githubLink: "https://github.com/KucoDEV/BUT_1A_SAE1.01",
    Language: ["C", "Doxygen"],
    description:
        "Le projet, réalisé sur une période d’un mois et en binôme, consistait à créer une application en ligne de commande pour gérer des stages. L'objectif était de gérer trois types d'utilisateurs : les étudiants, les responsables de stages et les jurys, tout en sauvegardant les fichiers à chaque modification.\n" +
        " Je me suis principalement occupé de la gestion des étudiants, en veillant à ce que toutes les informations des étudiants soient correctement saisies, mises à jour et sauvegardées. J'ai également développé le système de sauvegarde, en assurant la persistance des données entre les sessions. \n" +
        "J’ai apporté à mon binôme une gestion du projet efficace, notamment par l’utilisation de Code#0 pour centraliser le code, ainsi que des réunions régulières (physiques ou en ligne) sur notre avancée, ce qui nous a permis de terminer ce projet dans les temps et dans de bonnes conditions.",
  },
  {
    id: 2,
    title: "StreamIt",
    link: "https://www.matheo-pichotmoise.fr/StreamIt",
    img: streamit,
    githubLink: "https://github.com/KucoDEV/StreamIt",
    Language: ["HTML", "CSS", "JavaScript"],
    description:
      "StreamIt propose une expérience de streaming fluide avec un accès direct aux épisodes et à leurs informations. L'application est conçue pour être simple et intuitive, permettant aux utilisateurs de naviguer facilement entre les séries et les épisodes.",
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
    title: "InOut",
    img: inout,
    githubLink: "https://github.com/KucoDEV/InOut",
    Language: ["Bash"],
    description:
      "Ce projet transforme l'apparence de votre environnement Linux pour le faire ressembler à Windows 10, facilitant ainsi la discrétion dans certains contextes. Il est conçu pour être utilisé dans des environnements où l'apparence de Windows est requise, comme dans les salles de classe ou les espaces de travail.",
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
