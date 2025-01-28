// script.js
let currentSection = 0;
const sections = document.querySelectorAll(".section");
const totalSections = sections.length;

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Gestion du menu burger (ouverture/fermeture)
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Gestion du scroll fluide
function scrollToSection(index) {
  if (index >= 0 && index < totalSections) {
    currentSection = index;
    sections[index].scrollIntoView({ behavior: "smooth" });
  }
}

let isScrolling = false;
window.addEventListener("wheel", (event) => {
  if (isScrolling) return;

  if (event.deltaY > 0 && currentSection < totalSections - 1) {
    isScrolling = true;
    scrollToSection(currentSection + 1);
  } else if (event.deltaY < 0 && currentSection > 0) {
    isScrolling = true;
    scrollToSection(currentSection - 1);
  }

  setTimeout(() => {
    isScrolling = false;
  }, 700);
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn-project");
  const popups = document.querySelectorAll(".popup");
  const closeButtons = document.querySelectorAll(".close-popup");

  // Ouvrir la pop-up
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = button.getAttribute("data-project");
      const popup = document.getElementById(`popup-${projectId}`);
      if (popup) {
        popup.style.display = "flex";
      }
    });
  });

  // Fermer la pop-up
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const popup = button.closest(".popup");
      popup.style.display = "none";
    });
  });

  // Fermer la pop-up en cliquant en dehors du contenu
  popups.forEach((popup) => {
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });
  });
});
