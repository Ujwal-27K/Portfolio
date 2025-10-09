import portfolioData from "../data/portfolioData.js";

// Global variables
let currentFilter = "all";
let filteredProjects = portfolioData.projects;

// Utility functions
function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";
  card.onclick = () => openProjectModal(project);

  const techTags = project.technologies
    .map((tech) => `<span class="tech-tag">${tech}</span>`)
    .join("");

  card.innerHTML = `
    <div class="project-image" style="background-image: url('${
      project.image
    }')">
      <div class="project-overlay">
        <button class="btn btn--primary" onclick="event.stopPropagation(); window.open('${
          project.demoUrl
        }', '_blank')">View Demo</button>
        <button class="btn btn--outline" onclick="event.stopPropagation(); window.open('${
          project.codeUrl
        }', '_blank')">View Code</button>
      </div>
    </div>
    <div class="project-content">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tech">${techTags}</div>
      <div class="project-status">
        <span class="status ${
          project.status === "Completed" ? "status--success" : "status--warning"
        }">
          ${project.status}
        </span>
      </div>
    </div>
  `;

  return card;
}

function openProjectModal(project) {
  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body");

  const techTags = project.technologies
    .map((tech) => `<span class="tech-tag">${tech}</span>`)
    .join("");

  modalBody.innerHTML = `
    <div class="modal-project">
      <img src="${project.image}" alt="${
    project.title
  }" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin-bottom: 24px;">
      <h2 style="font-size: 2rem; margin-bottom: 16px; color: var(--color-text);">${
        project.title
      }</h2>
      <p style="color: var(--color-text-secondary); font-size: 1.1rem; margin-bottom: 24px; line-height: 1.6;">${
        project.description
      }</p>
      
      <div style="margin-bottom: 24px;">
        <h3 style="color: var(--color-primary); margin-bottom: 12px;">Technologies Used</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">${techTags}</div>
      </div>
      
      <div style="margin-bottom: 24px;">
        <h3 style="color: var(--color-primary); margin-bottom: 12px;">Project Status</h3>
        <span class="status ${
          project.status === "Completed" ? "status--success" : "status--warning"
        }">
          ${project.status}
        </span>
      </div>
      
      <div style="display: flex; gap: 16px; margin-top: 32px;">
        <button class="btn btn--primary" onclick="window.open('${
          project.demoUrl
        }', '_blank')">View Live Demo</button>
        <button class="btn btn--outline" onclick="window.open('${
          project.codeUrl
        }', '_blank')">View Source Code</button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

function renderAllProjects() {
  const container = document.getElementById("all-projects-grid");
  container.innerHTML = "";

  filteredProjects.forEach((project) => {
    const card = createProjectCard(project);
    container.appendChild(card);
  });
}

function filterProjects(category) {
  currentFilter = category;

  // Update filter buttons
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  document.querySelector(`[data-filter="${category}"]`).classList.add("active");

  // Filter projects
  if (category === "all") {
    filteredProjects = portfolioData.projects;
  } else {
    filteredProjects = portfolioData.projects.filter(
      (project) => project.category === category
    );
  }

  renderAllProjects();
}

function searchProjects(searchTerm) {
  const term = searchTerm.toLowerCase();

  let projectsToFilter =
    currentFilter === "all"
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (project) => project.category === currentFilter
        );

  filteredProjects = projectsToFilter.filter(
    (project) =>
      project.title.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(term))
  );

  renderAllProjects();
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Render all projects
  renderAllProjects();

  // Project filtering
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const filter = e.target.getAttribute("data-filter");
      filterProjects(filter);
    });
  });

  // Project search
  document.getElementById("project-search").addEventListener("input", (e) => {
    searchProjects(e.target.value);
  });

  // Close modal when clicking outside
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});

// Make functions globally available
window.closeModal = closeModal;
window.openProjectModal = openProjectModal;
