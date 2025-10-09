import portfolioData from "../data/portfolioData.js";

// Global variables
let currentFilter = "all";
let filteredBlogs = portfolioData.blog;

// Utility functions
function renderBlog() {
  const container = document.getElementById("all-blogs-grid");
  container.innerHTML = "";

  filteredBlogs.forEach((post) => {
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

function filterBlogs(category) {
  currentFilter = category;

  // Update filter buttons
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  document.querySelector(`[data-filter="${category}"]`).classList.add("active");

  // Filter blogs
  if (category === "all") {
    filteredBlogs = portfolioData.blog;
  } else {
    filteredBlogs = portfolioData.blog.filter(
      (post) => post.category === category
    );
  }

  renderBlog();
}

function searchBlogs(searchTerm) {
  const term = searchTerm.toLowerCase();

  let blogsToFilter =
    currentFilter === "all"
      ? portfolioData.blog
      : portfolioData.blog.filter(
          (post) => post.category === currentFilter
        );

  filteredBlogs = blogsToFilter.filter(
    (post) =>
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term) ||
      post.tags.some((tag) => tag.toLowerCase().includes(term))
  );

  renderBlog();
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Render all blogs
  renderBlog();

  // Blog filtering
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const filter = e.target.getAttribute("data-filter");
      filterBlogs(filter);
    });
  });

  // Blog search
  document.getElementById("blog-search").addEventListener("input", (e) => {
    searchBlogs(e.target.value);
  });

  // Close modal handlers
  document.getElementById('blog-modal').addEventListener('click', closeBlogModal);
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      closeBlogModal();
    }
  });
});

// Make functions globally available
window.closeBlogModal = closeBlogModal;
