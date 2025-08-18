import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { FaUtensils, FaTags } from "react-icons/fa";
import "../assets/Images/Styles/Header.css";
import { CartContext } from "./CartContext"; // import your context

const Header = ({ onLoginClick }) => {
  const { cartItems } = useContext(CartContext); // get cart items from context
  const itemsCount = Object.values(cartItems).reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);
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

  return (
    <div>
      {/* Top Header */}
      <div className="header">
        <div className="header-left">
          <h2 className="logo">Ramaya</h2>
          <p className="tagline">Savor the Flavor</p>
        </div>

        <div className="header-delivery">
          <h4>
            Delivery in <span>16 minutes</span>
          </h4>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              value={address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="address-input"
            />
            {suggestions.length > 0 && (
              <ul
                style={{
                  position: "absolute",
                  top: "40px",
                  left: 0,
                  right: 0,
                  background: "white",
                  border: "1px solid #ccc",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  zIndex: 1000,
                  maxHeight: "200px",
                  overflowY: "auto",
                }}
              >
                {suggestions.map((item) => (
                  <li
                    key={item.place_id}
                    style={{ padding: "10px", cursor: "pointer" }}
                    onClick={() => handleSelect(item)}
                  >
                    {item.description}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="header-search">
          <input type="text" placeholder="Search for ....." />
          <button className="search-btn">🔍</button>
        </div>

        <div className="header-right">
        <Link to="/login" className="login-btn">Login</Link>
          <Link to="/cart" className="cart-btn" style={{ position: "relative" }}>
            🛒 My Cart
            {itemsCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                }}
              >
                {itemsCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Bottom Slim Navbar */}
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
