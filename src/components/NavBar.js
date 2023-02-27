import React from "react";
import {NavLink} from 'react-router-dom'
import './style/Navbar.css'

function NavBar(){
  return(
    <div className="menu">
    <ul>
      <li><img src={require("./assests/logo.png")} alt="logo"/></li>
      {/* <div className="menu-icons"> */}
        <li><NavLink to="/" style={{textDecoration:"none"}}>Home</NavLink></li>
        <li><NavLink to="/aboutus" style={{textDecoration:"none"}}>About Us</NavLink></li>
        <li><NavLink to="/gallery" style={{textDecoration:"none"}}>Gallery</NavLink></li>
        <li style={{marginRight: 0+"vw"}}><NavLink to="/donate" style={{textDecoration:"none"}}>Donate</NavLink></li>
      {/* </div> */}
    </ul>

    <div className="menu-phone">
      
    </div>
    </div>


    



   
  )
}

export default NavBar;