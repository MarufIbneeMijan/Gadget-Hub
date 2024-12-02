import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
    const location = useLocation()
    console.log(location.pathname)
    const path = (location.pathname==="/"?"bg-[#9538E2]":"")
    return (
    <div className=' borde text-gray-700'>
    <div className={`navbar ${path} `}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link to="/" >Home</Link></li>
        <li>
            <Link to="/Statistics">Statistics</Link>
         
        </li>
        <li> <Link to="/Dashboard">Dashboard</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to="/" >Home</Link></li>
        <li>
            <Link to="/statistics">Statistics</Link>
         
        </li>
        <li> <Link to="/Dashboard">Dashboard</Link></li>
    </ul>
  </div>
  <div className="navbar-end gap-2">
    
    <Link to={"/Dashboard"} className="btn"><FaShoppingCart /></Link>
  <Link to={"/wishlist"} className="btn" > <FaHeart /></Link>  
  </div>
  
   
  
</div>


</div>



    );
};

export default Header;