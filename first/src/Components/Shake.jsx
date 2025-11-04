import React, { useState, useEffect, useContext } from "react";
import { CartContext } from './CartContext';
import '../assets/Images/Styles/Shake.css';
import Shake1 from '../assets/Images/Shake1.png';
import Shake2 from '../assets/Images/Shake2.png';
import Shake3 from '../assets/Images/Shake3.png';
import Shake4 from '../assets/Images/Shake4.png';
import Shake5 from '../assets/Images/Shake5.png';
import Shake6 from '../assets/Images/Shake6.png';
import Shake7 from '../assets/Images/Shake7.png';
import Shake8 from '../assets/Images/Shake8.png';
import Shake9 from '../assets/Images/Shake9.png';
import Shake10 from '../assets/Images/Shake10.png';

const shakeData = [
  {
    id: 1,
    name: "Chocolate Brownie Shake",
    flavor: "chocolate",
    type: "eggless",
    price: "₹180",
    rating: 4.7,
    time: "10 mins",
    location: "Shake It Up",
    image: Shake1
  },
  {
    id: 2,
    name: "Vanilla Bean Shake",
    flavor: "vanilla",
    type: "eggless",
    price: "₹150",
    rating: 4.5,
    time: "8 mins",
    location: "Frosty Treats",
    image: Shake2
  },
  {
    id: 3,
    name: "Strawberry Cream Shake",
    flavor: "strawberry",
    type: "egg",
    price: "₹170",
    rating: 4.6,
    time: "9 mins",
    location: "Berry Bliss Shakes",
    image: Shake3
  },
  {
    id: 4,
    name: "Oreo Crunch Shake",
    flavor: "chocolate",
    type: "eggless",
    price: "₹190",
    rating: 4.8,
    time: "12 mins",
    location: "Cookie Crush",
    image: Shake4
  },
  {
    id: 5,
    name: "Mango Madness Shake",
    flavor: "mango",
    type: "eggless",
    price: "₹200",
    rating: 4.7,
    time: "10 mins",
    location: "Tropical Treats",
    image: Shake5
  },
  {
    id: 6,
    name: "Banana Peanut Butter Shake",
    flavor: "banana",
    type: "egg",
    price: "₹210",
    rating: 4.5,
    time: "11 mins",
    location: "Nutty Sips",
    image: Shake6
  },
  {
    id: 7,
    name: "Salted Caramel Shake",
    flavor: "caramel",
    type: "eggless",
    price: "₹220",
    rating: 4.6,
    time: "10 mins",
    location: "Caramel Craze",
    image: Shake7
  },
  {
    id: 8,
    name: "Coffee Mocha Shake",
    flavor: "coffee",
    type: "eggless",
    price: "₹200",
    rating: 4.4,
    time: "9 mins",
    location: "Cafe Latte",
    image: Shake8
  },
  {
    id: 9,
    name: "Blueberry Cheesecake Shake",
    flavor: "blueberry",
    type: "egg",
    price: "₹230",
    rating: 4.7,
    time: "12 mins",
    location: "Berrylicious",
    image: Shake9
  },
  {
    id: 10,
    name: "Pistachio Delight Shake",
    flavor: "pistachio",
    type: "eggless",
    price: "₹240",
    rating: 4.8,
    time: "11 mins",
    location: "Nutty Bliss",
    image: Shake10
  }
];

