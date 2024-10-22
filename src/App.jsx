// import React from "react";
// import { BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
// import Navbar from "../src/components/navbar/Navbar"; // Assuming your navbar is in components folder
// import HomePage from "../src/pages/Play";
// import LoginPage from "../src/components/LoginPage/LoginPage";
// import VenuesPage from "../src/components/Book/VenuesPage";
// import VenueDetailPage from "./components/VenueDetail/VenueDetailPage";
// import UserGamesPage from "./components/UserGamesPage/UserGamesPage";
// import UserGameDetailPage from "./components/UserGameDetailPage/UserGameDetailPage";
// import BlogPage from "./components/BlogPage/BlogPage";
// import Elearn from "./components/Elearn/Elearn";



// function App() {
//   const location = useLocation();

  
//   const noNavbarRoutes = ["/login"];// A path where navbar is not required

//   return (
//     <>
     
//       {!noNavbarRoutes.includes(location.pathname) && <Navbar />}

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/book" element={<VenuesPage />} />
//         <Route path="/venue/:venueId" element={<VenueDetailPage />} />
//         <Route path="/user-games" element={<UserGamesPage />}/>
//         <Route path="/user-games/:id" component={UserGameDetailPage} />
//         <Route path="/blogs" element={<BlogPage />} />
//         <Route path="/Elearn" element={<Elearn/>}/>



//       </Routes>
//     </>
//   );
// }

// export default function AppWrapper() {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// }
// src/App.jsx

// src/App.jsx

// import React from "react";
// import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar"; // Adjust the import path if necessary
// import HomePage from "./pages/Play"; // Adjust the import path if necessary
// import LoginPage from "./components/LoginPage/LoginPage"; // Adjust the import path if necessary
// import VenuesPage from "./components/Book/VenuesPage"; // Adjust the import path if necessary
// import VenueDetailPage from "./components/VenueDetail/VenueDetailPage"; // Adjust the import path if necessary
// import UserGamesPage from "./components/UserGamesPage/UserGamesPage"; // Adjust the import path if necessary
// import UserGamesDetailPage from "./components/UserGameDetailPage/UserGameDetailPage"; // Adjust the import path if necessary
// import BlogPage from "./components/BlogPage/BlogPage"; // Adjust the import path if necessary
// import Elearn from "./components/Elearn/Elearn"; // Adjust the import path if necessary
// import CartProvider from './context/CartContext'; // Ensure this import matches your file structure

// function App() {
//   const location = useLocation();

//   const noNavbarRoutes = ["/login"]; // A path where navbar is not required

//   return (
//     <>
//       {!noNavbarRoutes.includes(location.pathname) && <Navbar />}

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/book" element={<VenuesPage />} />
//         <Route path="/venue/:venueId" element={<VenueDetailPage />} />
//         <Route path="/user-games" element={<UserGamesPage />} />
//         <Route path="/user-games/:id" component={UserGamesDetailPage} />
//         <Route path="/blogs" element={<BlogPage />} />
//         <Route path="/Elearn" element={<Elearn />} />
//       </Routes>
//     </>
//   );
// }

// export default function AppWrapper() {
//   return (
//     <Router>
//       <CartProvider> {/* Wrap your App with CartProvider */}
//         <App />
//       </CartProvider>
//     </Router>
//   );
// }
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/Play";
import LoginPage from "./components/LoginPage/LoginPage";
import VenuesPage from "./components/Book/VenuesPage";
import VenueDetailPage from "./components/VenueDetail/VenueDetailPage";
import UserGamesPage from "./components/UserGamesPage/UserGamesPage";
import UserGameDetailPage from "./components/UserGameDetailPage/UserGameDetailPage";
import BlogPage from "./components/BlogPage/BlogPage";
import Elearn from "./components/Elearn/Elearn";
import CartProvider from './context/CartContext';

function App() {
  const location = useLocation();
  const noNavbarRoutes = ["/login"];

  return (
    <>
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/book" element={<VenuesPage />} />
        <Route path="/venue/:venueId" element={<VenueDetailPage />} />
        <Route path="/user-games" element={<UserGamesPage />} />
        <Route path="/userdetail/:gameId" element={<UserGameDetailPage />} /> {/* Updated this line */}
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/Elearn" element={<Elearn />} />
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  );
}