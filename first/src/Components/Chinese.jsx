import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import '../assets/Images/Styles/Chinese.css';
import Chinese1 from '../assets/Images/Chinese1.png';
import Chinese2 from '../assets/Images/Chinese2.png';
import Chinese3 from '../assets/Images/Chinese3.png';
import Chinese4 from '../assets/Images/Chinese4.png';
import Chinese5 from '../assets/Images/Chinese5.png';
import Chinese6 from '../assets/Images/Chinese6.png';
import Chinese7 from '../assets/Images/Chinese7.png';
import Chinese8 from '../assets/Images/Chinese8.png';
import Chinese9 from '../assets/Images/Chinese9.png';
import Chinese10 from '../assets/Images/Chinese10.png';

const chineseData = [
  {
    id: 1,
    name: "Hakka Noodles",
    type: "veg",
    price: "₹120",
    rating: "4.6",
    time: "20-30 mins",
    location: "Dragon Hut, MG Road",
    image: Chinese1
  },
  {
    id: 2,
    name: "Chilli Paneer",
    type: "veg",
    price: "₹140",
    rating: "4.5",
    time: "15-25 mins",
    location: "Wok Express, Park Street",
    image: Chinese2
  },
  {
    id: 3,
    name: "Chicken Manchurian",
    type: "nonveg",
    price: "₹160",
    rating: "4.7",
    time: "20-30 mins",
    location: "Mainland China, Salt Lake",
    image: Chinese3
  },
  {
    id: 4,
    name: "Fried Rice",
    type: "veg",
    price: "₹110",
    rating: "4.3",
    time: "25-35 mins",
    location: "China Town, Sector 5",
    image: Chinese4
  },
  {
    id: 5,
    name: "Kung Pao Chicken",
    price: "₹250",
    rating: 4.7,
    time: "30 mins",
    type: "nonveg",
    location: "Chinatown Delights",
    image: Chinese5
  },
  {
    id: 6,
    name: "Veg Manchurian Gravy",
    price: "₹200",
    rating: 4.5,
    time: "22 mins",
    type: "veg",
    location: "Wok Express",
    image: Chinese6
  },
  {
    id: 7,
    name: "Hot & Sour Soup",
    price: "₹120",
    rating: 4.3,
    time: "12 mins",
    type: "veg",
    location: "China Bowl",
    image: Chinese7
  },
  {
    id: 8,
    name: "Chilli Chicken",
    price: "₹230",
    rating: 4.6,
    time: "26 mins",
    type: "nonveg",
    location: "Spicy Dragon",
    image: Chinese8
  },
  {
    id: 9,
    name: "Paneer Chilli Dry",
    price: "₹210",
    rating: 4.4,
    time: "24 mins",
    type: "veg",
    location: "Hunan House",
    image: Chinese9
  },
  {
    id: 10,
    name: "Dim Sums (Chicken)",
    price: "₹240",
    rating: 4.7,
    time: "18 mins",
    type: "nonveg",
    location: "Steamy Wok",
    image: Chinese10
  }
];

const Chinese = () => {
  const [sortPopup, setSortPopup] = useState(false);
  const [isVegOnly, setIsVegOnly] = useState(false);
  const [isNonVegOnly, setIsNonVegOnly] = useState(false);
  const [filterPopup, setFilterPopup] = useState(false);
  const [sortedData, setSortedData] = useState(chineseData);
  const [sortType, setSortType] = useState("default");
  const [isDeliveryFiltered, setIsDeliveryFiltered] = useState(false);
  const [cart, setCart] = useState({}); // cart me qty store karne ke liye

  useEffect(() => {
    let filtered = [...chineseData];

    if (isDeliveryFiltered) {
      filtered = filtered.filter((item) => item.time.includes("20"));
    }

    if (isVegOnly) {
      filtered = filtered.filter((item) => item.type === "veg");
    }

    if (isNonVegOnly) {
      filtered = filtered.filter((item) => item.type === "nonveg");
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

  const addToCart = (itemId) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[itemId] > 1) {
        updated[itemId] -= 1;
      } else {
        delete updated[itemId];
      }
      return updated;
    });
  };

  return (
    <div className="chinese-page">
      <h1 className="chinese-title">Chinese</h1>
      <p className="chinese-subtitle">
        Savory, spicy, and mouth-watering Chinese dishes just for you!
      </p>

      <div className="chinese-controls">
        <button className="control-btn" onClick={() => setFilterPopup(!filterPopup)}>
          Filter
        </button>
        <button className="control-btn" onClick={() => setSortPopup(!sortPopup)}>
          Sort By
        </button>
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

      <h3 className="chinese-count">{sortedData.length} Chinese Items</h3>

      <div className="chinese-grid">
        {sortedData.map((item) => (
          <div key={item.id} className="chinese-card">
            <img src={item.image} alt={item.name} className="chinese-img" />
            <div className="chinese-price">ITEMS AT {item.price}</div>
            <h4 className="chinese-name">{item.name}</h4>
            <p className="chinese-info">
              ⭐ {item.rating} • {item.time}
              <br />
              {item.location}
            </p>

            {/* Add to Cart Button */}
            {cart[item.id] ? (
              <div className="qty-controls">
                <button onClick={() => removeFromCart(item.id)}>-</button>
                <span>{cart[item.id]}</span>
                <button onClick={() => addToCart(item.id)}>+</button>
              </div>
            ) : (
              <button className="add-btn" onClick={() => addToCart(item.id)}>
                Add +
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chinese;
