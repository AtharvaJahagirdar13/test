// src/context/CartContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the Cart Context
export const CartContext = createContext();

// Custom hook to use the Cart Context
export const useCart = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage on mount
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  // Function to add item to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, item];
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  // Function to remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  // Provide cart items and the functions to the context
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

