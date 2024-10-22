import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import venues from '../Assets/data1'; // Adjust the path as needed
import './Popvenue.css'; // Add a CSS file for styling

const Popvenue = () => {
  const [selectedVenues, setSelectedVenues] = useState([]);

  useEffect(() => {
    const venuesToDisplay = venues.slice(0, 4); // Display first 4 venues
    setSelectedVenues(venuesToDisplay);
  }, []);

  return (
    <div className="popular-venues-container">
      <h2>Popular Venues</h2>
      <div className="venues-grid">
        {selectedVenues.map((venue) => (
          <Link to={`/venue/${venue.id}`} key={venue.id} className="venue-card">
            <img src={venue.image} alt={venue.location} className="venue-image" />
            <div className="venue-details">
              <h3>{venue.location}</h3>
              <p>{venue.distance} away</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Popvenue;
