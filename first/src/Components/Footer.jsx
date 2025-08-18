import React from "react";
import '../assets/Images/Styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-logo">Ramaya</h2>
        <div className="footer-selectors">
          <select>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>
          <select>
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <h4>ABOUT RAMAYA</h4>
          <ul>
            <li>Who We Are</li>
            <li>Blog</li>
            <li>Work With Us</li>
            <li>Investor Relations</li>
            <li>Report Fraud</li>
            <li>Press Kit</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h4>FOODAVERSE</h4>
          <ul>
            <li>Foodato</li>
            <li>Blinkit</li>
            <li>District</li>
            <li>Feeding India</li>
            <li>Hyperpure</li>
            <li>Foodato Live</li>
            <li>Foodaland</li>
            <li>Weather Union</li>
          </ul>
        </div>

        <div>
          <h4>FOR RESTAURANTS</h4>
          <ul>
            <li>Partner With Us</li>
            <li>Apps For You</li>
          </ul>
        </div>

        <div>
          <h4>LEARN MORE</h4>
          <ul>
            <li>Privacy</li>
            <li>Security</li>
            <li>Terms</li>
          </ul>
        </div>

        <div>
          <h4>SOCIAL LINKS</h4>
          <div className="social-icons">
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-facebook"></i>
          </div>
          <div className="store-buttons">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
            />
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          By continuing past this page, you agree to our Terms of Service, Cookie Policy,
          Privacy Policy and Content Policies. All trademarks are properties of their
          respective owners. 2008-2025 © Foodato™ Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
