import React, { useState, useRef } from 'react';
import './MediaSlider.css';

const MediaCard = ({ show }) => {
  const [isHovered, setIsHovered] = useState(false);
  let hoverTimer = useRef(null);

  const handleMouseEnter = () => {
    hoverTimer.current = setTimeout(() => {
      setIsHovered(true);
    }, 350);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer.current);
    setIsHovered(false);
  };

  return (
    <div 
      className="show-card" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ૧. બેઝ પોસ્ટર વ્યુ */}
      <div className="poster-wrapper">
        <img src={show.image} alt={show.title} className="poster-img" />
        {show.tag && <span className="custom-status-tag">{show.tag}</span>}
      </div>

      {/* ૨. ફિક્સ કરેલું હોવર પ્રિવ્યૂ બોક્સ */}
      {isHovered && (
        <div className="hover-preview-portal">
          {/* ઇમેજ એરિયા જેને આપણે CSS માં વાઇડ બેનર બનાવીશું */}
          <div className="preview-media-banner">
            <img src={show.image} alt="Banner" className="preview-banner-img" />
            <div className="preview-banner-gradient" />
          </div>

          {/* કન્ટેન્ટ એરિયા - પ્રોપર સ્પેસિંગ સાથે */}
          <div className="preview-metadata-body">
            <div className="preview-action-row">
              <button className="preview-play-btn">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play
              </button>
              <span className="preview-episodes-count">{show.episodesInfo}</span>
              
              <div className="preview-utility-icons">
                <button className="util-circle-btn">+</button>
                <button className="util-circle-btn">i</button>
              </div>
            </div>

            <h3 className="preview-title">{show.title}</h3>
            <p className="preview-summary-desc">{show.description}</p>
            <p className="preview-genres-list">{show.extendedGenres}</p>
            
            <div className="preview-footer-badge-line">
              <span className="preview-age-tag">{show.ageRating}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MediaSlider = ({ sectionTitle, dataList }) => {
  return (
    <div className="trending-section">
      <div className="trending-header">
        <h2 className="trending-title">
          {sectionTitle}
          <svg className="title-chevron" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </h2>
      </div>

      <div className="cards-row-container">
        {dataList && dataList.map((show) => (
          <MediaCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default MediaSlider;