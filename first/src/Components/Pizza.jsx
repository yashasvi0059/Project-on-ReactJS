import React, { useState, useEffect, useContext } from "react";
import '../assets/Images/Styles/Pizza.css';
import { CartContext } from './CartContext';
import Pizza1 from '../assets/Images/Pizza1.png';
import Pizza2 from '../assets/Images/Pizza2.png';
import Pizza3 from '../assets/Images/Pizza3.png';
import Pizza4 from '../assets/Images/Pizza4.png';
import Pizza5 from '../assets/Images/Pizza5.png';
import Pizza6 from '../assets/Images/Pizza6.png';
import Pizza7 from '../assets/Images/Pizza7.png';
import Pizza8 from '../assets/Images/Pizza8.png';
import Pizza9 from '../assets/Images/Pizza9.png';
import Pizza10 from '../assets/Images/Pizza10.png';

const pizzaData = [
  {
    id: 1,
    name: "Margherita Pizza",
    type: "veg",
    price: "₹129",
    rating: "4.4",
    time: "30-40 mins",
    location: "Pizza Hut, MG Road",
    image: Pizza1
  },
  {
    id: 2,
    name: "Farmhouse Pizza",
    type: "veg",
    price: "₹199",
    rating: "4.6",
    time: "35-45 mins",
    location: "Dominos, Esplanade",
    image: Pizza2
  },
  {
    id: 3,
    name: "Tandoori Paneer Pizza",
    type: "veg",
    price: "₹229",
    rating: "4.3",
    time: "25-30 mins",
    location: "Ovenstory, Park Street",
    image: Pizza3
  },
  {
    id: 4,
    name: "Veggie Delight Pizza",
    type: "veg",
    price: "₹179",
    rating: "4.5",
    time: "20-25 mins",
    location: "Pizza Express, Salt Lake",
    image: Pizza4
  },
  {
    id: 5,
    name: "Spicy Veg Pizza",
    type: "veg",
    price: "₹189",
    rating: "4.5",
    time: "20-25 mins",
    location: "Domino's, Sector 5",
    image: Pizza5
  },
  {
    id: 6,
    name: "Pepperoni Pizza",
    type: "nonveg",
    price: "₹249",
    rating: "4.7",
    time: "25-35 mins",
    location: "Pizza Nation, Salt Lake",
    image: Pizza6
  },
  {
    id: 7,
    name: "Veggie Supreme Pizza",
    type: "veg",
    price: "₹189",
    rating: "4.2",
    time: "30-40 mins",
    location: "La Pino'z, Sector 5",
    image: Pizza7
  },
  {
    id: 8,
    name: "Cheese Burst Pizza",
    type: "nonveg",
    price: "₹269",
    rating: "4.8",
    time: "20-30 mins",
    location: "Dominos, City Center",
    image: Pizza8
  },
  {
  id: 9,
  name: "Double Cheese Margherita",
  type: "veg",
  price: "₹279",
  rating: "4.6",
  time: "25-35 mins",
  location: "Dominos, Gariahat",
  image: Pizza9
},
{
  id: 10,
  name: "Mexican Green Wave",
  type: "veg",
  price: "₹299",
  rating: "4.4",
  time: "30-40 mins",
  location: "Pizza Hut, Sector V",
  image: Pizza10
},
];

const Pizza = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const [sortPopup, setSortPopup] = useState(false);
  const [filterPopup, setFilterPopup] = useState(false);
  const [isVegOnly, setIsVegOnly] = useState(false);
  const [isNonVegOnly, setIsNonVegOnly] = useState(false);
  const [isDeliveryFiltered, setIsDeliveryFiltered] = useState(false);
  const [sortType, setSortType] = useState("default");
  const [sortedData, setSortedData] = useState(pizzaData);

  const handleDeliveryFilter = () => setIsDeliveryFiltered(prev => !prev);
  const handleSort = (type) => setSortType(type);

  useEffect(() => {
    let filtered = [...pizzaData];

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
    <div className="pizza-page" style={{ marginTop: "100px" }}>
      <h1 className="pizza-title">Pizza</h1>
      <p className="pizza-subtitle">Cheesy, crispy, and absolutely irresistible pizzas just for you!</p>

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

      <h3 className="pizza-count">{sortedData.length} Pizza Items</h3>

      <div className="pizza-grid">
        {sortedData.map(pizza => {
  const key = `pizza-${pizza.id}`; // unique key: category + id
  const quantity = cartItems[key]?.quantity;

  return (
    <div key={key} className="pizza-card">
      <img src={pizza.image} alt={pizza.name} className="pizza-img" />
      <div className="pizza-price">ITEMS AT {pizza.price}</div>
      <h4 className="pizza-name">{pizza.name}</h4>
      <p className="pizza-info">⭐ {pizza.rating} • {pizza.time} <br /> {pizza.location}</p>

      {quantity ? (
        <div className="qty-controls">
          <button onClick={() => removeFromCart({ ...pizza, category: 'pizza' })}>-</button>
          <span>{quantity}</span>
          <button onClick={() => addToCart({ ...pizza, category: 'pizza' })}>+</button>
        </div>
      ) : (
        <button className="add-btn" onClick={() => addToCart({ ...pizza, category: 'pizza' })}>
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

export default Pizza;
