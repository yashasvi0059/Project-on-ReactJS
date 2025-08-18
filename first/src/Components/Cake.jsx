import React, { useState, useEffect, useContext } from "react";
import { CartContext } from './CartContext';
import '../assets/Images/Styles/Cake.css';
import Cake1 from '../assets/Images/Cake1.png';
import Cake2 from '../assets/Images/Cake2.png';
import Cake3 from '../assets/Images/Cake3.png';
import Cake4 from '../assets/Images/Cake4.png';
import Cake5 from '../assets/Images/Cake5.png';
import Cake6 from '../assets/Images/Cake6.png';
import Cake7 from '../assets/Images/Cake7.png';
import Cake8 from '../assets/Images/Cake8.png';
import Cake9 from '../assets/Images/Cake9.png';
import Cake10 from '../assets/Images/Cake10.png';

const cakeData = [
  {
  id: 1,
  name: "Chocolate Truffle",
  type: "egg", 
  price: "₹250",
  rating: "4.8",
  time: "20-30 mins",
  location: "Cake Walk, MG Road",
  image: Cake1
},
{
  id: 2,
  name: "Vanilla Delight",
  type: "eggless", 
  price: "₹200",
  rating: "4.6",
  time: "15-25 mins",
  location: "Sweet Tooth, Park Street",
  image: Cake2
},
{
  id: 3,
  name: "Red Velvet",
  type: "egg", 
  price: "₹300",
  rating: "4.9",
  time: "20-30 mins",
  location: "Baking Bliss, Salt Lake",
  image: Cake3
},
{
  id: 4,
  name: "Black Forest",
  type: "egg", 
  price: "₹220",
  rating: "4.5",
  time: "25-35 mins",
  location: "Cake World, Sector 5",
  image: Cake4
},
{
  id: 5,
  name: "Strawberry Cheesecake",
  type: "egg", 
  price: "₹650",
  rating: 4.9,
  time: "35 mins",
  location: "Berry Bliss",
  image: Cake5
},
{
  id: 6,
  name: "Pineapple Cake",
  type: "eggless", 
  price: "₹400",
  rating: 4.4,
  time: "18 mins",
  location: "Tropical Treats",
  image: Cake6
},
{
  id: 7,
  name: "Mango Mousse Cake",
  type: "egg", 
  price: "₹550",
  rating: 4.7,
  time: "22 mins",
  location: "Sunny Sweets",
  image: Cake7
},
{
  id: 8,
  name: "Chocolate Lava Cake",
  type: "egg", 
  price: "₹300",
  rating: 4.6,
  time: "15 mins",
  location: "Molten Magic",
  image: Cake8
},
{
  id: 9,
  name: "Eggless Vanilla Cake",
  type: "eggless", 
  price: "₹350",
  rating: 4.5,
  time: "20 mins",
  location: "Pure Bakes",
  image: Cake9
},
{
  id: 10,
  name: "Fruit & Nut Cake",
  type: "eggless", 
  price: "₹500",
  rating: 4.6,
  time: "25 mins",
  location: "Nutty Bakes",
  image: Cake10
}
];

