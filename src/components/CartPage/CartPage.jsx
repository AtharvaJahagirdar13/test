// src/components/CartPage/CartPage.jsx

import React from 'react';
import { useCart } from '../../context/CartContext';
import './CartPage.css'; // Assuming your CSS file is in the same folder

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const handleRemove = (index) => {
    removeFromCart(index);
  };

  const handleProceedToBook = () => {
    // Logic for proceeding to book (e.g., navigating to a booking page)
    console.log("Proceeding to book...");
  };

  return (
    <div className="cart-page-container">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items-container">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img
                src={item.image} // Assuming the item has an image property
                alt={item.venueName}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h2>{item.venueName}</h2>
                <p>Timeslot: {item.timeslot}</p>
              </div>
              <button
                className="remove-item-button"
                onClick={() => handleRemove(index)}
              >
                Remove
              </button>
            </div>
          ))}

          <button
            className="proceed-to-book-button"
            onClick={handleProceedToBook}
          >
            Proceed to Book
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
