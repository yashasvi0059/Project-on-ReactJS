import React, { useState, useEffect, useContext } from "react";
import { CartContext } from './CartContext';
import '../assets/Images/Styles/Bev.css';
import Bev1 from '../assets/Images/Bev1.png';
import Bev2 from '../assets/Images/Bev2.png';
import Bev3 from '../assets/Images/Bev3.png';
import Bev4 from '../assets/Images/Bev4.png';
import Bev5 from '../assets/Images/Bev5.png';
import Bev6 from '../assets/Images/Bev6.png';
import Bev7 from '../assets/Images/Bev7.png';
import Bev8 from '../assets/Images/Bev8.png';
import Bev9 from '../assets/Images/Bev9.png';
import Bev10 from '../assets/Images/Bev10.png';

const beveragesData = [
  {
    id: 1,
    name: "Classic Mojito",
    price: "₹150",
    rating: 4.5,
    time: "15 mins",
    type: "non-alcoholic",
    flavour: "Citrus",
    temperature: "Cold",
    location: "Cool Breeze Cafe",
    image: Bev1
  },
  {
    id: 2,
    name: "Margarita",
    price: "₹250",
    rating: 4.7,
    time: "20 mins",
    type: "alcoholic",
    flavour: "Citrus",
    temperature: "Cold",
    location: "Cheers Bar",
    image: Bev2
  },
  {
    id: 3,
    name: "Cold Coffee",
    price: "₹120",
    rating: 4.3,
    time: "10 mins",
    type: "non-alcoholic",
    flavour: "Coffee",
    temperature: "Cold",
    location: "Cafe Latte",
    image: Bev3
  },
  {
    id: 4,
    name: "Red Wine",
    price: "₹550",
    rating: 4.8,
    time: "25 mins",
    type: "alcoholic",
    flavour: "Fruit",
    temperature: "Room",
    location: "Vintage Cellar",
    image: Bev4
  },
  {
    id: 5,
    name: "Fresh Lemonade",
    price: "₹90",
    rating: 4.4,
    time: "8 mins",
    type: "non-alcoholic",
    flavour: "Citrus",
    temperature: "Cold",
    location: "Summer Sips",
    image: Bev5
  },
  {
    id: 6,
    name: "Whiskey Sour",
    price: "₹300",
    rating: 4.6,
    time: "18 mins",
    type: "alcoholic",
    flavour: "Citrus",
    temperature: "Cold",
    location: "Rocky’s Pub",
    image: Bev6
  },
  {
    id: 7,
    name: "Green Tea",
    price: "₹70",
    rating: 4.2,
    time: "5 mins",
    type: "non-alcoholic",
    flavour: "Tea",
    temperature: "Hot",
    location: "Tea Tales",
    image: Bev7
  },
  {
    id: 8,
    name: "Beer Pint",
    price: "₹180",
    rating: 4.5,
    time: "12 mins",
    type: "alcoholic",
    flavour: "Grain",
    temperature: "Cold",
    location: "Brew House",
    image: Bev8
  },
  {
    id: 9,
    name: "Smoothie Bowl",
    price: "₹200",
    rating: 4.6,
    time: "15 mins",
    type: "non-alcoholic",
    flavour: "Fruit",
    temperature: "Cold",
    location: "Healthy Sip",
    image: Bev9
  },
  {
    id: 10,
    name: "Gin & Tonic",
    price: "₹280",
    rating: 4.7,
    time: "17 mins",
    type: "alcoholic",
    flavour: "Citrus",
    temperature: "Cold",
    location: "Mixology Bar",
    image: Bev10
  }
];

