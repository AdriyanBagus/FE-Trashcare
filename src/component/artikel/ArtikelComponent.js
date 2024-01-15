import React from 'react';
import './ArtikelStyle.css'

const ArtikelComponent = ({ judul, gambar, link }) => {
  // Destructuring directly in the function parameter

  if (!judul || !gambar || !link) {
    return null;
  }

  return (
    <div className="article-card-simple">
      <img src={`http://localhost:5000/static/uploads/${gambar}`} alt={judul} className="article-image-simple" />
      <div className="article-content-simple">
        <h2 className="article-title-simple">{judul}</h2>
        {/* You can customize the structure based on your design */}
        <a href={link} target="_blank" rel="noopener noreferrer" className="article-link-simple">
          Baca Lengkap
        </a>
      </div>
    </div>
  );
};

export default ArtikelComponent;
