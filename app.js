import portfolioData from "./data/portfolioData.js";

// Global variables
let currentFilter = "all";
let filteredProjects = portfolioData.projects;

// Utility functions
function scrollToSection(sectionId) {

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

// New functions to fetch and update LeetCode stats dynamically



async function fetchLeetCodeStats(username) {
  try {
    const response = await fetch(`/api/leetcode?username=${username}`);
    if (!response.ok) throw new Error('Failed to fetch LeetCode stats');
    const data = await response.json();

    const counts = { easySolved: 0, mediumSolved: 0, hardSolved: 0, totalSolved: 0 };
data.submitStats.acSubmissionNum.forEach(item => {
  const diff = item.difficulty.toLowerCase();
  if (diff === 'easy') counts.easySolved = item.count;
  else if (diff === 'medium') counts.mediumSolved = item.count;
  else if (diff === 'hard') counts.hardSolved = item.count;
  else if (diff === 'all') counts.totalSolved = item.count; // total count from LeetCode
});

return { 
  totalSolved: counts.totalSolved,  // Use total from 'All' for accuracy
  easySolved: counts.easySolved,
  mediumSolved: counts.mediumSolved,
  hardSolved: counts.hardSolved,
  ranking: data.profile.ranking ?? 0
};

  } catch (error) {
    console.error(error);
    return null;
  }
}



function updateLeetCodeStatsUI(stats) {
  if (!stats) return;

  const card = document.getElementById('leetcode-stats-card');
  if (!card) return;

  card.innerHTML = `
    <h3>LeetCode</h3>
    <div class="achievement-stats">
      <div class="stat">
        <span class="stat-number">${stats.totalSolved}</span>
        <span class="stat-label">Problems Solved</span>
      </div>
      <div class="difficulty-breakdown">
        <div class="difficulty easy">
          <span>Easy: ${stats.easySolved}</span>
        </div>
        <div class="difficulty medium">
          <span>Medium: ${stats.mediumSolved}</span>
        </div>
        <div class="difficulty hard">
          <span>Hard: ${stats.hardSolved}</span>
        </div>
      </div>
      <div class="ranking">Ranking: #${stats.ranking.toLocaleString()}</div>
    </div>
  `;
}
// Fetch GitHub stats: public repos count and total stars
async function fetchGitHubStats(username) {
  try {
    // Fetch user info for public repo count
    const userResponse = await fetch(`https://api.github.com/users/${username}`);
    if (!userResponse.ok) throw new Error("Failed to fetch user info");
    const userData = await userResponse.json();

    // Fetch repositories list (max 100 repos)
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    if (!reposResponse.ok) throw new Error("Failed to fetch repositories");
    const reposData = await reposResponse.json();

    // Calculate total stars
    const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);

    return {
      publicRepos: userData.public_repos,
      totalStars: totalStars,
    };
  } catch (error) {
    console.error("GitHub stats fetch error:", error);
    return null;
  }
}

// Update GitHub stats UI dynamically
function updateGitHubStatsUI(stats) {
  if (!stats) return;

  const card = document.getElementById("github-stats-card");
  if (!card) return;

  card.innerHTML = `
    <h3>GitHub</h3>
    <div class="achievement-stats">
      <div class="stat">
        <span class="stat-number">${stats.publicRepos}</span>
        <span class="stat-label">Repositories</span>
      </div>
      <div class="stat">
        <span class="stat-number">${stats.totalStars}</span>
        <span class="stat-label">Stars</span>
      </div>
    </div>
  `;
}

function renderSkills() {
  const container = document.getElementById("skills-container");
  container.innerHTML = "";

  Object.entries(portfolioData.skills).forEach(([category, skills]) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "skill-category";

    const skillsHTML = skills
      .map(
        (skill) => `
      <div class="skill-item">
        <span class="skill-icon">${skill.icon}</span>
        <div class="skill-info">
          <div class="skill-name">${skill.name}</div>
          <div class="skill-progress">
            <div class="skill-progress-bar" data-level="${skill.level}"></div>
          </div>
        </div>
        <span class="skill-level">${skill.level}%</span>
      </div>
    `
      )
      .join("");

    categoryDiv.innerHTML = `
      <h3>${category}</h3>
      ${skillsHTML}
    `;

    container.appendChild(categoryDiv);
  });

  // Animate progress bars when they come into view
  setTimeout(() => {
    document.querySelectorAll(".skill-progress-bar").forEach((bar) => {
      const level = bar.getAttribute("data-level");
      bar.style.width = level + "%";
    });
  }, 100);
}

