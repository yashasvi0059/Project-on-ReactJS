import React, { useState } from "react";
import "../assets/Images/Styles/Offers.css";

const Offers = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);

  const offers = [
    {
      id: 1,
      title: "50% Off on Pizza",
      description: "Get half price on all pizzas every Friday!",
      image: "https://i.pinimg.com/736x/38/40/7f/38407fbe011559e890b027782a7ac8dc.jpg",
    },
    {
      id: 2,
      title: "Buy 1 Get 1 Free Burger",
      description: "Grab your favorite burger and get one free!",
      image: "https://i.pinimg.com/736x/4c/6c/a1/4c6ca16b161fcfe181a8b5338d195546.jpg",
    },
    {
      id: 3,
      title: "Free Delivery",
      description: "Enjoy free delivery on orders above ₹499.",
      image: "https://i.pinimg.com/736x/6f/25/b3/6f25b398d40a759b40fb6b6da21ea37a.jpg",
    },
    {
      id: 4,
      title: "30% Off on Pasta",
      description: "Delicious pasta at 30% off all day Sunday.",
      image: "https://i.pinimg.com/736x/a6/f2/49/a6f2493eba2fca06f9b741c6346ead2a.jpg",
    },
    {
      id: 5,
      title: "Flat 20% Off on Momos",
      description: "Get juicy momos at 20% off this weekend.",
      image: "https://i.pinimg.com/736x/06/1e/0f/061e0f00939658cb6dd0242772b7f9d4.jpg",
    },
    {
      id: 6,
      title: "Dessert Deal",
      description: "Buy any 1 cakes & get 2 pastry FREE!",
      image: "https://i.pinimg.com/736x/9d/d8/c6/9dd8c6203c7317c16c7927392a88e5e3.jpg",
    },
    {
      id: 7,
      title: "Cool Summer Shakes",
      description: "Get flat 25% off on all shakes & smoothies.",
      image: "https://i.pinimg.com/1200x/ea/50/65/ea5065c21c218a4614bf6f21ba0f1465.jpg",
    },
    {
      id: 8,
      title: "Sweet Treats Offer",
      description: "Get 3 sweets at the price of 2!",
      image: "https://i.pinimg.com/736x/4f/e6/9d/4fe69d9c36778a188a05393d73e40f04.jpg",
    },
    {
      id: 9,
      title: "Refreshing Beverages",
      description: "Flat 50% off on all cold drinks & juices.",
      image: "https://i.pinimg.com/736x/ec/94/4d/ec944dfb50630fc01f25058b7930df0f.jpg",
    },
    {
      id: 10,
      title: "Chinese Combo Deal",
      description: "Get a combo of noodles + manchurian at just ₹199.",
      image: "https://i.pinimg.com/1200x/f6/e9/49/f6e949cfcb78564f8e7e3f13bde8fbd9.jpg",
    },
  ];

  return (
    <div className="page-content offers-container">
      <h2 className="offers-title">🔥 Exclusive Food Offers 🔥</h2>
      <p className="offers-subtitle">Best deals hand-picked for you 🍴</p>

      <div className="offers-grid">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <div className="offer-img-wrap">
              <img src={offer.image} alt={offer.title} className="offer-img" />
            </div>
            <div className="offer-body">
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <button
                className="offer-btn"
                onClick={() => setSelectedOffer(offer)}
              >
                Grab Offer
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedOffer && (
        <div
          className="offer-popup-overlay"
          onClick={() => setSelectedOffer(null)}
        >
          <div
            className="offer-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedOffer.title}</h2>
            <img src={selectedOffer.image} alt={selectedOffer.title} />
            <p>{selectedOffer.description}</p>
            <button onClick={() => setSelectedOffer(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offers;
