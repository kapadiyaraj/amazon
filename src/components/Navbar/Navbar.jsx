import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle the dropdown on click
  const handleDropdownToggle = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown if user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="mx-navbar">
      {/* ------------------ STANDARD NAVBAR ------------------ */}
      <div className="navbar-container">
        {/* Left Side: Brand Logos & Home Icon */}
        <div className="nav-brand-section">
          <div className="brand-logos">
            <span className="amazon-logo">amazon</span>
            <span className="divider">|</span>
            <span className="mx-logo">MXPLAYER</span>
          </div>
          <a href="#home" className="nav-home-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </a>
        </div>

        {/* Center: Main Links Layout */}
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a href="#shows" className="active">Shows</a></li>
            <li><a href="#movies">Movies</a></li>
            <li><a href="#battleground">Battleground</a></li>
            <li><a href="#vdesi">VDesi</a></li>
            
            {/* These items show natively in Desktop and Mobile, but hide in Tablet */}
            <li className="collapsible-link"><a href="#new-on-mx">New On Mx</a></li>
            <li className="collapsible-link"><a href="#trailers">Trailers</a></li>
            
            {/* Tablet Only Interactive Click-to-Toggle Dropdown */}
            <li 
              className={`tablet-dropdown ${isDropdownOpen ? 'open' : ''}`} 
              ref={dropdownRef}
            >
              <div className="dropdown-trigger" onClick={handleDropdownToggle}>
                Others 
                <svg className="dropdown-arrow" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </div>
              <ul className="dropdown-menu">
                <li><a href="#new-on-mx" onClick={() => setIsDropdownOpen(false)}>New On Mx</a></li>
                <li><a href="#trailers" onClick={() => setIsDropdownOpen(false)}>Trailers</a></li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Right Side: Action Utilities */}
        <div className="nav-actions">
          {/* Search Button */}
          <button className="action-btn search-btn" onClick={() => setIsSearchOpen(true)} aria-label="Search">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* Login Button */}
          <button className="login-btn desktop-login">Login</button>
          
          {/* Mobile Profile Icon */}
          <button className="action-btn mobile-profile" aria-label="Profile">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ------------------ SEARCH OVERLAY SCREEN ------------------ */}
      <div className={`search-overlay ${isSearchOpen ? 'search-active' : ''}`}>
        <div className="search-bar-container">
          <div className="search-input-wrapper">
            <svg className="search-bar-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            
            <input 
              type="text" 
              placeholder="Search for a Web Shows, Movie & Genre etc" 
              autoFocus={isSearchOpen}
            />

            <button className="mic-btn">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.42 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
              </svg>
            </button>
          </div>

          <button className="close-search-btn" onClick={() => setIsSearchOpen(false)}>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="search-categories">
          <div className="category-card web-shows"><span>WEB SHOWS</span></div>
          <div className="category-card movies"><span>MOVIES</span></div>
          <div className="category-card mx-vdesi"><span>MX VDESI</span></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;