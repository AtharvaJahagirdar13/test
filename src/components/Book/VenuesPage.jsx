// import React, { useState } from "react";
// import { Link } from "react-router-dom"; 
// import venues from "../Assets/data1"; 
// import './VenuesPage.css'; 

// const VenuesPage = () => {
//   const [selectedSport, setSelectedSport] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSportChange = (e) => {
//     setSelectedSport(e.target.value);
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // Filter venues based on selected sport and search term
//   const filteredVenues = venues.filter((venue) => {
//     const matchesSport =
//       selectedSport === "All" || venue.sports.includes(selectedSport);
//     const matchesSearch = venue.location
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());
//     return matchesSport && matchesSearch;
//   });

//   return (
//     <div className="page-container">
//       <h1 className="heading">Venues</h1>

//       <div className="filter-container">
//         <label htmlFor="sport-select" className="filter-label">
//           Filter by sport:
//         </label>
//         <select
//           id="sport-select"
//           value={selectedSport}
//           onChange={handleSportChange}
//           className="filter-select"
//         >
//           <option value="All">All Sports</option>
//           <option value="Cricket">Cricket</option>
//           <option value="Football">Football</option>
//           <option value="Tennis">Tennis</option>
//           <option value="Badminton">Badminton</option>
//           <option value="Swimming">Swimming</option>
//         </select>

//         {/* Search Input */}
//         <input
//           type="text"
//           placeholder="Search by venue"
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="search-input"
//         />
//       </div>

//       {/* Display Venues */}
//       <div className="venues-container">
//         {filteredVenues.length === 0 ? (
//           <p>No venues found</p>
//         ) : (
//           filteredVenues.map((venue, index) => (
//             <Link key={index} to={`/venue/${index}`} className="venue-link">
//               <div
//                 className="venue-card"
//                 style={{
//                   backgroundColor: venue.timeSlots ? "#ffffff" : "#ffcccc", // Red background if no timeslots
//                 }}
//               >
//                 <img
//                   src={venue.image}
//                   alt={venue.location}
//                   className="image"
//                 />
//                 <div className="venue-info">
//                   <h3>{venue.location}</h3>
//                   <p>Sports: {venue.sports.join(", ")}</p>
//                   <p>Distance: {venue.distance}</p>
//                   {venue.timeSlots ? (
//                     <p>Timeslots: {venue.timeSlots.join(", ")}</p>
//                   ) : (
//                     <p className="no-slots">No Timeslots Available</p>
//                   )}
//                   <p>
//                     Contact: {venue.ownerContact.name} (
//                     {venue.ownerContact.phone})
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default VenuesPage;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import venues from "../Assets/data1"; 
import './VenuesPage.css'; 

const VenuesPage = () => {
  const [selectedSport, setSelectedSport] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSportChange = (e) => {
    setSelectedSport(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredVenues = venues.filter((venue) => {
    const matchesSport =
      selectedSport === "All" || venue.sports.includes(selectedSport);
    const matchesSearch = venue.location
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesSport && matchesSearch;
  });

  return (
    <div className="page-container">
      <h1 className="heading">Venues</h1>

      <div className="filter-container">
        <label htmlFor="sport-select" className="filter-label">
          Filter by sport:
        </label>
        <select
          id="sport-select"
          value={selectedSport}
          onChange={handleSportChange}
          className="filter-select"
        >
          <option value="All">All Sports</option>
          <option value="Cricket">Cricket</option>
          <option value="Football">Football</option>
          <option value="Tennis">Tennis</option>
          <option value="Badminton">Badminton</option>
          <option value="Swimming">Swimming</option>
        </select>

        <input
          type="text"
          placeholder="Search by venue"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <div className="venues-container">
        {filteredVenues.length === 0 ? (
          <p>No venues found</p>
        ) : (
          filteredVenues.map((venue, index) => (
            <Link key={index} to={`/venue/${index}`} className="venue-link">
              <div className="venue-card">
                <img src={venue.image} alt={venue.location} className="image" />
                <div className="venue-info">
                  <h3>{venue.location}</h3>
                  <p>Sports: {venue.sports.join(", ")}</p>
                  <p>Distance: {venue.distance}</p>
                  <p>Timeslots: {venue.timeSlots.join(", ")}</p>
                  <p>
                    Contact: {venue.ownerContact.name} (
                    {venue.ownerContact.phone})
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default VenuesPage;