function renderTimeline() {
  const container = document.getElementById("timeline-container");
  container.innerHTML = "";

  portfolioData.experience.forEach((item) => {
    const timelineItem = document.createElement("div");
    timelineItem.className = "timeline-item";

    const startDate = formatDate(item.startDate);
    const endDate = item.current ? "Present" : formatDate(item.endDate);
    const dateRange = `${startDate} - ${endDate}`;

    const achievementsHTML = item.achievements
      .map((achievement) => `<li>${achievement}</li>`)
      .join("");

    timelineItem.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3 class="timeline-title">${item.title}</h3>
        <div class="timeline-company">${item.company}</div>
        <div class="timeline-date">${dateRange} • ${item.location}</div>
        <p class="timeline-description">${item.description}</p>
        <ul class="timeline-achievements">
          ${achievementsHTML}
        </ul>
      </div>
    `;

    container.appendChild(timelineItem);
  });
}

function renderBlog() {
  const container = document.getElementById("blog-container");
  container.innerHTML = "";

  portfolioData.blog.forEach((post) => {
    const blogCard = document.createElement("div");
    blogCard.className = "blog-card";

    const tagsHTML = post.tags
      .map((tag) => `<span class="blog-tag">${tag}</span>`)
      .join("");

    blogCard.innerHTML = `
      <div class="blog-image" style="background-image: url('${post.image}')"></div>
      <div class="blog-content">
        <div class="blog-meta">
          <span class="blog-category">${post.category}</span>
        </div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <div class="blog-tags">
          ${tagsHTML}
        </div>
        <div style="display:flex;justify-content:center;margin-top:16px;">
          <a href="${post.url || '#'}" class="certificate-link" target="_blank" rel="noopener" onclick="event.stopPropagation();">View Blog</a>
        </div>
      </div>
    `;
    blogCard.addEventListener('click', (e) => {
      // Only open modal if not clicking the View Blog link
      if (e.target.tagName === 'A' && e.target.classList.contains('certificate-link')) {
        // Let the link open in new tab
        return;
      }
      openBlogModal(post);
    });
    container.appendChild(blogCard);
  });
}

function openCertificateModal(cert) {
  const modal = document.getElementById('certificate-modal');
  const body = document.getElementById('certificate-modal-body');

  body.innerHTML = `
    <img src="${cert.image}" alt="${cert.title}" />
    <div class="certificate-title">${cert.title}</div>
    <div class="certificate-meta">Certificate No.: ${cert.certNo}</div>
    <div class="certificate-desc">${cert.description}</div>
    <a href="${cert.link}" class="certificate-link" target="_blank" rel="noopener">View Certificate</a>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCertificateModal(event) {
  if (event && event.target === event.currentTarget) {
    // Only close when clicking backdrop
    const modal = document.getElementById('certificate-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  } else if (!event) {
    // Close called from close button
    const modal = document.getElementById('certificate-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

function openBlogModal(post) {
  const modal = document.getElementById('blog-modal');
  const body = document.getElementById('blog-modal-body');

  const tagsHTML = post.tags
    .map((tag) => `<span class="blog-tag">${tag}</span>`)
    .join("");

  body.innerHTML = `
    <img src="${post.image}" alt="${post.title}" style="width:100%;max-height:220px;object-fit:cover;border-radius:8px;margin-bottom:24px;" />
    <div class="blog-title" style="font-size:2rem;color:var(--color-primary);margin-bottom:12px;">${post.title}</div>
    <div class="blog-meta" style="margin-bottom:12px;">
      <span class="blog-category" style="background:var(--color-primary);color:white;padding:4px 8px;border-radius:6px;font-size:14px;">${post.category}</span>
    </div>
    <div class="blog-excerpt" style="margin-bottom:16px;">${post.excerpt}</div>
    <div class="blog-tags" style="margin-bottom:24px;">${tagsHTML}</div>
    <div style="display:flex;justify-content:center;margin-top:8px;">
      <a href="${post.url || '#'}" class="certificate-link" target="_blank" rel="noopener">View Blog</a>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeBlogModal(event) {
  if (event && event.target === event.currentTarget) {
    // Only close when clicking backdrop
    const modal = document.getElementById('blog-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  } else if (!event) {
    // Close called from close button
    const modal = document.getElementById('blog-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

function renderCertificates() {
  const container = document.getElementById('certificates-grid');
  container.innerHTML = '';

  portfolioData.certificates.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'certificate-card';
    card.innerHTML = `
      <img src="${cert.image}" alt="${cert.title}" class="certificate-image"/>
      <div class="certificate-content">
        <div class="certificate-title">${cert.title}</div>
        <div class="certificate-meta">Certificate No.: ${cert.certNo}</div>
        <div class="certificate-meta">${cert.description}</div>
        <div style="display:flex;justify-content:center;margin-top:16px;">
          <a href="${cert.link}" class="certificate-link" target="_blank" rel="noopener" onclick="event.stopPropagation()">View Certificate</a>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openCertificateModal(cert));
    container.appendChild(card);
  });
}


function validateForm() {
  const form = document.getElementById("contact-form");
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  let isValid = true;

  // Clear previous errors
  document.querySelectorAll(".error-message").forEach((error) => {
    error.textContent = "";
  });

  // Validate name
  if (!name) {
    document.getElementById("name-error").textContent = "Name is required";
    isValid = false;
  }

  // Validate email
  if (!email) {
    document.getElementById("email-error").textContent = "Email is required";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    document.getElementById("email-error").textContent =
      "Please enter a valid email address";
    isValid = false;
  }

  // Validate subject
  if (!subject) {
    document.getElementById("subject-error").textContent =
      "Subject is required";
    isValid = false;
  }

  // Validate message
  if (!message) {
    document.getElementById("message-error").textContent =
      "Message is required";
    isValid = false;
  } else if (message.length < 10) {
    document.getElementById("message-error").textContent =
      "Message must be at least 10 characters long";
    isValid = false;
  }

  return isValid;
}

function setupIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe sections
  document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });
}

function setupSmoothScrolling() {
  // Update active nav link based on scroll position
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active");
      }
    });
  });
}

