import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./Components/CartContext";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Menu from "./Components/Menu";
import Offers from "./Components/Offers";

import Pizza from "./Components/Pizza";
import Burger from "./Components/Burger";
import Pasta from "./Components/Pasta";
import Momo from "./Components/Momo";
import Chinese from "./Components/Chinese";
import Cake from "./Components/Cake";
import Shake from "./Components/Shake";
import Sweets from "./Components/Sweets";
import Beverages from "./Components/Beverages";
import Cart from "./Components/Cart";
import FoodDetail from "./Components/FoodItems";

// ✅ Auth Component (Login + Register + Forgot all inside it)
import Login from "./Components/Login";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <CartProvider>
      <Router>
        {/* ✅ Header/Footer only if logged in */}
        {isLoggedIn && <Header />}

        <Routes>
          {/* ✅ Auth Route */}
          <Route
            path="/login"
            element={<Login onLoginSuccess={() => setIsLoggedIn(true)} />}
          />

          {/* ✅ Protected Routes */}
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/offers" element={<Offers />} />

              {/* Food Categories */}
              <Route path="/pizza" element={<Pizza />} />
              <Route path="/burger" element={<Burger />} />
              <Route path="/pasta" element={<Pasta />} />
              <Route path="/momo" element={<Momo />} />
              <Route path="/chinese" element={<Chinese />} />
              <Route path="/cake" element={<Cake />} />
              <Route path="/shake" element={<Shake />} />
              <Route path="/sweets" element={<Sweets />} />
              <Route path="/beverages" element={<Beverages />} />

              {/* Cart */}
              <Route path="/cart" element={<Cart />} />

              {/* Food Detail Page */}
              <Route path="/food/:foodId" element={<FoodDetail />} />

              {/* 404 Fallback */}
              <Route path="*" element={<h2 style={{ padding: "20px" }}>Page Not Found</h2>} />
            </>
          ) : (
            // agar login nahi hai → sab route forcefully /login par redirect
            <Route path="*" element={<Navigate to="/login" replace />} />
          )}
        </Routes>

        {isLoggedIn && <Footer />}
      </Router>
    </CartProvider>
  );
}

export default App;
