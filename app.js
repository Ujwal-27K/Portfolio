// Portfolio Data
const portfolioData = {
  projects: [
    {
      id: 1,
      title: "MERN E-commerce Platform",
      description:
        "A full-stack MERN e-commerce web application featuring secure user authentication, product browsing, shopping cart, order management, and admin dashboard, built with React, Node.js, Express, and MongoDB.",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20240319013954/Screenshot-2024-03-19-013706.png",
      technologies: [
        "React",
        "Redux Toolkit",
        "Material-UI",
        "Node.js",
        "Express",
        "MongoDB Atlas",
        "JWT",
        "Cloudinary",
        "Axios",
      ],
      category: "Web Development",
      demoUrl: "https://mern-ecommerce-platform-azure.vercel.app",
      codeUrl: "https://github.com/Ujwal-27K/mern-ecommerce-platform",
      featured: true,
      status: "Ongoing",
    },
    {
  "id": 2,
  "title": "Online Retail Insights",
  "description": "An end-to-end analytics dashboard for analyzing the UCI Online Retail II e-commerce dataset, featuring a React frontend with Material-UI, a Flask API backend, real-time updates with WebSocket, and a MySQL database for data storage.",
  "image": "https://res.cloudinary.com/dx42z76dx/image/upload/v1757171870/Screenshot_2025-09-06_204706_ttiz8w.png",
  "technologies": ["React", "Flask", "Material-UI", "Python Libraries"],
  "category": "Data Analytics",
  "demoUrl": "https://online-retail-insights.vercel.app/",
  "codeUrl": "https://github.com/Ujwal-27K/online-retail-insights",
  "featured": true,
  "status": "Completed"
},

    {
      id: 3,
      title: "Weather Forecast Dashboard",
      description:
        "Comprehensive weather app with real-time data, 5-day forecasts, air quality monitoring, and city search suggestions.",
      image: "https://res.cloudinary.com/dx42z76dx/image/upload/v1756651171/Screenshot_2025-08-31_200847_dvtklm.png",
      technologies: ["React", "Vite", "JavaScript", "CSS3", "WeatherAPI.com"],
      category: "Web Development",
      demoUrl: "https://weather-forecast-dashboard-iota.vercel.app",
      codeUrl: "https://github.com/Ujwal-27K/weather-forecast-dashboard",
      featured: true,
      status: "Completed",
    },
    {
      id: 4,
      title: "Color Palette Generator",
      description:
        "AI-powered color palette generator with Colormind API integration featuring color locking, keyboard shortcuts, and responsive design.",
      image: "https://res.cloudinary.com/dx42z76dx/image/upload/v1756651170/Screenshot_2025-08-31_200900_vieuqr.png",
      technologies: ["React", "Vite", "CSS3", "Colormind API", "JavaScript"],
      category: "Web Development",
      demoUrl: "https://color-palette-generator-ebon-chi.vercel.app/",
      codeUrl: "https://github.com/Ujwal-27K/color-palette-generator",
      featured: true,
      status: "Completed",
    },
    {
  id: 5,
  title: "Tic Tac Toe Game",
  description: "Interactive Tic Tac Toe game with two-player mode, dynamic board, and real-time win detection implemented using clean React components.",
  image: "https://res.cloudinary.com/dx42z76dx/image/upload/v1756651170/Screenshot_2025-08-31_200814_hjkvrx.png",
  technologies: ["JavaScript", "CSS3", "HTML5"],
  category: "Web Development",
  demoUrl: "https://tic-tac-toe-delta-six-98.vercel.app",
  codeUrl: "https://github.com/Ujwal-27K/tic-tac-toe",
  featured: false,
  status: "Completed",
},
{
  id: 6,
  title: "Responsive Portfolio Website",
  description: "Built a fully responsive static portfolio website showcasing projects, skills, and experience with modern design and smooth user interactions.",
  image: "https://res.cloudinary.com/dx42z76dx/image/upload/v1756651170/Screenshot_2025-08-31_200910_ybau3z.png",
  technologies: ["JavaScript", "CSS3", "HTML5"],
  category: "Web Development",
  demoUrl: "https://portfolio-eta-blush-qsq9j1ksqi.vercel.app",
  codeUrl: "https://github.com/Ujwal-27K/Portfolio",
  featured: true,
  status: "Completed",
},

  ],
  skills: {
    Languages: [
      { name: "JavaScript", level: 95, icon: "⚡" },
      { name: "Python", level: 88, icon: "🐍" },
      { name: "TypeScript", level: 85, icon: "📘" },
      { name: "Java", level: 78, icon: "☕" },
      { name: "SQL", level: 90, icon: "🗃️" },
    ],
    Frameworks: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "Node.js", level: 88, icon: "🟢" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "Express", level: 90, icon: "🚂" },
      { name: "Flask", level: 80, icon: "🌶️" },
    ],
    Tools: [
      { name: "Git", level: 92, icon: "🔄" },
      { name: "Docker", level: 85, icon: "🐳" },
      { name: "AWS", level: 80, icon: "☁️" },
      { name: "Figma", level: 88, icon: "🎨" },
      { name: "VS Code", level: 95, icon: "💻" },
    ],
    Databases: [
      { name: "MongoDB", level: 88, icon: "🍃" },
      { name: "PostgreSQL", level: 85, icon: "🐘" },
      { name: "Redis", level: 80, icon: "🔴" },
      { name: "Firebase", level: 90, icon: "🔥" },
    ],
  },
  experience: [
    {
      id: 1,
      type: "internship",
      title: "Web Development Intern",
      company: "Prodigy Infotech",
      location: "Remote",
      startDate: "2023-12",
      endDate: "2024-01",
      current: false,
      description:
        "Assisted in developing and maintaining web applications. Gained hands-on experience in front-end and back-end development.",
      achievements: [
        "Contributed to website modifications",
        "Implemented responsive UI components",
        "Collaborated with development team remotely",
      ],
    },
    {
      id: 2,
      type: "Education",
      title: "B.E. Computer Science",
      company: "Savitribai Phule Pune University",
      location: "Pune, India",
      startDate: "2021-11",
      endDate: "2025-06",
      current: false,
      description:
        "Bachelor of Engineering (2021-2025) from Dr. D Y Patil Institute of Engineering Management and Research, Akurdi, Pune.",
      achievements: [
        "Maintained a GPA of 8.09/10",
        "organized the Smart India Hackathon (SIH) at the institute.",
      ],
    },
  ],
  blog: [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt:
        "Learn the best practices for structuring large React applications with proper state management and component architecture.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      category: "React",
      readTime: "8 min read",
      date: "2024-08-15",
      tags: ["React", "Architecture", "Best Practices"],
    },
  ],
  certificates: [
    {
      title: "Front End Web Development Ultimate Guide",
      description: "Learned HTML, CSS, JavaScript, and responsive design to build modern web applications.",
      image: "https://udemy-certificate.s3.amazonaws.com/image/UC-909a5dd7-cec3-40b9-bc1b-e10d634084a9.jpg?v=1697136937000",
      link: "https://ude.my/UC-909a5dd7-cec3-40b9-bc1b-e10d634084a9",
      certNo: "UC-909a5dd7-cec3-40b9-bc1b-e10d634084a9"
    },
    {
      title: "Beginning C++ Programming - From Beginner To Beyond",
      description: "Covered C++ basics to advanced topics, object-oriented programming, and practical coding exercises.",
      image: "https://udemy-certificate.s3.amazonaws.com/image/UC-15fb8846-81f6-45a0-ab08-74a2da917f92.jpg?v=1690802586000",
      link: "https://ude.my/UC-15fb8846-81f6-45a0-ab08-74a2da917f92",
      certNo: "UC-15fb8846-81f6-45a0-ab08-74a2da917f92"
    },
    {
    title: "SQL (Intermediate) Certificate - HackerRank",
    description: "Demonstrated proficiency in SQL queries, joins, aggregations, subqueries, and advanced data manipulation techniques through problem-solving on HackerRank.",
    image: "https://res.cloudinary.com/dx42z76dx/image/upload/v1757236028/SQL_INTERMEDIATE_gqmspt.png",
    link: "https://www.hackerrank.com/certificates/1ad4f32511f0",
    certNo: "1AD4F32511F0"
    },
  ],
};

// Global variables
let currentFilter = "all";
let filteredProjects = portfolioData.projects;

// Utility functions
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}

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

    const date = new Date(post.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    blogCard.innerHTML = `
      <div class="blog-image" style="background-image: url('${post.image}')"></div>
      <div class="blog-content">
        <div class="blog-meta">
          <span class="blog-category">${post.category}</span>
          <span class="blog-read-time">${post.readTime}</span>
        </div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <div class="blog-tags">
          ${tagsHTML}
        </div>
        <div style="margin-top: 16px; font-size: 14px; color: var(--color-text-secondary);">
          Published on ${date}
        </div>
      </div>
    `;

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
        <a href="${cert.link}" class="certificate-link" target="_blank" rel="noopener" onclick="event.stopPropagation()">View Certificate</a>
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

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Render all sections
  renderAllProjects();
  renderSkills();
  renderTimeline();
  //renderBlog();
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
