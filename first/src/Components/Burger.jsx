import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import '../assets/Images/Styles/Burger.css';
import Burger1 from '../assets/Images/Burger1.png';
import Burger2 from '../assets/Images/Burger2.png';
import Burger3 from '../assets/Images/Burger3.png';
import Burger4 from '../assets/Images/Burger4.png';
import Burger5 from '../assets/Images/Burger5.png';
import Burger6 from '../assets/Images/Burger6.png';
import Burger7 from '../assets/Images/Burger7.png';
import Burger8 from '../assets/Images/Burger8.png';
import Burger9 from '../assets/Images/Burger9.png';
import Burger10 from '../assets/Images/Burger10.png';

const burgerData = [
  {
    id: 1,
    name: "Classic Veg Burger",
    type: "veg",
    price: "₹99",
    rating: "4.2",
    time: "20-30 mins",
    location: "Burger King, MG Road",
    image: Burger1
  },
  {
    id: 2,
    name: "Aloo Tikki Burger",
    type: "veg",
    price: "₹129",
    rating: "4.5",
    time: "25-35 mins",
    location: "McDonald's, Esplanade",
    image: Burger2
  },
  {
    id: 3,
    name: "Paneer Delight Burger",
    type: "veg",
    price: "₹149",
    rating: "4.3",
    time: "30-40 mins",
    location: "Ovenstory, Park Street",
    image: Burger3
  },
  {
    id: 4,
    name: "Spicy Chicken Burger",
    type: "nonveg",
    price: "₹130",
    rating: "4.5",
    time: "15-25 mins",
    location: "Burger Express, Salt Lake",
    image: Burger4
  },
  {
    id: 5,
    name: "Spicy Veg Burger",
    type: "veg",
    price: "₹109",
    rating: "4.1",
    time: "20-30 mins",
    location: "Burger Nation, Sector 5",
    image: Burger5
  },
  {
    id: 6,
    name: "Pepperoni Burger",
    type: "nonveg",
    price: "₹159",
    rating: "4.6",
    time: "25-35 mins",
    location: "Burger Nation, Salt Lake",
    image: Burger6
  },
  {
    id: 7,
    name: "Double Egg Burger",
    type: "nonveg",
    price: "₹139",
    rating: "4.0",
    time: "30-40 mins",
    location: "La Pino'z, Sector 5",
    image: Burger7
  },
  {
    id: 8,
    name: "Cheese Chicken Crunch",
    type: "nonveg",
    price: "₹169",
    rating: "4.7",
    time: "20-30 mins",
    location: "KFC, Gariahat",
    image: Burger8
  },
  {
  id: 9,
  name: "Meat Lovers Burger",
  type: "nonveg",
  price: "₹199",
  rating: "4.8",
  time: "25-35 mins",
  location: "Burger King, City Center",
  image: Burger9
},
{
  id: 10,
  name: "Mexican Green Wave Burger",
  type: "veg",
  price: "₹179",
  rating: "4.4",
  time: "30-40 mins",
  location: "Burger Hut, Gariahat",
  image: Burger10
},
];

const Burger = () => {
  const { id } = useParams();
  const [sortPopup, setSortPopup] = useState(false);
  const [isVegOnly, setIsVegOnly] = useState(false);
  const [isNonVegOnly, setIsNonVegOnly] = useState(false);
  const [filterPopup, setFilterPopup] = useState(false);
  const [sortedData, setSortedData] = useState(burgerData);
  const [sortType, setSortType] = useState("default");
  const [isDeliveryFiltered, setIsDeliveryFiltered] = useState(false);
  const [cart, setCart] = useState({}); // cart me qty store karne ke liye

  useEffect(() => {
    let filtered = [...burgerData];

    if (isDeliveryFiltered) {
      filtered = filtered.filter((b) => b.time.includes("20"));
    }

    if (isVegOnly) {
      filtered = filtered.filter((b) => b.type === "veg");
    }

    if (isNonVegOnly) {
      filtered = filtered.filter((b) => b.type === "nonveg");
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

  const addToCart = (burgerId) => {
    setCart((prev) => ({
      ...prev,
      [burgerId]: (prev[burgerId] || 0) + 1,
    }));
  };

  const removeFromCart = (burgerId) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[burgerId] > 1) {
        updated[burgerId] -= 1;
      } else {
        delete updated[burgerId];
      }
      return updated;
    });
  };

  return (
    <div className="burger-page">
      <h1 className="burger-title">Burgers</h1>
      <p className="burger-subtitle">
        Juicy, cheesy, and absolutely irresistible burgers just for you!
      </p>

      <div className="burger-controls">
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

      <h3 className="burger-count">{sortedData.length} Burger Items</h3>

      <div className="burger-grid">
        {sortedData.map((burger) => (
          <div key={burger.id} className="burger-card">
            <img src={burger.image} alt={burger.name} className="burger-img" />
            <div className="burger-price">ITEMS AT {burger.price}</div>
            <h4 className="burger-name">{burger.name}</h4>
            <p className="burger-info">
              ⭐ {burger.rating} • {burger.time}
              <br />
              {burger.location}
            </p>

            {/* Add to Cart Button */}
            {cart[burger.id] ? (
              <div className="qty-controls">
                <button onClick={() => removeFromCart(burger.id)}>-</button>
                <span>{cart[burger.id]}</span>
                <button onClick={() => addToCart(burger.id)}>+</button>
              </div>
            ) : (
              <button className="add-btn" onClick={() => addToCart(burger.id)}>
                Add +
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Burger;
