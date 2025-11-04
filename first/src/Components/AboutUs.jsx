import React from "react";
import "../assets/Images/Styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="page-content about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About <span>Ramaya</span></h1>
        <p>Savor the Flavor – Because Every Bite Matters 🍴</p>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            Welcome to <b>Ramaya – Your Hunger, Our Responsibility!</b> Where <span className="highlight">food meets passion</span>! 
            Ramaya is a modern online food ordering platform designed to bring you <i>fresh, tasty, and hygienic meals</i> with the fastest delivery possible. Our priority is your <i>happiness and satisfaction</i>, which is why we make sure every order is a delicious and hassle-free experience.
            <br></br>
            In today’s busy lifestyle, finding time to step out and eat can be difficult. That’s where Ramaya steps in – 
            offering you a simple and convenient way to order your favorite dishes with just a few clicks, 
            and have them delivered straight to your doorstep. 
          </p>
          <p>
            Whether you’re craving a cheesy pizza, spicy snacks, 
            or sweet indulgences, Ramaya is here to deliver 
            <b> fresh and hot meals </b> right to your doorstep – 
            faster than you can imagine! 🚀
          </p>
          <p>
            <b> At Ramaya, our mission is clear: </b>
            <br></br>
            <ul>
            <li> Deliver quality food with fast and reliable service 🚀 </li>
            <li> Offer a wide variety of cuisines to satisfy every taste 🍕🍔🍜 </li>
            <li> Provide an affordable and secure online ordering experience 💳 </li>
            <li> Build a trusted platform for food lovers 🤝 </li>
            </ul>
          </p>
          <p>
            <b> Why Choose Ramaya? </b>
            <br></br>
            ✅ Fast & Reliable Delivery – Because your time matters 
            <br></br>
            ✅ Fresh & Hygienic Meals – Quality is our promise
            <br></br>
            ✅ Multiple Cuisines – All your favorites in one place
            <br></br>
            ✅ Easy & Secure Payments – Safe and smooth checkout
            <br></br>
            ✅ Customer Support – Always here to help you
            <br></br>
          </p>
          <p>
            <b>
              At Ramaya, we believe that “Good Food means a Good Life.” Our vision is to make food not just a necessity but a memorable experience that brightens your day.
            </b>
          </p>
        </div>
        <div className="story-image">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" 
            alt="Our Story" 
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission">
        <h2>What We Believe</h2>
        <div className="mission-cards">
          <div className="card">
            <h3>🌟 Our Mission</h3>
            <p>
              To serve <b>fresh, hygienic, and flavorful food </b> 
              that makes every customer smile.
            </p>
          </div>
          <div className="card">
            <h3>🎯 Our Vision</h3>
            <p>
              To become the <span className="highlight">most loved food destination</span>, 
              delivering joy with every order.
            </p>
          </div>
          <div className="card">
            <h3>💚 Our Values</h3>
            <p>
              Quality • Freshness • Speed • Customer Happiness
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet Our Chefs</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://i.pinimg.com/736x/ae/cc/99/aecc9972d103ae6108e46e5dea9f0565.jpg" alt="Chef Yashasvi" />
            <h4>Chef Yashasvi</h4>
            <p>Pastry & Dessert Specialist</p>
          </div>
          <div className="team-member">
            <img src="https://i.pinimg.com/736x/cc/28/74/cc2874314d189b77792c7ccbbec7b296.jpg" alt="Chef Anushka" />
            <h4>Chef Nandini</h4>
            <p>Pizza & Italian Cuisine</p>
          </div>
          <div className="team-member">
            <img src="https://i.pinimg.com/736x/b8/b4/d9/b8b4d9220922fffbd151103ef1c215f6.jpg" alt="Chef Nandini" />
            <h4>Chef Shreya</h4>
            <p>Masters in Beverages</p>
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="about-quote">
        <p>“Good food is all the sweeter when shared with good friends.” 🧡</p>
      </section>
    </div>
  );
};

export default AboutUs;
