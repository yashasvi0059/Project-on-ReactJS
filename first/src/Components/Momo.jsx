import React, { useState, useEffect } from "react";
import '../assets/Images/Styles/Momo.css';
import Momo1 from '../assets/Images/Momo1.png';
import Momo2 from '../assets/Images/Momo2.png';
import Momo3 from '../assets/Images/Momo3.png';
import Momo4 from '../assets/Images/Momo4.png';
import Momo5 from '../assets/Images/Momo5.png';
import Momo6 from '../assets/Images/Momo6.png';
import Momo7 from '../assets/Images/Momo7.png';
import Momo8 from '../assets/Images/Momo8.png';
import Momo9 from '../assets/Images/Momo9.png';
import Momo10 from '../assets/Images/Momo10.png';

const momoData = [
  {
    id: 1,
    name: "Steamed Veg Momo",
    type: "veg",
    price: "₹99",
    rating: "4.2",
    time: "20-30 mins",
    location: "Momo King, MG Road",
    image: Momo1
  },
  {
    id: 2,
    name: "Fried Chicken Momo",
    type: "nonveg",
    price: "₹119",
    rating: "4.5",
    time: "25-35 mins",
    location: "Momo Express, Park Street",
    image: Momo2
  },
  {
    id: 3,
    name: "Tandoori Momo",
    type: "nonveg",
    price: "₹139",
    rating: "4.6",
    time: "30-40 mins",
    location: "Wow! Momo, Salt Lake",
    image: Momo3
  },
  {
    id: 4,
    name: "Corn & Cheese Momo",
    type: "veg",
    price: "₹110",
    rating: "4.3",
    time: "20-30 mins",
    location: "Momo Lane, Gariahat",
    image: Momo4
  },
  {
    id: 5,
    name: "Chicken & Cheese pan momo",
    type: "nonveg",
    price: "₹280",
    rating: "4.3",
    time: "20-30 mins",
    location: "Momo Lane, Gariahat",
    image: Momo5
  },
  {
    id: 6,
    name: "BBQ Momo",
    type: "nonveg",
    price: "₹110",
    rating: "4.3",
    time: "20-30 mins",
    location: "Momo Lane, Gariahat",
    image: Momo6
  },
  {
    id: 7,
    name: "Jhol Chicken Momo",
    price: "₹170",
    rating: 4.8,
    time: "22 mins",
    type: "nonveg",
    location: "Nepali Zaika",
    image: Momo7
  },
  {
    id: 8,
    name: "Jhol Veg Momo",
    price: "₹150",
    rating: 4.6,
    time: "22 mins",
    type: "veg",
    location: "Kathmandu Cafe",
    image: Momo8
  },
  {
    id: 9,
    name: "Cheese Burst Momo",
    price: "₹180",
    rating: 4.7,
    time: "20 mins",
    type: "veg",
    location: "Cheesy Affairs",
    image: Momo9
  },
  {
    id: 10,
    name: "Afghani Momo",
    price: "₹260",
    rating: 4.5,
    time: "15 mins",
    type: "veg",
    location: "Sweet Tooth Corner",
    image: Momo10
  }
];

