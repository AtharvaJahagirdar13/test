import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import venues from '../Assets/data1';
import './VenueDetailPage.css'; 

const VenueDetailPage = () => {
  const { venueId } = useParams();
  const [venue, setVenue] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeslot, setSelectedTimeslot] = useState(null);
  const [selectedSport, setSelectedSport] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [cartItem, setCartItem] = useState(null);
  const [quantity, setQuantity] = useState(1); // New state for quantity

  const navigate = useNavigate();

  useEffect(() => {
    const selectedVenue = venues.find(v => v.id === parseInt(venueId));
    setVenue(selectedVenue);
    
    // Load cart count from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartCount(cartItems.length);
  }, [venueId]);

  const handleReviewSubmit = () => {
    if (newReview.trim()) {
      setReviews([newReview, ...reviews]);
      setNewReview('');
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    if (!selectedDate || !selectedTimeslot || !selectedSport) {
      alert('Please select a date, timeslot, and a sport.');
      return;
    }

    const newCartItem = {
      venueId,
      venueName: venue.location,
      date: selectedDate.toISOString(),
      timeslot: selectedTimeslot,
      sport: selectedSport,
      image: venue.image,
      quantity: quantity, // Include quantity in cart item
    };

    setCartItem(newCartItem);
    setShowSidebar(true);
  };

  const handleProceedToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(cartItem);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setCartCount(cartItems.length);
    setShowSidebar(false);
    navigate('/cart');
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTimeslot(null);
  };

  const handleTimeslotClick = (slot) => {
    setSelectedTimeslot(slot);
  };

  const handleSportClick = (sport) => {
    setSelectedSport(sport);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('sidebar-overlay')) {
      setShowSidebar(false);
    }
  };

  // New functions to handle quantity changes
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  if (!venue) {
    return <p>Loading...</p>;
  }

  return (
    <div className="venue-detail-page-custom">
      <div className="venue-details-container-custom">
        <div className="venue-image-custom">
          <img src={venue.image} alt={venue.location} />
          <button
            className="maps-button-custom"
            onClick={() =>
              window.open(
                `https://www.google.com/maps/search/?api=1&query=${venue.location}`,
                '_blank'
              )
            }
          >
            View on Google Maps
          </button>
        </div>

        <div className="venue-info-custom">
          <h1>{venue.location}</h1>
          <p>Sports Played:</p>
          <div className="sports-buttons-custom">
            {venue.sports.map((sport) => (
              <button 
                key={sport} 
                className={`sport-button-custom ${selectedSport === sport ? 'selected' : ''}`}
                onClick={() => handleSportClick(sport)}
              >
                {sport}
              </button>
            ))}
          </div>

          <div className="calendar-section-custom">
            <h3>Select Date:</h3>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              minDate={new Date()}
              inline
            />
          </div>

          {selectedDate && (
            <div className="timeslots-custom">
              <h3>Available Timeslots:</h3>
              <ul className="timeslot-list-custom">
                {venue.timeSlots && venue.timeSlots.length > 0 ? (
                  venue.timeSlots.map((slot, index) => (
                    <li key={index}>
                      <button 
                        className={`timeslot-button-custom ${selectedTimeslot === slot ? 'selected' : ''}`}
                        onClick={() => handleTimeslotClick(slot)}
                      >
                        {slot}
                      </button>
                    </li>
                  ))
                ) : (
                  <p>No timeslots available</p>
                )}
              </ul>
            </div>
          )}

          <div className="cart-section-custom">
            <button
              onClick={handleAddToCart}
              className="add-to-cart-button-custom"
            >
              Add to Cart
            </button>
            <div className="cart-counter">
              <button onClick={decrementQuantity} className="quantity-button">-</button>
              <span>{quantity} items in cart</span>
              <button onClick={incrementQuantity} className="quantity-button">+</button>
            </div>
          </div>
        </div>
      </div>

      <div className="review-section-custom">
        <h3>Leave a Review:</h3>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review here..."
        />
        <button onClick={handleReviewSubmit}>Submit Review</button>

        <div className="reviews-list-custom">
          <h3>Existing Reviews:</h3>
          {reviews.length === 0 ? (
            <p>No reviews yet. Be the first to leave a review!</p>
          ) : (
            <ul>
              {reviews.map((review, index) => (
                <li key={index}>{review}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {showSidebar && (
        <div className="sidebar-overlay" onClick={handleOverlayClick}>
          <div className="sidebar">
            <h2>Added to Cart</h2>
            <img src={venue.image} alt={venue.location} className="sidebar-image" />
            <h3>{venue.location}</h3>
            <p>Date: {selectedDate.toDateString()}</p>
            <p>Time: {selectedTimeslot}</p>
            <p>Sport: {selectedSport}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={handleProceedToCart} className="proceed-button">
              Proceed to Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VenueDetailPage;
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import venues from '../Assets/data1'; // Your venues data
// import './VenueDetailPage.css'; // Updated import for CSS

// const VenueDetailPage = () => {
//   const { venueId } = useParams();
//   const [venue, setVenue] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [newReview, setNewReview] = useState('');
//   const [cartCount, setCartCount] = useState(0);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTimeslot, setSelectedTimeslot] = useState(null);
//   const [selectedSport, setSelectedSport] = useState(null);
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [cartItem, setCartItem] = useState(null);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const selectedVenue = venues.find(v => v.id === parseInt(venueId));
//     setVenue(selectedVenue);
//   }, [venueId]);

//   const handleReviewSubmit = () => {
//     if (newReview.trim()) {
//       setReviews([newReview, ...reviews]);
//       setNewReview('');
//     }
//   };

//   const handleAddToCart = (e) => {
//     e.stopPropagation(); // Prevent event from bubbling up
//     if (!selectedDate || !selectedTimeslot || !selectedSport) {
//       alert('Please select a date, timeslot, and a sport.');
//       return;
//     }

//     const newCartItem = {
//       venueId,
//       venueName: venue.location,
//       date: selectedDate.toISOString(),
//       timeslot: selectedTimeslot,
//       sport: selectedSport,
//       image: venue.image,
//     };

//     setCartItem(newCartItem);
//     setShowSidebar(true);
//   };

//   const handleProceedToCart = () => {
//     setCartCount(cartCount + 1);
//     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     cartItems.push(cartItem);
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//     setShowSidebar(false);
//     navigate('/cart');
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     setSelectedTimeslot(null);
//   };

//   const handleTimeslotClick = (slot) => {
//     setSelectedTimeslot(slot);
//   };

//   const handleSportClick = (sport) => {
//     setSelectedSport(sport);
//   };

//   const handleOverlayClick = (e) => {
//     if (e.target.classList.contains('sidebar-overlay')) {
//       setShowSidebar(false);
//     }
//   };

//   if (!venue) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="venue-detail-page-custom">
//       <div className="venue-details-container-custom">
//         <div className="venue-image-custom">
//           <img src={venue.image} alt={venue.location} />
//           <button
//             className="maps-button-custom"
//             onClick={() =>
//               window.open(
//                 `https://www.google.com/maps/search/?api=1&query=${venue.location}`,
//                 '_blank'
//               )
//             }
//           >
//             View on Google Maps
//           </button>
//         </div>

//         <div className="venue-info-custom">
//           <h1>{venue.location}</h1>
//           <p>Sports Played:</p>
//           <div className="sports-buttons-custom">
//             {venue.sports.map((sport) => (
//               <button 
//                 key={sport} 
//                 className={`sport-button-custom ${selectedSport === sport ? 'selected' : ''}`}
//                 onClick={() => handleSportClick(sport)}
//               >
//                 {sport}
//               </button>
//             ))}
//           </div>

//           <div className="calendar-section-custom">
//             <h3>Select Date:</h3>
//             <DatePicker
//               selected={selectedDate}
//               onChange={handleDateChange}
//               minDate={new Date()}
//               inline
//             />
//           </div>

//           {selectedDate && (
//             <div className="timeslots-custom">
//               <h3>Available Timeslots:</h3>
//               <ul className="timeslot-list-custom">
//                 {venue.timeSlots && venue.timeSlots.length > 0 ? (
//                   venue.timeSlots.map((slot, index) => (
//                     <li key={index}>
//                       <button 
//                         className={`timeslot-button-custom ${selectedTimeslot === slot ? 'selected' : ''}`}
//                         onClick={() => handleTimeslotClick(slot)}
//                       >
//                         {slot}
//                       </button>
//                     </li>
//                   ))
//                 ) : (
//                   <p>No timeslots available</p>
//                 )}
//               </ul>
//             </div>
//           )}

//           <div className="cart-section-custom">
//             <button
//               onClick={handleAddToCart}
//               className="add-to-cart-button-custom"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="review-section-custom">
//         <h3>Leave a Review:</h3>
//         <textarea
//           value={newReview}
//           onChange={(e) => setNewReview(e.target.value)}
//           placeholder="Write your review here..."
//         />
//         <button onClick={handleReviewSubmit}>Submit Review</button>

//         <div className="reviews-list-custom">
//           <h3>Existing Reviews:</h3>
//           {reviews.length === 0 ? (
//             <p>No reviews yet. Be the first to leave a review!</p>
//           ) : (
//             <ul>
//               {reviews.map((review, index) => (
//                 <li key={index}>{review}</li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>

//       {showSidebar && (
//         <div className="sidebar-overlay" onClick={handleOverlayClick}>
//           <div className="sidebar">
//             <h2>Added to Cart</h2>
//             <img src={venue.image} alt={venue.location} className="sidebar-image" />
//             <h3>{venue.location}</h3>
//             <p>Date: {selectedDate.toDateString()}</p>
//             <p>Time: {selectedTimeslot}</p>
//             <p>Sport: {selectedSport}</p>
//             <button onClick={handleProceedToCart} className="proceed-button">
//               Proceed to Continue
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };


// export default VenueDetailPage;
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import venues from '../Assets/data1'; // Your venues data
// import './VenueDetailPage.css'; // CSS file for styling

// const VenueDetailPage = () => {
//   const { venueId } = useParams(); // Extract the venueId from the URL
//   const [venue, setVenue] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [newReview, setNewReview] = useState('');
//   const [cartCount, setCartCount] = useState(0); // Cart count for the venue
//   const [selectedTimeslot, setSelectedTimeslot] = useState(null);
//   const [selectedSport, setSelectedSport] = useState(null);
//   const [showPopup, setShowPopup] = useState(false); // Popup state
//   const [popupMessage, setPopupMessage] = useState(''); // Popup message

//   const navigate = useNavigate(); // For navigation to the cart page

//   // Fetch the venue details based on the venueId
//   useEffect(() => {
//     const selectedVenue = venues[venueId];
//     setVenue(selectedVenue);
//   }, [venueId]);

//   // Handle review submission
//   const handleReviewSubmit = () => {
//     if (newReview.trim()) {
//       setReviews([newReview, ...reviews]);
//       setNewReview('');
//     }
//   };

//   // Handle Add to Cart
//   const handleAddToCart = () => {
//     if (!selectedTimeslot || !selectedSport) {
//       alert('Please select a timeslot and a sport.');
//       return;
//     }

//     setCartCount(cartCount + 1); // Increment cart count

//     // Show popup message
//     setPopupMessage(`Added to cart: ${venue.location}, ${selectedTimeslot}, Sport: ${selectedSport}`);
//     setShowPopup(true); // Show the popup

//     // Add this venue to the cart
//     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     cartItems.push({
//       venueId,
//       venueName: venue.location,
//       timeslot: selectedTimeslot,
//       sport: selectedSport,
//     });
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   };

//   // Navigate to cart page
//   const goToCartPage = () => {
//     navigate('/cart');
//   };

//   // Handle timeslot selection
//   const handleTimeslotClick = (slot) => {
//     setSelectedTimeslot(slot);
//   };

//   // Handle sport selection
//   const handleSportClick = (sport) => {
//     setSelectedSport(sport);
//   };

//   if (!venue) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="venue-detail-page-custom">
//       <div className="venue-details-container-custom">
//         <div className="venue-image-container-custom">
//           <img src={venue.image} alt={venue.location} className="venue-image-custom" />
//           <button
//             className="maps-button-custom"
//             onClick={() =>
//               window.open(
//                 `https://www.google.com/maps/search/?api=1&query=${venue.location}`,
//                 '_blank'
//               )
//             }
//           >
//             View on Google Maps
//           </button>
//         </div>

//         <div className="venue-info-container-custom">
//           <h1 className="venue-name-custom">{venue.location}</h1>

//           <div className="sports-section-custom">
//             <h3>Sports Available:</h3>
//             <div className="sports-buttons-custom">
//               {venue.sports.map((sport) => (
//                 <button 
//                   key={sport} 
//                   className={`sport-button-custom ${selectedSport === sport ? 'selected' : ''}`}
//                   onClick={() => handleSportClick(sport)}
//                 >
//                   {sport}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="timeslots-section-custom">
//             <h3>Available Timeslots:</h3>
//             <div className="timeslots-buttons-custom">
//               {venue.timeSlots && venue.timeSlots.length > 0 ? (
//                 venue.timeSlots.map((slot) => (
//                   <button 
//                     key={slot} 
//                     className={`timeslot-button-custom ${selectedTimeslot === slot ? 'selected' : ''}`}
//                     onClick={() => handleTimeslotClick(slot)}
//                   >
//                     {slot}
//                   </button>
//                 ))
//               ) : (
//                 <p>No timeslots available</p>
//               )}
//             </div>
//           </div>

//           <div className="cart-section-custom">
//             <button className="add-to-cart-button-custom" onClick={handleAddToCart}>
//               Add to Cart
//             </button>
//           </div>

//           <div className="review-section-custom">
//             <h3>Add Your Review:</h3>
//             <textarea
//               value={newReview}
//               onChange={(e) => setNewReview(e.target.value)}
//               placeholder="Write your review here..."
//               className="review-input-custom"
//             />
//             <button onClick={handleReviewSubmit} className="submit-review-button-custom">Submit Review</button>
//             <ul className="reviews-list-custom">
//               {reviews.map((review, index) => (
//                 <li key={index} className="review-item-custom">{review}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Popup for success messages */}
//       {showPopup && (
//         <div className="popup-custom">
//           <p>{popupMessage}</p>
//           <button onClick={() => setShowPopup(false)}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VenueDetailPage;

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import venues from '../Assets/data1'; // Your venues data
// import './VenueDetailPage.css'; // Updated import for CSS

// const VenueDetailPage = () => {
//   const { venueId } = useParams(); // Extract the venueId from the URL
//   const [venue, setVenue] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [newReview, setNewReview] = useState('');
//   const [cartCount, setCartCount] = useState(0);
//   const [selectedTimeslot, setSelectedTimeslot] = useState(null);
//   const [selectedSport, setSelectedSport] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');

//   const navigate = useNavigate(); // For navigation to the cart page

//   // Fetch the venue details based on the venueId
//   useEffect(() => {
//     const selectedVenue = venues.find(v => v.id === parseInt(venueId)); // Ensure we find by ID
//     setVenue(selectedVenue);
//   }, [venueId]);

//   // Handle review submission
//   const handleReviewSubmit = () => {
//     if (newReview.trim()) {
//       setReviews([newReview, ...reviews]);
//       setNewReview('');
//     }
//   };

//   // Handle Add to Cart
//   const handleAddToCart = () => {
//     if (!selectedTimeslot || !selectedSport) {
//       alert('Please select a timeslot and a sport.');
//       return;
//     }

//     setCartCount(cartCount + 1);
//     setPopupMessage(`Added to cart: ${venue.location}, ${selectedTimeslot}, Sport: ${selectedSport}`);
//     setShowPopup(true);

//     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     cartItems.push({
//       venueId,
//       venueName: venue.location,
//       timeslot: selectedTimeslot,
//       sport: selectedSport,
//     });
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   };

//   // Navigate to cart page
//   const goToCartPage = () => {
//     navigate('/cart');
//   };

//   // Handle timeslot selection
//   const handleTimeslotClick = (slot) => {
//     setSelectedTimeslot(slot);
//   };

//   // Handle sport selection
//   const handleSportClick = (sport) => {
//     setSelectedSport(sport);
//   };

//   if (!venue) {
//     return <p>Loading...</p>; // Handle loading state
//   }

//   return (
//     <div className="venue-detail-page-custom">
//       <div className="venue-details-container-custom">
//         <div className="venue-image-custom">
//           <img src={venue.image} alt={venue.location} />
//           <button
//             className="maps-button-custom"
//             onClick={() =>
//               window.open(
//                 `https://www.google.com/maps/search/?api=1&query=${venue.location}`,
//                 '_blank'
//               )
//             }
//           >
//             View on Google Maps
//           </button>
//         </div>

//         <div className="venue-info-custom">
//           <h1>{venue.location}</h1>
//           <p>Sports Played:</p>
//           <div className="sports-buttons-custom">
//             {venue.sports.map((sport) => (
//               <button 
//                 key={sport} 
//                 className={`timeslot-button-custom ${selectedSport === sport ? 'selected' : ''}`}
//                 onClick={() => handleSportClick(sport)}
//               >
//                 {sport}
//               </button>
//             ))}
//           </div>

//           <div className="timeslots-custom">
//             <h3>Available Timeslots:</h3>
//             <ul className="timeslot-list-custom">
//               {venue.timeSlots && venue.timeSlots.length > 0 ? (
//                 venue.timeSlots.map((slot, index) => (
//                   <li key={index}>
//                     <button 
//                       className={`timeslot-button-custom ${selectedTimeslot === slot ? 'selected' : ''}`}
//                       onClick={() => handleTimeslotClick(slot)}
//                     >
//                       {slot}
//                     </button>
//                   </li>
//                 ))
//               ) : (
//                 <p>No timeslots available</p>
//               )}
//             </ul>
//           </div>

//           <div className="cart-section-custom">
//             <button
//               onClick={handleAddToCart}
//               className="add-to-cart-button-custom"
//             >
//               Add to Cart
//             </button>
//             {cartCount > 0 && (
//               <p>
//                 Items in Cart: {cartCount}{' '}
//                 <button onClick={goToCartPage}>Go to Cart</button>
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       {showPopup && (
//         <div className="popup-custom">
//           <h3>{popupMessage}</h3>
//           <button onClick={() => setShowPopup(false)}>Close</button>
//         </div>
//       )}

//       <div className="review-section-custom">
//         <h3>Leave a Review:</h3>
//         <textarea
//           value={newReview}
//           onChange={(e) => setNewReview(e.target.value)}
//           placeholder="Write your review here..."
//         />
//         <button onClick={handleReviewSubmit}>Submit Review</button>

//         <div className="reviews-list-custom">
//           <h3>Existing Reviews:</h3>
//           {reviews.length === 0 ? (
//             <p>No reviews yet. Be the first to leave a review!</p>
//           ) : (
//             <ul>
//               {reviews.map((review, index) => (
//                 <li key={index}>{review}</li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VenueDetailPage;


/*
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import venues from '../Assets/data1'; // Your venues data
import './VenueDetailPage'

const VenueDetailPage = () => {
  const { venueId } = useParams(); // Extract the venueId from the URL
  const [venue, setVenue] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  // Fetch the venue details based on the venueId
  useEffect(() => {
    const selectedVenue = venues[venueId];
    setVenue(selectedVenue);
  }, [venueId]);

  // Handle review submission
  const handleReviewSubmit = () => {
    if (newReview.trim()) {
      setReviews([newReview, ...reviews]);
      setNewReview('');
    }
  };

  if (!venue) {
    return <p>Loading...</p>;
  }

  return (
    <div className="venue-detail-page">
      <div className="venue-details-container">
        <div className="venue-info">
          <h1>{venue.location}</h1>
          <p>Sports Played: {venue.sports.join(', ')}</p>

          <div className="timeslots">
            <h3>Available Timeslots:</h3>
            <ul>
              {venue.timeSlots.map((slot, index) => (
                <li key={index}>{slot}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="venue-image">
          <img src={venue.image} alt={venue.location} />
          <button
            className="maps-button"
            onClick={() =>
              window.open(
                `https://www.google.com/maps/search/?api=1&query=${venue.location}`,
                '_blank'
              )
            }
          >
            View on Google Maps
          </button>
        </div>
      </div>

      
      <div className="review-section">
        <h3>Leave a Review:</h3>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review here..."
        />
        <button onClick={handleReviewSubmit}>Submit Review</button>

        <div className="reviews-list">
          <h3>Existing Reviews:</h3>
          {reviews.length === 0 ? (
            <p>No reviews yet. Be the first to leave a review!</p>
          ) : (
            <ul>
              {reviews.map((review, index) => (
                <li key={index}>{review}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default VenueDetailPage;

*/
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import venues from '../Assets/data1'; // Your venues data
// import './VenueDetailPage.css'; // Updated import for CSS

// const VenueDetailPage = () => {
//   const { venueId } = useParams(); // Extract the venueId from the URL
//   const [venue, setVenue] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [newReview, setNewReview] = useState('');
//   const [cartCount, setCartCount] = useState(0); // Cart count for the venue

//   const navigate = useNavigate(); // For navigation to the cart page

//   // Fetch the venue details based on the venueId
//   useEffect(() => {
//     const selectedVenue = venues[venueId];
//     setVenue(selectedVenue);
//   }, [venueId]);

//   // Handle review submission
//   const handleReviewSubmit = () => {
//     if (newReview.trim()) {
//       setReviews([newReview, ...reviews]);
//       setNewReview('');
//     }
//   };

//   // Handle Add to Cart
//   const handleAddToCart = () => {
//     setCartCount(cartCount + 1); // Increment cart count
//     // Assuming there's a global or local state to manage the cart
//     // Add this venue to the cart (you can replace this with actual cart logic)
//     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     cartItems.push({
//       venueId,
//       venueName: venue.location,
//       timeslot: venue.timeSlots[0], // Assuming selecting first timeslot
//     });
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   };

//   // Navigate to cart page
//   const goToCartPage = () => {
//     navigate('/cart');
//   };

//   if (!venue) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="venue-detail-page-custom">
//       <div className="venue-details-container-custom">
//         <div className="venue-info-custom">
//           <h1>{venue.location}</h1>
//           <p>Sports Played: {venue.sports.join(', ')}</p>

//           <div className="timeslots-custom">
//             <h3>Available Timeslots:</h3>
//             {venue.timeSlots && venue.timeSlots.length > 0 ? (
//               <ul>
//                 {venue.timeSlots.map((slot, index) => (
//                   <li key={index}>{slot}</li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No timeslots available</p>
//             )}
//           </div>

//           {/* Add null check for owner */}
//           {venue.owner && (
//             <p>
//               Owner: {venue.owner.name} ({venue.owner.contact})
//             </p>
//           )}
          
//           {/* Add to Cart Section */}
//           <div className="cart-section-custom">
//             <button
//               onClick={handleAddToCart}
//               className="add-to-cart-button-custom"
//             >
//               Add to Cart
//             </button>
//             {cartCount > 0 && (
//               <p>
//                 Items in Cart: {cartCount}{' '}
//                 <button onClick={goToCartPage}>Go to Cart</button>
//               </p>
//             )}
//           </div>
//         </div>

//         <div className="venue-image-custom">
//           <img src={venue.image} alt={venue.location} />
//           <button
//             className="maps-button-custom"
//             onClick={() =>
//               window.open(
//                 `https://www.google.com/maps/search/?api=1&query=${venue.location}`,
//                 '_blank'
//               )
//             }
//           >
//             View on Google Maps
//           </button>
//         </div>
//       </div>

//       {/* Reviews Section */}
//       <div className="review-section-custom">
//         <h3>Leave a Review:</h3>
//         <textarea
//           value={newReview}
//           onChange={(e) => setNewReview(e.target.value)}
//           placeholder="Write your review here..."
//         />
//         <button onClick={handleReviewSubmit}>Submit Review</button>

//         <div className="reviews-list-custom">
//           <h3>Existing Reviews:</h3>
//           {reviews.length === 0 ? (
//             <p>No reviews yet. Be the first to leave a review!</p>
//           ) : (
//             <ul>
//               {reviews.map((review, index) => (
//                 <li key={index}>{review}</li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VenueDetailPage;
// src/components/VenueDetail/VenueDetailPage.jsx

// src/components/VenueDetail/VenueDetailPage.jsx

// src/components/VenueDetail/VenueDetailPage.jsx

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import venues from '../Assets/data1'; // Your venues data
// import { useCart } from '../../context/CartContext'; // Importing the Cart context
// import './VenueDetailPage.css'; // Ensure the path is correct

// const VenueDetailPage = () => {
//   const { venueId } = useParams();
//   const [venue, setVenue] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [newReview, setNewReview] = useState('');
//   const { addToCart } = useCart(); // Use Cart context

//   const navigate = useNavigate();

//   useEffect(() => {
//     const selectedVenue = venues[venueId];
//     setVenue(selectedVenue);
//   }, [venueId]);

//   const handleAddToCart = (timeSlot) => {
//     if (venue) {
//       addToCart({
//         venueId,
//         venueName: venue.location,
//         timeslot: timeSlot,
//       });
//       alert(`Added ${venue.location} at ${timeSlot} to cart!`);
//     }
//   };

//   if (!venue) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="venue-detail-page-custom">
//       <div className="venue-details-container-custom">
//         <div className="venue-info-custom">
//           <h1>{venue.location}</h1>
//           <p>Sports Played: {venue.sports.join(', ')}</p>
//           <div className="timeslots-custom">
//             <h3>Available Timeslots:</h3>
//             {venue.timeSlots && venue.timeSlots.length > 0 ? (
//               <ul>
//                 {venue.timeSlots.map((slot, index) => (
//                   <li key={index}>
//                     <button onClick={() => handleAddToCart(slot)}>{slot}</button>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No timeslots available</p>
//             )}
//           </div>
//           {venue.owner && (
//             <p>
//               Owner: {venue.owner.name} ({venue.owner.contact})
//             </p>
//           )}
//         </div>
//         <div className="venue-image-custom">
//           <img src={venue.image} alt={venue.location} />
//           <button
//             className="maps-button-custom"
//             onClick={() =>
//               window.open(
//                 `https://www.google.com/maps/search/?api=1&query=${venue.location}`,
//                 '_blank'
//               )
//             }
//           >
//             View on Google Maps
//           </button>
//         </div>
//       </div>
//       <div className="review-section-custom">
//         <h3>Leave a Review:</h3>
//         <textarea
//           value={newReview}
//           onChange={(e) => setNewReview(e.target.value)}
//           placeholder="Write your review here..."
//         />
//         <button onClick={() => { /* Handle review submission */ }}>Submit Review</button>
//         <div className="reviews-list-custom">
//           <h3>Existing Reviews:</h3>
//           {reviews.length === 0 ? (
//             <p>No reviews yet. Be the first to leave a review!</p>
//           ) : (
//             <ul>
//               {reviews.map((review, index) => (
//                 <li key={index}>{review}</li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VenueDetailPage;




