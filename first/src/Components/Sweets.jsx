import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";
import "../assets/Images/Styles/Sweets.css";
import Sweets1 from "../assets/Images/Sweets1.png";
import Sweets2 from "../assets/Images/Sweets2.png";
import Sweets3 from "../assets/Images/Sweets3.png";
import Sweets4 from "../assets/Images/Sweets4.png";
import Sweets5 from "../assets/Images/Sweets5.png";
import Sweets6 from "../assets/Images/Sweets6.png";
import Sweets7 from "../assets/Images/Sweets7.png";
import Sweets8 from "../assets/Images/Sweets8.png";
import Sweets9 from "../assets/Images/Sweets9.png";
import Sweets10 from "../assets/Images/Sweets10.png";

const sweetsData = [
  { 
    id: 1, 
    name: "Gulab Jamun", 
    type: "eggless", 
    price: "₹80", 
    rating: 4.7, 
    time: "20-25 mins", 
    location: "Sweet Station, MG Road", 
    image: Sweets1 
  },
  { 
    id: 2, 
    name: "Rasgulla", 
    type: "eggless", 
    price: "₹60", 
    rating: 4.5, 
    time: "15-20 mins", 
    location: "Bengali Sweets, Park Street", 
    image: Sweets2 
  },
  { 
    id: 3, 
    name: "Kaju Katli", 
    type: "eggless", 
    price: "₹200", 
    rating: 4.9, 
    time: "18-28 mins", 
    location: "Royal Sweets, Salt Lake", 
    image: Sweets3 },
  { 
    id: 4, 
    name: "Motichoor Laddu", 
    type: "eggless", 
    price: "₹180", 
    rating: 4.6, 
    time: "15 mins", 
    location: "Shree Sweets", 
    image: Sweets4 },
  { 
    id: 5, 
    name: "Pastry Mithai", 
    type: "egg", 
    price: "₹120", 
    rating: 4.5, 
    time: "8 mins", 
    location: "Crispy Delight", 
    image: Sweets5 },
  { 
    id: 6, 
    name: "Malpua", 
    type: "egg", 
    price: "₹200", 
    rating: 4.7, 
    time: "15 mins", 
    location: "Desi Mithai", 
    image: Sweets6 },
  { 
    id: 7, 
    name: "Sandesh", 
    type: "eggless", 
    price: "₹250", 
    rating: 4.6, 
    time: "10 mins", 
    location: "Bengal Delight", 
    image: Sweets7 
  },
  { 
    id: 8, 
    name: "Rabri", 
    type: "eggless", 
    price: "₹220", 
    rating: 4.8, 
    time: "20 mins", 
    location: "Milk Magic", 
    image: Sweets8 
  },
  { 
    id: 9, 
    name: "Cake-based Barfi", 
    type: "egg", 
    price: "₹260", 
    rating: 4.7, 
    time: "12 mins", 
    location: "Choco Mithai", 
    image: Sweets9 
  },
  { 
    id: 10, 
    name: "Coconut Ladoo", 
    type: "eggless", 
    price: "₹150", 
    rating: 4.6, 
    time: "10 mins", 
    location: "Tropical Treats", 
    image: Sweets10 
  }
];

const Sweet = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const [sortPopup, setSortPopup] = useState(false);
  const [filterPopup, setFilterPopup] = useState(false);
  const [selectedType, setSelectedType] = useState("all");
  const [isDeliveryFiltered, setIsDeliveryFiltered] = useState(false);
  const [sortType, setSortType] = useState("default");
  const [sortedData, setSortedData] = useState(sweetsData);

  useEffect(() => {
    let filtered = [...sweetsData];

    // Delivery filter
    if (isDeliveryFiltered) filtered = filtered.filter((s) => s.time.includes("20"));

    // Sweet Type filter
    if (selectedType !== "all") filtered = filtered.filter((s) => s.type === selectedType);

    // Sorting
    if (sortType === "rating") filtered.sort((a, b) => b.rating - a.rating);
    else if (sortType === "time") filtered.sort((a, b) => parseInt(a.time) - parseInt(b.time));
    else if (sortType === "lowToHigh") filtered.sort((a, b) => parseInt(a.price.slice(1)) - parseInt(b.price.slice(1)));
    else if (sortType === "highToLow") filtered.sort((a, b) => parseInt(b.price.slice(1)) - parseInt(a.price.slice(1)));

    setSortedData(filtered);
  }, [sortType, isDeliveryFiltered, selectedType]);

  return (
    <div className="sweets-page" style={{ marginTop: "100px" }}>
      <h1 className="sweet-title">Sweets</h1>
      <p className="sweet-subtitle">Delicious and mouth-watering sweets just for you!</p>

      <div className="sweet-controls">
        <button className="control-btn" onClick={() => setFilterPopup(!filterPopup)}>Filter</button>
        <button className="control-btn" onClick={() => setSortPopup(!sortPopup)}>Sort By</button>
        <button className={`control-btn ${isDeliveryFiltered ? "active" : ""}`} onClick={() => setIsDeliveryFiltered(prev => !prev)}>
          {isDeliveryFiltered ? "Show All" : "20 Mins Delivery"}
        </button>
      </div>

      {/* Filter Popup */}
      {filterPopup && (
        <div className="sort-overlay" onClick={() => setFilterPopup(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <h3>FILTER</h3>
            <h4>Sweet Type</h4>
            <ul>
              {["all", "eggless", "egg"].map((type) => (
                <li key={type}>
                  <label>
                    <input
                      type="radio"
                      name="sweetType"
                      checked={selectedType === type}
                      onChange={() => setSelectedType(type)}
                    />
                    {type === "eggless" ? "Eggless" : type === "egg" ? "Contains Egg" : "All"}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Sort Popup */}
      {sortPopup && (
        <div className="sort-overlay" onClick={() => setSortPopup(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <h3>SORT BY</h3>
            <ul>
              {[
                { key: "default", label: "Relevance (Default)" },
                { key: "time", label: "Delivery Time" },
                { key: "rating", label: "Rating" },
                { key: "lowToHigh", label: "Cost: Low to High" },
                { key: "highToLow", label: "Cost: High to Low" }
              ].map((sort) => (
                <li key={sort.key}>
                  <label>
                    <input
                      type="radio"
                      name="sort"
                      checked={sortType === sort.key}
                      onChange={() => setSortType(sort.key)}
                    />
                    {sort.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <h3 className="sweet-count">{sortedData.length} Sweet Items</h3>

      <div className="sweet-grid">
        {sortedData.map((sweet) => {
          const key = `sweets-${sweet.id}`;
          const quantity = cartItems[key]?.quantity || 0;

          return (
            <div key={key} className="sweet-card">
              <img src={sweet.image} alt={sweet.name} className="sweet-img" />
              <div className="sweet-price">ITEMS AT {sweet.price}</div>
              <h4 className="sweet-name">{sweet.name}</h4>
              <p className="sweet-info">
                ⭐ {sweet.rating} • {sweet.time}
                <br />
                {sweet.location}
              </p>

              {quantity > 0 ? (
                <div className="qty-controls">
                  <button onClick={() => removeFromCart({ ...sweet, category: 'sweets' })}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => addToCart({ ...sweet, category: 'sweets' })}>+</button>
                </div>
              ) : (
                <button className="add-btn red" onClick={() => addToCart({ ...sweet, category: 'sweets' })}>
                  Add +
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sweet;