// Date formatting utility
function formatDate(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  if (isNaN(date)) return dateStr;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

// Project functions
function createProjectCard(project, isFeatured = false) {
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


// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Render all sections
  renderAllProjects();
  renderSkills();
  renderTimeline();
  renderBlog();
  renderCertificates();
  
  const leetcodeUsername = 'Ujwal_Khairnar'
  const githubUsername = 'Ujwal-27K';

  // Setup interactions
  setupIntersectionObserver();
  setupSmoothScrolling();

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

  fetchLeetCodeStats(leetcodeUsername).then(stats => {
  updateLeetCodeStatsUI(stats);
  });
  fetchGitHubStats(githubUsername).then(stats => {
  updateGitHubStatsUI(stats);
  });
  // Contact form
  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      alert("Thank you for your message! I'll get back to you soon.");
      document.getElementById("contact-form").reset();
    }
  });

  // Navigation menu toggle for mobile
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Close mobile menu when link is clicked
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });

  // Smooth scroll for navigation links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      scrollToSection(targetId);
    });
  });

  document.getElementById('certificate-modal').addEventListener('click', closeCertificateModal);
  document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){
    closeCertificateModal();
  }
  });

  // Close modal when clicking outside
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});

// Make functions globally available
window.scrollToSection = scrollToSection;
window.openProjectModal = openProjectModal;
window.closeModal = closeModal;
window.renderAllProjects = renderAllProjects;
window.closeCertificateModal = closeCertificateModal;
window.openCertificateModal = openCertificateModal;
window.openBlogModal = openBlogModal;
window.closeBlogModal = closeBlogModal;
