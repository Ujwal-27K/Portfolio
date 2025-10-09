import portfolioData from "../data/portfolioData.js";

// Global variables
let filteredCertificates = portfolioData.certificates;

// Utility functions
function renderCertificates() {
  const container = document.getElementById('all-certificates-grid');
  container.innerHTML = '';

  filteredCertificates.forEach(cert => {
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

function searchCertificates(searchTerm) {
  const term = searchTerm.toLowerCase();

  filteredCertificates = portfolioData.certificates.filter(
    (cert) =>
      cert.title.toLowerCase().includes(term) ||
      cert.description.toLowerCase().includes(term) ||
      cert.certNo.toLowerCase().includes(term)
  );

  renderCertificates();
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Render all certificates
  renderCertificates();

  // Certificate search
  document.getElementById("certificate-search").addEventListener("input", (e) => {
    searchCertificates(e.target.value);
  });

  // Close modal handlers
  document.getElementById('certificate-modal').addEventListener('click', closeCertificateModal);
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      closeCertificateModal();
    }
  });
});

// Make functions globally available
window.closeCertificateModal = closeCertificateModal;
