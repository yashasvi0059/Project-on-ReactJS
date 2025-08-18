import React, { useState, useEffect, useContext } from "react";
import { CartContext } from './CartContext';
import '../assets/Images/Styles/Pasta.css';
import Pasta1 from '../assets/Images/Pasta1.png';
import Pasta2 from '../assets/Images/Pasta2.png';
import Pasta3 from '../assets/Images/Pasta3.png';
import Pasta4 from '../assets/Images/Pasta4.png';
import Pasta5 from '../assets/Images/Pasta5.png';
import Pasta6 from '../assets/Images/Pasta6.png';
import Pasta7 from '../assets/Images/Pasta7.png';
import Pasta8 from '../assets/Images/Pasta8.png';
import Pasta9 from '../assets/Images/Pasta9.png';
import Pasta10 from '../assets/Images/Pasta10.png';

const pastaData = [
  {
    id: 1,
    name: "Creamy Alfredo Pasta",
    type: "nonveg",
    price: "₹149",
    rating: "4.2",
    time: "25-35 mins",
    location: "Pasta Palace, MG Road",
    image: Pasta1
  },
  {
    id: 2,
    name: "Spicy Arrabbiata Pasta",
    type: "veg",
    price: "₹139",
    rating: "4.5",
    time: "20-30 mins",
    location: "The Pasta Bar, Esplanade",
    image: Pasta2
  },
  {
    id: 3,
    name: "Paneer Makhani Pasta",
    type: "veg",
    price: "₹159",
    rating: "4.3",
    time: "30-40 mins",
    location: "Desi Pasta Co., Park Street",
    image: Pasta3
  },
  {
    id: 4,
    name: "Garlic Butter Veg Pasta",
    type: "veg",
    price: "₹129",
    rating: "4.4",
    time: "20-30 mins",
    location: "Veggie Bites, Salt Lake",
    image: Pasta4
  },
  {
    id: 5,
    name: "Peri Peri Pasta",
    type: "nonveg",
    price: "₹119",
    rating: "4.1",
    time: "15-25 mins",
    location: "HotPasta Express, Sector 5",
    image: Pasta5
  },
  {
    id: 6,
    name: "Pepperoni Pasta Delight",
    type: "nonveg",
    price: "₹179",
    rating: "4.6",
    time: "25-35 mins",
    location: "Meaty Bites, Salt Lake",
    image: Pasta6
  },
  {
    id: 7,
    name: "Mushroom & Corn Pasta",
    type: "veg",
    price: "₹139",
    rating: "4.0",
    time: "20-30 mins",
    location: "La Pino'z Pasta, Sector 5",
    image: Pasta7
  },
  {
    id: 8,
    name: "Grilled Chicken Pasta",
    type: "nonveg",
    price: "₹189",
    rating: "4.7",
    time: "25-35 mins",
    location: "Chickenlicious, Gariahat",
    image: Pasta8
  },
  {
    id: 9,
    name: "Loaded Meatball Pasta",
    type: "nonveg",
    price: "₹199",
    rating: "4.8",
    time: "30-40 mins",
    location: "Pasta Kingdom, City Center",
    image: Pasta9
  },
  {
    id: 10,
    name: "Mexican Salsa Pasta",
    type: "veg",
    price: "₹159",
    rating: "4.4",
    time: "20-30 mins",
    location: "Salsa Hut, Gariahat",
    image: Pasta10
  },
];

const Pasta = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const [sortPopup, setSortPopup] = useState(false);
  const [filterPopup, setFilterPopup] = useState(false);
  const [isVegOnly, setIsVegOnly] = useState(false);
  const [isNonVegOnly, setIsNonVegOnly] = useState(false);
  const [isDeliveryFiltered, setIsDeliveryFiltered] = useState(false);
  const [sortType, setSortType] = useState("default");
  const [sortedData, setSortedData] = useState(pastaData);

  const handleDeliveryFilter = () => setIsDeliveryFiltered(prev => !prev);
  const handleSort = (type) => setSortType(type);

  useEffect(() => {
    let filtered = [...pastaData];

    if (isDeliveryFiltered) filtered = filtered.filter(p => p.time.includes("20"));
    if (isVegOnly) filtered = filtered.filter(p => p.type === "veg");
    if (isNonVegOnly) filtered = filtered.filter(p => p.type === "nonveg");

    if (sortType === "rating") filtered.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    else if (sortType === "time") filtered.sort((a, b) => parseInt(a.time.split("-")[0]) - parseInt(b.time.split("-")[0]));
    else if (sortType === "lowToHigh") filtered.sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, "")) - parseInt(b.price.replace(/[^0-9]/g, "")));
    else if (sortType === "highToLow") filtered.sort((a, b) => parseInt(b.price.replace(/[^0-9]/g, "")) - parseInt(a.price.replace(/[^0-9]/g, "")));

    setSortedData(filtered);
  }, [sortType, isDeliveryFiltered, isVegOnly, isNonVegOnly]);

  return (
    <div className="pasta-page" style={{ marginTop: "100px" }}>
      <h1 className="pasta-title">Pasta</h1>
      <p className="pasta-subtitle">Delicious, cheesy, and creamy pastas just for you!</p>

      <div className="pasta-controls">
        <button className="control-btn" onClick={() => setFilterPopup(!filterPopup)}>Filter</button>
        <button className="control-btn" onClick={() => setSortPopup(!sortPopup)}>Sort By</button>
        <button className={`control-btn ${isDeliveryFiltered ? "active" : ""}`} onClick={handleDeliveryFilter}>
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

      <h3 className="pasta-count">{sortedData.length} Pasta Items</h3>

      <div className="pasta-grid">
        {sortedData.map(pasta => {
          const key = `pasta-${pasta.id}`; // unique key for cart
          const quantity = cartItems[key]?.quantity;

          return (
            <div key={key} className="pasta-card">
              <img src={pasta.image} alt={pasta.name} className="pasta-img" />
              <div className="pasta-price">ITEMS AT {pasta.price}</div>
              <h4 className="pasta-name">{pasta.name}</h4>
              <p className="pasta-info">⭐ {pasta.rating} • {pasta.time} <br /> {pasta.location}</p>

              {quantity ? (
                <div className="qty-controls">
                  <button onClick={() => removeFromCart({ ...pasta, category: 'pasta' })}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => addToCart({ ...pasta, category: 'pasta' })}>+</button>
                </div>
              ) : (
                <button className="add-btn" onClick={() => addToCart({ ...pasta, category: 'pasta' })}>
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

export default Pasta;
