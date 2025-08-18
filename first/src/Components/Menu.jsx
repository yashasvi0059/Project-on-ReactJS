import React from "react";
import { Link } from "react-router-dom";
import "../assets/Images/Styles/Menu.css";

const categories = [
  { name: "🍕 Pizza", path: "/pizza" },
  { name: "🍔 Burger", path: "/burger" },
  { name: "🍝 Pasta", path: "/pasta" },
  { name: "🥟 Momo", path: "/momo" },
  { name: "🥡 Chinese", path: "/chinese" },
  { name: "🎂 Cake", path: "/cake" },
  { name: "🥤 Shake", path: "/shake" },
  { name: "🍬 Sweets", path: "/sweets" },
  { name: "🥂 Beverages", path: "/beverages" },
];

const Menu = () => {
  return (
    <div className="page-content menu-container">
      <h2 className="menu-title">🍴 Our Menu</h2>
      <p className="menu-subtitle">
        Explore our wide range of delicious categories
      </p>

      <div className="menu-grid">
        {categories.map((cat, index) => (
          <Link to={cat.path} key={index} className="menu-card">
            <div className="menu-icon">{cat.name.split(" ")[0]}</div>
            <h3>{cat.name.replace(/[^a-zA-Z ]/g, "")}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
