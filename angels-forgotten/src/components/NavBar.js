import React from "react";
import {NavLink} from 'react-router-dom'

function NavBar(){
  return(
    <div>
    <h1>hey navbar</h1>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/aboutus">AboutUs</NavLink></li>
      <li><NavLink to="/gallery">Gallery</NavLink></li>
      <li><NavLink to="/donate">Donate</NavLink></li>
    </ul>
    </div>
   
  )
}

export default NavBar;