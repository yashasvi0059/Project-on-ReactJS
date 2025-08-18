import React, { useState, useEffect, useContext } from "react";
import { CartContext } from './CartContext';
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
}
];

const Burger = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const [sortPopup, setSortPopup] = useState(false);
  const [filterPopup, setFilterPopup] = useState(false);
  const [isVegOnly, setIsVegOnly] = useState(false);
  const [isNonVegOnly, setIsNonVegOnly] = useState(false);
  const [isDeliveryFiltered, setIsDeliveryFiltered] = useState(false);
  const [sortType, setSortType] = useState("default");
  const [sortedData, setSortedData] = useState(burgerData);

  const handleDeliveryFilter = () => setIsDeliveryFiltered(prev => !prev);
  const handleSort = (type) => setSortType(type);

  useEffect(() => {
    let filtered = [...burgerData];

    if (isDeliveryFiltered) filtered = filtered.filter(b => b.time.includes("15") || b.time.includes("20"));
    if (isVegOnly) filtered = filtered.filter(b => b.type === "veg");
    if (isNonVegOnly) filtered = filtered.filter(b => b.type === "nonveg");

    if (sortType === "rating") filtered.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    else if (sortType === "time") filtered.sort((a, b) => parseInt(a.time.split("-")[0]) - parseInt(b.time.split("-")[0]));
    else if (sortType === "lowToHigh") filtered.sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, "")) - parseInt(b.price.replace(/[^0-9]/g, "")));
    else if (sortType === "highToLow") filtered.sort((a, b) => parseInt(b.price.replace(/[^0-9]/g, "")) - parseInt(a.price.replace(/[^0-9]/g, "")));

    setSortedData(filtered);
  }, [sortType, isDeliveryFiltered, isVegOnly, isNonVegOnly]);

  return (
    <div className="pizza-page" style={{ marginTop: "100px" }}>
      <h1 className="pizza-title">Burgers</h1>
      <p className="pizza-subtitle">Juicy, tasty burgers to satisfy your cravings!</p>

      <div className="pizza-controls">
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

      <h3 className="pizza-count">{sortedData.length} Burger Items</h3>

      <div className="pizza-grid">
        {sortedData.map(burger => {
          const key = `burger-${burger.id}`;
          const quantity = cartItems[key]?.quantity;

          return (
            <div key={key} className="pizza-card">
              <img src={burger.image} alt={burger.name} className="pizza-img" />
              <div className="pizza-price">ITEMS AT {burger.price}</div>
              <h4 className="pizza-name">{burger.name}</h4>
              <p className="pizza-info">⭐ {burger.rating} • {burger.time} <br /> {burger.location}</p>

              {quantity ? (
                <div className="qty-controls">
                  <button onClick={() => removeFromCart({ ...burger, category: 'burger' })}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => addToCart({ ...burger, category: 'burger' })}>+</button>
                </div>
              ) : (
                <button className="add-btn" onClick={() => addToCart({ ...burger, category: 'burger' })}>
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

export default Burger;
