import React from 'react';
import './Footer.css';
// જો તમારી પાસે લોગો કે QR કોડની ઇમેજ હોય તો અહીં ઇમ્પોર્ટ કરી શકો:
// import mxLogo from '../assets/images/mx_logo.png';
// import qrCode from '../assets/images/qr_code.png';

const Footer = () => {
  return (
    <footer className="mx-footer">
      <div className="footer-container">
        
        {/* કૉલમ ૧: બ્રાન્ડ લોગો અને સોશિયલ મીડિયા */}
        <div className="footer-column brand-info">
          <div className="footer-logo">
            <span className="logo-amazon">amazon</span>
            <span className="logo-mx">MXPLAYER</span>
          </div>
          <p className="brand-desc">
            Amazon MX Player is your one-stop destination for all your entertainment such as latest movies, most popular web shows, Live TV channels, newly released songs etc.
          </p>
          <div className="social-links-section">
            <span className="follow-text">Follow us for update</span>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* કૉલમ ૨: કંપની લિંક્સ */}
        <div className="footer-column">
          <h3 className="column-title">Company</h3>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Video Player</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* કૉલમ ૩: લીગલ લિંક્સ */}
        <div className="footer-column">
          <h3 className="column-title">Legal</h3>
          <ul className="footer-links">
            <li><a href="#">Download Apps</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Services</a></li>
            <li><a href="#">Content Complaints</a></li>
            <li><a href="#">Compliance Report</a></li>
          </ul>
        </div>

        {/* કૉલમ ૪: એપ ડાઉનલોડ અને QR કોડ */}
        <div className="footer-column download-section">
          <h3 className="column-title">Install our Mobile App for Best Experience</h3>
          <div className="download-content">
            <div className="download-text">
              <p>Open camera or any QR scanner app on your mobile</p>
              <p>Scan this QR code and you'll prompt a download link</p>
              <div className="app-stores">
                <span className="app-avail-text">App Available on</span>
                <div className="store-icons">
                  <i className="fab fa-google-play"></i>
                  <i className="fab fa-apple"></i>
                </div>
              </div>
            </div>
            
            {/* QR કોડ હોલ્ડર (તમે પ્લેસહોલ્ડર ની જગ્યાએ અસલી ઇમેજ લિંક મૂકી શકો) */}
            <div className="qr-code-wrapper">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://mxplayer.in" 
                alt="QR Code" 
                className="qr-img" 
              />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;