import React, { useState, useRef } from 'react';
import './TrendingSlider.css';

// Replace these with your actual image paths
import vimalPoster from '../../assets/images/vimalkhanna.jpg';
import futurePoster from '../../assets/images/future_poster.jpg';
import flyPoster from '../../assets/images/fly_poster.jpg';
import penthousePoster from '../../assets/images/penthouse_poster.jpg';
import aashramPoster from '../../assets/images/aashram_poster.jpg';
import lighterPoster from '../../assets/images/lighter_poster.jpg';
import jailerPoster from '../../assets/images/jailer_poster.jpg';
import derailmentPoster from '../../assets/images/Derailment.jpg';
import perfectPoster from '../../assets/images/perfectcasual.jpg';
import deskmatePoster from '../../assets/images/deskmate.jpg';

const trendingData = [
  {
    id: 1,
    title: "Vimal Khanna",
    description: "A psychological thriller set inside a wealthy Mumbai home, where power hides behind care and generosity.",
    extendedGenres: "Mystery, Vdesi, Thriller, Crime, Suspense, Web Series, Dubbed",
    episodesInfo: "1 Season 8 Episodes",
    ageRating: "U/A 16+",
    image: vimalPoster
  },
  {
    id: 2,
    title: "You From The Future",
    description: "A young, optimistic graduate accidentally crosses paths with a cold tech executive, sparking an unexpected modern romance.",
    extendedGenres: "Romance, Vdesi, Sci-Fi, Comedy, Drama, Web Series, Dubbed",
    episodesInfo: "1 Season 24 Episodes",
    ageRating: "U/A 13+",
    image: futurePoster
  },
  {
    id: 3,
    title: "When I Fly Towards You",
    description: "A warm and nostalgic youth drama tracking the beautiful relationships, heartbreaks, and growth of high school friends.",
    extendedGenres: "Romance, Youth, Comedy, Drama, Melodrama, Dubbed",
    episodesInfo: "1 Season 24 Episodes",
    ageRating: "U/A 13+",
    image: flyPoster
  },
  {
    id: 4,
    title: "Penthouse",
    description: "Mystery, Vdesi, Thriller, Crime, Suspense, Web Series, Dubbed, Korean, Drama, Melodrama, Revenge",
    extendedGenres: "Mystery, Vdesi, Thriller, Crime, Suspense, Web Series, Dubbed, Korean",
    episodesInfo: "3 Seasons 48 Episodes",
    ageRating: "U/A 16+",
    image: penthousePoster
  },
  {
    id: 5,
    title: "Aashram",
    description: "A gripping look into the dark secrets, political influence, and absolute control wielded by a charismatic but deceptive godman.",
    extendedGenres: "Crime, Drama, Thriller, Suspense, Politics, Original",
    episodesInfo: "3 Seasons 28 Episodes",
    ageRating: "U/A 18+",
    image: aashramPoster
  },
  {
    id: 6,
    title: "Lighter & Princess",
    description: "An exceptionally gifted computer programming student forms a complicated, deep bond with an innocent fellow classmate.",
    extendedGenres: "Romance, Youth, Melodrama, Drama, Vdesi, Dubbed",
    episodesInfo: "1 Season 36 Episodes",
    ageRating: "U/A 16+",
    image: lighterPoster
  },
  {
    id: 7,
    title: "Jailer",
    description: "A retired prison warden goes on a relentless, hard-hitting crusade to hunt down the dangerous criminals who threatened his family.",
    extendedGenres: "Action, Thriller, Crime, Blockbuster, Drama",
    episodesInfo: "Movie • 2h 48m",
    ageRating: "U/A 16+",
    image: jailerPoster
  },
    {
    id: 8,
    title: "Derailment",
        description: "Romance, Vdesi, Comedy, Web Series, Mandarin Drama, Dubbed.",
    extendedGenres: "Action, Thriller, Crime, Blockbuster, Drama",
    episodesInfo: "Movie • 2h 48m",
    ageRating: "U/A 16+",
    image: derailmentPoster
  },
    {
    id: 9,
    title: "Perfect And Casual",
        description: "Romance, Vdesi, Comedy, Web Series, Mandarin Drama, Dubbed.",
    extendedGenres: "Action, Thriller, Crime, Blockbuster, Drama",
    episodesInfo: "Movie • 2h 48m",
    ageRating: "U/A 16+",
    image: perfectPoster
  },
    {
    id: 10,
    title: "My Deskmate",
    description: "Romance, Vdesi, Comedy, Web Series, Mandarin Drama, Dubbed.",
    extendedGenres: "Action, Thriller, Crime, Blockbuster, Drama",
    episodesInfo: "Movie • 2h 48m",
    ageRating: "U/A 16+",
    image: deskmatePoster
  }
];

const TrendingSlider = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoverBounds, setHoverBounds] = useState({ top: 0, left: 0, width: 0 });
  const rowRef = useRef(null);
  const hoverTimer = useRef(null);

  const handleMouseEnter = (e, show) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = rowRef.current.getBoundingClientRect();

    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      setHoverBounds({
        top: rect.top - containerRect.top + rowRef.current.scrollTop,
        left: rect.left - containerRect.left + rowRef.current.scrollLeft,
        width: rect.width
      });
      setHoveredCard(show);
    }, 350); 
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer.current);
    setHoveredCard(null);
  };

  return (
    <div className="trending-section">
      <div className="trending-header">
        <h2 className="trending-title">
          Trending on Amazon MXPlayer
          <svg className="title-chevron" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </h2>
      </div>

      <div className="cards-row-container" ref={rowRef} onMouseLeave={handleMouseLeave}>
        {trendingData.map((show) => (
          <div 
            className="show-card" 
            key={show.id}
            onMouseEnter={(e) => handleMouseEnter(e, show)}
          >
            <div className="poster-wrapper">
              <img src={show.image} alt="Show Poster" className="poster-img" />
            </div>
          </div>
        ))}

        {/* ------------------ FLOATING HOVER PREVIEW MODAL ------------------ */}
        {hoveredCard && (
          <div 
            className="hover-preview-portal"
            style={{
              top: `${hoverBounds.top - 40}px`, 
              left: `${hoverBounds.left - 30}px`, 
              width: `${hoverBounds.width + 60}px` 
            }}
            onMouseLeave={handleMouseLeave}
          >
            {/* Top Media Banner Area */}
            <div className="preview-media-banner">
              <img src={hoveredCard.image} alt="Preview Banner" className="preview-banner-img" />
              <div className="preview-banner-gradient" />
            </div>

            {/* Bottom Stream Info Layer Area */}
            <div className="preview-metadata-body">
              {/* Row 1: Actions, Buttons, and Quick Badge Info */}
              <div className="preview-action-row">
                <button className="preview-play-btn">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Play
                </button>
                <span className="preview-episodes-count">{hoveredCard.episodesInfo}</span>
                
                <div className="preview-utility-icons">
                  <button className="util-circle-btn" aria-label="Add to list">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                  <button className="util-circle-btn" aria-label="More Info">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Row 2: Show Bold Title */}
              <h3 className="preview-title">{hoveredCard.title}</h3>

              {/* Row 3: Full Synopsis Description Summary Paragraph (As seen in Screenshot) */}
              <p className="preview-summary-desc">{hoveredCard.description}</p>

              {/* Row 4: Genre String Index Line */}
              <p className="preview-genres-list">{hoveredCard.extendedGenres}</p>
              
              {/* Row 5: Age Group Maturity Ribbon Label */}
              <div className="preview-footer-badge-line">
                <span className="preview-age-tag">{hoveredCard.ageRating}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingSlider;