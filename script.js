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

document.getElementById("suivant").addEventListener("click", () => {
  gsap.to("#projects", {
    opacity: 0,
    y: -50,
    duration: 1,
    onComplete: () => {
      document.getElementById("services").style.display = "block";
      gsap.to("#services", { opacity: 1, duration: 1 });
      animateSubtitles("#services");
    },
  });
});

document.getElementById("fin").addEventListener("click", () => {
  gsap.to("#services", {
    opacity: 0,
    y: -50,
    duration: 1,
    onComplete: () => {
      document.getElementById("contact").style.display = "block";
      gsap.to("#contact", { opacity: 1, duration: 1 });
      animateSubtitles("#contact");
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

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("nav ul li a");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = button.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Animation des sections lors du chargement
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));

  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = contactForm.querySelector("input[type='text']").value.trim();
    const email = contactForm.querySelector("input[type='email']").value.trim();
    const message = contactForm.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      alert("Veuillez remplir tous les champs avant d'envoyer le formulaire.");
      return;
    }

    alert(`Le formulaire n'est pas en mesure de fonctionner pour le moment!`);
    contactForm.reset();
  });

  const allButtons = document.querySelectorAll("button");
  allButtons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.transform = "scale(1.1)";
    });

    button.addEventListener("mouseout", () => {
      button.style.transform = "scale(1)";
    });
  });
});

// ---------------------------------- /!\ MENU ICI /!\ ---------------------------------- //
// --- ALLEZ SUR LA PAGE A PROPOS
document.getElementById("home").addEventListener("click", () => {
  // CACHER CONTENT + animations
  gsap.to(".about", {
    opacity: 0,
    y: -50,
    duration: 0.5,
    onComplete: () => {
      document.getElementById("content").style.display = "block";
      gsap.to("#content", { opacity: 1, duration: 0.5 });
      animateSubtitles("#content");
      animateSkills();
    },
  });
  // CACHER PROJETS
  gsap.to(".projects", {
    opacity: 0,
    y: -50,
    duration: 0,
    onComplete: () => {
      document.getElementById("projects").style.display = "none";
    },
  });
  // CACHER SERVICE
  gsap.to(".services", {
    opacity: 0,
    y: -50,
    duration: 0,
    onComplete: () => {
      document.getElementById("services").style.display = "none";
    },
  });
  // CACHER CONTACT
  gsap.to(".contact", {
    opacity: 0,
    y: -50,
    duration: 0,
    onComplete: () => {
      document.getElementById("contact").style.display = "none";
    },
  });
});

// --- ALLEZ SUR LA PAGE A PROPOS
document.getElementById("apropos").addEventListener("click", () => {
  // CACHER CONTENT + animations
  gsap.to(".content", {
    opacity: 0,
    y: -50,
    duration: 0.5,
    onComplete: () => {
      document.getElementById("about").style.display = "block";
      gsap.to("#about", { opacity: 1, duration: 0.5 });
      animateSubtitles("#about");
      animateSkills();
    },
  });
  // CACHER PROJETS
  gsap.to(".projects", {
    opacity: 0,
    y: -50,
    duration: 0,
    onComplete: () => {
      document.getElementById("projects").style.display = "none";
    },
  });
  // CACHER SERVICE
  gsap.to(".services", {
    opacity: 0,
    y: -50,
    duration: 0,
    onComplete: () => {
      document.getElementById("services").style.display = "none";
    },
  });
  // CACHER CONTACT
  gsap.to(".contact", {
    opacity: 0,
    y: -50,
    duration: 0,
    onComplete: () => {
      document.getElementById("contact").style.display = "none";
    },
  });
});

// --- ALLEZ SUR LA PAGE PROJET
document.getElementById("projets").addEventListener("click", () => {
  // CACHER CONTENT + animations
  gsap.to(".content", {
    opacity: 0,
    y: -50,
    duration: 0.5,
    onComplete: () => {
      document.getElementById("projects").style.display = "block";
      gsap.to("#projects", { opacity: 1, duration: 0.5 });
      animateSubtitles("#projects");
      animateSkills();
    },
  });
  // CACHER ABOUT
  gsap.to(".about", {
    opacity: 0,
    y: -50,
    duration: 0,
    onComplete: () => {
      document.getElementById("about").style.display = "none";
    },
  });
  // CACHER SERVICE
  gsap.to(".services", {
    opacity: 0,
    y: -50,
    duration: 0,
    onComplete: () => {
      document.getElementById("services").style.display = "none";
    },
  });
  // CACHER CONTACT
  gsap.to(".contact", {
    opacity: 0,
    y: -50,
    duration: 0,
    onComplete: () => {
      document.getElementById("contact").style.display = "none";
    },
  });
});

// --- ALLEZ SUR LA PAGE SERVICES
document.getElementById("serv").addEventListener("click", () => {
  // CACHER CONTENT + animations
  gsap.to(".content", {
    opacity: 0,
    y: -50,
    duration: 0.5,
    onComplete: () => {
      document.getElementById("services").style.display = "block";
      gsap.to("#services", { opacity: 1, duration: 0.5 });
      animateSubtitles("#services");
      animateSkills();
    },
  });
  // CACHER ABOUT
  gsap.to(".about", {
    opacity: 0,
    y: -50,
    duration: 0,
    onComplete: () => {
      document.getElementById("about").style.display = "none";
    },
  });
  // CACHER PROJETS
  gsap.to(".projects", {
    opacity: 0,
    y: -50,
    duration: 0,
    onComplete: () => {
      document.getElementById("projects").style.display = "none";
    },
  });
  // CACHER CONTACT
  gsap.to(".contact", {
    opacity: 0,
    y: -50,
    duration: 0,
    onComplete: () => {
      document.getElementById("contact").style.display = "none";
    },
  });
});

// --- ALLEZ SUR LA PAGE CONTACT
document.getElementById("contct").addEventListener("click", () => {
  // CACHER CONTENT + animations
  gsap.to(".content", {
    opacity: 0,
    y: -50,
    duration: 0.5,
    onComplete: () => {
      document.getElementById("contact").style.display = "block";
      gsap.to("#contact", { opacity: 1, duration: 0.5 });
      animateSubtitles("#contact");
      animateSkills();
    },
  });
  // CACHER ABOUT
  gsap.to(".about", {
    opacity: 0,
    y: -50,
    duration: 0,
    onComplete: () => {
      document.getElementById("about").style.display = "none";
    },
  });
  // CACHER PROJETS
  gsap.to(".projects", {
    opacity: 0,
    y: -50,
    duration: 0,
    onComplete: () => {
      document.getElementById("projects").style.display = "none";
    },
  });
  // CACHER SERVICES
  gsap.to(".services", {
    opacity: 0,
    y: -50,
    duration: 0,
    onComplete: () => {
      document.getElementById("services").style.display = "none";
    },
  });
});