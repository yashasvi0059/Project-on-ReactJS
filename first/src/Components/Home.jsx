import React from "react";
import { Link } from "react-router-dom";
import "../assets/Images/Styles/Home.css";
import Pizza from '../assets/Images/Pizza.png';
import Burger from '../assets/Images/Burger.png';
import Pasta from '../assets/Images/Pasta.png';
import Cake from '../assets/Images/Cake.png';

const Home = () => {
  return (
    <div className="home-page page-container">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>
              Welcome to <span>Ramaya</span>
            </h1>
            <p>Where Every Bite Tells a Story 🍴</p>
            <Link to="/menu" className="hero-btn">
              Explore Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="home-categories">
        <h2>🍽️ Popular Categories</h2>
        <p className="section-subtitle">Our most loved dishes, handpicked for you</p>
        <div className="category-grid">
          <Link to="/pizza" className="category-card">
            <img src={Pizza} alt="Pizza" />
            <h3>Pizza</h3>
          </Link>
          <Link to="/burger" className="category-card">
            <img src={Burger} alt="Burger" />
            <h3>Burger</h3>
          </Link>
          <Link to="/pasta" className="category-card">
            <img src={Pasta} alt="Pasta" />
            <h3>Pasta</h3>
          </Link>
          <Link to="/cake" className="category-card">
            <img src={Cake} alt="Cake" />
            <h3>Cake</h3>
          </Link>
        </div>
      </section>

      {/* Special Offers */}
      <section className="home-offers">
        <h2>🔥 Special Offers 🔥</h2>
        <p className="section-subtitle">Delicious deals you don’t want to miss</p>
        <div className="offers-grid">
          <div className="offer-card">
            <img
              src="https://i.pinimg.com/736x/38/40/7f/38407fbe011559e890b027782a7ac8dc.jpg"
              alt="Pizza Offer"
            />
            <div className="offer-info">
              <h3>50% Off on Pizza</h3>
              <p>Every Friday – Taste the Cheesiest Delight</p>
            </div>
          </div>
          <div className="offer-card">
            <img
              src="https://i.pinimg.com/736x/4c/6c/a1/4c6ca16b161fcfe181a8b5338d195546.jpg"
              alt="Burger Offer"
            />
            <div className="offer-info">
              <h3>Buy 1 Get 1 Free Burger</h3>
              <p>Grab your favorite combo today!</p>
            </div>
          </div>
        </div>
        <Link to="/offers" className="view-more-btn">
          View All Offers →
        </Link>
      </section>

      {/* Testimonials */}
      <section className="home-testimonials">
        <h2>💬 What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              “Absolutely delicious food! Fast delivery and the taste is
              unmatched. Highly recommend Ramaya!” 🧡
            </p>
            <h4>- Aditi</h4>
          </div>
          <div className="testimonial-card">
            <p>
              “The pizza is heavenly and the cakes are pure love. Ramaya is my
              go-to food stop!” 🍕
            </p>
            <h4>- Rohan</h4>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="home-cta">
        <h2>Craving Something Delicious?</h2>
        <p>Order now & get it delivered fresh to your doorstep 🚀</p>
        <Link to="/menu" className="cta-btn">
          Order Now
        </Link>
      </section>
    </div>
  );
};

export default Home;

