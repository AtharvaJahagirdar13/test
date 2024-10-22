// import React, { useState } from 'react'
// import './Navbar.css'
// import cart_icon from '../Assets/cart_icon.png'
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const navigate = useNavigate();
// const [menu,setmenu] = useState("Play")
//   const handleTitleClick = () => {
//     navigate('/'); 
//   };



//   return (
//     <nav className='container'>
//         <h1 onClick={handleTitleClick}>Match Mania</h1>
//         <ul>

            
//         <Link to="/user-games">
//             <li onClick={()=>{setmenu("play")}}><button className='btn'>Play</button>{menu==="play"?<hr/>:<></>}</li>
//             </Link>
//             <Link to="/book">
//             <li onClick={()=>{setmenu("book")}}><button  className='btn'>Book</button>{menu==="book"?<hr/>:<></>}</li>
//            </Link>
//            <Link to="/blogs">
//             <li onClick={()=>{setmenu("Blogs")}}><button   className='btn'>Blogs</button>{menu==="Blogs"?<hr/>:<></>}</li>
//             </Link>
//             <Link to="/Elearn">
//             <li onClick={()=>{setmenu("E-Learn")}}><button  className='btn'>E-Learn</button>{menu==="book"?<hr/>:<></>}</li>
//            </Link>
//         </ul>
         
//          <Link to="/login">
//          <button className='btn'>Login/Sign Up</button>
//          </Link>
         
//          <a href="/cart">
//         <img src={cart_icon} alt="" />
//         </a>
//         <div className="nav-cart-count">0</div>
        

//     </nav>
//   )
// }

// export default Navbar
// src/components/navbar/Navbar.jsx

// src/components/navbar/Navbar.jsx

import React, { useState } from 'react'; // Ensure useState is imported
import './Navbar.css';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useNavigate } from 'react-router-dom'; // Combine imports

const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("Play");

  const handleTitleClick = () => {
    navigate('/'); 
  };

  return (
    <nav className='container'>
      <h1 onClick={handleTitleClick}>Match Mania</h1>
      <ul>
        <Link to="/user-games">
          <li onClick={() => setMenu("play")}>
            <button className='btn'>Play</button>
            {menu === "play" ? <hr/> : <></>}
          </li>
        </Link>
        <Link to="/book">
          <li onClick={() => setMenu("book")}>
            <button className='btn'>Book</button>
            {menu === "book" ? <hr/> : <></>}
          </li>
        </Link>
        <Link to="/blogs">
          <li onClick={() => setMenu("Blogs")}>
            <button className='btn'>Blogs</button>
            {menu === "Blogs" ? <hr/> : <></>}
          </li>
        </Link>
        <Link to="/Elearn">
          <li onClick={() => setMenu("E-Learn")}>
            <button className='btn'>E-Learn</button>
            {menu === "E-Learn" ? <hr/> : <></>}
          </li>
        </Link>
      </ul>

      <Link to="/login">
        <button className='btn'>Login/Sign Up</button>
      </Link>
      
      <Link to="/cart">
        <img src={cart_icon} alt="Cart" />
      </Link>
      <div className="nav-cart-count">0</div>
    </nav>
  );
};

export default Navbar;