const Beverages = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const [sortPopup, setSortPopup] = useState(false);
  const [filterPopup, setFilterPopup] = useState(false);
  const [isAlcoholic, setIsAlcoholic] = useState(false);
  const [isNonAlcoholic, setIsNonAlcoholic] = useState(false);
  const [isDeliveryFiltered, setIsDeliveryFiltered] = useState(false);
  const [sortType, setSortType] = useState("default");
  const [sortedData, setSortedData] = useState(beveragesData);
  const [selectedFlavour, setSelectedFlavour] = useState("");
  const [selectedTemperature, setSelectedTemperature] = useState("");

  const handleDeliveryFilter = () => setIsDeliveryFiltered(prev => !prev);
  const handleSort = (type) => setSortType(type);

  useEffect(() => {
    let filtered = [...beveragesData];

    if (isDeliveryFiltered) filtered = filtered.filter(b => parseInt(b.time) <= 15);

    if (isAlcoholic && !isNonAlcoholic) filtered = filtered.filter(b => b.type === "alcoholic");
    if (isNonAlcoholic && !isAlcoholic) filtered = filtered.filter(b => b.type === "non-alcoholic");

    if (selectedFlavour) filtered = filtered.filter(b => b.flavour === selectedFlavour);
    if (selectedTemperature) filtered = filtered.filter(b => b.temperature === selectedTemperature);

    if (sortType === "rating") filtered.sort((a, b) => b.rating - a.rating);
    else if (sortType === "time") filtered.sort((a, b) => parseInt(a.time) - parseInt(b.time));
    else if (sortType === "lowToHigh") filtered.sort((a, b) => parseInt(a.price.slice(1)) - parseInt(b.price.slice(1)));
    else if (sortType === "highToLow") filtered.sort((a, b) => parseInt(b.price.slice(1)) - parseInt(a.price.slice(1)));

    setSortedData(filtered);
  }, [sortType, isDeliveryFiltered, isAlcoholic, isNonAlcoholic, selectedFlavour, selectedTemperature]);

  return (
    <div className="beverages-page" style={{ marginTop: "100px" }}>
      <h1 className="beverages-title">Beverages</h1>
      <p className="beverages-subtitle">Refreshing drinks to quench your thirst!</p>

      <div className="beverages-controls">
        <button className="control-btn" onClick={() => setFilterPopup(!filterPopup)}>Filter</button>
        <button className="control-btn" onClick={() => setSortPopup(!sortPopup)}>Sort By</button>
        <button className={`control-btn ${isDeliveryFiltered ? "active" : ""}`} onClick={handleDeliveryFilter}>
          {isDeliveryFiltered ? "Show All" : "Fast Delivery"}
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
                    checked={isAlcoholic && !isNonAlcoholic}
                    onChange={() => {
                      setIsAlcoholic(true);
                      setIsNonAlcoholic(false);
                    }}
                  />
                  Alcoholic Only
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={isNonAlcoholic && !isAlcoholic}
                    onChange={() => {
                      setIsNonAlcoholic(true);
                      setIsAlcoholic(false);
                    }}
                  />
                  Non-Alcoholic Only
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={!isAlcoholic && !isNonAlcoholic}
                    onChange={() => {
                      setIsAlcoholic(false);
                      setIsNonAlcoholic(false);
                    }}
                  />
                  Both
                </label>
              </li>
            </ul>

            <h4>Flavour</h4>
            <select value={selectedFlavour} onChange={(e) => setSelectedFlavour(e.target.value)}>
              <option value="">All</option>
              <option value="Citrus">Citrus</option>
              <option value="Fruit">Fruit</option>
              <option value="Coffee">Coffee</option>
              <option value="Tea">Tea</option>
              <option value="Grain">Grain</option>
            </select>

            <h4>Temperature</h4>
            <select value={selectedTemperature} onChange={(e) => setSelectedTemperature(e.target.value)}>
              <option value="">All</option>
              <option value="Hot">Hot</option>
              <option value="Cold">Cold</option>
              <option value="Room">Room Temp</option>
            </select>
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

      <h3 className="beverages-count">{sortedData.length} Beverages</h3>

      <div className="beverages-grid">
        {sortedData.map(bev => {
          const key = `beverages-${bev.id}`;
          const quantity = cartItems[key]?.quantity;

          return (
            <div key={key} className="beverages-card">
              <img src={bev.image} alt={bev.name} className="beverages-img" />
              <div className="beverages-price">ITEMS AT {bev.price}</div>
              <h4 className="beverages-name">{bev.name}</h4>
              <p className="beverages-info">⭐ {bev.rating} • {bev.time} <br /> {bev.location}</p>

              {quantity ? (
                <div className="qty-controls">
                  <button onClick={() => removeFromCart({ ...bev, category: 'beverages' })}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => addToCart({ ...bev, category: 'beverages' })}>+</button>
                </div>
              ) : (
                <button className="add-btn" onClick={() => addToCart({ ...bev, category: 'beverages' })}>Add +</button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Beverages;
