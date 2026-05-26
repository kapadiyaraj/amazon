import React, { useState } from "react";
import "./HeroSlider.css";

import arfata from "../../assets/images/arfata.jpg";
import gynac from "../../assets/images/gynac.jpg";
import ninetailed from "../../assets/images/ninetailed.jpg";
import thebestthing from "../../assets/images/thebestthing.jpg";
import varisu from "../../assets/images/varisu.jpg";
import vimalkhanna from "../../assets/images/vimalkhanna.jpg";

const sliderData = [
  {
    id: 1,
    title: "VARISU",
    tagline: "",
    languages: ["Hindi", "Drama"],
    description: "A business tycoon's estranged son forced to take over.",
    ageRating: "U/A 13+",
    backgroundImage: varisu,
  },
  {
    id: 2,
    title: "The Best Thing",
    tagline: "TRENDING",
    languages: ["Hindi, Chinese Mandarin", "Vdesi, Romance, Melodrama"],
    description: "Workaholic hotel manager Shen Xi Fan turns to Chinese medicine doctor He Su Ye for her insomnia and migraines...",
    ageRating: "U/A 16+",
    backgroundImage: thebestthing,
  },
  {
    id: 3,
    title: "ARAFTA",
    tagline: "HOT",
    languages: ["Hindi, Turkish", "Family, Vdesi, Drama"],
    description: "A thrilling tale of romance, suspense, and drama that tests the bonds of family when unexpected secrets begin to unfold.",
    ageRating: "U/A 16+",
    backgroundImage: arfata,
  },
  {
    id: 4,
    title: "TALE OF THE NINE TAILED",
    tagline: "NEW SERIES",
    languages: ["Hindi, Korean", "Fantasy, Melodrama, Romance"],
    description: "A nine-tailed fox hunts monsters while seeking his lost love - until a producer and his vengeful brother spark chaos.",
    ageRating: "U/A 16+",
    backgroundImage: ninetailed,
  },
  {
    id: 5,
    title: "VIMAL KHANNA",
    tagline: "NEW SERIES",
    languages: ["Hindi", "Suspense, Crime, Web Series"],
    description: "Vimal Khanna is a psychological thriller set inside a wealthy Mumbai home, where power hides behind care and generosity.",
    ageRating: "U/A 16+",
    backgroundImage: vimalkhanna,
  },
  {
    id: 6,
    title: "who's your gynac?",
    tagline: "NEW SEASON",
    languages: ["Hindi", "Drama, Comedy, Web Series"],
    description: "Who's Your Gynac follows a young resident gynecologist balancing the chaos of her medical profession and personal life.",
    ageRating: "U/A 16+",
    backgroundImage: gynac,
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  const current = sliderData[currentSlide] || sliderData[0];

  return (
    <section className="hero-slider">
      {/* Background Graphic Framework */}
      <div className="slider-bg-wrapper">
        <img
          src={current.backgroundImage}
          alt={current.title}
          className="main-bg-img"
        />
        <div className="radial-dark-overlay" />
      </div>

      <div className="hero-container">
        {/* Hardware Devices Promo Anchor (Hidden on Mobile) */}
        <div className="device-promo-tag">
          Watch Amazon MX Player on{" "}
          <span>androidtv • firetv • SAMSUNG • LG • CLOUD TV • more</span>
        </div>

        {/* Core Detail Stack */}
        <div className="hero-content-left">
          <span className="age-badge">{current.ageRating}</span>

          <div className="title-block">
            {current.tagline && <span className="tagline-text">{current.tagline}</span>}
            <h1 className="main-title">{current.title}</h1>
          </div>

          <div className="meta-genres">
            {current.languages.map((item, idx) => (
              <React.Fragment key={idx}>
                <span>{item}</span>
                {idx < current.languages.length - 1 && (
                  <span className="bullet-dot">•</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="series-description">{current.description}</p>

          {/* Action Call To Actions */}
          <div className="hero-ctas">
            <button className="btn-play">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play
            </button>

            <button className="btn-info">More Info</button>

            <button className="btn-add-list" aria-label="Add to list">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>Add to My List</span>
            </button>
          </div>
        </div>

        {/* Global Control System Dashboard */}
        <div className="slider-controls-wrapper">
          <div className="pagination-dots">
            {sliderData.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? "active-dot" : ""}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          <div className="nav-arrows-group">
            <button className="arrow-btn" onClick={prevSlide} aria-label="Previous slide">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button className="arrow-btn" onClick={nextSlide} aria-label="Next slide">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;