const Cake = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const [sortPopup, setSortPopup] = useState(false);
  const [filterPopup, setFilterPopup] = useState(false);
  const [isEgglessOnly, setIsEgglessOnly] = useState(false);
  const [isEggBasedOnly, setIsEggBasedOnly] = useState(false);
  const [isDeliveryFiltered, setIsDeliveryFiltered] = useState(false);
  const [sortType, setSortType] = useState("default");
  const [sortedData, setSortedData] = useState(cakeData);

  const handleDeliveryFilter = () => setIsDeliveryFiltered(prev => !prev);
  const handleSort = (type) => setSortType(type);

  useEffect(() => {
    let filtered = [...cakeData];

    if (isDeliveryFiltered) filtered = filtered.filter(c => c.time.includes("20"));
    if (isEgglessOnly) filtered = filtered.filter(c => c.type === "eggless");
    if (isEggBasedOnly) filtered = filtered.filter(c => c.type === "egg");

    if (sortType === "rating") filtered.sort((a, b) => b.rating - a.rating);
    else if (sortType === "time") filtered.sort((a, b) => parseInt(a.time) - parseInt(b.time));
    else if (sortType === "lowToHigh") filtered.sort((a, b) => parseInt(a.price.slice(1)) - parseInt(b.price.slice(1)));
    else if (sortType === "highToLow") filtered.sort((a, b) => parseInt(b.price.slice(1)) - parseInt(a.price.slice(1)));

    setSortedData(filtered);
  }, [sortType, isDeliveryFiltered, isEgglessOnly, isEggBasedOnly]);

  return (
    <div className="cake-page" style={{ marginTop: "100px" }}>
      <h1 className="cake-title">Cakes</h1>
      <p className="cake-subtitle">Delicious, soft, and tempting cakes just for you!</p>

      <div className="cake-controls">
        <button className="control-btn" onClick={() => setFilterPopup(!filterPopup)}>Filter</button>
        <button className="control-btn" onClick={() => setSortPopup(!sortPopup)}>Sort By</button>
        <button className={`control-btn ${isDeliveryFiltered ? "active" : ""}`} onClick={handleDeliveryFilter}>
          {isDeliveryFiltered ? "Show All" : "20 Mins Delivery"}
        </button>
      </div>

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
                    checked={isEgglessOnly && !isEggBasedOnly}
                    onChange={() => {
                      setIsEgglessOnly(true);
                      setIsEggBasedOnly(false);
                    }}
                  />
                  Eggless Only
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="foodType"
                    checked={!isEgglessOnly && isEggBasedOnly}
                    onChange={() => {
                      setIsEgglessOnly(false);
                      setIsEggBasedOnly(true);
                    }}
                  />
                  Egg-Based Only
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="foodType"
                    checked={!isEgglessOnly && !isEggBasedOnly}
                    onChange={() => {
                      setIsEgglessOnly(false);
                      setIsEggBasedOnly(false);
                    }}
                  />
                  Both
                </label>
              </li>
            </ul>
          </div>
        </div>
      )}

      {sortPopup && (
        <div className="sort-overlay" onClick={() => setSortPopup(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <h3>SORT BY</h3>
            <ul>
              <li><label><input type="radio" checked={sortType === "default"} onClick={() => handleSort("default")} /> Relevance</label></li>
              <li><label><input type="radio" checked={sortType === "time"} onClick={() => handleSort("time")} /> Delivery Time</label></li>
              <li><label><input type="radio" checked={sortType === "rating"} onClick={() => handleSort("rating")} /> Rating</label></li>
              <li><label><input type="radio" checked={sortType === "lowToHigh"} onClick={() => handleSort("lowToHigh")} /> Cost: Low to High</label></li>
              <li><label><input type="radio" checked={sortType === "highToLow"} onClick={() => handleSort("highToLow")} /> Cost: High to Low</label></li>
            </ul>
          </div>
        </div>
      )}

      <h3 className="cake-count">{sortedData.length} Cake Items</h3>

      <div className="cake-grid">
        {sortedData.map(cake => {
          const key = `cake-${cake.id}`;
          const quantity = cartItems[key]?.quantity;

          return (
            <div key={key} className="cake-card">
              <img src={cake.image} alt={cake.name} className="cake-img" />
              <div className="cake-price">ITEMS AT {cake.price}</div>
              <h4 className="cake-name">{cake.name}</h4>
              <p className="cake-info">⭐ {cake.rating} • {cake.time} <br /> {cake.location}</p>

              {quantity ? (
                <div className="qty-controls">
                  <button onClick={() => removeFromCart({ ...cake, category: 'cake' })}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => addToCart({ ...cake, category: 'cake' })}>+</button>
                </div>
              ) : (
                <button className="add-btn" onClick={() => addToCart({ ...cake, category: 'cake' })}>Add +</button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cake;
