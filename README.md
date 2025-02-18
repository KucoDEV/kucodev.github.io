# Portfolio - Mathéo PICHOT-MOÏSE

Bienvenue sur mon portfolio ! Ce projet met en avant mes compétences, mes réalisations et mes services en tant que développeur passionné par les expériences interactives et le design innovant.

## 🎯 Objectif

Ce site a pour but de :

- Présenter mon parcours et mes compétences techniques.
- Mettre en avant mes projets en développement web, logiciels et intelligence artificielle.
- Offrir un accès simple à mes services et à mon expertise.
- Faciliter la prise de contact avec moi.

## 🌐 Démo

Vous pouvez consulter une démo en ligne de mon portfolio [ici](https://www.matheo-pichotmoise.fr)

## 🛠 Technologies Utilisées

Ce projet a été développé avec les technologies suivantes :

- **React.js** - Bibliothèque JavaScript pour la construction d'interfaces utilisateur dynamiques
- **Material UI** - Composants React pour une interface utilisateur moderne
- **CSS3 & Tailwind CSS** - Style et mise en page
- **JavaScript (ES6+)** - Fonctionnalités interactives et animations avancées
- **Framer Motion & GSAP** - Animations fluides et effets interactifs
- **EmailJS** - Gestion de l'envoi des emails depuis le formulaire de contact

## 📌 Fonctionnalités

- **Interface immersive** avec animations modernes et interactions avancées.
- **Sections dynamiques** : Accueil, À propos, Projets, Parcours, et Contact.
- **Affichage interactif des projets** avec détails et animations.
- **Formulaire de contact fonctionnel** avec envoi d'email via EmailJS.
- **Optimisation mobile** pour une expérience fluide sur tous les supports.
- **Navigation interactive** avec un menu fixe en version desktop et un menu bottom pour mobile.

## 📂 Structure du projet

```
portfolio/
├── public/
│   ├── index.html       # Fichier HTML principal
├── src/
│   ├── Components/      # Composants
│   ├── Images/          # Ressources
│   ├── Styles/          # Feuilles de style CSS
│   ├── App.js           # Composant principal
│   ├── index.js         # Point d'entrée de l'application React
│   ├── data.js          # Données des projets et informations personnelles
│   ├── ScrollToTop.jsx  # Gestion du scrolling dynamique
├── .gitignore           # Fichiers à ignorer par Git
├── CNAME                # Configuration du domaine personnalisé
├── CODE_OF_CONDUCT.md   # Code de conduite du projet
├── CONTRIBUTING.md      # Guide de contribution
├── LICENSE              # Licence du projet
├── package-lock.json    # Dépendances verrouillées
├── package.json         # Dépendances et scripts
└── README.md            # Documentation du projet
```

## 🚀 Installation et Exécution

1. Cloner ce dépôt :
   ```bash
   git clone https://github.com/KucoDEV/portfolio.git
   ```
2. Installer les dépendances :
   ```bash
   cd portfolio
   npm install
   ```
3. Lancer l'application en local :
   ```bash
   npm start
   ```
4. Accéder à `http://localhost:3000` dans votre navigateur.

## 🚢 Déploiement sur GitHub Pages

1. Assurez-vous que `gh-pages` est bien installé et que les scripts suivants sont déjà ajoutés dans `package.json` :
   ```json
   "scripts": {
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   }
   ```

2. Déployer le projet avec la commande :
   ```bash
   npm run deploy
   ```

3. Configurer GitHub Pages :
   - Aller dans les paramètres du dépôt GitHub.
   - Accéder à la section **Pages**.
   - Vérifier que la branche `gh-pages` est bien sélectionnée comme source de déploiement.

## 📜 Licence

Ce projet est sous licence **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International**.  
Vous êtes libre de partager le contenu, mais **vous ne pouvez ni le modifier, ni l'utiliser à des fins commerciales**.  
Plus d’informations : [CC BY-NC-ND 4.0](http://creativecommons.org/licenses/by-nc-nd/4.0/)