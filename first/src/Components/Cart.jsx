import React, { useContext, useState, useEffect } from "react";
import '../assets/Images/Styles/Cart.css';
import { CartContext } from "./CartContext";
import confetti from "canvas-confetti";  // 🎉 confetti import

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [tracking, setTracking] = useState(false);
  const [status, setStatus] = useState(0);

  const items = Object.values(cartItems);

  const steps = ["Order Placed", "Preparing Food", "Out for Delivery", "Delivered"];

  const totalPrice = items.reduce(
    (acc, item) => acc + Number(item.price.replace(/[^0-9]/g, "")) * item.quantity,
    0
  );

  // ✅ Tracking updates
  useEffect(() => {
    if (tracking && status < steps.length - 1) {
      const timer = setTimeout(() => {
        setStatus((prev) => prev + 1);
      }, 3000);
      return () => clearTimeout(timer);
    }

    // ✅ Jab order deliver ho jaye → 5 sec baad cart clear ho + empty cart dikhe
    if (tracking && status === steps.length - 1) {
      const timer = setTimeout(() => {
        clearCart();
        setTracking(false); // 👈 wapas empty cart page khulega
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [tracking, status]);

  if (!tracking && items.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <div className="cart-container">
          <h2>🛒 Your Cart is Empty</h2>
          <p>Add some delicious items to get started!</p>
        </div>
      </div>
    );
  }

  // 🎉 Confetti effect
  const runConfetti = () => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handlePlaceOrder = () => {
    setShowModal(true); 
    runConfetti(); // ✅ order place hote hi confetti chalega
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        {!tracking ? (
          <>
            <h2>🛍️ My Cart</h2>

            <div className="cart-layout">
              {/* Cart Items Section */}
              <div className="cart-items-section">
                {items.map((item) => {
                  const itemTotal = Number(item.price.replace(/[^0-9]/g, "")) * item.quantity;
                  return (
                    <div key={`${item.category}-${item.id}`} className="cart-item">
                      <img src={item.image} alt={item.name} className="cart-item-img" />

                      <div className="cart-item-info">
                        <h3 className="cart-item-name">{item.name}</h3>
                        <p className="cart-item-price">Price: {item.price}</p>
                        <p className="cart-item-total">Total: ₹{itemTotal}</p>
                      </div>

                      <div className="cart-item-controls">
                        <button className="qty-btn" onClick={() => removeFromCart(item)}>-</button>
                        <span className="qty">{item.quantity}</span>
                        <button className="qty-btn" onClick={() => addToCart(item)}>+</button>
                      </div>
                    </div>
                  );
                })}

                <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
              </div>

              {/* Summary Section */}
              <div className="cart-summary">
                <h3>PRICE DETAILS</h3>
                <hr />
                <div className="summary-row">
                  <span>Price ({items.length} items)</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="summary-row">
                  <span>Discount</span>
                  <span className="discount">- ₹{totalPrice > 500 ? 100 : 50}</span>
                </div>
                <div className="summary-row">
                  <span>Platform Fee</span>
                  <span>₹5</span>
                </div>
                <hr />
                <div className="summary-total">
                  <span>Total Amount</span>
                  <span>₹{totalPrice - (totalPrice > 500 ? 100 : 50) + 5}</span>
                </div>
                <p className="save-msg">You save ₹{totalPrice > 500 ? 100 : 50} on this order</p>
                <button className="checkout-btn" onClick={handlePlaceOrder}>
                  PLACE ORDER
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2>📦 Track Your Order</h2>
            <div className="progress-bar">
              {steps.map((step, index) => (
                <div key={index} className={`step ${index <= status ? "active" : ""}`}>
                  <div className="circle">{index < status ? "✔️" : index + 1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
            <p className="status-msg">
              {status < steps.length - 1
                ? `⏳ ${steps[status]}...`
                : "🎉 Enjoy your meal 🍽️ — Thank you for ordering! 🙏 Please order again ❤️"}
            </p>
          </>
        )}
      </div>

      {/* ✅ Order Success Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="success-icon">✅</div>
            <h2>Order Placed Successfully!</h2>
            <p>Your delicious food is on the way 🚀</p>
            <p>Estimated Delivery: <b>30 mins</b></p>

            <div className="modal-actions">
              <button 
                onClick={() => {
                  setShowModal(false);
                  setTracking(true); 
                  setStatus(0);
                }} 
                className="track-btn"
              >
                Track Order
              </button>
              <button 
                onClick={() => {
                  clearCart(); 
                  setShowModal(false);
                }} 
                className="close-btn"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
