// Three.js Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("bg"),
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({
  color: 0xff0000,
  wireframe: true,
});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

const light = new THREE.PointLight(0xffffff);
light.position.set(5, 5, 5);
scene.add(light);

camera.position.z = 30;

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  renderer.render(scene, camera);
}
animate();

function animateSubtitles(sectionId) {
  const subtitles = document.querySelectorAll(`${sectionId} .subtitle`);
  gsap.fromTo(
    subtitles,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
  );
}

function animateSkills() {
  const skills = document.querySelectorAll(".skill-card");
  gsap.fromTo(
    skills,
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 0.8, stagger: 0.2 }
  );
}

// Animate Welcome Subtitle on Load
gsap.to("#welcome-subtitle", { opacity: 1, y: 0, duration: 1 });

document.getElementById("explore").addEventListener("click", () => {
  gsap.to(".content", {
    opacity: 0,
    y: -50,
    duration: 1,
    onComplete: () => {
      document.getElementById("about").style.display = "block";
      gsap.to("#about", { opacity: 1, duration: 1 });
      animateSubtitles("#about");
      animateSkills();
    },
  });
});

document.getElementById("continue").addEventListener("click", () => {
  gsap.to("#about", {
    opacity: 0,
    y: -50,
    duration: 1,
    onComplete: () => {
      document.getElementById("projects").style.display = "block";
      gsap.to("#projects", { opacity: 1, duration: 1 });
      animateSubtitles("#projects");
    },
  });
});

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    const projectId = e.currentTarget.dataset.project;
    const projectDetails = {
      1: {
        title: "[ 📦 My Box ]",
        details: [
          "📄 Création de notes avec un éditeur Markdown interactif.",
          "💾 Sauvegarde automatique des notes en ligne.",
          "🔍 Gestion des notes via une interface simple et intuitive.",
          "❌ Suppression de notes via une API REST.",
          "🌐 Interface responsive et moderne avec Quill.js et un design en dark mode.",
          "Langages utilisés : Python, HTML, CSS, JavaScript",
        ],
        github: "https://github.com/KucoDEV/MyBox",
      },
      2: {
        title: "OratisAI",
        details: [
          "ORATIS est un pipeline complet pour la reconnaissance vocale automatique (ASR).",
          "Le projet implémente les étapes clés nécessaires pour convertir des fichiers audio en texte.",
          "Langages utilisés : Python",
        ],
        github: "https://github.com/OratisDEV/OratisAI",
      },
      3: {
        title: "Projet 3",
        details: [
          "Mettre description du projet 3 ici...",
          "Langages utilisés : ...",
        ],
        github: "https://github.com/votre-repo/projet-3",
      },
      4: {
        title: "Projet 4",
        details: [
          "Mettre description du projet 3 ici...",
          "Langages utilisés : ...",
        ],
        github: "https://github.com/votre-repo/projet-4",
      },
    };

    const selectedProject = projectDetails[projectId];
    document.getElementById("project-title").innerText = selectedProject.title;
    const projectInfo = document.getElementById("project-info");
    projectInfo.innerHTML = "";
    selectedProject.details.forEach((detail) => {
      const li = document.createElement("li");
      li.innerText = detail;
      projectInfo.appendChild(li);
    });

    const projectLink = document.getElementById("project-link");
    projectLink.href = selectedProject.github;

    gsap.to(".project-list", {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      onComplete: () => {
        document.querySelector(".project-list").style.display = "none";
        const details = document.getElementById("project-details");
        details.style.display = "block";
        gsap.fromTo(
          details,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.5 }
        );
      },
    });
  });
});

document.getElementById("back-to-projects").addEventListener("click", () => {
  const details = document.getElementById("project-details");
  gsap.to(details, {
    opacity: 0,
    scale: 0.9,
    duration: 0.5,
    onComplete: () => {
      details.style.display = "none";
      const projectList = document.querySelector(".project-list");
      projectList.style.display = "grid";
      gsap.fromTo(
        projectList,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5 }
      );
    },
  });
});
