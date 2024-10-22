// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; 
// import games from '../Assets/data3'; 
// import './UserGamesPage.css'; 

// const UserGamesPage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedDifficulty, setSelectedDifficulty] = useState('All');

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleDifficultyChange = (e) => {
//     setSelectedDifficulty(e.target.value);
//   };

//   // Filter games based on search term and difficulty level
//   const filteredGames = games.filter((game) => {
//     const matchesSearch = game.venue.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesDifficulty = selectedDifficulty === 'All' || game.difficulty === selectedDifficulty;
//     return matchesSearch && matchesDifficulty;
//   });

//   return (
//     <div className="games-page-container">
//       <h1 className="games-heading">Games In Mumbai</h1>

//       {/* Search and Filter */}
//       <div className="filter-container">
//         <input
//           type="text"
//           placeholder="Search by venue"
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="search-input"
//         />
//         <select
//           value={selectedDifficulty}
//           onChange={handleDifficultyChange}
//           className="difficulty-select"
//         >
//           <option value="All">All Difficulty Levels</option>
//           <option value="Beginner">Beginner</option>
//           <option value="Intermediate">Intermediate</option>
//           <option value="Advanced">Advanced</option>
//         </select>
//       </div>

//       {/* Display Games */}
//       <div className="games-container">
//         {filteredGames.length === 0 ? (
//           <p>No games found</p>
//         ) : (
//           filteredGames.map((game) => (
//             <Link to={`/user-games/${game.id}`} key={game.id} className="game-card-link">
//               <div className="game-card">
//                 <img src={game.userIcon} alt={game.userName} className="user-icon" />
//                 <div className="game-info">
//                   <h3>{game.userName}</h3>
//                   <p>Venue: {game.venue}</p>
//                   <p>Sport: {game.sport}</p>
//                   <p>Timing: {game.timing}</p>
//                   <p>Level: {game.difficulty}</p>
//                 </div>
//               </div>
//             </Link>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserGamesPage;
import React, { useState } from 'react';
import './UserGamesPage.css'; // Custom CSS for styling
import games from '../Assets/data3'; // Import your games data
import { useNavigate } from 'react-router-dom';

const UserGamesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('');
  const navigate = useNavigate();

  const filteredGames = games.filter((game) => {
    return (
      game.sport.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterLevel === '' || game.level === filterLevel)
    );
  });

  const handleBoxClick = (gameId) => {
    navigate(`/userdetail/${gameId}`); // Navigate to the user detail page
  };

  return (
    <div className="games-page-container">
      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search by sport..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filter by Difficulty */}
      <div className="filter-section">
        <label htmlFor="filterLevel">Filter by Difficulty: </label>
        <select
          id="filterLevel"
          value={filterLevel}
          onChange={(e) => setFilterLevel(e.target.value)}
        >
          <option value="">All</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      {/* Games List */}
      <div className="games-list">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <div
              key={game.id}
              className="game-box"
              onClick={() => handleBoxClick(game.id)}
            >
              <div className="game-avatar">
                <img src={`/images/${game.user.avatar}`} alt={game.user.name} />
              </div>
              <div className="game-info">
                <h3>{game.user.name}</h3>
                <p>{game.sport}</p>
                <p>Level: {game.level}</p>
                <p>Location: {game.venue}</p>
                <p>{game.attendees || 1} attending</p>
              </div>
            </div>
          ))
        ) : (
          <p>No games found.</p>
        )}
      </div>
    </div>
  );
};

export default UserGamesPage;