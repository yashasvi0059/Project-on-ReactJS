// CartContext.js
import React, { createContext, useState } from "react";

// 1️⃣ Create the context
export const CartContext = createContext();

// 2️⃣ Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prev) => {
      const key = `${item.category}-${item.id}`;
      const existingItem = prev[key];
      return {
        ...prev,
        [key]: {
          ...item,
          quantity: existingItem ? existingItem.quantity + 1 : 1,
        },
      };
    });
  };

  // Remove one quantity of item
  const removeFromCart = (item) => {
    setCartItems((prev) => {
      const key = `${item.category}-${item.id}`;
      const existingItem = prev[key];
      if (!existingItem) return prev;

      if (existingItem.quantity === 1) {
        const { [key]: _, ...rest } = prev;
        return rest;
      } else {
        return {
          ...prev,
          [key]: {
            ...existingItem,
            quantity: existingItem.quantity - 1,
          },
        };
      }
    });
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems({});
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
