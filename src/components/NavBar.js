import React from "react";
import {NavLink} from 'react-router-dom'
import './style/Navbar.css'

function NavBar(){
  return(
    <div className="menu">
    <ul>
      <li><NavLink to="/"><img src={require("./assests/logo.png")} alt="logo"/></NavLink></li> 
      <li><NavLink to="/" style={{textDecoration:"none"}}>Home</NavLink></li>
      <li><NavLink to="/aboutus" style={{textDecoration:"none"}}>About Us</NavLink></li>
      <li><NavLink to="/gallery" style={{textDecoration:"none"}}>Gallery</NavLink></li>
      <li style={{marginRight: 0+"vw"}}><NavLink to="/donate" style={{textDecoration:"none"}}>Donate</NavLink></li>
    </ul>
    </div>
   
  )
}

export default NavBar;