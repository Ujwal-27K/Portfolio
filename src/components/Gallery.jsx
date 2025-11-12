import React from 'react';

// Gallery component - Hidden from UI but code is maintained for future use
const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: 'Project Screenshot 1',
      imageUrl: 'https://via.placeholder.com/300x200',
      category: 'web',
    },
    {
      id: 2,
      title: 'Project Screenshot 2',
      imageUrl: 'https://via.placeholder.com/300x200',
      category: 'design',
    },
    {
      id: 3,
      title: 'Project Screenshot 3',
      imageUrl: 'https://via.placeholder.com/300x200',
      category: 'web',
    },
  ];

  return (
    // Gallery section is hidden with display: none but code is maintained
    <section id="gallery" className="section gallery-section" style={{ display: 'none' }}>
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">A collection of my work</p>
        
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.imageUrl} alt={image.title} />
              <div className="gallery-overlay">
                <h3>{image.title}</h3>
                <span className="category">{image.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