const Momo = () => {
  const [sortPopup, setSortPopup] = useState(false);
  const [isVegOnly, setIsVegOnly] = useState(false);
  const [isNonVegOnly, setIsNonVegOnly] = useState(false);
  const [filterPopup, setFilterPopup] = useState(false);
  const [sortedData, setSortedData] = useState(momoData);
  const [sortType, setSortType] = useState("default");
  const [isDeliveryFiltered, setIsDeliveryFiltered] = useState(false);
  const [cart, setCart] = useState({});

  useEffect(() => {
    let filtered = [...momoData];

    if (isDeliveryFiltered) {
      filtered = filtered.filter((m) => m.time.includes("20"));
    }

    if (isVegOnly) {
      filtered = filtered.filter((m) => m.type === "veg");
    }

    if (isNonVegOnly) {
      filtered = filtered.filter((m) => m.type === "nonveg");
    }

    if (sortType === "rating") filtered.sort((a, b) => b.rating - a.rating);
    else if (sortType === "time") filtered.sort((a, b) => parseInt(a.time) - parseInt(b.time));
    else if (sortType === "lowToHigh")
      filtered.sort((a, b) => parseInt(a.price.slice(1)) - parseInt(b.price.slice(1)));
    else if (sortType === "highToLow")
      filtered.sort((a, b) => parseInt(b.price.slice(1)) - parseInt(a.price.slice(1)));

    setSortedData(filtered);
  }, [sortType, isDeliveryFiltered, isVegOnly, isNonVegOnly]);

  const handleSort = (type) => {
    setSortType(type);
    setSortPopup(false);
  };

  const handleDeliveryFilter = () => {
    setIsDeliveryFiltered(!isDeliveryFiltered);
  };

  const addToCart = (momoId) => {
    setCart((prev) => ({
      ...prev,
      [momoId]: (prev[momoId] || 0) + 1,
    }));
  };

  const removeFromCart = (momoId) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[momoId] > 1) {
        updated[momoId] -= 1;
      } else {
        delete updated[momoId];
      }
      return updated;
    });
  };

  return (
    <div className="momo-page">
      <h1 className="momo-title">Momo</h1>
      <p className="momo-subtitle">Steamy, juicy, and mouthwatering momos just for you!</p>

      <div className="momo-controls">
        <button className="control-btn" onClick={() => setFilterPopup(!filterPopup)}>Filter</button>
        <button className="control-btn" onClick={() => setSortPopup(!sortPopup)}>Sort By</button>
        <button
          className={`control-btn ${isDeliveryFiltered ? "active" : ""}`}
          onClick={handleDeliveryFilter}
        >
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
                    type="radio"
                    name="foodType"
                    checked={isVegOnly && !isNonVegOnly}
                    onChange={() => {
                      setIsVegOnly(true);
                      setIsNonVegOnly(false);
                    }}
                  />
                  Veg Only
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="foodType"
                    checked={!isVegOnly && isNonVegOnly}
                    onChange={() => {
                      setIsVegOnly(false);
                      setIsNonVegOnly(true);
                    }}
                  />
                  Non-Veg Only
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="foodType"
                    checked={!isVegOnly && !isNonVegOnly}
                    onChange={() => {
                      setIsVegOnly(false);
                      setIsNonVegOnly(false);
                    }}
                  />
                  Both
                </label>
              </li>
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
              <li>
                <label>
                  <input
                    type="radio"
                    name="sort"
                    checked={sortType === "default"}
                    onClick={() => handleSort("default")}
                  />
                  Relevance (Default)
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="sort"
                    checked={sortType === "time"}
                    onClick={() => handleSort("time")}
                  />
                  Delivery Time
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="sort"
                    checked={sortType === "rating"}
                    onClick={() => handleSort("rating")}
                  />
                  Rating
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="sort"
                    checked={sortType === "lowToHigh"}
                    onClick={() => handleSort("lowToHigh")}
                  />
                  Cost: Low to High
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="sort"
                    checked={sortType === "highToLow"}
                    onClick={() => handleSort("highToLow")}
                  />
                  Cost: High to Low
                </label>
              </li>
            </ul>
          </div>
        </div>
      )}

      <h3 className="momo-count">{sortedData.length} Momo Items</h3>

      <div className="momo-grid">
        {sortedData.map((momo) => (
          <div key={momo.id} className="momo-card">
            <img src={momo.image} alt={momo.name} className="momo-img" />
            <div className="momo-price">ITEMS AT {momo.price}</div>
            <h4 className="momo-name">{momo.name}</h4>
            <p className="momo-info">
              ⭐ {momo.rating} • {momo.time}
              <br />
              {momo.location}
            </p>

            {/* Add to Cart */}
            {cart[momo.id] ? (
              <div className="qty-controls">
                <button onClick={() => removeFromCart(momo.id)}>-</button>
                <span>{cart[momo.id]}</span>
                <button onClick={() => addToCart(momo.id)}>+</button>
              </div>
            ) : (
              <button className="add-btn" onClick={() => addToCart(momo.id)}>Add +</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Momo;
