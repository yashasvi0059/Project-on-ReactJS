import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { FaUtensils, FaTags, FaMapMarkerAlt } from "react-icons/fa";
import "../assets/Images/Styles/Header.css";
import { CartContext } from "./CartContext";

const Header = ({ onLoginClick }) => {
  const { cartItems } = useContext(CartContext);
  const itemsCount = Object.values(cartItems).reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const autocompleteService = useRef(null);

  useEffect(() => {
    if (window.google) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }
  }, []);

  const handleChange = (e) => {
    setAddress(e.target.value);
    if (e.target.value && autocompleteService.current) {
      autocompleteService.current.getPlacePredictions(
        { input: e.target.value, componentRestrictions: { country: "IN" } },
        (predictions, status) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            predictions
          ) {
            setSuggestions(predictions);
          } else {
            setSuggestions([]);
          }
        }
      );
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (place) => {
    setAddress(place.description);
    setSuggestions([]);
  };

  const togglePopup = () => setShowPopup(!showPopup);
  const closePopup = () => setShowPopup(false);

  return (
    <div>
      {/* ====== TOP NAVBAR ====== */}
      <div className="navbar">
        {/* === 1. Logo Section === */}
        <div className="nav-logo">
          <h2 className="logo">Ramaya</h2>
          <p className="tagline">Savor the Flavor</p>
        </div>

        {/* === 2. Delivery Section (Desktop) === */}
        <div className="nav-delivery desktop-delivery">
          <h4>
            Delivery in <span>16 minutes</span>
          </h4>
          <div className="address-box">
            <input
              type="text"
              value={address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="address-input"
            />
            {suggestions.length > 0 && (
              <ul className="suggestions-box">
                {suggestions.map((item) => (
                  <li
                    key={item.place_id}
                    onClick={() => handleSelect(item)}
                    className="suggestion-item"
                  >
                    {item.description}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* === 📍 Delivery Icon (Mobile) === */}
        <div className="nav-delivery-icon" onClick={togglePopup}>
          <FaMapMarkerAlt />
        </div>

        {/* === Popup for Mobile === */}
        {showPopup && (
          <div className="delivery-popup">
            <div className="popup-content">
              <h4>Enter Delivery Address</h4>
              <input
                type="text"
                value={address}
                onChange={handleChange}
                placeholder="Enter your address"
              />
              {suggestions.length > 0 && (
                <ul className="suggestions-box">
                  {suggestions.map((item) => (
                    <li
                      key={item.place_id}
                      onClick={() => handleSelect(item)}
                      className="suggestion-item"
                    >
                      {item.description}
                    </li>
                  ))}
                </ul>
              )}
              <button onClick={closePopup}>OK</button>
            </div>
          </div>
        )}

        {/* === 3. Search Section === */}
        <div className="nav-search">
          <input type="text" placeholder="Search for ....." />
          <button className="search-btn">🔍</button>
        </div>

        {/* === 4. Login & Cart Section === */}
        <div className="nav-right">
          <Link to="/login" className="login-btn">
            Login
          </Link>
          <Link to="/cart" className="cart-btn" style={{ position: "relative" }}>
            🛒 My Cart
            {itemsCount > 0 && (
              <span className="cart-badge">{itemsCount}</span>
            )}
          </Link>
        </div>
      </div>

      {/* ====== SUB NAVBAR ====== */}
      <div className="sub-navbar">
        <Link to="/">🏠 Home</Link>
        <Link to="/about">ℹ️ About Us</Link>
        <Link to="/contact">📞 Contact Us</Link>
        <Link to="/menu">
          <FaUtensils className="nav-icon" /> Menu
        </Link>
        <Link to="/offers">
          <FaTags className="nav-icon" /> Offers
        </Link>
      </div>
    </div>
  );
};

export default Header;
