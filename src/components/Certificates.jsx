import React from 'react';

const Certificates = () => {
  // Replace with your actual certificates
  const certificates = [
    {
      id: 1,
      title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      date: '2024',
      imageUrl: 'https://via.placeholder.com/300x200', // Replace with cert image URL
      credentialUrl: 'https://www.credly.com/badges/your-badge-id',
    },
    {
      id: 2,
      title: 'Microsoft Certified: Azure Data Fundamentals (DP-900)',
      issuer: 'Microsoft',
      date: '2024',
      imageUrl: 'https://via.placeholder.com/300x200',
      credentialUrl: 'https://www.credly.com/badges/your-badge-id',
    },
    {
      id: 3,
      title: 'Beginning C++ Programming – From Beginner to Beyond',
      issuer: 'Udemy',
      date: '2023',
      imageUrl: 'https://via.placeholder.com/300x200',
      credentialUrl: 'https://www.udemy.com/certificate/your-cert-id',
    },
    {
      id: 4,
      title: 'Front End Web Development Ultimate Guide',
      issuer: 'Udemy',
      date: '2023',
      imageUrl: 'https://via.placeholder.com/300x200',
      credentialUrl: 'https://www.udemy.com/certificate/your-cert-id',
    },
  ];

  return (
    <section id="certificates" className="section certificates-section">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <p className="section-subtitle">My professional certifications</p>
        
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-image">
                <img src={cert.imageUrl} alt={cert.title} />
              </div>
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-issuer">
                  <i className="fas fa-award"></i> {cert.issuer}
                </p>
                <p className="certificate-date">
                  <i className="far fa-calendar"></i> {cert.date}
                </p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    View Credential <i className="fas fa-external-link-alt"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
