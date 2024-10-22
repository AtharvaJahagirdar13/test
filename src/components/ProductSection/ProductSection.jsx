import React, { useState } from "react";
import venues from "../Assets/data1"; 

const VenuesPage = () => {
  const [selectedSport, setSelectedSport] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter venues based on selected sport and search term
  const filteredVenues = venues.filter((venue) => {
    const matchesSport =
      selectedSport === "All" || venue.sports.includes(selectedSport);
    const matchesSearch = venue.location
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesSport && matchesSearch;
  });

  const uniqueSports = [
    "All",
    ...new Set(venues.flatMap((venue) => venue.sports)),
  ];

  return (
    // search bar and filters
    <div style={styles.container}>
      
      <div style={styles.filterContainer}>
        <input
          type="text"
          placeholder="Search venues by location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchBar}
        />
        <select
          value={selectedSport}
          onChange={(e) => setSelectedSport(e.target.value)}
          style={styles.select}
        >
          {uniqueSports.map((sport, index) => (
            <option key={index} value={sport}>
              {sport}
            </option>
          ))}
        </select>
      </div>

    
      <div style={styles.venuesContainer}>
        {filteredVenues.length > 0 ? (
          filteredVenues.map((venue, index) => (
            <div
              key={index}
              style={{
                ...styles.venueBox,
                backgroundColor: venue.timeSlots ? "#ffffff" : "#ffcccc",
              }}
              className="venue-card"
            >
              <img
                src={venue.image}
                alt={venue.location}
                style={styles.image}
              />
              <div style={styles.venueInfo}>
                <h3>{venue.location}</h3>
                <p>Sports: {venue.sports.join(", ")}</p>
                <p>Distance: {venue.distance}</p>
                {venue.timeSlots ? (
                  <p>Timeslots: {venue.timeSlots.join(", ")}</p>
                ) : (
                  <p style={styles.noSlots}>No Timeslots Available</p>
                )}
                <p>
                  Contact: {venue.ownerContact.name} ({venue.ownerContact.phone}
                  )
                </p>
              </div>
            </div>
          ))
        ) : (
          <p style={styles.noResults}>No venues found</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#D1FAE5", // Emerald light background
    minHeight: "100vh",
  },
  filterContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    padding: "10px 0",
  },
  searchBar: {
    padding: "10px",
    width: "60%",
    border: "1px solid #34D399", // Emerald border
    borderRadius: "5px",
    fontSize: "16px",
  },
  select: {
    padding: "10px",
    width: "35%",
    border: "1px solid #34D399", // Emerald border
    borderRadius: "5px",
    fontSize: "16px",
    backgroundColor: "#34D399", // Emerald background
    color: "#ffffff",
  },
  venuesContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  venueBox: {
    width: "300px",
    border: "1px solid #34D399",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.3s",
    backgroundColor: "#ffffff",
    cursor: "pointer", 
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  venueInfo: {
    padding: "15px",
    color: "#065F46", // Darker emerald for text
  },
  noSlots: {
    color: "red",
    fontWeight: "bold",
  },
  noResults: {
    textAlign: "center",
    color: "#065F46",
    fontSize: "18px",
    marginTop: "20px",
  },
};


const hoverEffect = `
  .venue-card:hover {
    transform: scale(1.05); /* Slight increase in size */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Slight shadow on hover */
  }
`;


const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = hoverEffect;
document.head.appendChild(styleSheet);

export default VenuesPage;
