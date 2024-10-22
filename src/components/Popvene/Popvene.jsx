import React from 'react';
import './Popvene.css'; // Add a CSS file for styling

// Import your images from the Assets folder
import sp1 from '../Assets/sp1.jpg';
import sp2 from '../Assets/sp2.jpg';
import sp3 from '../Assets/sp3.jpg';
import sp4 from '../Assets/sp4.jpg';
import sp5 from '../Assets/sp5.jpg';

const sports = [
  { id: 1, name: 'Cricket', image: sp4 },
  { id: 2, name: 'Football', image: sp2 },
  { id: 3, name: 'Tennis', image: sp3 },
  { id: 4, name: 'Badminton', image: sp1 },
  { id: 5, name: 'Basketball', image: sp5 },
];

const Popvene = () => {
  return (
    <div className="popular-sports-container">
      <h2>Popular Sports</h2>
      <div className="sports-grid">
        {sports.map((sport) => (
          <div key={sport.id} className="sport-card">
            <img src={sport.image} alt={sport.name} className="sport-image" />
            <div className="sport-details">
              <h3>{sport.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popvene;