const Shake = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const [isEgglessOnly, setIsEgglessOnly] = useState(false);
  const [isEggOnly, setIsEggOnly] = useState(false);
  const [selectedFlavor, setSelectedFlavor] = useState("all");
  const [sortPopup, setSortPopup] = useState(false);
  const [filterPopup, setFilterPopup] = useState(false);
  const [isDeliveryFiltered, setIsDeliveryFiltered] = useState(false);
  const [sortType, setSortType] = useState("default");
  const [sortedData, setSortedData] = useState(shakeData);

  // Filter & sort logic
  useEffect(() => {
    let filtered = [...shakeData];

    if (isDeliveryFiltered) filtered = filtered.filter(s => s.time.includes("20"));
    if (isEgglessOnly) filtered = filtered.filter(s => s.type === "eggless");
    if (isEggOnly) filtered = filtered.filter(s => s.type === "egg");
    if (selectedFlavor !== "all") filtered = filtered.filter(s => s.flavor === selectedFlavor);

    if (sortType === "rating") filtered.sort((a, b) => b.rating - a.rating);
    else if (sortType === "time") filtered.sort((a, b) => parseInt(a.time) - parseInt(b.time));
    else if (sortType === "lowToHigh") filtered.sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, "")) - parseInt(b.price.replace(/[^0-9]/g, "")));
    else if (sortType === "highToLow") filtered.sort((a, b) => parseInt(b.price.replace(/[^0-9]/g, "")) - parseInt(a.price.replace(/[^0-9]/g, "")));

    setSortedData(filtered);
  }, [sortType, isDeliveryFiltered, isEgglessOnly, isEggOnly, selectedFlavor]);

  return (
    <div className="shake-page" style={{ marginTop: "100px" }}>
      <h1 className="shake-title">Shakes</h1>
      <p className="shake-subtitle">Delicious, creamy, and refreshing shakes just for you!</p>

      <div className="shake-controls">
        <button className="control-btn" onClick={() => setFilterPopup(!filterPopup)}>Filter</button>
        <button className="control-btn" onClick={() => setSortPopup(!sortPopup)}>Sort By</button>
        <button className={`control-btn ${isDeliveryFiltered ? "active" : ""}`} onClick={() => setIsDeliveryFiltered(!isDeliveryFiltered)}>
          {isDeliveryFiltered ? "Show All" : "20 Mins Delivery"}
        </button>
      </div>

      {/* Filter Popup */}
      {filterPopup && (
        <div className="sort-overlay" onClick={() => setFilterPopup(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <h3>FILTER</h3>
            <ul>
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={isEgglessOnly}
                    onChange={() => {
                      setIsEgglessOnly(true);
                      setIsEggOnly(false);
                    }}
                  />
                  Eggless Only
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={isEggOnly}
                    onChange={() => {
                      setIsEggOnly(true);
                      setIsEgglessOnly(false);
                    }}
                  />
                  Egg-Based Only
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={!isEgglessOnly && !isEggOnly}
                    onChange={() => {
                      setIsEgglessOnly(false);
                      setIsEggOnly(false);
                    }}
                  />
                  Both
                </label>
              </li>
            </ul>

            <h4>Flavor</h4>
            <ul>
              {["all", "chocolate", "strawberry", "vanilla", "mango", "coffee"].map((flavor) => (
                <li key={flavor}>
                  <label>
                    <input
                      type="radio"
                      name="flavor"
                      checked={selectedFlavor === flavor}
                      onChange={() => setSelectedFlavor(flavor)}
                    />
                    {flavor.charAt(0).toUpperCase() + flavor.slice(1)}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* ✅ Updated Sort Popup — stays open until clicked outside */}
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
                { key: "highToLow", label: "Cost: High to Low" },
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

      <h3 className="shake-count">{sortedData.length} Shake Items</h3>

      <div className="shake-grid">
        {sortedData.map(shake => {
          const key = `shake-${shake.id}`;
          const quantity = cartItems[key]?.quantity;

          return (
            <div key={key} className="shake-card">
              <img src={shake.image} alt={shake.name} className="shake-img" />
              <div className="shake-price">ITEMS AT {shake.price}</div>
              <h4 className="shake-name">{shake.name}</h4>
              <p className="shake-info">⭐ {shake.rating} • {shake.time} <br /> {shake.location}</p>

              {quantity ? (
                <div className="qty-controls">
                  <button onClick={() => removeFromCart({ ...shake, category: 'shake' })}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => addToCart({ ...shake, category: 'shake' })}>+</button>
                </div>
              ) : (
                <button className="add-btn" onClick={() => addToCart({ ...shake, category: 'shake' })}>
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

export default Shake;
