import React from 'react'

const ArtikelComponent = (props) => {
  const { title, content, link, imageSrc } = props;
    return (
      <div className="article-card-simple">
        <img src={imageSrc} alt={title} className="article-image-simple" />
        <div className="article-content-simple">
          <h2 className="article-title-simple">{title}</h2>
            <p className="article-description-simple">{content}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="article-link-simple">
              Baca Lengkap 
            </a>
        </div>
      </div>
    )
  }

export default ArtikelComponent